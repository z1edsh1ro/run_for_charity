import Navbar from "../component/Navbar";
import styles from "../style/EventPage.module.css";
import { useState, useEffect } from "react";
import "../style/default.css";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RoomIcon from '@mui/icons-material/Room';
import GroupIcon from '@mui/icons-material/Group';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function EventPage() {
  const [info, setInfo] = useState([]);
  const [info1, setInfo1] = useState([]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/projects", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result[0].imagePofile);s
        setInfo1(result[0].imagePofile)
        setInfo(result);
      });

      
  }, []);
  
  const getProject = (id) => {
    window.location = '/detaileventpage/' + id
  }
  console.log(info);
  return (
    <div className={styles.EventPage}>
      <Navbar />
      <section id={styles.event}>
        <div className={styles.main}>
          <ul className={styles.cards}>
            {info.map((item) => (
              <li className={styles.cards_item}>
                <div className={styles.card}>
                  <div className={styles.card_content}>
                    <img src={require(`../Files-Upload/${item.imagePofile}`)}/>
                    <h2 className={styles.card_title}>{item.nameProject}</h2>
                    <p className={styles.card_text}>
                    <RoomIcon style={{ color: 'red',marginleft:"50px" }}/> {item.addressProject}
                    </p>
                    <p className={styles.card_text}>
                    <CalendarMonthIcon style={{ color: 'green' }}/> {item.dateStart} - {item.dateEnd}
                    </p>
                    <p className={styles.card_text}>
                    <GroupIcon style={{ color: 'blue' }}/> จัดโดย  {item.agency.nameAgency}
                    </p>
                    <Button className={styles.btn} onClick={() => getProject(item.idProject)}><p className={styles.card_text2}>ดูเพิ่มเติม</p></Button>                            
                    <a href="#">
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <footer className={styles["section-p1"]}>
        <div className={styles.content}>
          <div className={`${styles.left} ${styles.box}`}>
            <div className={styles.upper}>
              <div className={styles.topic}>เกี่ยวกับเรา</div>
              <p>SE Project: Charity</p>
            </div>
            <div className={styles.lower}>
              <div className={styles.topic}>ติดต่อเรา</div>
              <div>
                <p>
                  1 Village,Kampangsaen Sub-district, Kampangsaen
                  District,Nakhon Pathom,73140
                </p>
                <p>CONTACT PHONE: (+66)02-58741XX</p>
                <p>9.00-17.00,Mon - Fri</p>
              </div>
            </div>
          </div>
          <div className={`${styles.middle} ${styles.box}`}>
            <div className={styles.topic}>Info</div>
            <div>
              <a href="#">วิ่งเพื่อการกุศลคือ</a>
            </div>
            <div>
              <a href="#">คู่มือการใช้งานเว็บไซต์</a>
            </div>
            <div>
              <a href="#">นโยบาย</a>
            </div>
            <div>
              <a href="#">คำถามที่พบบ่อย</a>
            </div>
          </div>
          <div className={`${styles.right} ${styles.box}`}>
            <form action="#">
              <div className={styles.topic}>Follow Us</div>
              <div className={styles["media-icons"]}>
              <a href="#"><FacebookIcon /></a>
                                <a href="#"><InstagramIcon /></a>
                                <a href="#"><YouTubeIcon /></a>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>©2023,SE Project - Run For Charity</p>
        </div>
      </footer>
    </div>
  );
}
export default EventPage;
