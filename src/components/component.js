import React from "react";
import memesData from "./data";

export default function Hero () {


    const [memeImage , setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes 
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)    
    }



    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top Text" className="form--input"></input>
                <input type="text" placeholder="Bottom Text" className="form--input"></input>
                <button type="submit" className="form--button" onClick={getMemeImage}>Get a new meme image  🖼</button>
                <img src={memeImage}/>
            </div>
        </main>
    )
}