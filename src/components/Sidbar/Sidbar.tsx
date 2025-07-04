import { Box, Avatar, Typography, ListItemButton } from '@mui/material';
import {
  House,
  Bell,
  CalendarBlank,
  UploadSimple,
  Gear,
  UserCircle,
} from '@phosphor-icons/react';
import { Link, useLocation } from 'react-router';
import clsx from 'clsx';
import { useUIStore } from '../../store/uiStore';

const menuItems = [
  {
    icon: <House size={24} color='#fff' weight='fill' />,
    label: 'Home',
    path: '/',
  },
  {
    icon: <Bell size={24} color='#fff' weight='fill' />,
    label: 'Notifications',
    path: '/notification',
  },
  {
    icon: <CalendarBlank size={24} color='#fff' weight='fill' />,
    label: 'Calendar',
    path: '/calendar',
  },
  {
    icon: <UploadSimple size={24} color='#fff' weight='fill' />,
    label: 'Upload',
    path: '/upload',
  },
  {
    icon: <Gear size={24} color='#fff' weight='fill' />,
    label: 'Settings',
    path: '/settings',
  },
];

const Sidebar = () => {
  const location = useLocation();
  const sidebar = useUIStore((state) => state.sidebar);

  return (
    <Box
      className={clsx(
        'fixed top-[87px] h-[calc(100vh-87px)] flex flex-col justify-between items-center py-4 bg-background-primary transition-all duration-300',
        sidebar ? 'w-44' : 'w-[80px]'
      )}
    >
      {/* Top Section */}
      <Box className='flex flex-col gap-6 w-full items-center'>
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <Box
              key={index}
              className={clsx(
                'flex items-center w-full px-2 gap-3 ',
                sidebar ? 'justify-start' : 'justify-center'
              )}
            >
              <ListItemButton
                component={Link}
                to={item.path}
                disableRipple
                disableTouchRipple
                className={clsx(
                  '!p-2 !text-white !min-h-0 !rounded-none gap-3',
                  sidebar ? '!justify-start' : '!justify-center'
                )}
                sx={{
                  borderRadius: '10px',
                  minHeight: 'auto',
                  padding: '8px',
                  justifyContent: sidebar ? 'flex-start' : 'center',
                }}
              >
                <Box
                  className={clsx(
                    'flex items-center justify-center transition-all duration-300 rounded-xl cursor-pointer',
                    isActive
                      ? 'bg-background-quaternary  w-10 h-10 border-[0.5px] border-border '
                      : 'w-10 h-10'
                  )}
                  sx={{
                    backgroundColor: isActive ? '#262525' : 'none',
                    '&:hover': {
                      backgroundColor: isActive ? '#262525' : '#222324',
                    },
                  }}
                >
                  {item.icon}
                </Box>

                {sidebar && (
                  <Typography
                    className={clsx(
                      'text-white text-sm font-medium transition-all duration-300 overflow-hidden whitespace-nowrap',
                      sidebar ? 'opacity-100 w-auto ml-5' : 'opacity-0 w-0 ml-0'
                    )}
                    component='span'
                    style={{
                      transition:
                        'opacity 0.3s ease, width 0.3s ease, margin 0.3s ease',
                    }}
                  >
                    {item.label}
                  </Typography>
                )}
              </ListItemButton>
            </Box>
          );
        })}
      </Box>

      {/* Bottom Avatar */}
      <Box
        className={clsx(
          'flex items-center w-full px-2 gap-3',
          sidebar ? 'justify-start' : 'justify-center'
        )}
      >
        <ListItemButton
          component={Link}
          to='/profile'
          className='!p-2 !text-white !min-h-0 !rounded-none'
          sx={{
            borderRadius: '10px',
            minHeight: 'auto',
            padding: '8px',
            justifyContent: sidebar ? 'flex-start' : 'center',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <Box
            className='flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-xl cursor-pointer'
            sx={{
              '&:hover': {
                backgroundColor: '#4B5563',
              },
            }}
          >
            <Avatar
              sx={{
                bgcolor: 'transparent',
                width: 24,
                height: 24,
                minWidth: 0,
                minHeight: 0,
                cursor: 'pointer',
                padding: 0,
              }}
              className='!w-[24px] !h-[24px]'
            >
              <UserCircle size={24} weight='fill' color='#FFF' />
            </Avatar>
          </Box>

          {/* Profile label */}
          {sidebar && (
            <Typography
              className={clsx(
                'text-white text-sm font-medium transition-all duration-300 overflow-hidden whitespace-nowrap',
                sidebar ? 'opacity-100 w-auto ml-5' : 'opacity-0 w-0 ml-0'
              )}
              component='span'
              style={{
                transition:
                  'opacity 0.3s ease, width 0.3s ease, margin 0.3s ease',
              }}
            >
              Profile
            </Typography>
          )}
        </ListItemButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
