import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidbar/Sidbar';

const NavbarLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebar, setSideBar] = useState<boolean>(false);

  return (
    <div className='flex flex-col h-screen w-full'>
      {/* Navbar */}
      <Navbar sidebar={sidebar} setSideBar={setSideBar} />

      <div className='flex flex-1 pt-[7px]'>
        {/* Sidebar */}
        <Sidebar sidebar={sidebar} />

        {/* Main Content */}
        <main
          className='flex-1 overflow-auto transition-all duration-300'
          style={{
            marginLeft: sidebar ? '11rem' : '5rem',
            paddingTop: '5rem',
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default NavbarLayout;
