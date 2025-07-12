import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';

// Redux store
import { store } from './redux/store';

// Components
import LoadingSpinner from './components/common/LoadingSpinner';
import ErrorBoundary from './components/common/ErrorBoundary';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Lazy loaded pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./components/auth/Login'));
const Register = React.lazy(() => import('./components/auth/Register'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Browse = React.lazy(() => import('./pages/Browse'));
const ItemDetail = React.lazy(() => import('./components/items/ItemDetail'));
const AddItem = React.lazy(() => import('./components/items/AddItem'));
const Profile = React.lazy(() => import('./components/dashboard/Profile'));
const SwapRequests = React.lazy(() => import('./components/swaps/SwapRequests'));
const AdminDashboard = React.lazy(() => import('./components/admin/AdminDashboard'));

// Create theme with sustainable fashion colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green for sustainability
      light: '#81C784',
      dark: '#388E3C',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FF9800', // Orange for energy
      light: '#FFB74D',
      dark: '#F57C00',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    success: {
      main: '#4CAF50',
    },
    warning: {
      main: '#FF9800',
    },
    error: {
      main: '#F44336',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '0.875rem',
          fontWeight: 500,
        },
        contained: {
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderRadius: 12,
          '&:hover': {
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
            transition: 'box-shadow 0.3s ease-in-out',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
  },
});

// Create React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

function App() {
  useEffect(() => {
    // Add app-loaded class to body for loading spinner
    document.body.classList.add('app-loaded');
  }, []);

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Router>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  minHeight: '100vh',
                  backgroundColor: 'background.default'
                }}>
                  <Header />
                  <Box component="main" sx={{ flexGrow: 1 }}>
                    <Suspense fallback={<LoadingSpinner />}>
                      <Routes>
                        {/* Public routes */}
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/browse" element={<Browse />} />
                        <Route path="/item/:id" element={<ItemDetail />} />
                        
                        {/* Protected routes */}
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/add-item" element={<AddItem />} />
                        <Route path="/swap-requests" element={<SwapRequests />} />
                        
                        {/* Admin routes */}
                        <Route path="/admin" element={<AdminDashboard />} />
                        
                        {/* 404 route */}
                        <Route path="*" element={
                          <Box sx={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            minHeight: '60vh',
                            flexDirection: 'column',
                            gap: 2
                          }}>
                            <h1>404 - Page Not Found</h1>
                            <p>The page you're looking for doesn't exist.</p>
                          </Box>
                        } />
                      </Routes>
                    </Suspense>
                  </Box>
                  <Footer />
                </Box>
              </Router>
              
              {/* Toast notifications */}
              <Toaster
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: '#363636',
                    color: '#fff',
                    borderRadius: '8px',
                  },
                  success: {
                    iconTheme: {
                      primary: '#4CAF50',
                      secondary: '#fff',
                    },
                  },
                  error: {
                    iconTheme: {
                      primary: '#F44336',
                      secondary: '#fff',
                    },
                  },
                }}
              />
            </ThemeProvider>
          </HelmetProvider>
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App; 