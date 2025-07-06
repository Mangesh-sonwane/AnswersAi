import { useUIStore } from '../../store/uiStore';

// MUI
import { Box } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

// Components
import ChargingStationsPage from './Components/ChargingStationsPage';
import ReusableDrawer from '../../components/modal/CustomDrawer';
import DrawerContent from './Components/drawer/DrawerContent';

const Dashboard = () => {
  const { drawer, setDrawer, tabValue } = useUIStore();

  return (
    <Box className='flex flex-col h-full border-[0.5px] border-[#bdc1ca] rounded-[5px]'>
      <ReusableDrawer
        open={drawer}
        onClose={() => setDrawer(false)}
        anchor='right'
      >
        <div className=''>
          <DrawerContent />
        </div>
      </ReusableDrawer>
      <TabContext value={tabValue.toString()}>
        <TabPanel value='0' className='!p-0'>
          <ChargingStationsPage />
        </TabPanel>
        <TabPanel value='1'>
          <div className='flex flex-1 items-center justify-center h-full'>
            <p className='text-white'>Fleet Sizing, Coming Soon . . .</p>
          </div>
        </TabPanel>
        <TabPanel value='2'>
          <div className='flex flex-1 items-center justify-center h-full'>
            <p className='text-white'>Parking, Coming Soon . . .</p>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Dashboard;
