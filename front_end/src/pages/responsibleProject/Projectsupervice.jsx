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

function   Projectsupervice() {
    const [query, setQuery] = useState("");
    const [info, setInfo] = useState([]);
    const Mytoken = localStorage.getItem('token');
    
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("token", Mytoken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
       
        fetch("http://localhost:8080/api/auth/managerprojects/users", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setInfo(result.managerproject)
                console.log(result.managerproject[0].project.nameProject)

            })
            .catch(error => console.log('error', error));
    }, []);

     const getProject = (id) => {
        window.location = '/showuserregisproject/' + id
          }

    const search = (data) => {

        return data.filter((item =>
            item.project.nameProject.toLowerCase().includes(query)
            ||
            item.project.addressProject.toLowerCase().includes(query)
            ||
            item.project.phone.includes(query)
            ||
            item.project.dateRegisStart.includes(query)
            ||
            item.project.dateRegisEnd.includes(query)
            ||
            item.project.dateStart.includes(query)
            ||
            item.project.dateEnd.includes(query)
            ||
            item.project.dateEnd.includes(query)
            ||
            item.project.donates[0].statusWithdraw.includes(query)
        ))
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
                                    โครงการที่รับผิดชอบ
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
                                        <TableCell align="center">ชื่อโครงการ</TableCell>
                                        <TableCell align="center">ตำแหน่งที่จัดงาน</TableCell>
                                        <TableCell align="center">เบอร์ติดต่อ</TableCell>
                                        <TableCell align="center">วันเริ่มลงทะเบียน</TableCell>
                                        <TableCell align="center">วันสิ้นสุดการลงทะเบียน</TableCell>
                                        <TableCell align="center">วันเริ่มโครงการ</TableCell>
                                        <TableCell align="center">วันสิ้นสุดโครงการ</TableCell>
                                        <TableCell align="center">สถานะ</TableCell>
                                        <TableCell align="center">รายชื่อผู้ลงทะเบียน</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {search(info).map((item) => (
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="center" >{item.project.nameProject}</TableCell>
                                            <TableCell align="center">{item.project.addressProject}</TableCell>
                                            <TableCell align="center">{item.project.phone}</TableCell>
                                            <TableCell align="center">{item.project.dateRegisStart}</TableCell> 
                                            <TableCell align="center">{item.project.dateRegisEnd}</TableCell> 
                                            <TableCell align="center">{item.project.dateStart}</TableCell> 
                                            <TableCell align="center">{item.project.dateEnd}</TableCell> 
                                            <TableCell align="center">{item.project.donates[0].statusWithdraw}</TableCell> 
                                            <ButtonGroup>
                                                <Button onClick={() => getProject(item.project.idProject)} variant="contained" color="success" size="medium" style={{ margin: 10 }}>click</Button>
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

export default Projectsupervice