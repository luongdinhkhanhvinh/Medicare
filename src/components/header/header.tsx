import { Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import * as React from 'react';
import useStyles from './style';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function Header() {
  const classes = useStyles();

  return (
    <>
      <React.Fragment>
        <AppBar
          classes={{ positionFixed: classes.positionFixed }}
          className={classes.appbar}
          position='fixed'
          elevation={0}
        >
          <Toolbar className={classes.toolbar}>
            <MenuRoundedIcon className={classes.menuIcon} />
            <Box className={classes.titleMenu}>Menu</Box>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </>
  );
}

export default Header;
