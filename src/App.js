import {Box} from "@mui/material";
import NavBar from "./components/top/NavBar";
import Footer from "./components/top/Footer";
import MainArea from "./components/top/MainArea";
import {GRingContext} from "./utils/context";
import {useState} from "react";


function App() {
    const [displayMode, setDisplayMode] = useState('map')

    return (
        <Box>
            <NavBar/>
            <GRingContext.Provider value={{appMode: displayMode, setAppMode: setDisplayMode}}>
                <MainArea/>
            </GRingContext.Provider>
            <Footer/>
        </Box>
    );
}

export default App;
