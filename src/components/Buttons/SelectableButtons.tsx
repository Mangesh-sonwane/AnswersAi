import { CheckIcon, PlusIcon } from '@phosphor-icons/react';
import React, { useState } from 'react';

interface SelectableButtonsProps {
  buttons: Array<{
    id: string;
    label: string;
    icon?: React.ReactNode;
  }>;
  maxSelections?: number;
  onSelectionChange?: (selectedIds: string[]) => void;
  onButtonMouseEnter?: (buttonId: string) => void;
  onButtonMouseLeave?: (buttonId: string) => void;
  className?: string;
}

export const SelectableButtons: React.FC<SelectableButtonsProps> = ({
  buttons,
  maxSelections = 2,
  onSelectionChange,
  onButtonMouseEnter,
  onButtonMouseLeave,
  className = '',
}) => {
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

  const handleButtonClick = (buttonId: string): void => {
    setSelectedButtons((prev) => {
      let newSelection: string[];

      if (prev.includes(buttonId)) {
        newSelection = prev.filter((id) => id !== buttonId);
      } else {
        if (prev.length >= maxSelections) {
          newSelection = [...prev.slice(1), buttonId];
        } else {
          newSelection = [...prev, buttonId];
        }
      }

      onSelectionChange?.(newSelection);
      return newSelection;
    });
  };

  const handleMouseEnter = (buttonId: string): void => {
    onButtonMouseEnter?.(buttonId);
  };

  const handleMouseLeave = (buttonId: string): void => {
    onButtonMouseLeave?.(buttonId);
  };

  const getButtonClasses = (buttonId: string): string => {
    const isSelected = selectedButtons.includes(buttonId);

    return `
      inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium h-[33px]
      transition-all duration-200 ease-in-out cursor-pointer
      ${
        isSelected
          ? 'border-[1px] border-[#C9FF3B] text-[#C9FF3B] bg-[#282E16]'
          : 'border-[0.5px] border-[#EEEEEE] text-[#D5D5D5] bg-[#5959594D]'
      }
    `;
  };

  return (
    <div className={`flex gap-5 flex-wrap ${className}`}>
      {buttons.map((button) => {
        const isSelected = selectedButtons.includes(button.id);

        return (
          <button
            key={button.id}
            onClick={() => handleButtonClick(button.id)}
            onMouseEnter={() => handleMouseEnter(button.id)}
            onMouseLeave={() => handleMouseLeave(button.id)}
            className={getButtonClasses(button.id)}
          >
            <span>{button.label}</span>
            {button.icon}
            {isSelected ? (
              <CheckIcon size={20} color='#C9FF3B' />
            ) : (
              <PlusIcon size={20} color='#D5D5D5' />
            )}
          </button>
        );
      })}
    </div>
  );
};
