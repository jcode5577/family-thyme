import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import HouseIcon from '@mui/icons-material/House';
import Link from '@mui/material/Link';

import Auth from '../../utils/auth';

const pages = ['calendar', 'list'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const showCollapseableSignin = () => {
    if (!Auth.loggedIn()) {
      return (
        <MenuItem key='signin' onClick={handleCloseNavMenu}>
          <Link href='/signin' underline='hover' color='inherit'>
            <Button>Sign In</Button>
          </Link>
        </MenuItem>
      );
    } else {
      return (
        <MenuItem key='logout' onClick={() => Auth.logout()}>
          <Link href='/' underline='hover'>
            <Button>Logout</Button>
          </Link>
        </MenuItem>
      );
    }
  };

  const showRegularSignin = () => {
    if (!Auth.loggedIn()) {
      return (
        <Link href='/signin'>
          <Button
            key='signin'
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Sign In
          </Button>
        </Link>
      );
    } else {
      return (
        <Link href='/' key='logout'>
          <Button
            key='logout'
            sx={{ my: 2, color: 'white', display: 'block' }}
            onClick={() => Auth.logout()}
          >
            Logout
          </Button>
        </Link>
      );
    }
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* START COLLAPSABLE MENU */}
          <HouseIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Family-Thyme
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link href={`/${page}`} underline='hover'>
                    <Button>{page}</Button>
                  </Link>
                </MenuItem>
              ))}
              {showCollapseableSignin()}
            </Menu>
          </Box>
          {/* END COLLAPSABLE MENU */}

          {/* START REGULAR MENU */}
          <HouseIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Family-Thyme
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link href={`/${page}`} key={page}>
                <Button
                  // key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
            {showRegularSignin()}
          </Box>
          {/* END REGULAR MENU */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
