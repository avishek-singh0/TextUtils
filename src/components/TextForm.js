import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const ConvertToUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    };

    const ConvertToLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    };

    const ClearText = () => {
        setText('');
        props.showAlert("Cleared text", "success");
    };

    const CopyToClipboard = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success");
    };

    const RemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
        props.showAlert("Extra spaces removed", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2 className="mb-2">{props.heading}</h2>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn mx-1 my-1" style={{ backgroundColor: '#1aec8a' }} onClick={ConvertToUppercase}>
                    Convert to Uppercase
                </button>
                <button disabled={text.length === 0} className="btn mx-1 my-1" style={{ backgroundColor: '#1aec8a' }} onClick={ConvertToLowercase}>
                    Convert to Lowercase
                </button>
                <button disabled={text.length === 0} className="btn mx-1 my-1" style={{ backgroundColor: '#1aec8a' }} onClick={ClearText}>
                    Clear Text
                </button>
                <button disabled={text.length === 0} className="btn mx-1 my-1" style={{ backgroundColor: '#1aec8a' }} onClick={CopyToClipboard}>
                    Copy Text
                </button>
                <button disabled={text.length === 0} className="btn mx-1 my-1" style={{ backgroundColor: '#1aec8a' }} onClick={RemoveExtraSpaces}>
                    Remove Extra Spaces
                </button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p><b>{text.split(/\s+/).filter((element) => element.length !== 0).length}</b> words, <b>{text.length}</b> characters</p>
                <p><b>{0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length}</b> Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    );
}
