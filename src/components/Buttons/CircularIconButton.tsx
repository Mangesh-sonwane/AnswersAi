import React from 'react';

interface CircularIconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const CircularIconButton: React.FC<CircularIconButtonProps> = ({
  icon,
  onClick,
  className = '',
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-[34px] 
        h-[44px] 
        rounded-[56px] 
        border 
        border-[#C8E972] 
        bg-transparent 
        flex 
        items-center 
        justify-center 
        gap-[10px] 
        py-[10px] 
        px-[5px] 
        opacity-100 
        rotate-[-90deg] 
        transition-all 
        duration-200 
        hover:bg-opacity-10 
        disabled:opacity-50 
        disabled:cursor-not-allowed
        ${className}
        cursor-pointer
      `}
    >
      {icon}
    </button>
  );
};

export default CircularIconButton;
