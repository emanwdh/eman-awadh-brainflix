function Header() {

    return( 
    
    <header className="header">
       <img className="header__logo"></img>
       <input className="header__search" type = "text"></input>
       <img className="header__avatar"></img>
       <button className="button button--upload" type="submit"></button>
    </header>
  )
}

export default Header;
