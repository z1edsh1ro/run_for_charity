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

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styles from "../../style/ProfileReponsible.module.css";
// import styles from "../../style/ProfileUser.module.css"
import SideBar from '../../component/SideBar'
import Navbar from '../../component/Navbar'
import '../../style/default.css';

function LookProject() {
    const [query, setQuery] = useState("");
    const [info, setInfo] = useState([]);
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();
    const Mytoken = localStorage.getItem('token');
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("token", Mytoken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/projects/status/อนุมัติ", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setInfo(result)

            })
            .catch(error => console.log('error', error));
    }, []);
    const search = (data) => {

        return data.filter((item =>
            item.agency.nameAgency.toLowerCase().includes(query)
            ||
            item.nameProject.toLowerCase().includes(query)
            ||
            item.dateRegisEnd.includes(query)
            ||
            item.dateStart.includes(query)
        ))
    }
    const regisProject = (idProject) => {
        var myHeaders = new Headers();
        myHeaders.append("token", Mytoken);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/auth/managerprojects/"+idProject, requestOptions)
            .then(response => response.json())
            .then(result => { 
                console.log(result)
                if (result.status === '200') {
                    MySwal.fire({
                        icon: 'success',
                        title: 'สมัครโครงการสำเร็จ',
                        text: 'You clicked the button!'
                    }).then((value) => {
                       
                            navigate('/profilereponsible')
                      
                    
                        
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
            <div className={styles.ProfileReponsible}>
                <SideBar />
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="lg" sx={{ p: 2 }}>

                        <Box display="flex">
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" gutterBottom>
                                    โครงการทั้วหมดที่เปิด
                                </Typography>
                            </Box>
                            <Box>
                                <input
                                    type="text"
                                    placeholder='Search..'
                                    className='search'
                                    onChange={(e) => setQuery(e.target.value)} />
                            </Box>
                        </Box>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">ชื่อหน่วยงานที่เปิดโครงการ</TableCell>
                                        <TableCell align="center">ชื่อโครงการ</TableCell>
                                        <TableCell align="center">วันสิ้นสุดการลงทะเบียน</TableCell>
                                        <TableCell align="center">วันเริ่มโครงการ</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {search(info).map((item) => (
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="center" >{item.agency.nameAgency}</TableCell>
                                            <TableCell align="center">{item.nameProject}</TableCell>
                                            <TableCell align="center">{item.dateRegisEnd}</TableCell>
                                            <TableCell align="center">{item.dateStart}</TableCell>
                                            <ButtonGroup>
                                                <Button onClick={() => regisProject(item.idProject)} variant="contained" color="success" size="medium" style={{ margin: 10 }}>สมัครโครงการนี้!</Button>
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
    )
}

export default LookProject