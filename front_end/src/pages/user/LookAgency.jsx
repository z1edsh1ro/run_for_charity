import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
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

import styles from "../../style/ProfileUser.module.css";
import SideBar from "../../component/SideBar";
import Navbar from "../../component/Navbar";
import "../../style/default.css";

export default function LookAgency() {
  const [query, setQuery] = useState("");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const Mytoken = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("token", Mytoken);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/auth/agencies/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setInfo(result.agency);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const search = (data) => {
    return data.filter(
      (item) =>
        item.nameAgency.toLowerCase().includes(query) ||
        item.addressAgency.toLowerCase().includes(query) ||
        item.phone.includes(query)
    );
  };

  const userRegisterAgency = (idAgency) => {
    window.location = "/regisagency/" + idAgency;
    // alert(idAgency)
  };

  return (
    <div>
      <Navbar />
      <div className={styles.ProfileUser}>
        <SideBar />
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg" sx={{ p: 2 }}>
            <Box display="flex">
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  รายการหน่วยงานที่ต้องการสมัครเป็นผู้รับผิดชอบโครงการของหน่วยงานนั้น
                </Typography>
              </Box>
              <Box>
                <input
                  type="text"
                  placeholder="Search.."
                  className="search"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </Box>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">ชื่อหน่วยงาน</TableCell>
                    <TableCell align="center">ที่อยู่หน่วยงาน</TableCell>
                    <TableCell align="center">เบอร์โทร</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {search(info)
                    .filter((item) => item.status === "อนุมัติ")
                    .map((item) => (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">{item.nameAgency}</TableCell>
                        <TableCell align="center">
                          {item.addressAgency}
                        </TableCell>
                        <TableCell align="center">{item.phone}</TableCell>

                        <ButtonGroup>
                          <Button
                            onClick={() => userRegisterAgency(item.idAgency)}
                            variant="contained"
                            color="success"
                            size="medium"
                            style={{ margin: 10 }}
                          >
                            สมัครหน่วยงานนี้
                          </Button>
                        </ButtonGroup>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </React.Fragment>
      </div>
    </div>
  );
}
