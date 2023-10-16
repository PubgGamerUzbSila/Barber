import navbarCss from "./navbar.module.css";
const Navbar = () => {
    return (
        <>
            <div className="navbvarCss.container">
                <nav>
                    {/* <img src="../../assets/img/icon_keraksi-removebg-preview.png" alt="icon keraksiz edi" /> */}
                    <div className={navbarCss.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                            <g clip-path="url(#clip0_4_5)">
                                <path d="M50.5803 7.77584C44.6236 8.29699 40.0962 13.5571 40.6169 19.5145L43.2968 50.1482L33.162 54.8735C29.7678 48.9757 22.3668 46.5552 16.0846 49.485C9.45122 52.5794 6.58174 60.4628 9.67428 67.0971C12.768 73.7299 20.6523 76.6013 27.2873 73.5076C31.8398 71.3846 34.6184 67.0039 34.9143 62.3216L47.3265 56.5333L48.5196 70.1754C44.6133 72.7733 42.209 77.3698 42.6457 82.3736C43.2841 89.6662 49.7121 95.0582 57.003 94.4212C64.2956 93.7827 69.6885 87.3552 69.0511 80.0643C68.447 73.1594 62.6501 67.9605 55.8458 67.969L54.8707 56.8294L82.7388 43.8338C88.1593 41.3065 90.4502 34.7552 87.9231 29.3359L53.8559 45.2238L50.5803 7.77584ZM27.6756 64.9207C25.7785 68.2067 21.5764 69.3326 18.2905 67.4355C15.0045 65.5383 13.8787 61.3362 15.7758 58.0503C17.6733 54.7636 21.8749 53.6385 25.1609 55.5356C28.4468 57.4327 29.5732 61.634 27.6756 64.9207ZM61.7886 84.6158C59.8914 87.9018 55.6894 89.0277 52.4034 87.1306C49.1175 85.2334 47.9916 81.0314 49.8887 77.7455C51.7863 74.4588 55.9879 73.3336 59.2738 75.2307C62.5597 77.1278 63.6861 81.3291 61.7886 84.6158Z" fill="#99BAED"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_4_5">
                                <rect width="74.2244" height="74.2244" fill="white" transform="translate(0 64.2803) rotate(-60)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <p className={navbarCss.iconP}>arber</p>
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