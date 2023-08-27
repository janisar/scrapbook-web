import { FunctionComponent } from "react";
import { Grid } from "@mui/material";

export const Header: FunctionComponent = () => {

    return (
        <Grid paddingY={2} zIndex={10} container spacing={0} justifyContent={"flex-start"} alignItems="center">
            <Grid item xs={2} sm={1} md={1} style={{cursor: 'pointer'}}>
                <img width={60} src={"/rsz_1.png"}/>
            </Grid>
            <Grid item xs={9} sm={10} md={10} style={{cursor: 'pointer'}}>
                <a style={{fontSize: 20, fontWeight: '600', cursor: 'pointer'}}>ScrapBook</a>
            </Grid>
            <Grid item xs={1} sm={1} md={1} justifySelf={"flex-end"}>
                <a style={{cursor: "pointer"}}>
                    About
                </a>
            </Grid>
        </Grid>
    )
}
