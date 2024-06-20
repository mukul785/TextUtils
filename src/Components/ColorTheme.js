import React, { createContext, useState, useContext } from 'react';

const ColorThemeContext = createContext();
export const useColorTheme = () => useContext(ColorThemeContext);

export const ColorThemeProvider = ({ children }) => {

    const [NavBg,changeNavBg]=useState('rgba(13, 110, 253, 0.75)');
    const [BtnBg,changeBtnBg]=useState('rgb(33, 37, 41)');
    const [BtnFr,changeBtnFr]=useState('white');
    const [currentFrColor,changeFrColor]=useState('black');
    const [BtnText,changeBtnText]=useState('Dark Mode');
    const [BodyBg,changeBodyBg]=useState('rgba(13, 109, 253, 0.5)');
    const [ActionBtnBg,changeActionBtnBg]=useState('rgb(13, 110, 253)');


    const toggleTheme = () => {
        //for nav background
        changeNavBg(NavBg === 'rgba(13, 110, 253, 0.75)' ? 'black' : 'rgba(13, 110, 253, 0.75)');
        //for btn background
        changeBtnBg(BtnBg === 'rgb(33, 37, 41)' ? 'white' : 'rgb(33, 37, 41)');
        //for nav foreground
        changeFrColor(currentFrColor === 'black' ? 'white' : 'black');
        //for btn foreground
        changeBtnFr(BtnFr === 'white' ? 'black' : 'white');
        //for btn text
        changeBtnText(BtnText === 'Dark Mode' ? 'Light Mode' : 'Dark Mode');   
        //for body bg
        changeBodyBg(BodyBg === 'rgba(13, 109, 253, 0.5)' ? 'rgb(66,66,66)' : 'rgba(13, 109, 253, 0.5)');
        //for action btn's bg
        changeActionBtnBg(ActionBtnBg ==='rgb(13, 110, 253)' ? 'black' : 'rgb(13, 110, 253)');
    };

    return (
        <ColorThemeContext.Provider value={{ NavBg,BtnBg, BtnFr, currentFrColor, BtnText, BodyBg, ActionBtnBg, toggleTheme }}>
        {children}
        </ColorThemeContext.Provider>
    );
};
