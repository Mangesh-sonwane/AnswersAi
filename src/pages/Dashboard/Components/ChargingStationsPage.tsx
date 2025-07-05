import {
  ClockCounterClockwiseIcon,
  LightningIcon,
  UploadSimpleIcon,
} from '@phosphor-icons/react';

import { chargingStationDashboard } from '../../../util/DummyData';

import CustomButton from '../../../components/Buttons/CustomButton';
import BestScenarioResults from './BestScenarioResults';
import PerformanceStats from './PerformanceStats';

const ChargingStationsPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full p-6 w-full gap-10'>
      <div className='flex justify-between items-center w-full'>
        {/* header */}
        <div className='flex justify-start items-center w-full'>
          <LightningIcon size={30} weight='fill' color='#FFF' />
          <h1 className='text-[32px] leading-[150%] font-bold tracking-normal text-white ml-2'>
            Charging Station
          </h1>
        </div>
        {/*  */}
        <div className='flex gap-4'>
          <CustomButton
            icon={
              <ClockCounterClockwiseIcon size={24} weight='bold' color='#fff' />
            }
          />
          <CustomButton
            text='Edit Variables'
            onClick={() => console.log('Edit Button clicked!')}
          />
          <CustomButton
            icon={<UploadSimpleIcon size={24} weight='bold' color='#fff' />}
          />
        </div>
      </div>

      {/* BestScenarioResults */}
      <div className='w-full flex-start'>
        <BestScenarioResults
          data={chargingStationDashboard.dashboard.bestScenarioResults}
        />
      </div>

      {/* chart */}
      <div className='w-full flex items-center justify-center gap-4'>
        <div className='flex-1 h-auto flex flex-col justify-start items-start gap-4'>
          <h1 className='font-semibold text-[24px] leading-[150%] tracking-normal text-white'>
            Graph
          </h1>
          <div className='w-full h-[450px] border-[1px] border-border rounded-[5px] bg-background-tertiary '>
            <div className='flex items-center justify-center h-full'>
              <p className='text-white text-sm p-2'>
                Graph will be displayed here.
              </p>
            </div>
          </div>
        </div>
        <div className='w-[505px] flex justify-start items-start'>
          <PerformanceStats
            keyPerformanceIndicators={
              chargingStationDashboard.dashboard.keyPerformanceIndicators
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ChargingStationsPage;
