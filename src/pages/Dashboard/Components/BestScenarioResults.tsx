import {
  CaretRightIcon,
  DotsThreeIcon,
  SparkleIcon,
} from '@phosphor-icons/react';
import { IconButton } from '@mui/material';
import CircularIconButton from '../../../components/Buttons/CircularIconButton';
import { ReusableAccordion } from '../../../components/Surafce/CustomAccordion';
import type { BestScenarioResultsProps, ResultsRowProps } from '../../../types';

const ResultsRow = ({ rows }: ResultsRowProps) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      {rows.map((row, index) => (
        <div
          key={row.key || index}
          className='flex justify-between items-center w-full border-[0.5px] border-font-secondary rounded-lg px-6 py-[15px] bg-[#1a1b18] h-[54px]'
        >
          <p className='font-inter font-medium text-base leading-relaxed tracking-normal text-font-secondary'>
            {row.description}
          </p>
          <IconButton size='medium'>
            <DotsThreeIcon size={32} weight='bold' color='#c9ff3b' />
          </IconButton>
        </div>
      ))}
    </div>
  );
};

const BestScenarioResults = ({ data }: BestScenarioResultsProps) => {
  const rows = Object.entries(data ?? {}).map(([key, value]) => ({
    key,
    description: value.description,
  }));

  return (
    <div className='flex flex-col items-center justify-center h-full w-full gap-6'>
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
              <ResultsRow rows={rows} />
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
