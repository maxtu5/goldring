import React from 'react';
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ChurchIcon from '@mui/icons-material/Church';

const LinksPanel = () => {
    return (
        <Box flex={1}>
            <Typography variant={"h5"} flex={1}>
                Внешние ссылки<br/>
            </Typography>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <MenuBookIcon />
                        </ListItemIcon>
                        <ListItemText primary="Википедия" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ChurchIcon />
                        </ListItemIcon>
                        <ListItemText primary="Храмы России" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
};

export default LinksPanel;