import React from 'react';

import {
  Avatar,
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import users from './users';

const UsersTable = () => {
  return (
    <Box
      sx={{
        overflow: {
          xs: 'auto',
          sm: 'unset',
        },
      }}
    >
      <Table
        aria-label="simple table"
        sx={{
          whiteSpace: 'nowrap',
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h5">Users</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h5">Project Name</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h5">Team</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h5">Status</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h5">Budget</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((basic) => (
            <TableRow key={basic.id}>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar
                    src={basic.imgsrc}
                    alt={basic.imgsrc}
                    width="35"
                    sx={{
                      borderRadius: '100%',
                    }}
                  />
                  <Box
                    sx={{
                      ml: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight="600">
                      {basic.name}
                    </Typography>
                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                      {basic.post}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6" fontWeight="400">
                  {basic.pname}
                </Typography>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  {basic.teams.map((team) => (
                    <Avatar
                      key={team.id}
                      sx={{
                        backgroundColor: team.color,
                        width: '35px',
                        height: '35px',
                        color: '#fff',
                        ml: '-8px',
                      }}
                    >
                      {team.text}
                    </Avatar>
                  ))}
                </Box>
              </TableCell>
              <TableCell>
                <Chip
                  sx={{
                    backgroundColor:
                      basic.status === 'Active'
                        ? (theme) => theme.palette.success.light
                        : basic.status === 'Pending'
                        ? (theme) => theme.palette.warning.light
                        : basic.status === 'Completed'
                        ? (theme) => theme.palette.primary.light
                        : basic.status === 'Cancel'
                        ? (theme) => theme.palette.error.light
                        : (theme) => theme.palette.secondary.light,
                    color:
                      basic.status === 'Active'
                        ? (theme) => theme.palette.success.main
                        : basic.status === 'Pending'
                        ? (theme) => theme.palette.warning.main
                        : basic.status === 'Completed'
                        ? (theme) => theme.palette.primary.main
                        : basic.status === 'Cancel'
                        ? (theme) => theme.palette.error.main
                        : (theme) => theme.palette.secondary.main,
                    borderRadius: '6px',
                    pl: '3px',
                    pr: '3px',
                  }}
                  size="small"
                  label={basic.status}
                />
              </TableCell>
              <TableCell>
                <Typography variant="h6">${basic.budget}k</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default UsersTable;
