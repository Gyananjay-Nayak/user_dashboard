import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, useTheme, useMediaQuery } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideMenu from './sideMenu';

function Header() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <div>
        <AppBar sx={{ backgroundColor: '#1a202c' }} position="sticky">
          <Toolbar>
            <AccountCircleIcon />
            {isMatch ? (
              <>
                <Typography sx={{ fontSize: '2rem', paddingLeft: '10%' }}>Passer</Typography>
                <SideMenu />
              </>
            ) : (
              <Tabs
                indicatorColor="primary"
                onChange={(e, value) => setValue(value)}
                textColor="inherit"
                value={value}>
                <Tab label="User" />
                <Tab label="Services" />
                <Tab label="About Us" />
              </Tabs>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

export default Header;
