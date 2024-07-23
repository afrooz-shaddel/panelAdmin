import React from "react";
import style from "./title.module.css";
export default function Title({ title, width }) {
  return <div className={style.title} style={{width:width}}> {title}</div>;
}
