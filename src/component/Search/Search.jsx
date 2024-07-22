import React from 'react'
import style from './search.module.css';
import data from '../../const/input-data'
import Title from '../Title/Title';
function Search() {
  return (
    <div >
    <Title title="Search"/>
  <form action="" className={style.form}  >
     {data.map(item=><input key={item.id} type={item.placeholder}  placeholder={item.placeholder}/>)}
    <div >
    <button className={style.btnSearch} type="submit">search</button>
    <button className={style.btnApply} >Apply Special Tags</button>
    </div>
     
  </form>
  </div>

  )
}

export default Search