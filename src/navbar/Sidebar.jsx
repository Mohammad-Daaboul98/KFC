import { stack as Menu } from 'react-burger-menu'
import './Sidebar.css'

const Sidebar = () => {
    return (
    <Menu>
        <a id="home" className="menu-item" href="#">Home</a>
        <a id="about" className="menu-item" href="#">About</a>
        <a id="contact" className="menu-item" href="#">Contact</a>
    </Menu>
    );
}

export default Sidebar;