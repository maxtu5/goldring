import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import React, {useContext, useState} from "react";
import {GRingContext} from "../../utils/context";
import {User} from "../../utils/types";

import {signin, signup} from "../../fetchers/userdata";

export function UserManagementForm() {
    const [login, setLogin] = useState<string>("");
    const [signupMenu, setSignupMenu] = useState(false);
    const [password, setPassword] = useState<string>("");
    const {setAppMode, setUser, refreshPoints} = useContext(GRingContext)

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

    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box sx={{width: 200, height: 300, outline: '1px solid black', borderRadius: 5}}>
                {signupMenu ?
                    (<Stack sx={{alignItems: 'center'}} spacing={1}>
                        <Typography sx={{paddingTop: 2}}>Регистрация</Typography>
                        <TextField variant="outlined" size="small" sx={{width: 190}} value={login} label='Имя'
                                   onChange={(event) => setLogin(event.target.value)}/>
                        <TextField variant="outlined" size="small" sx={{width: 190}} value={password} label='Пароль'
                                   onChange={(event) => setPassword(event.target.value)}/>
                        <Button variant={'outlined'} onClick={handleSignup}>РЕГИСТРИРОВАТЬСЯ</Button>
                        <Button variant={'outlined'} onClick={() => {
                            setSignupMenu(false)
                            setAppMode('map')
                        }}>К КАРТЕ</Button>

                    </Stack>) :
                    (<Stack sx={{alignItems: 'center'}} spacing={1}>
                        <Typography sx={{paddingTop: 2}}>Вход</Typography>
                        <TextField variant="outlined" size="small" sx={{width: 190}} value={login} label='Имя'
                                   onChange={(event) => setLogin(event.target.value)}/>
                        <TextField variant="outlined" size="small" sx={{width: 190}} value={password} label='Пароль'
                                   onChange={(event) => setPassword(event.target.value)}/>
                        <Button variant={'outlined'} sx={{width: 190}} onClick={handleSignin}>ВОЙТИ</Button>
                        <Button variant={'outlined'} sx={{width: 190}} onClick={() => setSignupMenu(true)}>РЕГИСТРАЦИЯ</Button>
                        <Button variant={'outlined'} sx={{width: 190}} onClick={() => setAppMode('map')}>К КАРТЕ</Button>
                    </Stack>)
                }
            </Box>
        </Box>
    )

}