import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent,
  CardActions 
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>ReWear - Community Clothing Exchange</title>
        <meta name="description" content="Join the sustainable fashion revolution. Swap clothes, earn points, and reduce textile waste with our community-driven platform." />
      </Helmet>
      
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Hero Section */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h2" component="h1" gutterBottom color="primary">
            Welcome to ReWear
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Sustainable Community Clothing Exchange Platform
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: 600, mx: 'auto' }}>
            Join the sustainable fashion revolution! Swap your unused clothing with others, 
            earn points, and help reduce textile waste while building a community of conscious consumers.
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              size="large" 
              component={RouterLink} 
              to="/browse"
            >
              Start Swapping
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              component={RouterLink} 
              to="/register"
            >
              Join Community
            </Button>
          </Box>
        </Box>

        {/* Features Section */}
        <Grid container spacing={4} mb={8}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom color="primary">
                  🎯 Direct Swaps
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Exchange your clothing directly with other community members. 
                  Find the perfect match for your style and needs.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={RouterLink} to="/browse">
                  Browse Items
                </Button>
              </CardActions>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom color="primary">
                  ⭐ Points System
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Earn points for successful exchanges and use them to redeem items 
                  without direct swaps. Build your sustainable wardrobe!
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={RouterLink} to="/register">
                  Start Earning
                </Button>
              </CardActions>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom color="primary">
                  🌱 Sustainable Impact
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Reduce textile waste and promote sustainable fashion. 
                  Every swap helps protect our environment and build a better future.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={RouterLink} to="/browse">
                  Make Impact
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        {/* Stats Section */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h4" gutterBottom color="primary">
            Community Impact
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={6} md={3}>
              <Typography variant="h3" color="primary" gutterBottom>
                1,234
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Items Swapped
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h3" color="primary" gutterBottom>
                567
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Active Members
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h3" color="primary" gutterBottom>
                89
              </Typography>
              <Typography variant="body1" color="text.secondary">
                kg Waste Saved
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h3" color="primary" gutterBottom>
                4.8
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Community Rating
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box textAlign="center" sx={{ 
          backgroundColor: 'primary.main', 
          color: 'primary.contrastText',
          py: 6,
          px: 4,
          borderRadius: 2
        }}>
          <Typography variant="h4" gutterBottom>
            Ready to Start Your Sustainable Journey?
          </Typography>
          <Typography variant="body1" paragraph sx={{ maxWidth: 600, mx: 'auto' }}>
            Join thousands of people who are already making a difference through sustainable fashion.
            Start swapping today and be part of the solution!
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            component={RouterLink} 
            to="/register"
            sx={{ 
              backgroundColor: 'white', 
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'grey.100'
              }
            }}
          >
            Get Started Now
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Home; 