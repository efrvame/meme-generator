import { useState, useEffect } from "react";

function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg",
    });

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemes(data.data.memes);
        }
        getMemes();
    }, []);

    function getRandomMeme() {
        const randomIndex = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomIndex].url;

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
