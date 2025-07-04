import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  InputBase,
  Tabs,
  Tab,
} from '@mui/material';
import { List, MagnifyingGlass } from '@phosphor-icons/react';
import { styled } from '@mui/material/styles';
import React from 'react';

interface NavbarProps {
  sidebar: boolean;
  setSideBar: (value: boolean) => void;
}

const Search = styled('div')({
  position: 'relative',
  borderRadius: '5px',
  backgroundColor: '#171719',
  border: '1px solid #5A5A5A',
  width: '237px',
  height: '37px',
  display: 'flex',
  alignItems: 'center',
});

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
    padding: '4px 8px 4px 0',
    paddingLeft: '48px',
    height: '100%',
    boxSizing: 'border-box',
    color: 'white',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '150%',
    letterSpacing: '-2.3%',

    '&::placeholder': {
      color: 'white',
      opacity: 1,
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '150%',
      letterSpacing: '-2.3%',
    },
  },
});

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    display: 'none', // Remove default indicator
  },
  '& .MuiTabs-flexContainer': {
    gap: '16px',
    alignItems: 'center',
  },
  '& .MuiTabs-root': {
    minHeight: 'auto',
  },
  '& .MuiTab-root': {
    height: '38px',
    minHeight: '38px',
  },
  minHeight: 'auto',
  height: 'auto',
});

const StyledTab = styled(Tab)({
  color: 'white',
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 500,
  textTransform: 'none',
  padding: '0 7px',
  borderRadius: '4px',
  minWidth: 'auto',

  // Force height
  height: '38px !important',
  minHeight: '38px !important',
  lineHeight: '38px',

  '&.Mui-selected': {
    backgroundColor: '#242424',
    border: '1px solid #5A5A5A',
    color: 'white',
  },
});

const Navbar = ({ sidebar, setSideBar }: NavbarProps) => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleSidebar = () => {
    setSideBar(!sidebar);
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <>
      <AppBar
        position='fixed'
        sx={{
          boxShadow: 'none',
        }}
        className='!bg-background-primary'
      >
        <Toolbar
          sx={{
            height: '87px',
            minHeight: '87px !important',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box className='flex items-center gap-6'>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={handleSidebar}
              className='border-2'
            >
              <List size={20} weight='regular' />
            </IconButton>

            {/* Navigation Tabs */}
            <Box
              sx={{
                transition: 'margin-left 0.3s ease',
                marginLeft: sidebar ? '90px' : 0,
              }}
            >
              <StyledTabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label='navigation tabs'
              >
                <StyledTab label='Charging Stations' />
                <StyledTab label='Fleet Sizing' />
                <StyledTab label='Parking' />
              </StyledTabs>
            </Box>
          </Box>

          {/* Search */}
          <Box>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass size={20} color='#fff' />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
