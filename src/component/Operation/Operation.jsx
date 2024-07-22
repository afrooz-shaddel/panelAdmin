import React from 'react'
import style from './operation.module.css'
import Title from '../Title/Title'
import { MdOutlineFileUpload } from "react-icons/md";
export default function Operation() {
  return (
    <div>
    <Title title="Operation"/>
    <div className={style.divWrapper}>
    <form action="" className={style.form}>
        <textarea name="" id="" cols="30" rows="10" placeholder='write your text..'></textarea>
        <button>send</button>
    </form>
        <div className={style.wrapperBtn}>
            <button>Discount</button>
            <button>Special Occasion</button>
            <button>Payment Deadline</button>
            <button>Availability</button>

        </div>
        <button className={style.upload} type='file' > <span><MdOutlineFileUpload/></span>   upload jpg ,pdf</button>
    </div>
    </div>
  )
}
