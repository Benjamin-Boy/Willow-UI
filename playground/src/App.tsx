// Libraries
import { AppLayout } from '@willow/ui';
import { Outlet } from 'react-router';

// Data
import { headerMenu } from './data/headerMenu';

// TODO Github packages
// TODO git tags

export default function App() {

  return (
    <AppLayout headerMenu={headerMenu}>
      <Outlet />
    </AppLayout>
  )
}
