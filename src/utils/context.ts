import React from "react";

export interface ContextData {
    appMode: string,
    setAppMode: (s: string)=>void;
}

export const GRingContext = React.createContext<ContextData>(
    {
        appMode: 'map',
        setAppMode: s => {}
    })