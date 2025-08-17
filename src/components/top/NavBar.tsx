import React, {useContext, useState} from 'react';
import {
    AppBar,
    styled,
    Toolbar,
    Typography,
    Box,
    Avatar,
    Menu,
    MenuItem,
    Tooltip, Button, Stack
} from "@mui/material";
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import {GRingContext} from "../../utils/context";
import {signout} from "../../fetchers/userdata";

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

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

                <Tooltip title={user?.name}>
                    {user === null || user.name === 'anonymousUser' ?
                        <Button variant={"contained"} onClick={e => setOpen(true)}>ВХОД</Button> :
                        <Stack direction={"row"} spacing={2}>
                            {user.role === 'ROLE_ADMIN' && (<Button variant={'contained'} onClick={()=>setAppMode('stats')}>СТАТИСТИКА</Button>)}
                            <Avatar sx={{width: 30, height: 30, bgcolor: getRandomColor}}
                                    onClick={e => setOpen(true)}
                            >
                                {
                                    // @ts-ignore
                                    user.name.at(0).toUpperCase()
                                }
                            </Avatar>
                        </Stack>
                    }
                </Tooltip>
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
                    {user === null || user.name === 'anonymousUser' ?
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
                                                    signout(() => {
                                                        setUser(null)
                                                        refreshPoints()
                                                    })
                                                }}>Выйти</MenuItem>
                        </span>}
                </Menu>
            </StyledToolBar>
        </AppBar>
    )
        ;
};

export default NavBar;