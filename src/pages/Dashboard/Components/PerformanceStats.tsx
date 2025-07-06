import { PlusIcon, QuestionIcon } from '@phosphor-icons/react';
import { Skeleton } from '@mui/material';
import CustomButton from '../../../components/Buttons/CustomButton';

import type {
  PerformanceCardProps,
  PerformanceStatsProps,
} from '../../../types';

const PerformanceCard: React.FC<PerformanceCardProps> = ({ data }) => {
  return (
    <div className='md:w-[241px] w-full h-[215px] border-[1px] border-border rounded-[5px] bg-background-tertiary p-[30px]'>
      <div className='flex flex-col justify-start items-start gap-10 '>
        <div className='w-full flex flex-col gap-[10px]'>
          <div className='flex justify-between items-center w-[192px]'>
            <p className='font-medium text-[18px] leading-[100%] tracking-[-0.04em] font-inter text-white'>
              {data.title}
            </p>
            <QuestionIcon size={20} weight='bold' color='#888888' />
          </div>
          <div className='w-[168px]'>
            <p className='font-light text-[12px] leading-[150%] tracking-normal font-inter text-font-senary'>
              {data.description}
            </p>
          </div>
        </div>
        <div className='flex-end text-right w-full'>
          <p className='font-bold text-[32px] leading-[88%] tracking-[-0.02em] align-end text-white'>
            {data.value}
          </p>
        </div>
      </div>
    </div>
  );
};

const PerformanceStats: React.FC<PerformanceStatsProps> = ({
  keyPerformanceIndicators,
}) => {
  const performanceData = Object.values(keyPerformanceIndicators || {});
  const isDataAvailable = performanceData.length > 0;

  return (
    <div className='w-[505px] h-auto flex flex-col justify-start items-start gap-4'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4'>
        <h1 className='font-semibold text-2xl leading-[150%] tracking-normal text-white'>
          Key Performance Indicators
        </h1>
        <CustomButton
          text='Variables'
          variant='outlined'
          endIcon={<PlusIcon size={20} weight='bold' color='#fff' />}
          customWidth='130px'
          onClick={() => alert('Variables clicked')}
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full'>
        {isDataAvailable
          ? performanceData.map((indicator, index) => (
              <PerformanceCard key={index} data={indicator} />
            ))
          : Array.from({ length: 4 }).map((_, index) => (
              <Skeleton
                key={index}
                variant='rectangular'
                width={241}
                height={215}
                animation='wave'
                sx={{
                  borderRadius: '5px',
                  bgcolor: 'rgba(255,255,255,0.05)',
                }}
              />
            ))}
      </div>
    </div>
  );
};

export default PerformanceStats;
