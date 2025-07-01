import React, { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AmbientSoundsProps {
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
}

const AmbientSounds: React.FC<AmbientSoundsProps> = ({ enabled, onToggle }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => setIsLoaded(true);
    const handleError = () => console.error('Audio failed to load');

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);

    // Set volume programmatically for cinematic effect
    audio.volume = 0.4;

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !isLoaded) return;

    if (enabled) {
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  }, [enabled, isLoaded]);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source
          src="https://cdn.jsdelivr.net/gh/Sandeep2229/Audio_file/interstellar_chase_2.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onToggle(!enabled)}
        className={`backdrop-blur-md transition-all duration-300 ${enabled
            ? 'bg-green-500/20 border-green-400/50 text-green-300 hover:bg-green-500/30'
            : 'bg-black/20 border-white/30 text-white/70 hover:bg-black/30'
          }`}
      >
        {enabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
      </Button>
    </>
  );
};

export default AmbientSounds;
