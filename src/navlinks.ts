import { IconDashboard, IconHome } from '@tabler/icons-react';
import { TablerIconsProps } from '@tabler/icons-react';

export interface NavItem {
  label: string;
  icon: (props: TablerIconsProps) => JSX.Element;
  link?: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export const navLinks: NavItem[] = [
  { label: 'Dashboard', icon: IconDashboard, link: '/' },
  { label: 'Home', icon: IconHome, link: '/home' },
];
