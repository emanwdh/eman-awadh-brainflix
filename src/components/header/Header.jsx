import BrainFlixLogo from '../../assets/Logo/BrainFlix-logo.svg'
import './Header.scss'


function Header() {

    return( 
    
    <header className="header section">
       <img className="header__logo" src ={BrainFlixLogo} />
       <div className='header__search-bar'>
          <input className="search-bar__search" type = "text" placeholder = "Search"></input>
          <span><span className="search-bar__avatar avatar"></span></span>
       </div>
       <button className="button button--upload" type="submit">Upload</button>
    </header>
  )
}

export default Header;
