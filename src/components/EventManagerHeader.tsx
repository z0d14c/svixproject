import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

interface PastelStrobingHeaderProps {
  text: string;
}

const HeaderContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(270deg, #ffcccc, #ccffff, #ccffcc, #ccccff);
  background-size: 800% 800%;
  animation: strobingBackground 10s ease infinite;

  @keyframes strobingBackground {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const EventManagerHeader = ({ text }: PastelStrobingHeaderProps) => {
  return (
    <HeaderContainer marginY={1}>
      <Typography variant="h6">{text}</Typography>
    </HeaderContainer>
  );
};

export default EventManagerHeader;
