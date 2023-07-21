import { MantineReactTable } from 'mantine-react-table';
import { useMemo } from 'react';
import { usersMock } from './usersMock';
import { FormDrawer } from './FormDrawer';

export const UsersTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'address',
        header: 'Address',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
      {
        accessorKey: 'action',
        header: 'Action',
      },
    ],
    []
  );
  return (
    <MantineReactTable
      columns={columns}
      data={Object.values(usersMock).map((value) => ({
        firstName: value.firstName,
        lastName: value.lastName,
        address: value.address,
        city: value.city,
        state: value.state,
        action: <FormDrawer initial={value} />,
      }))}
      mantinePaperProps={{ shadow: '0', withBorder: false }}
    />
  );
};
