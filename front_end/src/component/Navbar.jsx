import React from 'react'
import { BrowserRouter, Link, Route, useNavigate } from 'react-router-dom';
import styles from '../style/NavBar.module.css'
import logo from '../img/logo.png';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

function Navbar() {
  const Mytoken = localStorage.getItem('token');
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem('token');
  };
  const changePage = () => {
    const role = localStorage.getItem('role');
    if(role === 'ผู้รับผิดชอบโครงการ'){
      navigate('/profilereponsible')
  }
  else if(role === 'user'){
      navigate('/profileuser')
  }
  else if(role === 'admin'){
      navigate('/profileadmin')
  }
  else{
      navigate('/profileagency')
  }
  }
  return (
    <section id={styles.header}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
      <div>
        <ul id={styles.navbar}>
          <li><Link to="/home">หน้าหลัก</Link></li>
          <li><Link to="/eventpage">โครงการวิ่ง</Link></li>
          <li><button style={{backgroundColor :'blue'}} onClick={changePage}><PersonIcon /></button></li>
          <li><button style={{backgroundColor :'red'}}><Link to="/" onClick={Logout}> <LogoutIcon /></Link></button></li>
          {/* <li ><button className={styles.navButton} onClick={Logout}><LogoutIcon/></button></li> */}
        </ul>
      </div>
    </section>
  )
}

export default Navbar