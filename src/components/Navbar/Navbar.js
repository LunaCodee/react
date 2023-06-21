import styles from './styles.module.css';
import burger from '../../assets/Hamburger_icon.svg.png';
import logo from '../../assets/logo.jpg';
import { useState } from "react";


const DesktopMenu = () => {
    return (
      <ul className={styles.menu}>
        <li>
          <a href="/">All trips</a>
        </li>
        <li>
        <a href="/insertTrip">Insert trip</a>
        </li>
      </ul>
    );
  };

  const MobileMenu = (props) => {
    return (
      <div
        className={`${styles.mobileMenuWrapper} ${
          props.isMenuOpen ? styles.menuOpen : styles.menuClosed
        } `}
      >
        <ul className={styles.mobileMenu}>
          <li>
            <a href="/">All trips</a>
          </li>
          <li>
            <a href="/insertTrip">Insert trip</a>
          </li>
        </ul>
      </div>
    );
  };



const Navbar =()=>{
    const [isMenuOpen, setMenuOpen] = useState(false);

    return(
        <>
        <div className={styles.navbar}>
       <a href="/">
        <img className={styles.logo} src={logo.src} />
        </a>
        <DesktopMenu />

        <button onClick={()=>{
            setMenuOpen((prevState) => !prevState);
        }} className={styles.navButton}>
                <img className={styles.menuBurger} src={burger.src} alt='navbar-image'/>
             </button>
        </div>
        <MobileMenu isMenuOpen={isMenuOpen} />
        </>
    )
}
export default Navbar;