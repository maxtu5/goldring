import React, {useContext, useState} from 'react';
import {
    AppBar,
    styled,
    Toolbar,
    Typography,
    Box,
    Badge,
    Avatar,
    Menu,
    MenuItem,
    Tooltip
} from "@mui/material";
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {GRingContext} from "../../utils/context";
import {signout} from "../../fetchers/userdata";

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

function getRandomColor() {
    let hex = Math.floor(Math.random() * 0xFFFFFF);
    let color = "#" + hex.toString(16).padStart(6, '0'); // Ensure 6 digits
    return color;
}

const NavBar = () => {
    const {counter, setAppMode, user, setUser, refreshPoints} = useContext(GRingContext)
    const [open, setOpen] = useState<boolean>(false)

    return (
        <AppBar
            position={"relative"}
        >
            <StyledToolBar>
                <Typography variant={"h6"} sx={{display: {xs: "none", sm: "block"}}}>
                    КРАСИВЫЕ ДОМА {`(${counter})`}
                </Typography>
                <OtherHousesIcon sx={{display: {xs: "block", sm: "none"}}}/>
                <IconGroup>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon color={"action"}/>
                    </Badge>
                    <Tooltip title={user?.name}>
                    {user === null || user.name==='anonymousUser' ?
                        <Avatar sx={{width: 30, height: 30}}
                                onClick={e => setOpen(true)}
                                src="https://icons.veryicon.com/png/o/miscellaneous/esgcc-basic-icon-library/1-login.png"
                        /> :
                        <Avatar sx={{width: 30, height: 30, bgcolor: getRandomColor}}
                                onClick={e => setOpen(true)}
                        >

                            {
                                // @ts-ignore
                                user.name.at(0).toUpperCase()
                            }
                        </Avatar>}
                    </Tooltip>
                </IconGroup>
                <UserBox onClick={e => setOpen(true)}>
                    <Avatar sx={{width: 30, height: 30}} src="https://mocny.co.uk//wp-content/uploads/2021/07/3.jpg"/>
                    <Typography>Рыбка</Typography>
                </UserBox>
                <Menu
                    id="demo-positioned-menu"
                    open={open}
                    onClose={e => setOpen(false)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    {user === null || user.name==='anonymousUser' ?
                        <MenuItem onClick={() => {
                            setOpen(false)
                            setAppMode('user')
                        }}>Вход и регистрация</MenuItem> :
                        <span>
                                                <MenuItem onClick={() => {
                                                    setOpen(false)
                                                    setAppMode('user')
                                                }}>Сменить пароль</MenuItem>
                                                <MenuItem onClick={() => {
                                                    setOpen(false)
                                                    signout()
                                                    setUser(null)
                                                    refreshPoints()
                                                }}>Выйти</MenuItem>
                        </span>}
                </Menu>
            </StyledToolBar>
        </AppBar>
    );
};

export default NavBar;