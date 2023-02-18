import logo from '../asset/footerlogo.png'
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <img src={logo} alt="logo" className="footer__img" />
            </div>
            <div className="footer__heading">
                <p className="footer__paragraph">Items availability, prices, participation, delivery areas and charges, purchase
                    <br />requirements for delivery may vary.
                </p>
            </div>
            <div className="footer__box">
                <ul className="footer__list">
                    <li className="footer__item"><a href="#" className="footer__link">Menu</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Store Locations</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Privacy Policy</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Terms & Conditions</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Contact</a></li>
                </ul>
            </div>
            <div className="footer__social">
                <a href="#" className="footer__icon fa fa-facebook"></a>
                <a href="#" className="footer__icon fa fa-twitter"></a>
                <a href="#" className="footer__icon fa fa-instagram"></a>
            </div>

            <div className="footer__company">
                <p className="footer__inc">©KFC, Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;