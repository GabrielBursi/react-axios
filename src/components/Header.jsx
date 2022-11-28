import { Link } from "react-router-dom";

import './styles/header.css'

function Header() {
    return (
        <header>
            <h1>Comunidade <span>Reativa</span></h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/new-post">New post</Link>
                <Link to="/manage">Manage</Link>
            </nav>
        </header>
    );
}

export default Header;