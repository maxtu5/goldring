import React from 'react';
import {AppBar, Box, styled, Toolbar} from "@mui/material";

const Footer = () => {
    return (
        <AppBar position="relative" color="primary" sx={{top: 'auto', bottom: 0}} >
            <Toolbar>
                Контактная информация
            </Toolbar>
        </AppBar>
    );
};

export default Footer;