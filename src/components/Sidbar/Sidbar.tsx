import { Box, Avatar, Typography, ListItemButton } from '@mui/material';
import {
  House,
  Bell,
  CalendarBlank,
  UploadSimple,
  Gear,
  UserCircle,
} from '@phosphor-icons/react';
import type { IconProps } from '@phosphor-icons/react';

import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { useUIStore } from '../../store/uiStore';

type MenuItem = {
  icon: React.FC<IconProps>;
  label: string;
  path: string;
};

const menuItems: MenuItem[] = [
  {
    icon: House,
    label: 'Home',
    path: '/',
  },
  {
    icon: Bell,
    label: 'Notifications',
    path: '/notification',
  },
  {
    icon: CalendarBlank,
    label: 'Calendar',
    path: '/calendar',
  },
  {
    icon: UploadSimple,
    label: 'Upload',
    path: '/upload',
  },
  {
    icon: Gear,
    label: 'Settings',
    path: '/settings',
  },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { sidebar } = useUIStore();

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
          const Icon = item.icon;

          return (
            <Box
              key={index}
              className={clsx(
                'flex items-center w-full px-2 gap-3',
                sidebar ? 'justify-start' : 'justify-center'
              )}
            >
              <ListItemButton
                component={Link}
                to={item.path}
                disableRipple
                disableTouchRipple
                className={clsx(
                  '!p-2 !text-white !min-h-0 !rounded-none',
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
                    'flex items-center transition-all duration-300 rounded-xl cursor-pointer',
                    isActive
                      ? 'bg-background-quaternary border-[0.5px] border-border'
                      : '',
                    sidebar
                      ? 'px-3 py-2 gap-3 w-full justify-start'
                      : 'w-10 h-10 justify-center'
                  )}
                  sx={{
                    backgroundColor: isActive ? '#262525' : 'none',
                    transition: 'all 0.3s ease',
                    padding: sidebar ? '8px 12px' : '0',
                    width: sidebar ? '100%' : '40px',
                    justifyContent: sidebar ? 'flex-start' : 'center',
                    gap: sidebar ? '12px' : '0px',
                    '&:hover': {
                      backgroundColor: isActive ? '#262525' : '#222324',
                    },
                  }}
                >
                  <Icon
                    size={24}
                    weight='fill'
                    color={isActive ? '#FFFFFF' : '#858882'}
                  />
                  {sidebar && (
                    <Typography
                      className={clsx(
                        'text-sm font-medium transition-all duration-300',
                        isActive ? 'text-white' : 'text-[#858882]'
                      )}
                      component='span'
                    >
                      {item.label}
                    </Typography>
                  )}
                </Box>
              </ListItemButton>
            </Box>
          );
        })}
      </Box>

      {/* Bottom Avatar/Profile */}
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
            className={clsx(
              'flex items-center transition-all duration-300 rounded-xl cursor-pointer',
              sidebar
                ? 'px-3 py-2 gap-3 w-full justify-start'
                : 'w-10 h-10 justify-center'
            )}
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
              <UserCircle
                size={24}
                weight='fill'
                color={location.pathname === '/profile' ? '#FFFFFF' : '#858882'}
              />
            </Avatar>

            {sidebar && (
              <Typography
                className='text-white text-sm font-medium transition-all duration-300'
                component='span'
              >
                Profile
              </Typography>
            )}
          </Box>
        </ListItemButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
