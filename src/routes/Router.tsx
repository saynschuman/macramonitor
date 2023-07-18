import { DashboardContent } from '../components/DashboardContent';

export const Router = [
  {
    path: '/',
    element: <DashboardContent />,
  },
  {
    path: '/admin',
    element: <>admin</>,
  },
  {
    path: '*',
    element: <>Page not found</>,
  },
];
