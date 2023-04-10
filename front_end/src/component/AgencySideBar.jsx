import React from 'react'
import styles from '../style/SideBar.module.css'
import { AgencySideBarData } from './AgencySideBarData';

function AgencySideBar() {
    const Mytoken = localStorage.getItem('token');
    return (
      <div className={styles.SideBar}>
        <ul className={styles.SideBarList}>
          {AgencySideBarData.map((val, key) => {
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
  
                <div id='icon' style={{margin:20}}>{val.icon}</div>
                <div id='title'>{val.title} </div>
  
              </li>
            )
          })}
  
        </ul>
  
      </div>
  
    )
    
}

export default AgencySideBar