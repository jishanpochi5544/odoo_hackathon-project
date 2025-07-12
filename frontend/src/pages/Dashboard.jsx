import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard - ReWear</title>
      </Helmet>
      
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Manage your items, swaps, and points.
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">My Items</Typography>
                <Typography variant="body2" color="text.secondary">
                  View and manage your listed items.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">My Swaps</Typography>
                <Typography variant="body2" color="text.secondary">
                  Track your swap requests and history.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard; 