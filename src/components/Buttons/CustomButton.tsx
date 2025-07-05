import React from 'react';
import { Button, type ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface CustomButtonProps extends ButtonProps {
  icon?: React.ReactNode;
  text?: string;
}

const StyledButton = styled(Button)<CustomButtonProps>(({ text }) => ({
  backgroundColor: '#242424',
  border: '0.67px solid #5A5A5A',
  height: '40px',
  minWidth: text ? '140px' : '40px',
  borderRadius: '5px',
  padding: text ? '10px 14px' : '10px',
  textTransform: 'none',
  whiteSpace: 'nowrap',
  color: '#ffffff',
  boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
  fontWeight: 500,
  fontSize: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  '&:hover': {
    backgroundColor: '#2c2c2c',
  },
}));

const CustomButton: React.FC<CustomButtonProps> = ({ icon, text, ...rest }) => {
  return (
    <StyledButton text={text} {...rest}>
      {icon}
      {text && <span>{text}</span>}
    </StyledButton>
  );
};

export default CustomButton;
