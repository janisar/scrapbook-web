import React, { FunctionComponent } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Footer: FunctionComponent = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[400]
                        : theme.palette.grey[800],
            }}
        >
            <Container maxWidth="sm">
                <Grid container flexDirection='row'>
                    <Grid flex={5}>
                        <Typography variant="body1">
                            © LITTLE SCRAPBOOK 2023
                        </Typography>
                        <Typography variant="body1">
                            abn: 71 754 158 053
                        </Typography>
                    </Grid>
                    <Grid alignSelf={'flex-end'} flexDirection={'column'}>
                        <Grid>
                            <Link style={{color: '#656565', textDecoration: 'none'}} to='/about'>About</Link>
                        </Grid>
                        <Grid>
                            <Link style={{color: '#656565', textDecoration: 'none'}} to='/privacy'>Privacy Policy</Link>
                        </Grid>
                        <Grid>
                            <Link style={{color: '#656565', textDecoration: 'none'}} to='/terms'>Terms and Conditions</Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
