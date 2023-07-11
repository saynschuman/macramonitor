import React from 'react';
import { Box, Typography } from '@mui/material';

const year = new Date().getFullYear();

const Footer = () => (
  <Box sx={{ p: 3, textAlign: 'center' }}>
    <Typography>© {year} All rights reserved</Typography>
  </Box>
);

export default Footer;
