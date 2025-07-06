import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidbar/Sidbar';
import { useUIStore } from '../../store/uiStore';
import { useResponsive } from '../../store/useResponsive';
import MobileSidebar from '../Mobile/MobileSidebar';

const NavbarLayout = ({ children }: { children: React.ReactNode }) => {
  const { sidebar } = useUIStore();
  const { isMobile } = useResponsive();

  return (
    <div className='flex flex-col h-screen w-full'>
      <Navbar />

      <div className='flex flex-1 pt-[7px]'>
        {isMobile ? <MobileSidebar /> : <Sidebar />}

        {/* Main Content */}
        <main
          className='flex-1 overflow-auto transition-all duration-300'
          style={{
            marginLeft: isMobile ? '0' : sidebar ? '11rem' : '5rem',
            paddingTop: isMobile ? '4.1rem' : '5rem',
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default NavbarLayout;
