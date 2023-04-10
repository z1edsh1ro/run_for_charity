import React, { useState, useEffect } from 'react'
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
import styles from '../../style/AdminPage.module.css'
import AdminSideBar from '../../component/AdminSideBar'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import logo from '../../img/logo.png';
import Navbar from '../../component/Navbar';
function AdminApproveAgency() {
  const [info, setInfo] = useState([])
  const MySwal = withReactContent(Swal);

  useEffect(() => {

    const Mytoken = localStorage.getItem('token');
    var myHeaders = new Headers();
    myHeaders.append("token", Mytoken);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/api/auth/appoves/agency/", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setInfo(result.appove)
      })
      .catch(error => console.log('error', error));
  }, [])
  const clickApprove = (id) => {
    var myHeaders = new Headers();
    const Mytoken = localStorage.getItem('token');
    myHeaders.append("token", Mytoken);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/api/auth/agencies/" + id + "/pass", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.status === '200') {
          MySwal.fire({
            icon: 'success',
            title: 'อนุมัติสำเร็จ',
            text: 'คลิกเพื่อยืนยันการอนุมัติ'
          }).then(() => {
            window.location.reload(false);
          })

        }
        else {
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
          window.location.reload(false);
        }
      })
      .catch(error => console.log('error', error));
  }
  const click = (id) => {

    var myHeaders = new Headers();
    const Mytoken = localStorage.getItem('token');
    myHeaders.append("token", Mytoken);
    myHeaders.append("Content-Type", "application/json");


    var raw = JSON.stringify({
      
    });
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/api/auth/agencies/" + id + "/fail", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.status === '200') {
          MySwal.fire({
            icon: 'success',
            title: 'ปฎิเสธการอนุมัติสำเร็จ',
            text: 'คลิกเพื่อยืนยันการไม่อนุมัติ'
          }).then(() => {
            window.location.reload(false);
          })

        }
      })
      .catch(error => console.log('error', error));
  }
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
              <Box sx={{ flexGrow: 1, color: 'grey', textAlign: 'center', fontWeight: 'bold' }}>
                <Typography variant="h6" gutterBottom>
                  อนุมัติหน่วยงาน
                </Typography>
              </Box>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">ชื่อหน่วยงาน</TableCell>
                    <TableCell align="center">ที่อยุ่หน่วยงาน</TableCell>
                    <TableCell align="center">เบอร์ติดต่อ</TableCell>
                    <TableCell align="center">สภานะ</TableCell>
                    <TableCell align="center">หลักฐาน</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {info.map((row) => (
                    <TableRow
                      key={row.idAgency}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >


                      <TableCell align="center">{row.agency.nameAgency}</TableCell>
                      <TableCell align="center">{row.agency.addressAgency}</TableCell>
                      <TableCell align="center">{row.agency.phone}</TableCell>
                      <TableCell align="center">{row.description}</TableCell>
                      <TableCell align="center">{row.evidence}</TableCell>


                      <TableCell align="center">
                        <ButtonGroup variant="contained" color="success">
                          <Button onClick={() => clickApprove(row.idAppoveAgency)} variant="contained" color="success">อนุมัติ</Button>
                          <Button onClick={() => click(row.idAppoveAgency)} variant="contained" color="error">ไม่อนุมัติ</Button>
                        </ButtonGroup>
                      </TableCell>
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

export default AdminApproveAgency