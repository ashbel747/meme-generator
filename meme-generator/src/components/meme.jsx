import React from "react";
import '../App.css'
import memesData from "../memesData"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    
    function getMemeImage(event) {
        event.preventDefault();
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
}
    return (
        <main>
            <form className="form">
                <div>
                    <label htmlFor="top-text">Top Text</label>
                    <input 
                    id="top-text"
                    type="text"
                    placeholder="Shut up"
                    className="form--input"
                    />
                </div>
                <div>
                    <label htmlFor="bottom-text">Bottom Text</label>
                    <input 
                    id="bottom-text"
                    type="text"
                    placeholder="and take my money"
                    className="form--input"
                    />
                </div>
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </form>
            <img src={meme.randomImage} className="meme--image"/>
            
        </main>
    )
}