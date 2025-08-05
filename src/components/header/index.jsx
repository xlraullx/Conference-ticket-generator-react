import logo from '../../assets/images/logo-mark.svg' 
import './index.css'

const Header = () => {
    return(
    <header className="header">
        <img src={logo} alt="logo" /> 
        <h2>Coding Conf</h2>
    </header>
    )
}

export default Header