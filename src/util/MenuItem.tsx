import {
  House,
  Bell,
  CalendarBlank,
  UploadSimple,
  Gear,
} from '@phosphor-icons/react';
import type { IconProps } from '@phosphor-icons/react';

export type MenuItem = {
  icon: React.FC<IconProps>;
  label: string;
  path: string;
};

export const menuItems: MenuItem[] = [
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
