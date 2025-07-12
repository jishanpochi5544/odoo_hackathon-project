import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login - ReWear</title>
      </Helmet>
      
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom textAlign="center">
          Login
        </Typography>
        
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Coming Soon!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Login functionality will be available soon.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Login; 