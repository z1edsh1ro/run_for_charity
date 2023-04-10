import React from 'react'
import Navbar from '../component/Navbar'
import styles from '../style/Home.module.css'
import  '../style/default.css';
import EventPage from './EventPage';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div>
            <Navbar />
            <section id={styles.hero}>
                <h4>วิ่งเพื่อการกุศล</h4>
                <h1>Run For Charity</h1>
                <a >
                <Link to="/eventpage" onClick={EventPage}>Start Now</Link>
                </a>
            </section>

            <footer className={styles['section-p1']}>
                <div className={styles.content}>
                    <div className={`${styles.left} ${styles.box}`}>
                        <div className={styles.upper}>
                            <div className={styles.topic}>เกี่ยวกับเรา</div>
                            <p>SE Project: Charity</p>
                        </div>
                        <div className={styles.lower}>
                            <div className={styles.topic}>ติดต่อเรา</div>
                            <div>
                                <p>1 Village,Kampangsaen Sub-district, Kampangsaen District,Nakhon Pathom,73140</p>
                                <p>CONTACT PHONE: (+66)02-58741XX</p>
                                <p>9.00-17.00,Mon - Fri</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.middle} ${styles.box}`}>
                        <div className={styles.topic}>Info</div>
                        <div><a href="#">วิ่งเพื่อการกุศลคือ</a></div>
                        <div><a href="#">คู่มือการใช้งานเว็บไซต์</a></div>
                        <div><a href="#">นโยบาย</a></div>
                        <div><a href="#">คำถามที่พบบ่อย</a></div>
                    </div>
                    <div className={`${styles.right} ${styles.box}`}>
                        <form action="#">
                            <div className={styles.topic}>Follow Us</div>
                            <div className={styles['media-icons']}>
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

    )
}

export default Home