import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase button was clicked")
        setText(text.toUpperCase())
    }

    const handleOnChange = (event) => {
        // console.log("Value changed")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // setText('some other random bullshit');
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" placeholder="Random bullshit text" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>click and see</button>
            </div>
            <div className="container my-3">
                <h2>Your text Summary</h2>
                <p>{text.trim().split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * text.trim().split(' ').length} minutes to read</p>
            </div>
        </>
    )
}