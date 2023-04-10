import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
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

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import styles from "../../style/ProfileReponsible.module.css";
// import styles from "../../style/ProfileUser.module.css"
import SideBar from "../../component/SideBar";
import Navbar from "../../component/Navbar";
import "../../style/default.css";
import { result } from "lodash";

function ShowUserRegisProject() {
  const { id } = useParams();
  const [query, setQuery] = useState("");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "http://localhost:8080/api/registerprojects/projects/" + id,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setInfo(result);
      })
      .catch((error) => console.log("error", error));
  }, [id]);

  const search = (data) => {

      return data.filter((item =>
        item.numberRunner.includes(query) ||
        item.user.age.includes(query) ||
        item.user.phone.includes(query) ||
        item.user.email.includes(query) ||
        item.dateRegister.includes(query) ||
        item.evidenceRegister.includes(query) ||
        item.status.toLowerCase().includes(query) ||
        item.user.firstName.toLowerCase().includes(query) ||
        item.user.lastName.toLowerCase().includes(query)
      ))
  }

  return (
    <div>
      <Navbar />
      <div className={styles.ProfileReponsible}>
        <SideBar />
        <div className={styles.containner}>
          <div className={styles.main}>
            {info.map((item) => (
              <div>
                <div className={styles.field}>
                  <h5>ชื่อโครงการ :</h5>
                  <h>{item.taskProject.project.nameProject}</h>
                </div>
                <div className={styles.field}>
                  <h5>ตำแหน่งที่จัดงาน:</h5>
                  <h>{item.taskProject.project.addressProject}</h>
                </div>
                <div className={styles.field}>
                  <h5>เบอร์ติดต่อ :</h5>
                  <h>{item.taskProject.project.phone}</h>
                </div>
                <div className={styles.field}>
                  <h5>วันเริ่มลงทะเบียน :</h5>
                  <h>{item.taskProject.project.dateRegisStart}</h>
                </div>
                <div className={styles.field}>
                  <h5>วันสิ้นสุดการลงทะเบียน :</h5>
                  <h>{item.taskProject.project.dateRegisEnd}</h>
                </div>
                <div className={styles.field}>
                  <h5>วันเริ่มโครงการ :</h5>
                  <h>{item.taskProject.project.dateStart}</h>
                </div>
                <div className={styles.field}>
                  <h5>วันสิ้นสุดโครงการ :</h5>
                  <h>{item.taskProject.project.dateEnd}</h>
                </div>
                <div className={styles.field}>
                  <h5>สถานะ :</h5>
                  <h>{item.taskProject.project.donates[0].statusWithdraw}</h>
                </div>
              </div>
            ))}
          </div>

          <CssBaseline />
          <Container maxWidth="lg" sx={{ p: 2 }}>
            <Box display="flex">
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  รายชื่อผู้ลงทะเบียนโครงการ
                </Typography>
              </Box>
              {/* <Box>
                <input
                  type="text"
                  placeholder="Search.."
                  className="search"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </Box> */}
            </Box>
            <div className="styles.tablem">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 1000 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">เลขที่วิ่ง</TableCell>
                    <TableCell align="center">ชื่อจริง</TableCell>
                    <TableCell align="center">นามสกุล</TableCell>
                    <TableCell align="center">อายุ</TableCell>
                    <TableCell align="center">เบอร์ติดต่อ</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">วันที่ลงทะเบียน</TableCell>
                    <TableCell align="center">หลักฐานการสมัคร</TableCell>
                    <TableCell align="center">สถานะ</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {info.map((item) => (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{item.numberRunner}</TableCell>
                      <TableCell align="center">
                        {item.user.fristName}
                      </TableCell>
                      <TableCell align="center">{item.user.lastname}</TableCell>
                      <TableCell align="center">{item.user.age}</TableCell>
                      <TableCell align="center">{item.user.phone}</TableCell>
                      <TableCell align="center">{item.user.email}</TableCell>
                      <TableCell align="center">{item.dateRegister}</TableCell>
                      <TableCell align="center">
                        {item.evidenceRegister}
                      </TableCell>
                      <TableCell align="center">{item.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default ShowUserRegisProject;
