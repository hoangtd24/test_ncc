import SideBar from "../components/SideBar/SideBar";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import images from "../assets/images";
import ProductItem from "../components/ProductItem/ProductItem";
import Footer from "../components/Footer/Footer";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const cx = classNames.bind(styles);
function Home() {
  const [hide, setHide] = useState(true);
  return (
    <div className={cx("wrapper")}>
      <SideBar hide={hide} setHide={setHide} />
      <div className={cx("container")}>
        <div className={cx("img")}>
          <span className={cx("btn")} onClick={() => setHide(false)}>
            <MenuIcon />
          </span>
          <img src={images.logo} alt="" />
        </div>
        <div className={cx("info")}>
          <p className={cx("title")}>Lorem ipsum dolor sit asmet?</p>
          <span className={cx("description")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
            facilisis, ligula in mattis sodales, augue justo tristique nulla,
            sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
            mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
            convallis. Quisque suscipit maximus vestibulum. Phasellus congue
            mollis orci, sit amet luctus augue tristique eu. Donec vulputate
            odio neque, sed semper turpis pellentesque a.
          </span>
        </div>
        <div className={cx("product")}>
          <ProductItem src={images.css}/>
          <ProductItem src={images.html}/>
          <ProductItem src={images.url}/>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
