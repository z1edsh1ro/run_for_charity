import React, { useState,useEffect } from "react";
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
import ButtonGroup from "@mui/material/ButtonGroup";
import "../style/default.css";
import AdminSideBar from "../component/AdminSideBar";

import {Grid, TextField} from "@mui/material";
import styles from "../style/User.module.css";
import { BsBookmarkFill,BsBookmark } from 'react-icons/bs';
import Modal from 'react-modal';
import {Link} from "react-router-dom";
import logo from '../img/logo.png';
function AssignRights() {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/auth/followprojects", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setInfo(result);
      });
  }, []);

  return (
    <div>
      {/* <Navbar /> */}    
      <section id={styles.header}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
      <div>
        <ul id={styles.navbar}>
        </ul>
      </div>
    </section>  
      <div className={styles.admin}>
        <AdminSideBar />
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg" sx={{ p: 2 }}>
            <Box display="flex">
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  มอบสิทธิ
                </Typography>
              </Box>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ยังไม่ทราบครับ</TableCell>
                    <TableCell align="right">ยังไม่ทราบ</TableCell>
                    <TableCell align="right">ยังไม่ทราบ</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      dfdf
                    </TableCell>
                    <TableCell align="right">sd</TableCell>
                    <TableCell align="right">sd</TableCell>
                    {/* <TableCell align="right">{row.amount}</TableCell> */}
                    {/* <TableCell align="right">{row.dateDonate}</TableCell> */}

                    <TableCell align="center">
                      <ButtonGroup
                        color="primary"
                        aria-label="outlined primary button group"
                      >
                        <Button variant="contained" color="success">
                          ผ่าน
                        </Button>
                        <Button color="error" size="small">
                          ไม่ผ่าน
                        </Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>              
          </Container>
        </React.Fragment>
      </div>
    </div>
  );
}
export default AssignRights;
