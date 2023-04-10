import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import '../../style/default.css'
import AdminSideBar from '../../component/AdminSideBar'
import styles from '../../style/AdminPage.module.css'
import logo from '../../img/logo.png';
function AdminAllProject() {
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(true);
    const [project, setProject] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/projects/all")
            .then(res => res.json())
            .then(
                (result) => {
                   
                    setProject(result)
                    console.log(result[0].donates[0].statusWithdraw)
                }
            )
    }, [])

    const Logout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };
    return (
        <div>
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
                            <Box sx={{ flexGrow: 1, my: 5 }}>
                                <Typography variant="h6" gutterBottom style={{ color: 'grey', textAlign: 'center',fontWeight:'bold' }}>
                                    โครงการทัั้งหมด
                                </Typography>
                            </Box>
                        </Box>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">ID</TableCell>
                                        <TableCell align="left">ชื่อโครงการ</TableCell>
                                        <TableCell align="left">ชื่อหน่วยงาน</TableCell>
                                        <TableCell align="left">เบอร์</TableCell>
                                        <TableCell align="left">วันที่เริ่มโครงการ</TableCell>
                                        <TableCell align="left">วันที่จบโครงการ</TableCell>
                                        <TableCell align="left">สถานะ </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {project.map((row) => (
                                        <TableRow
                                            key={row.idProject}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">{row.idProject}</TableCell>
                                            <TableCell align="left">{row.nameProject}</TableCell>
                                            <TableCell align="left">{row.agency.nameAgency}</TableCell>
                                            <TableCell align="left">{row.phone}</TableCell>
                                            <TableCell align="left">{row.dateStart}</TableCell>
                                            <TableCell align="left">{row.dateEnd}</TableCell>
                                            <TableCell align="left">{row.donates[0].statusWithdraw}</TableCell>
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


export default AdminAllProject