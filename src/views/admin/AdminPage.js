import React from 'react';

import PageContainer from '../../components/container/PageContainer';
import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';
import AdminTables from './AdminTables';

const BCrumb = [
  {
    title: 'Admin',
  },
];

const BasicTable = () => (
  <PageContainer title="Health Systems" description="this is Basic Table page">
    {/* breadcrumb */}
    <Breadcrumb title="Health Systems" items={BCrumb} />
    {/* end breadcrumb */}
    <AdminTables />
  </PageContainer>
);

export default BasicTable;
