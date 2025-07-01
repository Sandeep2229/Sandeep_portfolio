
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface PortfolioChatbotProps {
  darkMode: boolean;
}

const PortfolioChatbot: React.FC<PortfolioChatbotProps> = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Sandeep's AI assistant. I can help you learn more about his experience, projects, and skills. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
      return "Sandeep has experience at RaisingHealth as a Data Analyst Intern, research at National University of Singapore, and an academic internship at Hewlett Packard Enterprise. He's worked on healthcare analytics, AI research, and cloud solutions.";
    }
    
    if (lowerMessage.includes('project') || lowerMessage.includes('built')) {
      return "Sandeep has built several impressive projects including Care Companion (AI-powered medical workflow app), Graph-Aware Task Manager (collaborative development tool), and Public Health Data Analysis dashboards. Each showcases his full-stack development and AI expertise.";
    }
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('tech') || lowerMessage.includes('technology')) {
      return "Sandeep's tech stack includes Python, JavaScript, TypeScript, FastAPI, React, PostgreSQL, AWS, PyTorch, and more. He specializes in AI/ML, backend systems, and full-stack development.";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
      return "You can reach out to Sandeep through the contact section below, or connect with him on his professional networks. He's always open to discussing new opportunities and collaborations!";
    }
    
    if (lowerMessage.includes('education') || lowerMessage.includes('nyu') || lowerMessage.includes('study')) {
      return "Sandeep is currently a graduate student at NYU, focusing on AI and software engineering. His academic background complements his practical experience in building AI-powered products.";
    }
    
    return "That's a great question! Feel free to explore the different sections of Sai's portfolio to learn more, or ask me about his experience, projects, skills, or how to get in touch with him.";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
            darkMode
              ? 'bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
              : 'bg-gradient-to-br from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
          }`}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 w-80 h-96 z-50"
          >
            <div className={`w-full h-full rounded-lg shadow-2xl backdrop-blur-md border ${
              darkMode 
                ? 'bg-black/80 border-white/20' 
                : 'bg-white/90 border-black/20'
            }`}>
              {/* Header */}
              <div className={`p-4 border-b ${
                darkMode ? 'border-white/20' : 'border-black/20'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Sai's AI Assistant</h3>
                    <p className="text-xs opacity-60">Online</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto h-64">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start gap-2 max-w-[80%] ${
                        message.isUser ? 'flex-row-reverse' : 'flex-row'
                      }`}>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                          message.isUser 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gradient-to-br from-purple-500 to-blue-500 text-white'
                        }`}>
                          {message.isUser ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                        </div>
                        <div className={`px-3 py-2 rounded-lg text-sm ${
                          message.isUser
                            ? darkMode 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-blue-500 text-white'
                            : darkMode
                              ? 'bg-white/10 text-white'
                              : 'bg-black/10 text-black'
                        }`}>
                          {message.text}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                          <Bot className="h-3 w-3 text-white" />
                        </div>
                        <div className={`px-3 py-2 rounded-lg ${
                          darkMode ? 'bg-white/10' : 'bg-black/10'
                        }`}>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Input */}
              <div className={`p-4 border-t ${
                darkMode ? 'border-white/20' : 'border-black/20'
              }`}>
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about Sai's work..."
                    className={`flex-1 ${
                      darkMode 
                        ? 'bg-white/10 border-white/20 text-white placeholder-white/50' 
                        : 'bg-black/5 border-black/20'
                    }`}
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioChatbot;
