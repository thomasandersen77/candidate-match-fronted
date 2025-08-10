<<<<<<< HEAD
import {Box, createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import CandidateListPage from './pages/CandidateListPage';

const theme = createTheme({
    typography: {
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
});
=======
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Button } from '@mui/material';

>>>>>>> main

function App() {
    return (
<<<<<<< HEAD
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                minHeight: '100vh'
            }}>
                <Box sx={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <CandidateListPage/>
                </Box>
            </Box>
        </ThemeProvider>
=======
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Welcome to Your App
            </Typography>
            <Typography variant="body1" gutterBottom>
                {message}
            </Typography>
            <Button variant="contained" color="primary">
                Click me
            </Button>
        </Container>
>>>>>>> main
    );
}

export default App;