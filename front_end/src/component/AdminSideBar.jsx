import React from 'react';
import styles from "../style/SideBar.module.css";
import "../style/default.css"
import { AdminSideBarData } from './AdminSideBarData';

function AdminSideBar() {
  const Mytoken = localStorage.getItem('token');
  return (
    <div className={styles.SideBar}>
      <ul className={styles.SideBarList}>

        {AdminSideBarData.map((val, key) => {
          return (
            <li
              key={key}
              className={styles.row}
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => {

                window.location.pathname = val.link
                if (val.title == 'Logout') {
                  localStorage.removeItem('Mytoken');
                }
              }}
            >

              {/* <div id='icon' style={{marginRight:40}}>{val.icon}</div> */}
              <div id='title'style={{}}>{val.title} </div>

            </li>
          )
        })}

      </ul>

    </div>

  )
}

export default AdminSideBar 