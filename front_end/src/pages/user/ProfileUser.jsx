import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
// import SideBar from './Sidebar ';
import styles from "../../style/ProfileUser.module.css"
import SideBar from '../../component/SideBar'
import Navbar from '../../component/Navbar'

import '../../style/default.css';
function ProfileUser() {
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(true);
    const [user, setUser] = useState([]);

    useEffect(() => {
        const Mytoken = localStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Token", Mytoken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/auth/user", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.status === '200') {
                    // console.log(result)
                    setUser(result.user)
                    setIsLoaded(false);

                }
                else if (result.status === '403') {
                    navigate('/');
                }
            })

            .catch(error => console.log('error', error));
    }, [])
    const Logout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };
    const Update = (id) => {
        window.location = '/editprofileuser/' + id
    }

    if (isLoaded)
        return (<div>Loading</div>)
    else {
        return (
            <div >
                <Navbar />
                <div className={styles.ProfileUser}>
                    <SideBar />
                    <div className={styles.containner}>
                        <div>
                            <h1>ข้อมูลส่วนตัว</h1>
                           
                        </div>
                        <div className={styles.main}>
                            <div className={styles.field}>
                                <h5>ชื่อ-นามสกุล :</h5>
                                <h>{user.fristName}  {user.lastName}</h>
                            </div>
                            <div className={styles.field}>
                                <h5>อายุ :</h5>
                                <h>{user.age}</h>
                            </div>
                            <div className={styles.field}>
                                <h5>อีเมล :</h5>
                                <h>{user.email}</h>
                            </div>
                            <div className={styles.field}>
                                <h5>ที่อยู่ :</h5>
                                <h>{user.address}</h>
                            </div>
                            <div className={styles.field}>
                                <h5>เบอร์โทร :</h5>
                                <h>{user.phone}</h>
                            </div>
                            <div className={styles.field}>
                                <h5>Permission :</h5>
                                <h>{user.role}</h>
                            </div>
                            <div class="frame">
                                <Button class="custom-btn btn-1" onClick={() => Update(user.idUser)}>แก้ไขข้อมูล</Button>
                                </div>
                           
                        </div>
                    </div>
                    {/* <div><button onClick={Logout}>logout</button></div> */}
                </div>
                <Outlet />
            </div>
        )

    }
}

export default ProfileUser