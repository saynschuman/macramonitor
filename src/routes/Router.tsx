import { DashboardContent } from '../components/DashboardContent';

export const Router = [
  {
    path: '/',
    element: <DashboardContent />,
  },
  {
    path: '/home',
    element: <>home</>,
  },
  {
    path: '*',
    element: <>Page not found</>,
  },
];
