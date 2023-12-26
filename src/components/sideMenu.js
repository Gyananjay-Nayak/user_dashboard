import {
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';

function SideMenu() {
  const pages = ['Products', 'Services', 'ABoutUs', 'ContactUs'];
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Drawer anchor="right" open={openMenu} onClose={() => setOpenMenu(false)}>
        <List>
          {pages.map((page, index) => (
            <ListItemButton onClick={() => setOpenMenu(false)} key={index}>
              <ListItemIcon>
                <ListItemText sx={{ paddingX: '20px' }}>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: 'white', marginLeft: 'auto' }}
        onClick={() => setOpenMenu(!openMenu)}>
        <MenuIcon color="white" />
      </IconButton>
    </>
  );
}

export default SideMenu;
