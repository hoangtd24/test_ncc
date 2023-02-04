import classNames from "classnames/bind";
import styles from "./Footer.module.scss"
const cx = classNames.bind(styles)
function Footer() {
    return ( 
        <footer className={cx("footer")}>
            <p className={cx("copyright")}>Copyright © 2021</p>
        </footer>
     );
}

export default Footer;