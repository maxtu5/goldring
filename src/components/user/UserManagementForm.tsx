import {
    Box, Button, Checkbox, FormControl, FormControlLabel, IconButton, Radio, RadioGroup, SelectChangeEvent, Stack,
    TextField, Typography
} from "@mui/material";
import React, {JSX, useContext, useState} from "react";
import {GRingContext} from "../../utils/context";
import {LightPlace, PlaceForEdit, User} from "../../utils/types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {saveNew} from "../../fetchers/fetchers";
import {latlonStringToNumbers} from "../../utils/utils";
import {signin, signup, signout} from "../../fetchers/userdata";


export function UserManagementForm() {
    const [login, setLogin] = useState<string>("");
    const [signupMenu, setSignupMenu] = useState(false);
    const [password, setPassword] = useState<string>("");
    const {
        setAppMode,
        setUser,
        refreshPoints
    } = useContext(GRingContext)

    function handleSignin() {
        signin(login, password, (user: User) => {
            setUser(user);
            setAppMode('map')
            refreshPoints()
        })
    }

    function handleSignup() {
        signup(login, password, (user: User) => {
            signin(login, password, (user: User) => {
                setUser(user);
                setAppMode('map')
                setSignupMenu(false)
            })
        })
    }

    return signupMenu ?
        (<Stack sx={{paddingTop:10, paddingLeft: 40, paddingRight: 40}}>
            <Typography m={2}>Регистрация</Typography>
            <TextField variant="outlined" size="small" sx={{margin: 2}}
                       value={login} label='Имя' onChange={(event) => setLogin(event.target.value)}
            />
            <TextField variant="outlined" size="small" sx={{margin: 2}}
                       value={password} label='Пароль' onChange={(event) => setPassword(event.target.value)}
            />
            <Button onClick={handleSignup}>ЗАРЕГИСТРИРОВАТЬСЯ И ВОЙТИ</Button>
            <Button onClick={() => {
                setSignupMenu(false)
                setAppMode('map')
            }}>К КАРТЕ</Button>

        </Stack>) :
        (<Stack sx={{paddingTop:10, paddingLeft: 40, paddingRight: 40}}>
            <Typography m={2}>Вход</Typography>
            <TextField variant="outlined" size="small" sx={{margin: 2}}
                       value={login} label='Имя' onChange={(event) => setLogin(event.target.value)}
            />
            <TextField variant="outlined" size="small" sx={{margin: 2}}
                       value={password} label='Пароль' onChange={(event) => setPassword(event.target.value)}
            />
            <Button onClick={handleSignin}>ВОЙТИ</Button>
            <Button onClick={() => setSignupMenu(true)}>РЕГИСТРАЦИЯ</Button>
            <Button onClick={() => setAppMode('map')}>К КАРТЕ</Button>
        </Stack>)

}