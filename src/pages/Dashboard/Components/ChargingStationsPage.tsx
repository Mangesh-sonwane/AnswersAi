import {
  CaretDownIcon,
  ClockCounterClockwiseIcon,
  LightningIcon,
  UploadSimpleIcon,
} from '@phosphor-icons/react';

import { chargingStationDashboard } from '../../../util/DummyData';

import CustomButton from '../../../components/Buttons/CustomButton';
import BestScenarioResults from './BestScenarioResults';
import PerformanceStats from './PerformanceStats';
import UnsatisfiedDemandChart from './Graph';
import { useUIStore } from '../../../store/uiStore';
import { Skeleton } from '@mui/material';
import { useResponsive } from '../../../store/useResponsive';

const ChargingStationsPage: React.FC = () => {
  const { setDrawer } = useUIStore();
  const { isMobile } = useResponsive();
  console.log('🚀 ~ isMobile:', isMobile);

  const data = chargingStationDashboard.dashboard.graphs.unsatisfiedDemand.data;
  const isDataAvailable = Array.isArray(data) && data.length > 0;

  return (
    <div className='flex flex-col items-center justify-center h-full p-6 w-full gap-8'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4'>
        {/* header */}
        <div className='flex items-center'>
          <LightningIcon size={30} weight='fill' color='#FFF' />
          <h1 className='text-[28px] md:text-[32px] leading-[150%] font-bold tracking-normal text-white ml-2'>
            Charging Station
          </h1>
        </div>

        {/* buttons */}
        <div className='flex gap-3 flex-col md:flex-row w-full md:w-auto'>
          <CustomButton
            icon={
              <ClockCounterClockwiseIcon size={24} weight='bold' color='#fff' />
            }
            onClick={() => alert('Refresh clicked')}
          />
          <CustomButton text='Edit Variables' onClick={() => setDrawer(true)} />
          <CustomButton
            icon={<UploadSimpleIcon size={24} weight='bold' color='#fff' />}
            onClick={() => alert('Upload clicked')}
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
      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-4'>
        {/* Graph Section */}
        <div className='w-full md:flex-1 h-auto flex flex-col justify-start items-start gap-4'>
          <h1 className='font-semibold text-[24px] leading-[150%] tracking-normal text-white'>
            Graphs
          </h1>
          <div className='w-full border-[1px] border-border rounded-[5px] bg-background-tertiary p-4'>
            <div className='h-[50px] flex justify-end w-full'>
              <CustomButton
                text='Unsatisfied Demand %'
                endIcon={<CaretDownIcon size={20} weight='bold' color='#fff' />}
                className='!bg-background-senary'
              />
            </div>
            <div className='w-full h-[365px]'>
              {isDataAvailable ? (
                <UnsatisfiedDemandChart
                  data={data}
                  yAxisMax={100000}
                  currentMonth='Jul'
                />
              ) : (
                <Skeleton
                  variant='rectangular'
                  width='100%'
                  height='100%'
                  animation='wave'
                  sx={{
                    borderRadius: '5px',
                    bgcolor: 'rgba(255,255,255,0.05)',
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className='w-full md:w-[505px] flex justify-start items-start'>
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
