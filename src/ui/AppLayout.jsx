import { Outlet } from 'react-router-dom';
import Contents from './Contents';
import Header from './Header';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <div className="bg-neutral-100 h-screen w-full grid grid-rows-14 grid-cols-14 grid-flow-col">
      <Sidebar />
      <Header />
      <Contents>
        <Outlet />
      </Contents>
    </div>
  );
}

export default AppLayout;
