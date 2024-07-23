import React from "react";
import style from "./chat.module.css";
import { BiCheckDouble } from "react-icons/bi";
import { BiCheck } from "react-icons/bi";
import { BiLinkAlt } from "react-icons/bi";
import { IoSendSharp } from "react-icons/io5";
import textData from "../../const/chat-data";

import TitleEnd from "../TitleEnd/TitleEnd";
import Title from "../Title/Title";
export default function Chat() {
  return (
    <div>
      <Title title="Chat with the User" width="42.7rem" />
      <div className={style.chatWrapper}>
        <div className={style.chat}>
          <div className={style.chatWrapperpicture}>
            <img src="/images-removebg-preview (2).png" alt="" />
          </div>
          <div className={style.chatInfo}>
            <div className={style.chatInfoTextLeft}>
              <h2>Morteza Akhavan</h2>
              <p>
                <span> Username</span>:morteza880
              </p>
              <p>
                <span>Since</span> :2024/02/30
              </p>
              <p>
                <span>Condition</span> :shopper
              </p>
            </div>
            <div className={style.wrappertable}>
              <table>
                <thead>
                  <tr>
                    <th>Country</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alfreds </td>
                    <td>morteza.ak@gmail.com</td>
                    <td>www.morteza.ir</td>
                    <td>+9595425555</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Production</th>
                    <th>Activity</th>
                    <th>Company</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>890 </td>
                    <td>Anti-cold spray</td>
                    <td>sanitay</td>
                    <td>Mehran ava gojn</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={style.chattext}>
          <h4>Juuly 6</h4>

          {textData.map((chat) => (
            <div
              key={chat.id}
              className={`${style.chatForward} ${
                chat.id % 2 === 0 ? style.left : style.right
              }`}
            >
              <p>{chat.text}</p>
              <div className={style.chatTime}>
                <span>{chat.BiCheckDouble ? <BiCheckDouble /> : ""}</span>
                <span>{chat.check ? <BiCheck /> : ""}</span>
                <span className={style.time}>{chat.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={style.chatbtn}>
          <span>
            <BiLinkAlt />
          </span>
          <input type="text" placeholder="write your massage..." />
          <button>
            <IoSendSharp />
          </button>
        </div>
      </div>
    </div>
  );
}
