import React from 'react';
import './App.css';
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
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
