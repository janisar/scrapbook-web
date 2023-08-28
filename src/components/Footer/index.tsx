import React, { FunctionComponent } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

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
                            <a target={'_self'} style={{ color: '#464646', textDecoration: 'none' }} href={'/policy'}>Privacy
                                policy</a>
                        </Grid>
                        <Grid>
                            <a target={'_self'} style={{ color: '#464646', textDecoration: 'none' }} href={'/terms'}>Terms
                                and conditions</a>
                        </Grid>
                        <Grid>
                            <a target={'_self'} style={{ color: '#464646', textDecoration: 'none' }} href={'/terms'}>Jobs</a>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
