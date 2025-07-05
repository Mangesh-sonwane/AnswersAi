import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

// pages
import NavbarLayout from './components/NavbarLayout/NavbarLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Notification from './pages/Notification/Notification';
import Calender from './pages/Calender/Calender';
import UploadData from './pages/UploadData/UploadData';
import Settings from './pages/Settings/Settings';
import Profile from './pages/Profile/Profile';

const NavbarRoute = ({
  component: Component,
}: {
  component: React.ComponentType;
}) => (
  <NavbarLayout>
    <Component />
  </NavbarLayout>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NavbarRoute component={Dashboard} />} />
        <Route
          path='/notification'
          element={<NavbarRoute component={Notification} />}
        />
        <Route
          path='/calendar'
          element={<NavbarRoute component={Calender} />}
        />
        <Route
          path='/upload'
          element={<NavbarRoute component={UploadData} />}
        />
        <Route
          path='/settings'
          element={<NavbarRoute component={Settings} />}
        />
        <Route path='/profile' element={<NavbarRoute component={Profile} />} />
      </Routes>
    </Router>
  );
}

export default App;
