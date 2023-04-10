import React from 'react'
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
import ButtonGroup from '@mui/material/ButtonGroup';
import '../../style/default.css'
import styles from '../../style/ProfileUser.module.css'
import Navbar from '../../component/Navbar';
import SideBar from '../../component/SideBar'
function AgencyApprove() {
     
    return (
        <div>
            <Navbar />
            <div className={styles.ProfileUser}>
            <SideBar/>
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="lg" sx={{ p: 2 }}>

                        <Box display="flex">
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" gutterBottom>
                                    อนุมัติหน่วยงาน
                                </Typography>
                            </Box>
                        </Box>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 ,boxShadow: 3,  borderRadius: 2,}} aria-label="simple table" >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ยังไม่ทราบครับ</TableCell>
                                        <TableCell align="right">ยังไม่ทราบ</TableCell>
                                        <TableCell align="right">ยังไม่ทราบ</TableCell>
                                        <TableCell align="right">ยังไม่ทราบ</TableCell>
                                        <TableCell align="right">ยังไม่ทราบ</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow

                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">dfdf</TableCell>
                                        <TableCell align="right">sd</TableCell>
                                        <TableCell align="right">sd</TableCell>
                                        <TableCell align="right">sd</TableCell>
                                        <TableCell align="right">sd</TableCell>
                                        {/* <TableCell align="right">{row.amount}</TableCell> */}
                                        {/* <TableCell align="right">{row.dateDonate}</TableCell> */}
                                        <TableCell align="center">
                                            <ButtonGroup color="primary" aria-label="outlined primary button group">
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
    )
}

export default AgencyApprove