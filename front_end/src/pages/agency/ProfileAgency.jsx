import React from 'react'
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
// import SideBar from './Sidebar ';
import styles from "../../style/ProfileReponsible.module.css";
import SideBar from "../../component/SideBar";
import Navbar from "../../component/Navbar";

import "../../style/default.css";
function ProfileAgency() {
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(true);
    const [user, setUser] = useState({});
    const [agency, setAgency] = useState({});
    const Mytoken = localStorage.getItem("token");
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Token", Mytoken);
        var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };
        fetch("http://localhost:8080/api/auth/user", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                if (result.status === "200") {
                    // console.log(result)
                    setUser(result.user);
                    console.log(result.user.idUser);
                    setIsLoaded(false);
                } else if (result.status === "403") {
                    navigate("/");
                    
                }
            })
            .catch((error) => console.log("error", error));
            var requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow",
              };
          
              fetch("http://localhost:8080/api/auth/agenciesbyuser", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                  console.log(result);
                  setAgency(result.agency[0]);
                })
                .catch((error) => console.log("error", error));
    }, []);
    const Update = (id) => {
        window.location = "/editprofileuser/" + id;
      };
      const createProject = (idAgency) => {
        window.location = "/createproject/" + idAgency;
        // alert(idAgency)
      };
    return (
        <div>
        <Navbar />
        <div className={styles.ProfileReponsible}>
          <SideBar />
          <div className={styles.containner}>
            <div>
              <h1>ข้อมูลส่วนตัว</h1>
            </div>
            <div className={styles.main}>
              <div className={styles.field}>
                <h5>ชื่อ-นามสกุล :</h5>
                <h>
                  {user.fristName} {user.lastName}
                </h>
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
                <Button
                  class="custom-btn btn-1"
                  onClick={() => Update(user.idUser)}
                >
                  แก้ไขข้อมูล
                </Button>
              </div>
            </div>
            <div>
              <h1>ข้อมูลหน่วยงาน</h1>
              <ButtonGroup >
                <Button onClick={() => createProject(agency.idAgency)} variant="contained" color="success">สร้างโครงการ</Button>
              </ButtonGroup>
             
            </div>
            <div className={styles.main1}>
              <div className={styles.field}>
                <h5>หน่วยงานที่สังกัด :</h5>
                <h5>{agency.nameAgency}</h5>
              </div>
              <div className={styles.field}>
                <h5>ที่อยู่หน่วยงานที่สังกัด :</h5>
                <h5>{agency.addressAgency}</h5>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    );
    
}

export default ProfileAgency