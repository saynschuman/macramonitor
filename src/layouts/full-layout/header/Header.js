import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Menu,
  Typography,
  Chip,
  Button,
  Drawer,
} from '@mui/material';
import PropTypes from 'prop-types';
// Dropdown Component
import NotificationDropdown from './NotificationDropdown';
import CustomTextField from '../../../components/forms/custom-elements/CustomTextField';

const Header = ({ sx, customClass, toggleSidebar, toggleMobileSidebar }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // drawer top
  const [showDrawer2, setShowDrawer2] = useState(false);

  const handleDrawerClose2 = () => {
    setShowDrawer2(false);
  };

  return (
    <AppBar sx={sx} elevation={0} className={customClass}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
          size="large"
          sx={{
            display: {
              lg: 'flex',
              xs: 'none',
            },
          }}
        >
          <FeatherIcon icon="menu" />
        </IconButton>

        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: 'none',
              xs: 'flex',
            },
          }}
        >
          <FeatherIcon icon="menu" width="20" height="20" />
        </IconButton>
        {/* ------------------------------------------- */}
        {/* Search Dropdown */}
        {/* ------------------------------------------- */}
        <IconButton
          aria-label="show 4 new mails"
          color="inherit"
          aria-controls="search-menu"
          aria-haspopup="true"
          onClick={() => setShowDrawer2(true)}
          size="large"
        >
          <FeatherIcon icon="search" width="20" height="20" />
        </IconButton>
        <Drawer
          anchor="top"
          open={showDrawer2}
          onClose={() => setShowDrawer2(false)}
          sx={{
            '& .MuiDrawer-paper': {
              padding: '15px 30px',
            },
          }}
        >
          <Box display="flex" alignItems="center">
            <CustomTextField
              id="tb-search"
              size="small"
              placeholder="Search here"
              fullWidth
              inputProps={{ 'aria-label': 'Search here' }}
            />
            <Box
              sx={{
                ml: 'auto',
              }}
            >
              <IconButton
                color="inherit"
                sx={{
                  color: (theme) => theme.palette.grey.A200,
                }}
                onClick={handleDrawerClose2}
              >
                <FeatherIcon icon="x-circle" />
              </IconButton>
            </Box>
          </Box>
        </Drawer>
        {/* ------------ End Menu icon ------------- */}

        <Box flexGrow={1} />
        {/* ------------------------------------------- */}
        {/* Notifications Dropdown */}
        {/* ------------------------------------------- */}
        <IconButton
          size="large"
          aria-label="menu"
          color="inherit"
          aria-controls="notification-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Badge variant="dot" color="secondary">
            <FeatherIcon icon="bell" width="20" height="20" />
          </Badge>
        </IconButton>
        <Menu
          id="notification-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          sx={{
            '& .MuiMenu-paper': {
              width: '385px',
              right: 0,
              top: '70px !important',
            },
            '& .MuiList-padding': {
              p: '30px',
            },
          }}
        >
          <Box
            sx={{
              mb: 1,
            }}
          >
            <Box display="flex" alignItems="center">
              <Typography variant="h4" fontWeight="500">
                Notifications
              </Typography>
              <Box
                sx={{
                  ml: 2,
                }}
              >
                <Chip
                  size="small"
                  label="5 new"
                  sx={{
                    borderRadius: '6px',
                    pl: '5px',
                    pr: '5px',
                    backgroundColor: (theme) => theme.palette.warning.main,
                    color: '#fff',
                  }}
                />
              </Box>
            </Box>
          </Box>
          <NotificationDropdown />
          <Button
            sx={{
              mt: 2,
              display: 'block',
              width: '100%',
            }}
            variant="contained"
            color="primary"
            onClick={handleClose}
          >
            <Link
              to="/email"
              style={{
                color: '#fff',
                width: '100%',
                display: 'block',
                textDecoration: 'none',
              }}
            >
              See all notifications
            </Link>
          </Button>
        </Menu>
        {/* ------------------------------------------- */}
        {/* End Notifications Dropdown */}
        {/* ------------------------------------------- */}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
  customClass: PropTypes.string,
  toggleSidebar: PropTypes.func,
  toggleMobileSidebar: PropTypes.func,
};

export default Header;
