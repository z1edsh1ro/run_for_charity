import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import ButtonGroup from '@mui/material/ButtonGroup';

import styles from "../../style/ProfileUser.module.css"
import SideBar from '../../component/SideBar'
import Navbar from '../../component/Navbar'
import MySwal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
function ApproveRunner() {
    const [info, setInfo] = useState([]);
    const Mytoken = localStorage.getItem('token');
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("token", Mytoken);

        var raw = "";

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/auth/registerprojects/all/status/รอพิจารณา", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                setInfo(result)
            })
            .catch(error => console.log('error', error));
    }, [])
    const clickApprove = (id) => {
        var myHeaders = new Headers();
        myHeaders.append("token", Mytoken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "status": "อนุมัติ"
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/auth/registerprojects/status/" + id, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                if (result.status === '201') {
                    MySwal.fire({
                        icon: 'success',
                        title: 'อนุมัติสำเร็จ',
                        text: 'You clicked the button!'
                    })
                }
                else {
                    MySwal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href="">Why do I have this issue?</a>'
                    })
                }
            })
            .catch(error => console.log('error', error));

    }
    const click = (id) => {
        var myHeaders = new Headers();
        myHeaders.append("token", Mytoken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "status": "asasas"
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/auth/registerprojects/status/" + id, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                if (result.status === '201') {
                    MySwal.fire({
                        icon: 'success',
                        title: 'ปฎิเสธสำเร็จ',
                        text: 'You clicked the button!'
                    })
                }
                else {
                    MySwal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href="">Why do I have this issue?</a>'
                    })
                }
            })
            .catch(error => console.log('error', error));

    }
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
                                    ยืนยันสิทธ์เป็นเข้าโครงการวิ่ง
                                </Typography>
                            </Box>
                        </Box>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        {/* <TableCell align="center">ชื่อหน่วยงาน</TableCell> */}
                                        <TableCell align="center">ชื่อผู้ใช่งาน</TableCell>
                                        <TableCell align="center">วันขอเข้าอนุมัติ</TableCell>
                                        <TableCell align="center">สถานะ</TableCell>
                                        <TableCell align="center">หลักฐาน</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {info.map((row) => (
                                        <TableRow
                                            key={row.idAppoveAgency}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            {/* <TableCell align="center">{row.agency.nameAgency}</TableCell> */}
                                            <TableCell align="center">{row.userByIdUser.fristName}</TableCell>
                                            <TableCell align="center">{row.dateAppove}</TableCell>
                                            <TableCell align="center">{row.description}</TableCell>
                                            <TableCell align="center">{row.evidence}</TableCell>
                                            <ButtonGroup variant="contained" color="success">
                                                <Button onClick={() => clickApprove(row.idAppoveAgency)} variant="contained" color="success">อนุมัติ</Button>
                                                <Button onClick={() => click(row.idAppoveAgency)} variant="contained" color="error">ไม่อนุมัติ</Button>
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

export default ApproveRunner