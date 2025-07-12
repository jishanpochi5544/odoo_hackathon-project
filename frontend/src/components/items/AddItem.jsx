import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const AddItem = () => {
  return (
    <>
      <Helmet>
        <title>Add Item - ReWear</title>
      </Helmet>
      
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom>
          Add New Item
        </Typography>
        
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Coming Soon!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Add item functionality will be available soon.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default AddItem; 