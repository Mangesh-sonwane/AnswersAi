import { PlusIcon, QuestionIcon } from '@phosphor-icons/react';
import CustomButton from '../../../components/Buttons/CustomButton';

const PerformanceCard = () => {
  return (
    <div className='w-[241px] h-[215px] border-[1px] border-border rounded-[5px] bg-background-tertiary p-[30px]'>
      <div className='flex flex-col justify-start items-start gap-10 '>
        <div className='w-full flex flex-col gap-[10px]'>
          <div className='flex justify-between items-center w-[192px]'>
            <p className='font-medium text-[18px] leading-[100%] tracking-[-0.04em] font-inter text-white'>
              Infrastructure Units
            </p>
            <QuestionIcon size={20} weight='bold' color='#888888' />
          </div>
          <div className='w-[168px]'>
            <p className='font-light text-[12px] leading-[150%] tracking-normal font-inter text-font-senary'>
              This describes variable two and what the shown data means.
            </p>
          </div>
        </div>
        <div className='flex-end text-right w-full'>
          <p className='font-bold text-[32px] leading-[88%] tracking-[-0.02em]  align-end text-white'>
            €421.07
          </p>
        </div>
      </div>
    </div>
  );
};

const PerformanceStats = () => {
  return (
    <div className='w-[505px] h-auto flex flex-col justify-start items-start gap-4'>
      <div className='flex justify-between items-center w-full'>
        <h1 className='font-semibold text-[24px] leading-[150%] tracking-normal text-white'>
          Key Performance Indicators
        </h1>
        <CustomButton
          text='Variables'
          variant='outlined'
          endIcon={<PlusIcon size={20} weight='bold' color='#fff' />}
          customWidth='130px'
          //   onClick={() => alert('Clicked!')}
        />
      </div>
      <div className='grid grid-cols-2 gap-5'>
        <PerformanceCard />
        <PerformanceCard />
        <PerformanceCard />
        <PerformanceCard />
      </div>
    </div>
  );
};

export default PerformanceStats;
