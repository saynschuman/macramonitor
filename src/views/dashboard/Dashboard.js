import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';

const Dashboard1 = () => (
  // 2

  <PageContainer title="Dashboard" description="this is Dashboard">
    {/* breadcrumb */}
    <Breadcrumb title="Dashboard" subtitle="Home" />
    {/* end breadcrumb */}
    <Grid container spacing={0}>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={12}>
        <Card>
          <CardContent>
            <Typography variant="h4">Starter Card</Typography>
            <Typography variant="body1">
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </PageContainer>
);
export default Dashboard1;
