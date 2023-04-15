import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { logOutUser } from '../../features/account/accountSlice';

const settings = [
  { title: 'Home', route: '/' },
  { title: 'Create Game', route: '/create-game' },
  { title: 'Logout', route: '/' }, // add logout function here
];

const NavBar = () => {
  const { isLoggedIn } = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className="navbar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                color: 'white',
              }}
            >
              FutTube
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
              <Link to="/">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography fontWeight={600} textAlign="center">
                    Home
                  </Typography>
                </MenuItem>
              </Link>
              {isLoggedIn ? (
                <>
                  <MenuItem onClick={() => dispatch(logOutUser())}>
                    <Typography fontWeight={600} textAlign="center">
                      Log Out
                    </Typography>
                  </MenuItem>
                  <Link to="/create-game">
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography fontWeight={600} textAlign="center">
                        Create Game
                      </Typography>
                    </MenuItem>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography fontWeight={600} textAlign="center">
                        Login
                      </Typography>
                    </MenuItem>
                  </Link>
                  <Link to="/register">
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography fontWeight={600} textAlign="center">
                        Register
                      </Typography>
                    </MenuItem>
                  </Link>
                </>
              )}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            FutTube
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  fontWeight: 600,
                }}
              >
                Home
              </Button>
            </Link>
            {isLoggedIn ? (
              <>
                <Link to="/create-game">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: 'white',
                      display: 'block',
                      fontWeight: 600,
                    }}
                  >
                    Create Game
                  </Button>
                </Link>
                <Button
                  onClick={() => dispatch(logOutUser())}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    fontWeight: 600,
                  }}
                >
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: 'white',
                      display: 'block',
                      fontWeight: 600,
                    }}
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: 'white',
                      display: 'block',
                      fontWeight: 600,
                    }}
                  >
                    Register
                  </Button>
                </Link>
              </>
            )}
          </Box>

          {isLoggedIn && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Avatar" src="https://i.pravatar.cc/80" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <Link to={setting.route}>
                    <MenuItem
                      key={setting.title}
                      onClick={() => {
                        handleCloseUserMenu();
                        setting.title === 'Logout' && dispatch(logOutUser());
                      }}
                    >
                      <Typography textAlign="center">
                        {setting.title}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
