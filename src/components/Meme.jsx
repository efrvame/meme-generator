import { useState } from "react";
import memesData from "../data/memesData.js";

function Meme() {
    const memesArray = memesData.data.memes;
    const [memeImage, setMemeImage] = useState(
        "https://i.imgflip.com/30b1gx.jpg"
    );

    function getRandomMeme() {
        let randomIndex = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomIndex].url);
        console.log("Clicked");
    }

    return (
        <section>
            <div className="container">
                <form className="form">
                    <input
                        type="text"
                        placeholder="Shut up"
                        className="form--input"
                    ></input>
                    <input
                        type="text"
                        placeholder="And take my money"
                        className="form--input"
                    ></input>
                    <button className="form--btn" onClick={getRandomMeme}>
                        Get a new meme image 🖼️
                    </button>
                </form>
                <img src={memeImage} className="meme-image" />
            </div>
        </section>
    );
}

export default Meme;
