import { MantineProvider } from '@mantine/core';
import { HeaderTabs } from './HeaderTabs';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ primaryColor: 'teal' }}>
      <HeaderTabs
        tabs={['Financial', 'PI', 'Quality', 'CPIA', 'Data', 'Action Items', 'Submission', 'Admin']}
        links={[
          { label: 'About', link: '1' },
          { label: 'MacraGrur', link: '2' },
          { label: 'Logout', link: '3' },
        ]}
      />
    </MantineProvider>
  );
}
