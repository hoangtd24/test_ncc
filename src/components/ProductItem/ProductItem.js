import classNames from "classnames/bind";
import styles from "./ProductItem.module.scss";

const cx = classNames.bind(styles);
function ProductItem({src}) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>Lorem ipsum dolor sit amet</p>
      <img src={src} alt="" className={cx("img")}/>
      <span className={cx("description")}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
        sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
        accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa
        in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at
        ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
        ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta
        massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
      </span>
    </div>
  );
}

export default ProductItem;
