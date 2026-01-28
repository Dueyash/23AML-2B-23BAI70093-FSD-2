import './App.css';
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
  TextField,
  Box,
  Paper,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
  Avatar,
  Fab,
  Snackbar,
  Alert
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  ContactMail as ContactIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Add as AddIcon
} from '@mui/icons-material';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const cards = [
    {
      id: 1,
      title: 'Material Design',
      description: 'Beautiful and intuitive design system created by Google for building modern interfaces.',
      image: 'https://via.placeholder.com/350x200/1976d2/ffffff?text=Material+Design',
      category: 'Design'
    },
    {
      id: 2,
      title: 'React Components',
      description: 'Pre-built React components following Material Design principles for rapid development.',
      image: 'https://via.placeholder.com/350x200/388e3c/ffffff?text=React+Components',
      category: 'Development'
    },
    {
      id: 3,
      title: 'Responsive Layout',
      description: 'Grid system and responsive utilities for building mobile-first applications.',
      image: 'https://via.placeholder.com/350x200/d32f2f/ffffff?text=Responsive',
      category: 'Layout'
    },
    {
      id: 4,
      title: 'Customization',
      description: 'Extensive theming capabilities to match your brand identity and design requirements.',
      image: 'https://via.placeholder.com/350x200/7b1fa2/ffffff?text=Customization',
      category: 'Theming'
    },
    {
      id: 5,
      title: 'Icons Library',
      description: 'Comprehensive icon library with thousands of Material Design icons ready to use.',
      image: 'https://via.placeholder.com/350x200/f57c00/ffffff?text=Icons',
      category: 'Assets'
    },
    {
      id: 6,
      title: 'Accessibility',
      description: 'Built-in accessibility features ensuring your app is usable by everyone.',
      image: 'https://via.placeholder.com/350x200/0097a7/ffffff?text=A11y',
      category: 'UX'
    }
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSnackbarOpen(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" component="div">
          Menu
        </Typography>
      </Box>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Material UI Demo
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>

      {/* Hero Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Material UI Components
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Build beautiful and responsive interfaces with Material Design
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
            <Button variant="contained" color="secondary" size="large">
              Get Started
            </Button>
            <Button variant="outlined" color="inherit" size="large">
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Buttons Section */}
      <Container sx={{ my: 6 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
          Material UI Buttons
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="contained" color="success">Success</Button>
          <Button variant="contained" color="error">Error</Button>
          <Button variant="contained" color="warning">Warning</Button>
          <Button variant="contained" color="info">Info</Button>
          <Button variant="contained" size="small">Small</Button>
          <Button variant="contained" size="large">Large</Button>
          <Button variant="contained" disabled>Disabled</Button>
        </Box>
      </Container>

      {/* Cards Grid */}
      <Container sx={{ my: 6 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
          Material UI Cards
        </Typography>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Chip label={card.category} color="primary" size="small" />
                  </Box>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton aria-label="add to favorites" color="error">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share" color="primary">
                    <ShareIcon />
                  </IconButton>
                  <Button size="small" sx={{ ml: 'auto' }}>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Text Fields and Form */}
      <Container sx={{ my: 6 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
          Contact Form
        </Typography>
        <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
          <Box component="form" onSubmit={handleFormSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              margin="normal"
              required
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleFormChange}
              margin="normal"
              required
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              margin="normal"
              required
              multiline
              rows={4}
              variant="outlined"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Paper>
      </Container>

      {/* Avatar Section */}
      <Container sx={{ my: 6 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
          Team Members
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main', mx: 'auto', mb: 1 }}>JD</Avatar>
            <Typography variant="subtitle1">John Doe</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar sx={{ width: 80, height: 80, bgcolor: 'secondary.main', mx: 'auto', mb: 1 }}>JS</Avatar>
            <Typography variant="subtitle1">Jane Smith</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar sx={{ width: 80, height: 80, bgcolor: 'success.main', mx: 'auto', mb: 1 }}>AB</Avatar>
            <Typography variant="subtitle1">Alex Brown</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar sx={{ width: 80, height: 80, bgcolor: 'warning.main', mx: 'auto', mb: 1 }}>MJ</Avatar>
            <Typography variant="subtitle1">Mike Johnson</Typography>
          </Box>
        </Box>
      </Container>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <AddIcon />
      </Fab>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Form submitted successfully!
        </Alert>
      </Snackbar>

      {/* Footer */}
      <Box sx={{ bgcolor: 'text.secondary', color: 'white', py: 4, mt: 6 }}>
        <Container>
          <Typography variant="body1" align="center">
            &copy; 2026 Material UI Demo - Google Material Design
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
