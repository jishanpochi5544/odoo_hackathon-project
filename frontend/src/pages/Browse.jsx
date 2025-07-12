import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const Browse = () => {
  return (
    <>
      <Helmet>
        <title>Browse Items - ReWear</title>
      </Helmet>
      
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom>
          Browse Items
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Discover amazing clothing items from our community members.
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Coming Soon!</Typography>
                <Typography variant="body2" color="text.secondary">
                  Item browsing functionality will be available soon.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Browse; 