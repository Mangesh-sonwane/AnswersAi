import { usePrivy } from '@privy-io/react-auth';
import { useNavigate } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import { Divider, Skeleton } from '@mui/material';
import CustomButton from '../../components/Buttons/CustomButton';
import type { User } from '@privy-io/react-auth';

const Profile: React.FC = () => {
  const { authenticated, login, logout, ready, user } = usePrivy();
  const navigate = useNavigate();
  const redirectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [countdown, setCountdown] = useState<number>(15);

  const handleLogin = async (): Promise<void> => {
    try {
      await login();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = async (): Promise<void> => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleDashboardClick = (): void => {
    if (redirectTimeoutRef.current) clearTimeout(redirectTimeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    navigate('/');
  };

  const getUserNameAndEmail = (user: User) => {
    if (user.google) {
      return {
        name: user.google.name ?? 'Unknown',
        email: user.google.email ?? 'No email',
      };
    } else if (user.github) {
      return {
        name: user.github.name ?? 'Unknown',
        email: user.github.email ?? 'No email',
      };
    } else if (user.email) {
      return {
        name: typeof user.email === 'string' ? user.email : 'Anonymous',
        email:
          typeof user.email === 'object' && user.email.address
            ? user.email.address
            : 'No email',
      };
    } else if (user.twitter) {
      return {
        name: user.twitter.name ?? 'Unknown',
        email: 'No email provided',
      };
    } else {
      return {
        name: 'Unknown User',
        email: 'No email found',
      };
    }
  };

  useEffect(() => {
    if (authenticated && ready) {
      setCountdown(15);

      redirectTimeoutRef.current = setTimeout(() => {
        navigate('/');
      }, 15000);

      intervalRef.current = setInterval(() => {
        setCountdown((prev) => (prev <= 1 ? 0 : prev - 1));
      }, 1000);

      return () => {
        if (redirectTimeoutRef.current)
          clearTimeout(redirectTimeoutRef.current);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [authenticated, ready, navigate]);

  useEffect(() => {
    return () => {
      if (redirectTimeoutRef.current) clearTimeout(redirectTimeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  if (!ready) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='text-xl font-medium text-white'>Loading...</div>
      </div>
    );
  }

  return (
    <div className='flex justify-center items-center min-h-screen w-full px-4 py-10'>
      {authenticated ? (
        <div className='flex flex-col justify-center items-center w-full max-w-[500px] gap-6 md:gap-8'>
          <div className='text-center text-font-primary'>
            {user ? (
              (() => {
                const { name, email } = getUserNameAndEmail(user);
                return (
                  <div className='flex flex-col gap-2'>
                    <h1 className='font-semibold text-xl md:text-2xl leading-[150%] tracking-normal text-white'>
                      Welcome,
                      <span className='ml-1 text-font-secondary'>{name}</span>
                    </h1>
                    <p className='text-sm md:text-base text-font-senary break-words'>
                      You are logged in using
                      <span className='ml-1'>{email}</span>
                    </p>
                  </div>
                );
              })()
            ) : (
              <div className='flex flex-col gap-2 items-center w-full'>
                <Skeleton
                  variant='text'
                  width='100%'
                  height={40}
                  animation='wave'
                  sx={{ bgcolor: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}
                />
                <Skeleton
                  variant='text'
                  width='100%'
                  height={30}
                  animation='wave'
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.08)',
                    borderRadius: '4px',
                  }}
                />
              </div>
            )}
          </div>

          <Divider
            orientation='horizontal'
            sx={{
              width: '100%',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              borderBottomWidth: '1px',
            }}
          />

          <div className='flex flex-col gap-3 justify-center items-center'>
            <p className='text-font-senary text-sm md:text-base text-center'>
              For More Details, Please go to the Dashboard
            </p>
            <span className='text-font-senary text-sm'>
              Auto-redirect in {countdown}s
            </span>
            <div className='flex items-center gap-3 flex-wrap justify-center'>
              <CustomButton
                text={'Go to Dashboard'}
                onClick={handleDashboardClick}
                customWidth='220px'
              />
            </div>
          </div>

          <CustomButton
            text={authenticated ? 'Log Out' : 'Log In'}
            onClick={authenticated ? handleLogout : handleLogin}
            customWidth='220px'
          />
        </div>
      ) : (
        <div className='w-full max-w-[500px] flex flex-col justify-center items-center gap-6 md:gap-8 px-4 py-12 text-center'>
          <h1 className='text-2xl md:text-4xl leading-[150%] font-bold tracking-normal text-white'>
            Welcome to AnswersAI
          </h1>
          <p className='text-base md:text-lg font-semibold leading-[150%] text-font-primary'>
            Please sign in to access your profile
          </p>
          <CustomButton
            text='Log In'
            onClick={handleLogin}
            customWidth='220px'
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
