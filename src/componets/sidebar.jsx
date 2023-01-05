import { AccountBox, Home, Inbox, ModeNight, Pages, Person, Person2, Person3TwoTone, Settings, Storefront } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React from "react";

export default function Sidebar(){
    return(
        <Box flex={1} sx={{display:{xs:"none",sm:"block"}}}>
            <Box position="fixed">

        <List>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#homepage">
                    <ListItemIcon>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText primary="Hompage"/>

                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#Marketplace">
                    <ListItemIcon>
                        <Storefront/>
                    </ListItemIcon>
                    <ListItemText primary="Marketplace"/>

                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#Pages">
                    <ListItemIcon>
                        <Pages/>
                    </ListItemIcon>
                    <ListItemText primary="Pages"/>

                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#Groups">
                    <ListItemIcon>
                        <Person3TwoTone/>
                    </ListItemIcon>
                    <ListItemText primary="Groups"/>

                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#Friends">
                    <ListItemIcon>
                        <Person/>
                    </ListItemIcon>
                    <ListItemText primary="Friends"/>

                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#homepage">
                    <ListItemIcon>
                        <Settings/>
                    </ListItemIcon>
                    <ListItemText primary="Settings"/>

                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#homepage">
                    <ListItemIcon>
                        <AccountBox/>
                    </ListItemIcon>
                    <ListItemText primary="Profile"/>

                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#homepage">
                    <ListItemIcon>
                        <ModeNight/>
                    </ListItemIcon>
                     <Switch />

                </ListItemButton>
            </ListItem>
        </List>
            </Box>
        </Box>
    )
}