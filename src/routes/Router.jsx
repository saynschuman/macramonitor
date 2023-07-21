import { DashboardContent } from '../components/DashboardContent';
import { Table } from '../components/Table';

export const Router = [
  {
    path: '/',
    element: <DashboardContent />,
  },
  {
    path: '/home',
    element: <Table />,
  },
  {
    path: '*',
    element: <>Page not found</>,
  },
];
