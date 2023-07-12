import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Card, CardContent, Tabs, Tab, Table, TableHead, TableRow, Avatar, TableCell, TableBody, Chip } from '@mui/material';
import img1 from '../../assets/images/users/1.jpg';
import img2 from '../../assets/images/users/2.jpg';
import img3 from '../../assets/images/users/3.jpg';
import img4 from '../../assets/images/users/4.jpg';
import img5 from '../../assets/images/users/5.jpg';

export const basics = [
  {
    id: '1',
    imgsrc: img1,
    name: 'Sunil Joshi',
    post: 'Web Designer',
    pname: 'Elite Admin',
    teams: [
      {
        id: '1.1',
        color: 'secondary.main',
        text: 'S',
      },
      {
        id: '1.2',
        color: 'error.main',
        text: 'D',
      },
    ],
    status: 'Active',
    budget: '3.9',
  },
  {
    id: '2',
    imgsrc: img2,
    name: 'Andrew McDownland',
    post: 'Project Manager',
    pname: 'Real Homes WP Theme',
    teams: [
      {
        id: '2.1',
        color: 'primary.main',
        text: 'A',
      },
      {
        id: '2.2',
        color: 'warning.main',
        text: 'X',
      },
      {
        id: '2.3',
        color: 'secondary.main',
        text: 'N',
      },
    ],
    status: 'Pending',
    budget: '24.5',
  },
  {
    id: '3',
    imgsrc: img3,
    name: 'Christopher Jamil',
    post: 'Project Manager',
    pname: 'MedicalPro WP Theme',
    teams: [
      {
        id: '3.1',
        color: 'error.main',
        text: 'X',
      },
    ],
    status: 'Completed',
    budget: '12.8',
  },
  {
    id: '4',
    imgsrc: img4,
    name: 'Nirav Joshi',
    post: 'Frontend Engineer',
    pname: 'Hosting Press HTML',
    teams: [
      {
        id: '4.1',
        color: 'primary.main',
        text: 'Y',
      },
      {
        id: '4.2',
        color: 'error.main',
        text: 'X',
      },
    ],
    status: 'Active',
    budget: '2.4',
  },
  {
    id: '5',
    imgsrc: img5,
    name: 'Micheal Doe',
    post: 'Content Writer',
    pname: 'Helping Hands WP Theme',
    teams: [
      {
        id: '5.1',
        color: 'secondary.main',
        text: 'S',
      },
    ],
    status: 'Cancel',
    budget: '9.3',
  },
];

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const AdminTables = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card
      sx={{
        p: {
          xs: '20px',
          sm: '35px',
          lg: '35px',
        },
      }}
    >
      <CardContent
        sx={{
          p: 0,
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="secondary"
              allowScrollButtonsMobile
              scrollButtons
              indicatorColor="secondary"
            >
              <Tab
                sx={{
                  textTransform: 'capitalize',
                }}
                label="Description"
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  textTransform: 'capitalize',
                }}
                label="Reviews"
                {...a11yProps(1)}
              />
              <Tab
                sx={{
                  textTransform: 'capitalize',
                }}
                label="Comments"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0} component="div">
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
                  {basics.map((basic) => (
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
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography
              fontWeight="500"
              sx={{
                fontSize: {
                  xs: '16px',
                  sm: '24px',
                  lg: '24px',
                },
              }}
            >
              Vivamus tortor odio, pellentesque eu tincidunt a, aliquet sit amet lorem pellentesque
              eu tincidunt a, aliquet sit amet lorem.
            </Typography>
            <Typography
              color="textSecondary"
              variant="body1"
              fontWeight="400"
              sx={{
                mt: 4,
              }}
            >
              Cras eget elit semper, congue sapien id, pellentesque diam. Nulla faucibus diam nec
              fermentum ullamcorper. Praesent sed ipsum ut augue vestibulum malesuada. Duis vitae
              volutpat odio. Integer sit amet elit ac justo sagittis dignissim.
            </Typography>
            <Typography
              color="textSecondary"
              variant="body1"
              fontWeight="400"
              sx={{
                mt: 4,
              }}
            >
              Quis metus in nunc semper efficitur eget vitae diam. Proin justo diam, venenatis sit
              amet eros in, iaculis auctor magna. Pellentesque sit amet accumsan urna, sit amet
              pretium ipsum. Fusce condimentum venenatis mauris et luctus. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography
              fontWeight="500"
              sx={{
                fontSize: {
                  xs: '16px',
                  sm: '24px',
                  lg: '24px',
                },
              }}
            >
              Vivamus tortor odio, pellentesque eu tincidunt a, aliquet sit amet lorem pellentesque
              eu tincidunt a, aliquet sit amet lorem.
            </Typography>
            <Typography
              color="textSecondary"
              variant="body1"
              fontWeight="400"
              sx={{
                mt: 4,
              }}
            >
              Cras eget elit semper, congue sapien id, pellentesque diam. Nulla faucibus diam nec
              fermentum ullamcorper. Praesent sed ipsum ut augue vestibulum malesuada. Duis vitae
              volutpat odio. Integer sit amet elit ac justo sagittis dignissim.
            </Typography>
            <Typography
              color="textSecondary"
              variant="body1"
              fontWeight="400"
              sx={{
                mt: 4,
              }}
            >
              Vivamus quis metus in nunc semper efficitur eget vitae diam. Proin justo diam,
              venenatis sit amet eros in, iaculis auctor magna. Pellentesque sit amet accumsan urna,
              sit amet pretium ipsum. Fusce condimentum venenatis mauris et luctus. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            </Typography>
          </TabPanel>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AdminTables;
