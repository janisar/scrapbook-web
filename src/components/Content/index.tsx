import { FunctionComponent } from "react";
import { Box, Grid } from "@mui/material";
import { AppStoreIcon, GooglePlayStoreIcon } from "../../icons";

export const Content: FunctionComponent = () => {

    return (
        <Grid>
            <Box style={{
                padding: 20,
                backgroundColor: '#b795b7',
                flexDirection: 'column',
                textAlign: 'center'
            }}
                 justifyContent={'center'}
                 alignItems={'center'}>
                <Grid item marginX={12} paddingBottom={0}>
                    <p style={{ fontWeight: '600', fontSize: 32 }}>Find out your love language</p>
                    <p style={{ fontWeight: '200' }}>
                        Track your relationship progress according to you and your partners love language.
                        Understand your love life better with ScrapBook
                    </p>
                </Grid>
                <Grid container justifyContent={'center'} position={'relative'} top={140} spacing={0} marginTop={-15}>
                    <Grid md={3} item style={{ marginTop: 40 }}>
                        <img width={240} src={'1.png'}/>
                    </Grid>
                    <Grid md={3} item style={{ marginTop: 0 }}>
                        <img width={240} src={'2.png'}/>
                    </Grid>
                    <Grid md={3} item style={{ marginTop: 40 }}>
                        <img width={240} src={'3.png'}/>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{ backgroundColor: '#fefefe', padding: 20, paddingTop: 180, paddingBottom: 80 }}>
                <Grid container flexDirection={'row'} justifyContent={'center'}>
                    <Grid item xs={4} md={2} maxWidth={200}>
                        <a target="_blank" href={'https://apps.apple.com/us/app/scrapbook/id1580366232'}>
                            <AppStoreIcon/>
                        </a>
                    </Grid>
                    <Grid item xs={4} md={2} maxWidth={200} marginLeft={10}>
                        <a target={'_blank'} href={'https://play.google.com/store/apps/details?id=com.smokey.datefix'}>
                            <GooglePlayStoreIcon/>
                        </a>
                    </Grid>
                </Grid>
            </Box>
            <Grid container justifyContent={'center'} paddingBottom={10}>
                <Grid md={12} textAlign={'center'} justifyContent={'center'}>
                    <p style={{ fontWeight: '600', fontSize: 32 }}>About us</p>
                </Grid>
                <Grid justifyContent={'flex-end'} container flexDirection={'row'} textAlign={'center'} md={12} item
                      style={{ marginTop: 40 }}>
                    <Grid item md={3}>
                        <img width={240} src={'1.png'}/>
                    </Grid>
                    <Grid item md={4} marginX={10}>
                        <p>
                            Find out your love language and take quiz for your partner to see
                            how the love languages are being satisfied in your current relationship
                        </p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
