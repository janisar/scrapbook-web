import { Box, Divider, Grid } from "@mui/material";
import { DownloadButtons } from "../components/ButtonGroup/DownloadButtons";

export const AboutPage = () => {
    return (
        <Grid container justifyContent={'center'} flexDirection={'column'} paddingY={5}>
            <Box style={{
                padding: 20,
                backgroundColor: '#d7b8d7',
                flexDirection: 'column',
                textAlign: 'center',
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center'
            }}>
                <p style={{ fontWeight: '600', fontSize: 22 }}>About us</p>
                <Grid item md={6} paddingX={5} paddingBottom={5}>
                    <Box>
                        <p style={{ color: '#4b4b4b' }}>ScrapBook passion is to provide a platform to help you navigate
                            in
                            your dating life.</p>
                    </Box>
                    <Box marginTop={1}>
                        <p style={{ color: '#4b4b4b' }}>Is it a long lasting relationship or just about to go to the
                            first
                            date, there might be a lot to take in that often times might feel like roadblocks. Our goal
                            is to help you make more rational and calculated decisions in your relationship.</p>
                    </Box>
                </Grid>
            </Box>
            <Box style={{
                paddingTop: 20,
                flexDirection: 'column',
                textAlign: 'center',
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center'
            }}>
                <Grid item md={6} paddingBottom={0} marginBottom={0} paddingX={5}>
                    <Box marginY={5}>
                        <b>Features</b>
                        <ul>
                             <li style={{marginTop: 15}}>
                                Track your relationships: Keep track of all of your relationships, including your
                                current
                                partner, past partners, and close friends.
                            </li>
                             <li style={{marginTop: 15}}>
                                Track dates and special occasions: Never forget a special date again! The app can remind
                                you
                                of
                                upcoming anniversaries, birthdays, and other important events.

                            </li>
                             <li style={{marginTop: 15}}>Take love language and attachment style quizzes: Learn more about your own love language
                                and
                                attachment style, and how they impact your relationships.
                            </li>
                             <li style={{marginTop: 15}}>
                                Track your relationship satisfaction: See how satisfied you are with your relationships,
                                and
                                identify areas where you can improve.

                            </li>
                             <li style={{marginTop: 15}}>
                                Write in a journal: Use the journal to write down your thoughts and feelings about your
                                relationships. This can be a helpful way to process your emotions and improve your
                                communication.
                            </li>
                        </ul>
                    </Box>
                    <Divider/>
                    <Box marginY={5}>
                        <b>Benefits</b>
                        <ul>
                            <li style={{marginTop: 15}}>
                                The ScrapBook can help you improve your relationships by providing you with insights
                                into
                                your own needs and the needs of your partner.
                            </li>
                             <li style={{marginTop: 15}}>
                                The app can also help you track your progress over time, so you can see how your
                                relationships are changing and growing.
                            </li>
                             <li style={{marginTop: 15}}>
                                The ScrapBook is a safe and private way to track your relationships. Your data is
                                encrypted
                                and stored on secure servers.
                            </li>
                        </ul>
                    </Box>
                    <Divider/>
                    <Box marginTop={5}>
                        <b>How to get started</b>
                        <div style={{marginTop: 20}}>
                            To get started with the ScrapBook, simply download the app and create an account. You can
                            then start adding your relationships, dates, and special occasions. The app is easy to use
                            and navigate, so you'll be up and running in no time.
                        </div>
                    </Box>
                </Grid>
            </Box>
            <DownloadButtons padding={40}/>
        </Grid>
    )
}
