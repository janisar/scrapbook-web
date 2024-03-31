import { Box, Grid } from "@mui/material";
import { AppStoreIcon, GooglePlayStoreIcon } from "../../icons";
import { FunctionComponent } from "react";

type Props = {
    padding: number;
};

export const DownloadButtons: FunctionComponent<Props> = ({padding}) => {
    return (
        <Box style={{ backgroundColor: '#fefefe', paddingTop: padding, paddingBottom: 80 }}>
            <Grid container flexDirection={'row'} justifyContent={'center'}>
                <Grid item xs={5} sm={3} md={2} lg={1} maxWidth={180}>
                    <a target="_blank" href={'https://apps.apple.com/us/app/scrapbook/id1580366232'}>
                        <AppStoreIcon/>
                    </a>
                </Grid>
                <Grid item xs={5} sm={3} md={2} lg={1} maxWidth={180} marginLeft={'20px'}>
                    <a target={'_blank'} href={'https://play.google.com/store/apps/details?id=com.smokey.datefix'}>
                        <GooglePlayStoreIcon/>
                    </a>
                </Grid>
            </Grid>
        </Box>
    )
}
