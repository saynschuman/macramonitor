import { ActionItems } from '../components/ActionItems';
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
    path: '/items',
    element: <ActionItems />,
  },  
  {
    path: '*',
    element: <>Page not found</>,
  },
];
