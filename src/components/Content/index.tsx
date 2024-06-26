import { FunctionComponent } from "react";
import { Box, Grid } from "@mui/material";
import { DownloadButtons } from "../ButtonGroup/DownloadButtons";

export const Content: FunctionComponent = () => {

    return (
        <Grid>
            <Box style={{
                padding: 20,
                backgroundColor: '#b795b7',
                flexDirection: 'column',
                textAlign: 'center',
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center'
            }}>
                <Grid item marginX={12} paddingBottom={0} lg={3} md={12}>
                    <p style={{ fontWeight: '600', fontSize: 32, color: '#3d3d3d' }}>Find out your love language</p>
                    <p style={{ fontWeight: '200', fontSize: 20, }}>
                        Track your relationship progress according to you and your partners love language.
                        Understand your love life better with ScrapBook
                    </p>
                </Grid>
                <Grid xs={12} md={12} lg={8} alignItems={'center'} alignContent={'center'} container
                      justifyContent={'center'} alignSelf={'center'} position={'relative'} top={140} spacing={0}
                      marginTop={-15}>
                    <Grid xs={3} md={3} item style={{ marginTop: 40 }}>
                        <img alt={'img'} width={'100%'} src={'5.png'}/>
                    </Grid>
                    <Grid xs={3} md={3} item style={{ marginTop: 0 }}>
                        <img width={'100%'} src={'6.png'}/>
                    </Grid>
                    <Grid xs={3} md={3} item style={{ marginTop: 40 }}>
                        <img width={'100%'} src={'3.png'}/>
                    </Grid>
                </Grid>
            </Box>
            <DownloadButtons padding={180}/>
            <Grid container justifyContent={'center'} paddingBottom={10}>
                <Grid md={12} textAlign={'center'} justifyContent={'center'} paddingBottom={2}>
                    <p style={{ fontWeight: '600', fontSize: 32, color: '#3d3d3d' }}>Track your relationship health</p>
                </Grid>
                <Grid container flexDirection={'row'} textAlign={'center'} md={12} item
                      style={{ marginTop: 40 }}>
                    <Grid container xs={6} md={8} sm={6} justifyContent={'flex-end'}>
                        <img width={'100%'} style={{ maxWidth: 240, objectFit: 'contain' }} src={'5.png'}/>
                    </Grid>
                    <Grid container xs={6} md={3} sm={6} paddingX={2}>
                        <p style={{ fontWeight: '200', fontSize: 20, lineHeight: '1.7' }}>
                            Crack the Code to Lasting Love! Explore Your Partner's Love Language Compatibility and
                            Ignite a Deeper Bond. Unveil the Path to Harmonious Relationships by Understanding How You
                            Both Give and Receive Love. Start Your Adventure to Relationship Bliss Now!
                        </p>
                    </Grid>
                </Grid>
            </Grid>
            <Box style={{
                padding: 20,
                backgroundColor: '#b795b7',
                flexDirection: 'column',
                textAlign: 'center',
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                paddingBottom: 100
            }}>
                <Grid container flexDirection={'row'} justifyContent={'center'}>
                    <Grid md={12} textAlign={'center'} justifyContent={'center'} paddingBottom={6}>
                        <p style={{ fontWeight: '600', fontSize: 32, color: '#3d3d3d' }}>Keep Track of Your Events and
                            Dates!</p>
                    </Grid>
                    <Grid container xs={6} md={3} sm={6} justifyContent={'flex-start'}>
                        <img width={'100%'} style={{ maxWidth: 240, objectFit: 'contain' }} src={'6.png'}/>
                    </Grid>
                    <Grid container xs={6} md={3} sm={6} paddingX={2}>
                        <p style={{ fontWeight: '200', fontSize: 20, lineHeight: '1.7' }}>
                            Never forget a special date again! The app can remind
                            you
                            of
                            upcoming anniversaries, birthdays, upcoming date nights and other important events.
                        </p>
                    </Grid>
                </Grid>
            </Box>
            <Grid container justifyContent={'center'} paddingBottom={10}>
                <Grid md={12} textAlign={'center'} justifyContent={'center'} paddingBottom={2}>
                    <p style={{ fontWeight: '600', fontSize: 32, color: '#3d3d3d' }}>Know your love language</p>
                </Grid>
                <Grid container flexDirection={'row'} textAlign={'center'} md={12} item
                      style={{ marginTop: 40 }}>
                    <Grid container xs={6} md={8} sm={6} justifyContent={'flex-end'}>
                        <img width={'100%'} style={{ maxWidth: 240, objectFit: 'contain' }} src={'3.png'}/>
                    </Grid>
                    <Grid container xs={6} md={3} sm={6} paddingX={2}>
                        <p style={{ fontWeight: '200', fontSize: 20, lineHeight: '1.7' }}>
                            Discover the Key to Deeper Connections! Uncover Your Love Language and Transform Your
                            Relationships. Unlock the Secret to Understanding Yourself and Others on a Profound Level.
                            Start Your Journey to More Meaningful Interactions Today!
                        </p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
