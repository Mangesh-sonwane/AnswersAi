import React from 'react';
import { Drawer } from '@mui/material';
import type { DrawerProps } from '@mui/material';

interface ReusableDrawerProps extends Omit<DrawerProps, 'classes'> {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  variant?: 'permanent' | 'persistent' | 'temporary';
  className?: string;
  customWidth?: string | number;
  drawerStyles?: object;
}

const ReusableDrawer: React.FC<ReusableDrawerProps> = ({
  open,
  onClose,
  children,
  anchor = 'left',
  variant = 'temporary',
  className,
  customWidth,
  drawerStyles,
  ...otherProps
}) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor={anchor}
      variant={variant}
      className={className}
      sx={{
        '& .MuiDrawer-paper': {
          width: customWidth ?? 691,
          height: '100vh',
          boxSizing: 'border-box',
          backgroundColor: '#0E0D0D',
          padding: '16px 20px',
          borderLeft: '1px solid #5A5A5A',
          ...drawerStyles,
        },
      }}
      {...otherProps}
    >
      <div className='h-full w-full'>{children}</div>
    </Drawer>
  );
};

export default ReusableDrawer;
