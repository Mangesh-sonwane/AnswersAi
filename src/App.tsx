import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import React from 'react';

// pages
import NavbarLayout from './components/NavbarLayout/NavbarLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Notification from './pages/Notification/Notification';
import Calender from './pages/Calender/Calender';
import UploadData from './pages/UploadData/UploadData';
import Settings from './pages/Settings/Settings';
import Profile from './pages/Profile/Profile';
import { usePrivy } from '@privy-io/react-auth';

const NavbarRoute = ({
  component: Component,
}: {
  component: React.ComponentType;
}) => (
  <NavbarLayout>
    <Component />
  </NavbarLayout>
);

// Protected Route component
const ProtectedRoute = ({
  component: Component,
  authenticated,
}: {
  component: React.ComponentType;
  authenticated: boolean;
}) => {
  if (!authenticated) {
    return <Navigate to='/profile' replace />;
  }
  return <NavbarRoute component={Component} />;
};

function App(): React.JSX.Element {
  const { authenticated, ready } = usePrivy();

  if (!ready) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='text-xl font-medium text-white'>Loading...</div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Profile route - with navbar layout */}
        <Route path='/profile' element={<NavbarRoute component={Profile} />} />

        {/* Protected routes */}
        <Route
          path='/'
          element={
            authenticated ? (
              <NavbarRoute component={Dashboard} />
            ) : (
              <Navigate to='/profile' replace />
            )
          }
        />
        <Route
          path='/notification'
          element={
            <ProtectedRoute
              component={Notification}
              authenticated={authenticated}
            />
          }
        />
        <Route
          path='/calendar'
          element={
            <ProtectedRoute
              component={Calender}
              authenticated={authenticated}
            />
          }
        />
        <Route
          path='/upload'
          element={
            <ProtectedRoute
              component={UploadData}
              authenticated={authenticated}
            />
          }
        />
        <Route
          path='/settings'
          element={
            <ProtectedRoute
              component={Settings}
              authenticated={authenticated}
            />
          }
        />

        <Route
          path='*'
          element={<Navigate to={authenticated ? '/' : '/profile'} replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
