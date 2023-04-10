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
import SideBar from '../../component/SideBar'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import logo from '../../img/logo.png';
import Navbar from '../../component/Navbar';

function AgencyAppoveProject() {


  const [info, setInfo] = useState([])
  const MySwal = withReactContent(Swal);

  useEffect(() => {

    fetch("http://localhost:8080/api/projects/status/รอพิจารณา",)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setInfo(result)
      })
      .catch(error => console.log('error', error));
  }, [])


  const clickApprove = (id, status) => {
    var myHeaders = new Headers();
    const Mytoken = localStorage.getItem('token');
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

    fetch("http://localhost:8080/api/projects/" + id + "/pass", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.status === '200') {
          MySwal.fire({
            icon: 'success',
            title: 'อนุมัติ',
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
          }).then(() => {
          window.location.reload(false);
          })
        }
      })
      .catch(error => console.log('error', error));
  }
  const click = (id, status) => {

    var myHeaders = new Headers();
    const Mytoken = localStorage.getItem('token');
    myHeaders.append("token", Mytoken);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "status": "ไม่อนุมัติ"
    });
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/api/projects/" + id + "/fail", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.status === '200') {
          MySwal.fire({
            icon: 'success',
            title: 'สำเร็จ',
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
      <Navbar />
      {/* <section id={styles.header}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <div>
          <ul id={styles.navbar}>
          </ul>
        </div>
      </section> */}
      <div className={styles.admin}>
        <SideBar />
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg" sx={{ p: 2 }}>
            <Box display="flex">
              <Box sx={{ flexGrow: 1, color: 'grey', textAlign: 'center', fontWeight: 'bold' }}>
                <Typography variant="h6" gutterBottom>
                  อนุมัติโครงการ
                </Typography>
              </Box>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">ชื่อโครงการ</TableCell>
                    <TableCell align="left">ชื่อหน่วยงาน</TableCell>
                    <TableCell align="left">เบอร์</TableCell>
                    <TableCell align="left">วันที่เริ่มโครงการ</TableCell>
                    <TableCell align="left">วันที่จบโครงการ</TableCell>
                    <TableCell align="left">สถานะ </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {info.map((row) => (
                    <TableRow
                      key={row}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{row.nameProject}</TableCell>
                      <TableCell align="left">{row.agency.nameAgency}</TableCell>
                      <TableCell align="left">{row.phone}</TableCell>
                      <TableCell align="left">{row.dateStart}</TableCell>
                      <TableCell align="left">{row.dateEnd}</TableCell>
                      <TableCell align="left">{row.status}</TableCell>
                      <TableCell align="center">
                        <ButtonGroup variant="contained" color="success">
                          <Button onClick={() => clickApprove(row.idProject, "อนุมัติ")} variant="contained" color="success">อนุมัติ</Button>
                          <Button onClick={() => click(row.idProject, "ไม่อนุมัติ")} variant="contained" color="error">ไม่อนุมัติ</Button>
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

export default AgencyAppoveProject