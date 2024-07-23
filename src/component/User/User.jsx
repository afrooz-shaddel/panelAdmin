import React from "react";
import style from "./user.module.css";
export default function User({ id, title, img, country, product }) {
  return (
    <div className={style.userparent}>
      <div className={style.userparentimg}>
        <img src={img} alt="userpicture" />
      </div>
      <div className={style.wrapperinfo}>
        <p className={style.userparenttitle}>{title}</p>
        <div className={style.userparentinfo}>
          <div className={style.country}>
            <h3>Country</h3>
            <p>{country}</p>
          </div>
          <div className={style.product}>
            <h3>Product</h3>
            <p>{product}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
