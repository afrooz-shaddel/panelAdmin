import React from 'react'
import style from './title.module.css'
export default function TitleEnd({title }) {

  return (
    <div className={style.title} > {title}</div>
  )
}
