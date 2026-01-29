import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  TextField,
  Switch,
  FormControlLabel,
  Box,
  Paper,
  Chip,
  Rating,
  LinearProgress,
  Alert,
  Snackbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle,
  ShoppingCart,
  Favorite,
  Search,
  Home,
  Info,
  ContactMail,
  Settings,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import theme from './theme';

// Sample data for product cards
const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Noise-cancelling wireless headphones with 30hr battery',
    price: '$199.99',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Smart Watch',
    description: 'Fitness tracker with heart rate monitor and GPS',
    price: '$299.99',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
    category: 'Wearables',
  },
  {
    id: 3,
    name: 'Laptop Stand',
    description: 'Adjustable aluminum stand for ergonomic workspace',
    price: '$89.99',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1586950012036-b957f2c7cbf3?w=400&h=300&fit=crop',
    category: 'Accessories',
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.description.toLowerCase().includes(search.toLowerCase())
  );

  const drawerWidth = 240;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Material UI Store
          </Typography>
          
          {/* Search Bar */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <Search sx={{ mr: 1 }} />
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search products..."
              value={search}
              onChange={handleSearchChange}
              sx={{ 
                backgroundColor: 'white',
                borderRadius: 1,
                '& .MuiOutlinedInput-root': {
                  height: 40,
                }
              }}
            />
          </Box>
          
          {/* Dark Mode Toggle */}
          <IconButton color="inherit" onClick={handleDarkModeToggle}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          
          <IconButton color="inherit">
            <Favorite />
          </IconButton>
          
          <IconButton color="inherit">
            <ShoppingCart />
          </IconButton>
          
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer Navigation */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: drawerWidth }}>
          <Toolbar>
            <Typography variant="h6">Navigation</Typography>
          </Toolbar>
          <Divider />
          <List>
            {['Home', 'Products', 'About', 'Contact', 'Settings'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index === 0 && <Home />}
                  {index === 1 && <ShoppingCart />}
                  {index === 2 && <Info />}
                  {index === 3 && <ContactMail />}
                  {index === 4 && <Settings />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* Welcome Section */}
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to Material UI Store
          </Typography>
          <Typography variant="body1" paragraph>
            Discover amazing products built with Material Design principles. 
            This interface demonstrates various Material UI components in action.
          </Typography>
          
          {/* Progress Indicator */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" gutterBottom>
              Daily Deal Progress
            </Typography>
            <LinearProgress variant="determinate" value={70} sx={{ height: 10, borderRadius: 5 }} />
          </Box>
        </Paper>

        {/* Featured Products */}
        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Featured Products
        </Typography>
        
        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="h6" component="div">
                      {product.name}
                    </Typography>
                    <Chip label={product.category} size="small" color="primary" />
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {product.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Rating value={product.rating} precision={0.5} readOnly />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      ({product.rating})
                    </Typography>
                  </Box>
                  
                  <Typography variant="h6" color="primary">
                    {product.price}
                  </Typography>
                </CardContent>
                
                <CardActions>
                  <Button 
                    size="small" 
                    color="primary"
                    onClick={() => handleProductClick(product)}
                  >
                    Add to Cart
                  </Button>
                  <Button size="small" color="secondary">
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form Section */}
        <Paper elevation={2} sx={{ p: 3, mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Button variant="contained" color="primary">
                  Send Message
                </Button>
                <FormControlLabel
                  control={<Switch color="primary" />}
                  label="Subscribe to newsletter"
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Alert Section */}
        <Alert severity="info" sx={{ mt: 3 }}>
          This is an informational alert — Material UI provides various alert types: 
          success, warning, error, and info.
        </Alert>
      </Container>

      {/* Snackbar Notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={selectedProduct ? `Added "${selectedProduct.name}" to cart` : ''}
      />
    </ThemeProvider>
  );
}

export default App;