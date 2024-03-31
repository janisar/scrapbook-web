import React from 'react';
import './App.css';
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ErrorPage } from "./pages/ErrorPage";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";

const defaultTheme = createTheme();

function App() {
    return (
        <BrowserRouter>
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

                    <Routes>
                        <Route path={'/'} element={<HomePage />} />
                        <Route path={'/about'} element={<AboutPage />} />
                        <Route path={'/privacy'} element={<Privacy />} />
                        <Route path={'/terms'} element={<Terms />} />
                        <Route path={'/terms'} element={<Terms />} />
                        <Route path={'*'} element={<ErrorPage />} />
                    </Routes>
                <Footer />
            </Box>
        </ThemeProvider>
        </BrowserRouter>

    );
}

export default App;
