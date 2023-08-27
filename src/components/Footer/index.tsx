import React, { FunctionComponent } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Copyright } from "@mui/icons-material";

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
                            ScrapBook 2023
                        </Typography>
                    </Grid>
                    <Grid alignSelf={'flex-end'} flexDirection={'column'}>
                        <Grid>
                            <a>Privacy policy</a>
                        </Grid>
                        <Grid>
                            <a>Terms and conditions</a>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
