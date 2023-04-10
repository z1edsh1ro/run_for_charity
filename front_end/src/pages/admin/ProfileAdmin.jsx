import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import ButtonGroup from "@mui/material/ButtonGroup";
import "../../style/default.css";
import AdminSideBar from "../../component/AdminSideBar";
import styles from "../../style/AdminPage.module.css";
import logo from "../../img/logo.png";
function ProfileAdmin() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const Mytoken = localStorage.getItem("token");
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
          setIsLoaded(false);
        } else if (result.status === "403") {
          navigate("/");
          alert("sdds");
        }
      })

      .catch((error) => console.log("error", error));
  }, []);
  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const Update = (id) => {
    window.location = "/editprofileuser/" + id;
  };

  if (isLoaded) return <div>Loading</div>;
  else {
    return (
      <div>
        <section id={styles.header}>
          <div className={styles.logo}>
            <img src={logo} />
          </div>
          <div>
            <ul id={styles.navbar}></ul>
          </div>
        </section>
        <div className={styles.admin}>
          <AdminSideBar />

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
                <h>0{user.phone}</h>
              </div>
              <div className={styles.field}>
                <h5>Permission :</h5>
                <h>{user.role}</h>
              </div>
              <div class="frame">
                {/* <Button
                  class="custom-btn btn-1"
                  onClick={() => Update(user.idUser)}
                >
                  แก้ไขข้อมูล
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileAdmin;
