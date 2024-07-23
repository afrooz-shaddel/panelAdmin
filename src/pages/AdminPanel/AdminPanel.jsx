import React from "react";
import style from "./adminpanel.module.css";
import Chat from "../../component/Chat/Chat";
import UserWrapper from "../../component/UserWrapper/UserWrapper";
import Wrapper from "../../component/Wrapper";
export default function AdminPanel() {
  return (
    <div className={style.wrapper}>
      <Wrapper />
      <UserWrapper />
      <Chat />
    </div>
  );
}
