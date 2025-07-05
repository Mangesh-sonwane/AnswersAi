import {
  CaretRightIcon,
  DotsThreeIcon,
  SparkleIcon,
} from '@phosphor-icons/react';
import CircularIconButton from '../../../components/Buttons/CircularIconButton';
import { ReusableAccordion } from '../../../components/Surafce/CustomAccordion';
import { IconButton } from '@mui/material';

const ResultsRow = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <div className='flex justify-between items-center w-full border-[0.5px] border-font-secondary rounded-lg px-6 py-[15px] bg-[#1a1b18] h-[54px]'>
        <p className='font-inter font-medium text-base leading-relaxed tracking-normal text-font-secondary'>
          The best found configuration based on profit is characterized by 11
          zones (max) with charging stations and 48 total number of poles.
        </p>
        <IconButton size='medium'>
          <DotsThreeIcon size={32} weight='bold' color='#c9ff3b' />
        </IconButton>
      </div>
      <div className='flex justify-between items-center w-full border-[0.5px] border-font-secondary rounded-lg px-6 py-[15px] bg-[#1a1b18] h-[54px]'>
        <p className='font-inter font-medium text-base leading-relaxed tracking-normal text-font-secondary'>
          The best found configuration based on profit is characterized by 11
          zones (max) with charging stations and 48 total number of poles.
        </p>
        <IconButton size='medium'>
          <DotsThreeIcon size={32} weight='bold' color='#c9ff3b' />
        </IconButton>
      </div>
    </div>
  );
};

const BestScenarioResults = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full  w-full gap-6'>
      <div className='w-full flex justify-center items-center'>
        <ReusableAccordion
          header={
            <div className='flex justify-start items-center w-full gap-2'>
              <SparkleIcon size={20} weight='fill' color='#dafd7f' />
              <p className='text-2xl font-semibold leading-[150%] tracking-[0%] text-font-primary'>
                Best Scenario Results
              </p>
            </div>
          }
          content={
            <div className='w-full'>
              <ResultsRow />
            </div>
          }
          expandIcon={
            <CircularIconButton
              icon={<CaretRightIcon size={16} weight='bold' color='#dafd7f' />}
            />
          }
          defaultExpanded={true}
          isOpen={true}
          className=''
        />
      </div>
    </div>
  );
};

export default BestScenarioResults;
