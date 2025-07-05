import {
  ClockCounterClockwiseIcon,
  LightningIcon,
  UploadSimpleIcon,
} from '@phosphor-icons/react';
import CustomButton from '../../../components/Buttons/CustomButton';
import BestScenarioResults from './BestScenarioResults';

const ChargingStationsPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full p-8 w-full gap-8'>
      <div className='flex justify-between items-center w-full'>
        {/*  */}
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
      {/*  */}
      <div className='w-full flex-start'>
        <BestScenarioResults />
      </div>
      {/* chart */}
    </div>
  );
};

export default ChargingStationsPage;
