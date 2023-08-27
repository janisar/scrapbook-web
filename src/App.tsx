import React from 'react';
import './App.css';
import { Box, Container, createTheme, CssBaseline, Grid, ThemeProvider, Typography } from "@mui/material";
import { Copyright } from "@mui/icons-material";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Content } from "./components/Content";

const defaultTheme = createTheme();

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <CssBaseline />
                <Header />
                <Content />
                <Footer />
            </Box>
        </ThemeProvider>
    );
}

export default App;
