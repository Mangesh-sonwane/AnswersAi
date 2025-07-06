import { Box, IconButton, styled, InputBase } from '@mui/material';
import {
  ArrowClockwiseIcon,
  CaretRightIcon,
  MagnifyingGlassIcon,
  SparkleIcon,
  XCircleIcon,
} from '@phosphor-icons/react';
import { useUIStore } from '../../../../store/uiStore';
import CustomButton from '../../../../components/Buttons/CustomButton';
import VariableCategary from './VariableCategary';
import { ReusableAccordion } from '../../../../components/Surafce/CustomAccordion';
import CircularIconButton from '../../../../components/Buttons/CircularIconButton';

const SearchContainer = styled(Box)(() => ({
  position: 'relative',
  borderRadius: 5,
  backgroundColor: '#171718',
  border: '1px solid #5A5A5A',
  width: '350px',
  height: 40,
  display: 'flex',
  alignItems: 'center',
}));

const SearchIconWrapper = styled('div')({
  padding: '0 16px',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledInputBase = styled(InputBase)({
  color: 'white',
  width: '100%',
  height: '100%',
  '& .MuiInputBase-input': {
    padding: '8px 8px 8px 48px',
    height: '100%',
    boxSizing: 'border-box',
    color: 'white',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '150%',
    letterSpacing: '-0.023em',

    '&::placeholder': {
      color: 'white',
      opacity: 0.6,
    },
  },
});

const DrawerContent = () => {
  const { setDrawer } = useUIStore();

  return (
    <div className='flex flex-col justify-center items-center h-full gap-4 px-4'>
      <div className='flex justify-between items-center w-full'>
        <p className='text-white text-[24px] leading-[150%] tracking-[-0.023em]'>
          Edit Variables
        </p>
        <IconButton size='medium' onClick={() => setDrawer(false)}>
          <XCircleIcon size={32} color='#FFF' />
        </IconButton>
      </div>
      <div className='w-full py-2 gap-[10px] flex justify-start items-center'>
        <SearchContainer>
          <SearchIconWrapper>
            <MagnifyingGlassIcon size={20} color='#fff' />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search'
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchContainer>
        <CustomButton
          text='Autofill'
          icon={<SparkleIcon size={20} weight='fill' color='#fff' />}
          className='!bg-background-senary !w-[138px]'
          customWidth={'138px'}
        />
        <CustomButton
          text='Return'
          icon={<ArrowClockwiseIcon size={20} weight='fill' color='#C9FF3B' />}
          className='!bg-[#23291E] !w-[138px] !border-[#577113] !text-[#C9FF3B]'
          customWidth={'122px'}
        />
      </div>
      <div className='w-full h-full'>
        <VariableCategary />
      </div>
      <div className='w-full h-full flex flex-col gap-4'>
        <ReusableAccordion
          header={
            <div className=''>
              <p
                className='font-medium text-[16px] leading-[150%] tracking-[-2.3%] text-font-primary'
                style={{ fontFamily: 'Inter' }}
              >
                Primary Variables
              </p>
            </div>
          }
          content={
            <div className='w-full h-[50px] p-2'>
              <p className='font-inter font-medium text-[15px] leading-[150%] tracking-tight-custom text-[#D5D5D5]'>
                Comming soon ...
              </p>
            </div>
          }
          expandIcon={
            <CircularIconButton
              icon={<CaretRightIcon size={16} weight='bold' color='#dafd7f' />}
            />
          }
          defaultExpanded={true}
          isOpen={true}
          className='w-full h-auto border-[1px] border-[#525252] rounded-[5px] px-4 !bg-[#222324]'
        />
        <ReusableAccordion
          header={
            <div className=''>
              <p
                className='font-medium text-[16px] leading-[150%] tracking-[-2.3%] text-font-primary'
                style={{ fontFamily: 'Inter' }}
              >
                Secondary Variables
              </p>
            </div>
          }
          content={
            <div className='w-full h-[50px] p-2'>
              <p className='font-inter font-medium text-[15px] leading-[150%] tracking-tight-custom text-[#D5D5D5]'>
                Comming soon ...
              </p>
            </div>
          }
          expandIcon={
            <CircularIconButton
              icon={<CaretRightIcon size={16} weight='bold' color='#dafd7f' />}
            />
          }
          defaultExpanded={true}
          isOpen={true}
          className='w-full h-auto border-[1px] border-[#525252] rounded-[5px] px-4 !bg-[#222324]'
        />
      </div>
    </div>
  );
};

export default DrawerContent;
