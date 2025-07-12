import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectUser } from '../../redux/slices/authSlice';

const Header = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={RouterLink} to="/" sx={{ 
          flexGrow: 1, 
          textDecoration: 'none', 
          color: 'inherit' 
        }}>
          ReWear
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/browse"
          >
            Browse
          </Button>
          
          {isAuthenticated ? (
            <>
              <Button 
                color="inherit" 
                component={RouterLink} 
                to="/dashboard"
              >
                Dashboard
              </Button>
              <Button 
                color="inherit" 
                component={RouterLink} 
                to="/add-item"
              >
                Add Item
              </Button>
              <Typography variant="body2" sx={{ alignSelf: 'center' }}>
                {user?.points || 0} pts
              </Typography>
            </>
          ) : (
            <>
              <Button 
                color="inherit" 
                component={RouterLink} 
                to="/login"
              >
                Login
              </Button>
              <Button 
                variant="outlined" 
                color="inherit" 
                component={RouterLink} 
                to="/register"
              >
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 