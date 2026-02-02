/**
 * Vercel serverless API: portfolio chatbot using OpenAI.
 * Requires OPENAI_API_KEY in Vercel Environment Variables (and in .env locally).
 */

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

const SYSTEM_PROMPT = `You are a friendly AI assistant for Sai Sandeep's portfolio. Answer briefly about his experience, projects, skills, education, and how to contact him. He is currently a Software Engineer (AI/ML) at 6th Element Inc in Austin, TX; has worked at RaisingHealth, ExcelR Solutions, NUS, and HPE; studies at NYU; and has projects like Care Companion, Real Estate Value Prediction, AI Course Assistant RAG chatbot, CIFAR-10 ResNet, and more. Keep replies concise (1-3 sentences) and helpful.`;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({
      error: 'Chat not configured',
      fallback: true,
      message: "I'm not connected to AI right now. Ask about Sai's experience, projects, or skills and I'll do my best!",
    });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  const userMessage = body.message?.trim();
  if (!userMessage) {
    return res.status(400).json({ error: 'Missing message' });
  }

  try {
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userMessage },
        ],
        max_tokens: 256,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('OpenAI API error', response.status, errText);
      return res.status(502).json({
        error: 'AI service error',
        fallback: true,
        message: "I couldn't reach the AI right now. Try asking about Sai's experience, projects, or skills!",
      });
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content?.trim() || "I'm not sure how to answer that. Ask about Sai's experience, projects, or skills!";
    return res.status(200).json({ message: content });
  } catch (e) {
    console.error('Chat API error', e);
    return res.status(500).json({
      error: 'Server error',
      fallback: true,
      message: "Something went wrong. Try again or ask about Sai's experience, projects, or skills!",
    });
  }
}
