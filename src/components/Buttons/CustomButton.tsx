import React from 'react';
import { Button, type ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface CustomButtonProps extends ButtonProps {
  icon?: React.ReactNode; // Icon before text
  endIcon?: React.ReactNode; // Icon after text
  text?: string;
  customWidth?: string | number; // Custom width prop
}

const StyledButton = styled(Button)<{
  hasText: boolean;
  customWidth?: string | number;
}>(({ hasText, variant, customWidth }) => ({
  // Only apply background color if not outlined variant
  backgroundColor: variant === 'outlined' ? 'transparent' : '#242424',
  border: '0.67px solid #5A5A5A',
  height: '40px',
  minWidth: customWidth || (hasText ? '140px' : '40px'),
  width: customWidth || 'auto',
  borderRadius: '5px',
  padding: hasText ? '10px 14px' : '10px',
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
    backgroundColor:
      variant === 'outlined' ? 'rgba(255,255,255,0.1)' : '#2c2c2c',
  },
}));

const CustomButton: React.FC<CustomButtonProps> = ({
  icon,
  endIcon,
  text,
  customWidth,
  ...rest
}) => {
  const hasText = Boolean(text);

  return (
    <StyledButton hasText={hasText} customWidth={customWidth} {...rest}>
      {icon}
      {text && <span>{text}</span>}
      {endIcon}
    </StyledButton>
  );
};

export default CustomButton;
