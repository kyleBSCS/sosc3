
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick }) => {
  return (
    <div
      className={`glassmorphism rounded-2xl p-6 md:p-8 shadow-2xl transition-all duration-300 ease-in-out ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;
