import React, {useContext, useState} from 'react';
import {AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem} from "@mui/material";
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {GRingContext} from "../../utils/context";

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const IconGroup = styled(Box)(({theme}) => ({
        display: "none",
        gap: "20px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "flex"
        }
    })
)

const UserBox = styled(Box)(({theme}) => ({
        display: "flex",
        gap: "10px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    })
)

const NavBar = () => {
    const {appMode, places} = useContext(GRingContext)
    const [open, setOpen] = useState<boolean>(false)
    return (
        <AppBar
            position={"relative"}
        >
            <StyledToolBar>
                <Typography variant={"h6"} sx={{display: {xs: "none", sm: "block"}}}>
                    КРАСИВЫЕ ДОМА {`(${places.length})`}
                </Typography>
                <OtherHousesIcon sx={{display: {xs: "block", sm: "none"}}}/>
                <IconGroup>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon color={"action"}/>
                    </Badge>
                    <Avatar sx={{width: 30, height: 30}} onClick={e=>setOpen(true)} src="https://mocny.co.uk//wp-content/uploads/2021/07/3.jpg"/>
                </IconGroup>
                <UserBox onClick={e=>setOpen(true)}>
                    <Avatar sx={{width: 30, height: 30}} src="https://mocny.co.uk//wp-content/uploads/2021/07/3.jpg"/>
                    <Typography>Рыбка</Typography>
                </UserBox>
                <Menu
                    id="demo-positioned-menu"
                    open={open}
                    onClose={e=>setOpen(false)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >My account</MenuItem>
                    <MenuItem >Logout</MenuItem>
                </Menu>
            </StyledToolBar>
        </AppBar>
    );
};

export default NavBar;