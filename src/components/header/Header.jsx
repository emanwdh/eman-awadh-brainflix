function Header() {

    return( 
    
    <header className="header section">
       <img className="header__logo"/>
       <input className="header__search" type = "text"></input>
       <span className="header__avatar"></span>
       <button className="button button--upload" type="submit">Upload</button>
    </header>
  )
}

export default Header;
