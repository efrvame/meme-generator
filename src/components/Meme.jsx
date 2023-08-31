import { useState } from "react";
import memesData from "../data/memesData.js";

function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg",
    });

    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function getRandomMeme() {
        const memesArray = allMemeImages.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomIndex].url;

        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }));
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }));
    }

    return (
        <section className="meme-section">
            <div className="container">
                <form className="form">
                    <input
                        type="text"
                        placeholder="Top text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                        className="form--input"
                    ></input>
                    <input
                        type="text"
                        placeholder="Bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                        className="form--input"
                    ></input>
                    <button
                        type="button"
                        className="form--btn"
                        onClick={getRandomMeme}
                    >
                        Get a new meme image 🖼️
                    </button>
                </form>
                <div className="meme">
                    <img src={meme.randomImage} className="meme-image" />
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </section>
    );
}

export default Meme;
