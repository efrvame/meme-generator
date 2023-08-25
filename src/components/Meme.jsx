function Meme() {
    function handleClick() {
        console.log("I was clicked!");
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
                    <button className="form--btn" onClick={handleClick}>
                        Get a new meme image 🖼️
                    </button>
                </form>
                <div>
                    <h1>Meme here</h1>
                </div>
            </div>
        </section>
    );
}

export default Meme;
