import React from 'react';

import { Box, Card, CardContent, Tab, Tabs } from '@mui/material';

import PropTypes from 'prop-types';

import UsersTable from './UsersTable';

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

  const handleChange = (_, newValue) => {
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
                label="Users"
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  textTransform: 'capitalize',
                }}
                label="Groups"
                {...a11yProps(1)}
              />
              <Tab
                sx={{
                  textTransform: 'capitalize',
                }}
                label="Category"
                {...a11yProps(2)}
              />
              <Tab
                sx={{
                  textTransform: 'capitalize',
                }}
                label="SubCategory"
                {...a11yProps(3)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0} component="div">
            <UsersTable />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <UsersTable />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <UsersTable />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <UsersTable />
          </TabPanel>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AdminTables;
