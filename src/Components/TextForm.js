import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import {useColorTheme} from './ColorTheme';

export default function TextForm(props) {

    const {currentFrColor, ActionBtnBg} = useColorTheme();

    const [text,setText]= useState('Enter text here');
    const textBoxRef = useRef(null);

    const toUpper = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.displayAlert("Text transformed!!","success");
    };
    const toLower = () => {
        const newText = text.toLowerCase();
        setText(newText);
        props.displayAlert("Text transformed!!","success");
    };
    const changeValue = (event) => {
        setText(event.target.value);
    };
    const clearText = () => {
        if(text==='Enter text here'){
            setText("");
        }
    };
    const copyText = () => {
        if (textBoxRef.current) {
            textBoxRef.current.select();
            document.execCommand('copy');
            alert('Text copied to clipboard!!');
            props.displayAlert("Text copied to clipboard!!","success");
        }
    };
    const formatText = () => {
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    };
    return (
    <>
    <div className="m-3">
        <h1 style={{color: currentFrColor}}>{props.heading}</h1>
        <textarea ref={textBoxRef} className="form-control border-success-subtle border-3" id="my-text-box" value={text} onClick={clearText} onChange={changeValue} rows={8}></textarea>
        <button onClick={toUpper} style={{backgroundColor: ActionBtnBg}} className="p-2 my-3 mx-1 text-white border-0 rounded-2" type="button">Convert to UPPERCASE</button>
        <button onClick={toLower} style={{backgroundColor: ActionBtnBg}} className="p-2 my-3 mx-1 text-white border-0 rounded-2" type="button">Convert to LOWERCASE</button>
        <button onClick={copyText} style={{backgroundColor: ActionBtnBg}} className="p-2 mx-1 text-white border-0 rounded-2" type="button">Copy to Clipboard</button>
        <button onClick={formatText} style={{backgroundColor: ActionBtnBg}} className="p-2 mx-1 text-white border-0 rounded-2" type="button">Format Text</button>
    </div>
    <div className="text-detail container m-1">
        <h2 style={{color: currentFrColor}}>Your Text Summary: </h2>
        <h5 style={{color: currentFrColor}} className=" ms-2">{text.length} characters and {text.split(" ").length} words.</h5>
    </div>
    </>
    );
}

TextForm.propTypes={
    heading: PropTypes.string.isRequired
}
TextForm.defaultProps={
    heading: "Heading"
}