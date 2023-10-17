import navbarCss from "./navbar.module.css";
import icon from '../../assets/img/icon_keraksi-removebg-preview.png'
const Navbar = () => {
    return (
        <>
            <div className="navbvarCss.container">
                <nav>
                    {/* <img src="../../assets/img/icon_keraksi-removebg-preview.png" alt="icon keraksiz edi" /> */}
                    <div className={navbarCss.icon}>
                    <img src={icon} alt="" />
                        
                    </div>
                    <ul>
                        <li><a href="#0">Home</a></li>
                        <li><a href="#1">History</a></li>
                        <li><a href="#2">Service</a></li>
                        <li><a className={navbarCss.galleryA} href="#3">Gallery</a></li>
                    </ul>
                    <i class="fa-solid fa-user" ></i>
                    <i class="fa-regular fa-bell"></i>
                    <button>Appointment</button>
                </nav>

            </div>
        </>
    )
}
export default Navbar;