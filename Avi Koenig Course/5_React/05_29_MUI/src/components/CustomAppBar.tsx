import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

interface AppBarProps {
  backgroundColor?: string; // Make backgroundColor optional
}

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'backgroundColor',
})(({ backgroundColor }: AppBarProps) => ({
  backgroundColor,
  color: 'blue',
}));

const BlueAppPanel: React.FC = () => {
  return (
    <StyledAppBar position="static" backgroundColor="primary.main">
      {/* Your app content here */}
    </StyledAppBar>
  );
};

export default BlueAppPanel;
