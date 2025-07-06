import { useState } from 'react';
import { SelectableButtons } from '../../../../components/Buttons/SelectableButtons';
import {
  exampleButtonsFirst,
  RateDatabtn,
  VariableDataBtn,
} from '../../../../util/DummyData';
import { QuestionIcon } from '@phosphor-icons/react';

const VariableCategary: React.FC = () => {
  const [showCo2Details, setShowCo2Details] = useState<boolean>(false);
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);

  const handleMouseEnter = (buttonId: string): void => {
    if (buttonId === 'co2-distribution') {
      const timeout = setTimeout(() => {
        setShowCo2Details(true);
      }, 1500); // 1.5 seconds delay
      setHoverTimeout(timeout);
    }
  };

  const handleMouseLeave = (buttonId: string): void => {
    if (buttonId === 'co2-distribution') {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        setHoverTimeout(null);
      }
      setShowCo2Details(false);
    }
  };

  return (
    <div className='w-full h-full rounded-[5px] border-[1px] border-[#525252] '>
      <div className='p-4 flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <p className='font-inter font-medium text-[15px] leading-[150%] tracking-tight-custom text-[#D5D5D5]'>
            Variable Category 1
          </p>
          <SelectableButtons
            buttons={exampleButtonsFirst}
            maxSelections={2}
            onButtonMouseEnter={handleMouseEnter}
            onButtonMouseLeave={handleMouseLeave}
          />
        </div>

        <div className='flex flex-col gap-4'>
          <p className='font-inter font-medium text-[15px] leading-[150%] tracking-tight-custom text-[#D5D5D5]'>
            Variable Category 2
          </p>
          <SelectableButtons
            buttons={RateDatabtn}
            maxSelections={2}
            onButtonMouseEnter={handleMouseEnter}
            onButtonMouseLeave={handleMouseLeave}
          />
        </div>

        <div className='flex flex-col gap-4'>
          <p className='font-inter font-medium text-[15px] leading-[150%] tracking-tight-custom text-[#D5D5D5]'>
            Variable Category 3
          </p>
          <SelectableButtons
            buttons={VariableDataBtn}
            maxSelections={2}
            onButtonMouseEnter={handleMouseEnter}
            onButtonMouseLeave={handleMouseLeave}
          />
        </div>
      </div>

      {/* Co2 Distribution Details - Only visible on hover */}
      {showCo2Details && (
        <div className='w-full h-full border-t-[1px] border-[#525252] p-10 flex flex-col gap-4 bg-[#222324] rounded-b-[5px] mt-4'>
          <div className='flex justify-between items-center w-[192px]'>
            <p className='font-inter font-medium text-[20px] leading-[88%] tracking-[0em] text-white'>
              Co2 Distribution
            </p>
            <QuestionIcon size={20} weight='bold' color='#888888' />
          </div>
          <p className='font-inter font-normal text-[15px] leading-[150%] tracking-[0em] align-middle text-[#BBBBBB]'>
            But what truly sets Switch apart is its versatility. It can be used
            as a scooter, a bike, or even a skateboard, making it suitable for
            people of all ages. Whether you're a student, a professional, or a
            senior citizen, Switch adapts to your needs and lifestyle.
          </p>
        </div>
      )}
    </div>
  );
};

export default VariableCategary;
