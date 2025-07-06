import { usePrivy } from '@privy-io/react-auth';
import { useNavigate } from 'react-router';
import { Divider, Skeleton } from '@mui/material';
import CustomButton from '../../components/Buttons/CustomButton';
import type { User } from '@privy-io/react-auth';

const Profile: React.FC = () => {
  const { authenticated, login, logout, ready, user } = usePrivy();
  const navigate = useNavigate();

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

  if (!ready) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='text-xl font-medium'>Loading...</div>
      </div>
    );
  }

  return (
    <div className='flex justify-center items-center h-full border-[0.5px] border-[#bdc1ca] rounded-[5px] w-full'>
      {authenticated ? (
        <div className='flex flex-col justify-center items-center h-full gap-8 w-full px-120'>
          <div className='text-center text-font-primary'>
            {user ? (
              (() => {
                const { name, email } = getUserNameAndEmail(user);
                return (
                  <div className='flex flex-col gap-2'>
                    <h1 className='font-semibold text-[24px] leading-[150%] tracking-normal text-white'>
                      Welcome,
                      <span className='ml-1 text-font-secondary'>{name}</span>
                    </h1>
                    <p className='text-base text-font-senary'>
                      You are logged in using
                      <span className='ml-1'>{email}</span>
                    </p>
                  </div>
                );
              })()
            ) : (
              <div className='flex flex-col gap-2 items-center w-[280px]'>
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

          <div className='flex flex-col gap-4 justify-center items-center'>
            <p className='text-font-senary text-base'>
              For More Details, Please go to the Dashboard
            </p>
            <CustomButton
              text={'Go to Dashboard'}
              onClick={() => navigate('/')}
              customWidth={'220px'}
            />
          </div>

          <CustomButton
            text={authenticated ? 'Log Out' : 'Log In'}
            onClick={authenticated ? handleLogout : handleLogin}
            customWidth={'220px'}
          />
        </div>
      ) : (
        <div className='w-full flex flex-col justify-center h-full items-center gap-8 p-12'>
          <h1 className='text-4xl leading-[150%] font-bold tracking-normal text-white ml-2'>
            Welcome to AnswersAI
          </h1>
          <p className='text-lg font-semibold leading-[150%] tracking-[0%] text-font-primary'>
            {authenticated ? '' : 'Please sign in to access your profile'}
          </p>
          <CustomButton
            text={'Log In'}
            onClick={handleLogin}
            customWidth={'220px'}
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
