import BrainFlixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import "./Header.scss";
import AvatarImage from "../../assets/Images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header section">
      <Link className="logo__link" to="/">
        <img className="header__logo" src={BrainFlixLogo} />
      </Link>
      <div className="header__search-bar">
        <input
          className="search-bar__search"
          type="text"
          placeholder="Search"
        ></input>
        <span>
          <img className="search-bar__avatar avatar" src={AvatarImage} />
        </span>
      </div>
      <Link className="header__button--link" to="/upload">
        <button className="header__button button--post button" type="submit">
          Upload
        </button>
      </Link>
    </header>
  );
}

export default Header;
