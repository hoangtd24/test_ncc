import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";
import SideBarItem from "./SideBarItem";
import CloseIcon from "@mui/icons-material/Close";

const cx = classNames.bind(styles);
function SideBar({ hide, setHide }) {
  return (
    <div className={cx("modal", { hide: hide })}>
      <aside className={cx("sidebar")}>
        <SideBarItem title="Home" to="/"></SideBarItem>
        <SideBarItem title="Services" to="/services"></SideBarItem>
        <SideBarItem title="News" to="news"></SideBarItem>
        <SideBarItem title="Blog" to="blog"></SideBarItem>
        <SideBarItem title="Contact" to="contact"></SideBarItem>
      </aside>
      <span className={cx("close-btn")} onClick={() => setHide(true)}>
        <CloseIcon sx={{color: "#ccc"}} />
      </span>
    </div>
  );
}

export default SideBar;
