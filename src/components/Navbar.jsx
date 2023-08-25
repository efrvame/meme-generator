import logo_img from "../assets/troll-face.png";

function Navbar() {
    return (
        <header>
            <div className="container">
                <nav>
                    <img src={logo_img} className="logo-img"/>
                    <h1 className="logo">Meme Generator</h1>
                    <h3 className="extra-title">React Course - Project 3</h3>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
