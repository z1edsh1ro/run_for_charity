import React, { useEffect, useState } from 'react';
import styles from "../style/SideBar.module.css";
import "../style/default.css"
import { SideBarDataUser } from './SideBarDataUser';
import { SideBarDataReponsible } from './SideBarDataReponsible'
import { AgencySideBarData } from './AgencySideBarData'


function SideBar() {
  const role = localStorage.getItem('role');
  const [side, setSide] = useState(SideBarDataReponsible);
  useEffect(() => {
    if (role === 'user') {
      setSide(SideBarDataUser)
      console.log(side);
    }
    else if (role === 'ผู้รับผิดชอบโครงการ') {
      setSide(SideBarDataReponsible)
      console.log(side);
    }
    else if (role === 'ผู้รับผิดชอบหน่วยงาน') {
      setSide(AgencySideBarData)
      console.log(side);
    }


  })


  return (
    <div className={styles.SideBar}>
      <ul className={styles.SideBarList}>
        {side.map((val, key) => {
          return (
            <li
              key={key}
              className={styles.row}
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => {

                window.location.pathname = val.link
                if (val.title == 'Logout') {
                  localStorage.removeItem('token');
                }
              }}
            >

              <div id='icon'>{val.icon}</div>
              <div id='title'>{val.title} </div>

            </li>
          )
        })}

      </ul>

    </div>

  )
}

export default SideBar 