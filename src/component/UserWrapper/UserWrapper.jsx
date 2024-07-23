import React from "react";
import user from "../../const/user-data";
import User from "../User/User";
import style from "./userwrapper.module.css";
import Title from "../Title/Title";

export default function UserWrapper() {
  return (
    <div>
      <Title title="Users" width="20.5rem" />
      <div className={style.userwrapper}>
        {user.map((item) => (
          <User key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
