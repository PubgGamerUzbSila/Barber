import footerCss from './footer.module.css';
import icon from '../../assets/img/icon_keraksi-removebg-preview.png'
const Footer = () =>{
    return(
        <>  
            <div className={footerCss.footerContainer}>
                <div className={footerCss.icon}>
                    <img src={icon} alt="" />
                </div>
                <p>It is a long established fact that a reader will be distracted by the readable </p>
                <div className={footerCss.icons}>
                  <div className={footerCss.facebook}><i class="fa-brands fa-facebook"></i></div>
                  <div className={footerCss.facebook}><i class="fa-brands fa-twitter"></i></div>
                  <div className={footerCss.facebook}><i class="fa-brands fa-google-plus-g"></i></div>

                </div>
            </div>
        </>
    )
}
export default Footer