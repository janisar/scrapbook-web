import { FunctionComponent } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const Header: FunctionComponent = () => {

    const goToHomePage = () => {
        window.location.href = '/'
    }

    return (
        <Grid lg={8} paddingY={2} zIndex={10} container spacing={0} alignSelf={'center'} justifyContent={"center"} alignItems="center" paddingRight={2} paddingLeft={1}>
            <Grid item xs={1} sm={1} md={1} style={{cursor: 'pointer'}} alignContent='center' onClick={goToHomePage}>
                <img width={'100%'} style={{maxWidth: 100, verticalAlign: 'bottom'}} src={"/rsz_1.png"}/>
            </Grid>
            <Grid item xs={9} sm={10} md={10} lg={9} style={{cursor: 'pointer'}}>
                <a style={{fontSize: 20, fontWeight: '600', cursor: 'pointer'}} onClick={goToHomePage}>LITTLE SCRAPBOOK</a>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={2} justifySelf={"flex-end"}>
                <Link style={{color: '#656565', textDecoration: 'none'}} to='/about'>About</Link>
            </Grid>
        </Grid>
    )
}
