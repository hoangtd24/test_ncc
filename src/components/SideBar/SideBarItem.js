import classNames from "classnames/bind";
import styles from "./SideBar.module.scss"

const cx = classNames.bind(styles)
function SideBarItem({to, title}) {
    return ( 
        <div className={cx("wrapper")}>
            <a href={to}>{title}</a>
        </div>
    );
}

export default SideBarItem;