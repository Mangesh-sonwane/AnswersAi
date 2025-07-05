import React, { useState } from 'react';

interface ReusableAccordionProps {
  header: string | React.ReactNode;
  content: string | React.ReactNode;
  expandIcon?: React.ReactNode;
  defaultExpanded?: boolean;
  isOpen?: boolean; // New prop to control open/closed state
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  onChange?: (isExpanded: boolean) => void;
}

export const ReusableAccordion: React.FC<ReusableAccordionProps> = ({
  header,
  content,
  expandIcon,
  defaultExpanded = false,
  isOpen, // New prop
  className = '',
  headerClassName = '',
  contentClassName = '',
  onChange,
}) => {
  // Use isOpen prop if provided, otherwise use defaultExpanded
  const [isExpanded, setIsExpanded] = useState(
    isOpen !== undefined ? isOpen : defaultExpanded
  );

  const handleToggle = () => {
    const newExpanded = !isExpanded;
    setIsExpanded(newExpanded);
    onChange?.(newExpanded);
  };

  const DefaultExpandIcon = () => {
    const CaretRightIcon = ({
      size = 16,
      color = '#dafd7f',
    }: {
      size?: number;
      color?: string;
    }) => (
      <svg width={size} height={size} viewBox='0 0 256 256' fill={color}>
        <path d='M181.66,133.66l-80,80A8,8,0,0,1,90.34,202.34L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z' />
      </svg>
    );

    const CircularIconButton = ({ icon }: { icon: React.ReactNode }) => (
      <div
        className={`transition-transform duration-200 ${
          isExpanded ? 'rotate-90' : ''
        }`}
      >
        {icon}
      </div>
    );

    return (
      <CircularIconButton icon={<CaretRightIcon size={16} color='#dafd7f' />} />
    );
  };

  return (
    <div className={`bg-transparent w-full ${className}`}>
      {/* Accordion Header */}
      <div
        className={`flex items-center justify-between cursor-pointer py-2 w-full ${headerClassName}`}
        onClick={handleToggle}
        role='button'
        aria-expanded={isExpanded}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
          }
        }}
      >
        <div className='flex-1'>
          {typeof header === 'string' ? (
            <span className='text-base font-medium'>{header}</span>
          ) : (
            header
          )}
        </div>
        <div className='ml-auto'>
          {expandIcon ? (
            <div
              className={`transition-transform duration-200 mr-2 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            >
              {expandIcon}
            </div>
          ) : (
            <DefaultExpandIcon />
          )}
        </div>
      </div>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-all duration-300 w-full ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`pt-2 ${contentClassName}`}>
          {typeof content === 'string' ? (
            <p className='text-sm text-gray-700'>{content}</p>
          ) : (
            content
          )}
        </div>
      </div>
    </div>
  );
};
