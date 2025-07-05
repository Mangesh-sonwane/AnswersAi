import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidbar/Sidbar';
import { useUIStore } from '../../store/uiStore';

const NavbarLayout = ({ children }: { children: React.ReactNode }) => {
  const sidebar = useUIStore((state) => state.sidebar);

  return (
    <div className='flex flex-col h-screen w-full'>
      {/* Navbar */}
      <Navbar />

      <div className='flex flex-1 pt-[7px]'>
        {/* Sidebar */}
        <Sidebar />

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
