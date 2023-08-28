import { FunctionComponent } from "react";
import { Grid } from "@mui/material";

export const Header: FunctionComponent = () => {

    return (
        <Grid paddingY={2} zIndex={10} container spacing={0} justifyContent={"center"} alignItems="center">
            <Grid item xs={1} sm={1} md={1} style={{cursor: 'pointer'}} alignContent='center'>
                <img width={'100%'} style={{maxWidth: 100, verticalAlign: 'bottom'}} src={"/rsz_1.png"}/>
            </Grid>
            <Grid item xs={9} sm={10} md={10} lg={9} style={{cursor: 'pointer'}}>
                <a style={{fontSize: 20, fontWeight: '600', cursor: 'pointer'}}>ScrapBook</a>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={2} justifySelf={"flex-end"}>
                <a style={{cursor: "pointer"}}>
                    About
                </a>
            </Grid>
        </Grid>
    )
}
