import {
  IconButton,
  Box,
  Typography,
  ListItemButton,
  Avatar,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { UserCircleIcon, XCircleIcon } from '@phosphor-icons/react';
import clsx from 'clsx';
import { menuItems } from '../../util/MenuItem';
import ReusableDrawer from '../modal/CustomDrawer';
import { useUIStore } from '../../store/uiStore';

const MobileSidebar = () => {
  const { sidebar, setSideBar } = useUIStore();
  const location = useLocation();

  return (
    <div>
      <ReusableDrawer
        open={sidebar}
        onClose={() => setSideBar(false)}
        anchor='left'
        customWidth={'50vw'}
        drawerStyles={{ padding: 0 }}
      >
        <div className='w-full h-full border-1 border-border pt-2 px-3'>
          <div className='flex justify-end items-center w-full'>
            <IconButton size='medium' onClick={() => setSideBar(false)}>
              <XCircleIcon size={24} color='#FFF' />
            </IconButton>
          </div>

          {/* Menu Section */}
          <Box className='flex flex-col gap-4 mt-4'>
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;

              return (
                <ListItemButton
                  key={index}
                  component={Link}
                  to={item.path}
                  onClick={() => setSideBar(false)}
                  className='!p-2 !rounded-lg'
                  sx={{
                    backgroundColor: isActive ? '#262525' : 'transparent',
                    '&:hover': {
                      backgroundColor: isActive ? '#262525' : '#222324',
                    },
                  }}
                >
                  <Box className='flex items-center gap-3'>
                    <Icon
                      size={24}
                      weight='fill'
                      color={isActive ? '#FFFFFF' : '#858882'}
                    />
                    <Typography
                      variant='body1'
                      className={clsx(
                        'text-sm font-medium',
                        isActive ? 'text-white' : 'text-[#858882]'
                      )}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                </ListItemButton>
              );
            })}
          </Box>
          <ListItemButton
            component={Link}
            to='/profile'
            onClick={() => setSideBar(false)}
            className='!p-2 !rounded-lg !mt-4'
            sx={{
              backgroundColor:
                location.pathname === '/profile' ? '#262525' : 'transparent',
              '&:hover': {
                backgroundColor:
                  location.pathname === '/profile' ? '#262525' : '#222324',
              },
            }}
          >
            <Box className='flex items-center gap-3'>
              <Avatar
                sx={{
                  bgcolor: 'transparent',
                  width: 24,
                  height: 24,
                  minWidth: 0,
                  minHeight: 0,
                  padding: 0,
                }}
                className='!w-[24px] !h-[24px]'
              >
                <UserCircleIcon
                  size={24}
                  weight='fill'
                  color={
                    location.pathname === '/profile' ? '#FFFFFF' : '#858882'
                  }
                />
              </Avatar>

              <Typography
                variant='body1'
                className={clsx(
                  'text-sm font-medium',
                  location.pathname === '/profile'
                    ? 'text-white'
                    : 'text-[#858882]'
                )}
              >
                Profile
              </Typography>
            </Box>
          </ListItemButton>
        </div>
      </ReusableDrawer>
    </div>
  );
};

export default MobileSidebar;
