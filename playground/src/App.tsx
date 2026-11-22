// Libraries
import { AppLayout } from '@willow/ui';
import { Outlet } from 'react-router';

// Data
import { headerMenu } from './data/headerMenu';
import HomeButton from './components/HomeButton';

// TODO Github packages
// TODO git tags

export default function App() {

  return (
    <AppLayout headerMenu={headerMenu} homeButton={<HomeButton />}>
      <Outlet />
    </AppLayout>
  )
}
