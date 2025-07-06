import React from 'react';
import { Drawer } from '@mui/material';
import type { DrawerProps } from '@mui/material';

interface ReusableDrawerProps extends Omit<DrawerProps, 'classes'> {
  /**
   * Whether the drawer is open
   */
  open: boolean;
  /**
   * Callback fired when the drawer requests to be closed
   */
  onClose: () => void;
  /**
   * The content of the drawer
   */
  children: React.ReactNode;
  /**
   * The anchor side of the drawer
   * @default 'left'
   */
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  /**
   * The variant of the drawer
   * @default 'temporary'
   */
  variant?: 'permanent' | 'persistent' | 'temporary';
  /**
   * Additional className for custom styling
   */
  className?: string;
}

const ReusableDrawer: React.FC<ReusableDrawerProps> = ({
  open,
  onClose,
  children,
  anchor = 'left',
  variant = 'temporary',
  className,
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
          width: 691,
          height: '100vh',
          boxSizing: 'border-box',
          backgroundColor: '#0E0D0D',
          padding: '16px 20px',
          borderLeft: '1px solid #5A5A5A',
        },
      }}
      {...otherProps}
    >
      <div className='h-full w-full'>{children}</div>
    </Drawer>
  );
};

export default ReusableDrawer;
