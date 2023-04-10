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
import '../../style/default.css'
import AdminSideBar from '../../component/AdminSideBar'
import styles from '../../style/AdminPage.module.css'

function AdminCheckPayment() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const Logout = () => {
    localStorage.removeItem('token');
    navigate('/');
};
  return (

    <div>
      {/* <Navbar /> */}
      <div className={styles.admin}>
        <AdminSideBar />
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg" sx={{ p: 2 }}>

            <Box display="flex">
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  เช็คยอดเงินค่าสมัคร
                </Typography>
              </Box>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>idของuser</TableCell>
                    <TableCell align="right">idของรายการที่สมัคร</TableCell>
                    <TableCell align="right">เวลาที่โอน</TableCell>
                    <TableCell align="right">จำนวนเงินที่โอน</TableCell>
                    <TableCell align="right">หลักฐาการโอน</TableCell>
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

export default AdminCheckPayment