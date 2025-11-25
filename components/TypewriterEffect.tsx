import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  words,
  className,
  cursorClassName,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex].text;
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        // Finished typing word, pause then delete
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === "") {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        // Typing or deleting
        const nextText = isDeleting
          ? word.substring(0, currentText.length - 1)
          : word.substring(0, currentText.length + 1);
        setCurrentText(nextText);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <span className="mr-1 leading-tight tracking-tight">
             {words.map((word, idx) => (
                <span 
                    key={idx} 
                    className={`${word.className} ${idx === currentWordIndex ? 'inline' : 'hidden'}`}
                >
                    {currentText}
                </span>
             ))}
        </span>
        <span
          className={`inline-block w-[2px] h-[1em] align-middle bg-blue-500 dark:bg-blue-400 animate-pulse ${cursorClassName}`}
        ></span>
      </div>
    </div>
  );
};

export default TypewriterEffect;