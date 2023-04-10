// @@ -0,0 +1,91 @@
// import React from 'react'
// import { useState,useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
// import styles from '../../style/ChangeRole.module.css'
// import '../../style/default.css';
// function ApproveProject() {
//   const [query, setQuery] = useState("");
//   const [info, setInfo] = useState([]);
//   const MySwal = withReactContent(Swal);
//   const navigate = useNavigate();
//   const Mytoken = localStorage.getItem('token');
//   useEffect(() => {
//     var myHeaders = new Headers();
//     myHeaders.append("token", Mytoken);

//     var requestOptions = {
//       method: 'GET',
//       headers: myHeaders,
//       redirect: 'follow'
//     };
//     fetch("http://localhost:8080/api/auth/managerprojects/รอพิจารณา", requestOptions)
//       .then(response => response.json())
//       .then(result => {
//         console.log(result)
//         setInfo(result)
//       })
//       .catch(error => console.log('error', error));
//   }, []);
//   return (
//     <div>
//     <Navbar />
//     <div className={styles.ProfileReponsible}>
//         <SideBar />
//         <React.Fragment>
//             <CssBaseline />
//             <Container maxWidth="lg" sx={{ p: 2 }}>

//                 <Box display="flex">
//                     <Box sx={{ flexGrow: 1 }}>
//                         <Typography variant="h6" gutterBottom>
//                             หน่วยงาน
//                         </Typography>
//                     </Box>
//                     <Box>
//                         <input
//                             type="text"
//                             placeholder='Search..'
//                             className='search'
//                             onChange={(e) => setQuery(e.target.value)} />
//                     </Box>
//                 </Box>
//                 <TableContainer component={Paper}>
//                     <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell align="center">ชื่อหน่วยงานที่เปิดโครงการ</TableCell>
//                                 <TableCell align="center">ชื่อโครงการ</TableCell>
//                                 <TableCell align="center">วันสิ้นสุดการลงทะเบียน</TableCell>
//                                 <TableCell align="center">วันเริ่มโครงการ</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {info.map((item) => (
//                                 <TableRow
//                                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                                 >
//                                     <TableCell align="center" >{item.manager.agency.nameAgency}</TableCell>
//                                     <TableCell align="center" >{item.manager.agency.nameAgency.phone}</TableCell>
//                                     <TableCell align="center">{item.nameProject}</TableCell>
//                                     <TableCell align="center">{item.dateRegisEnd}</TableCell>
//                                     <TableCell align="center">{item.dateStart}</TableCell>
//                                     <ButtonGroup>
//                                         <Button onClick={() => regisProject(item.idProject)} variant="contained" color="success" size="medium" style={{ margin: 10 }}>สมัครโครงการนี้!</Button>
//                                     </ButtonGroup>

//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </Container>
//         </React.Fragment>
//     </div>
// </div>
//   )
// }
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
import styles from '../../style/ProfileReponsible.module.css'
import SideBar from '../../component/SideBar'
import Navbar from '../../component/Navbar'
import '../../style/default.css';
function ApproveProject() {
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
    fetch("http://localhost:8080/api/auth/managerprojects/รอพิจารณา", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setInfo(result.managerproject)
      })
      .catch(error => console.log('error', error));
  }, []);




  const appove = (idManagerProject) => {
    var myHeaders = new Headers();
    myHeaders.append("token", Mytoken);

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/api/auth/managerprojects/" + idManagerProject + "/pass", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.status === '200') {
          MySwal.fire({
            icon: 'success',
            title: 'อนุมัติสำเร็จ',
            text: 'You clicked the button!'
          }).then((value) => {
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
        }
      })

      .catch(error => console.log('error', error));
  }
  const Noappove = (idManagerProject) => {
    var myHeaders = new Headers();
    myHeaders.append("token", Mytoken);

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/api/auth/managerprojects/" + idManagerProject + "/fail", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.status === '200') {
          MySwal.fire({
            icon: 'success',
            title: 'ปฎิเสธสำเร็จ',
            text: 'You clicked the button!'
          }).then((value) => {
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
        }
      })

      .catch(error => console.log('error', error));
  }
  const search = (data) => {

    return data.filter((item =>
      item.manager.agency.nameAgency.toLowerCase().includes(query)
      ||
      item.project.nameProject.toLowerCase().includes(query)
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
                 การอนุมัติโครงการ
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
                    <TableCell align="center">ที่อยู่หน่วยงาน</TableCell>
                    <TableCell align="center">ชื่อโครงการ</TableCell>
                    <TableCell align="center">ที่อยู่โครงการ</TableCell>
                    <TableCell align="center">ชื่อผู้สมัคร</TableCell>
                    <TableCell align="center">อายุ</TableCell>
                    <TableCell align="center">เบอร์โทรศัพท์</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {search(info).map((item) => (
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center" >{item.manager.agency.nameAgency}</TableCell>
                      <TableCell align="center" >{item.manager.agency.addressAgency}</TableCell>
                      <TableCell align="center">{item.project.nameProject}</TableCell>
                      <TableCell align="center">{item.project.addressProject}</TableCell>
                      <TableCell align="center">{item.manager.user.fristName}{item.manager.user.lastName}</TableCell>
                      <TableCell align="center">{item.manager.user.age}</TableCell>
                      <TableCell align="center">{item.manager.user.phone}</TableCell>
                      <ButtonGroup>
                        <Button onClick={() => appove(item.idManagerProject)} variant="contained" color="success" size="medium" style={{ margin: 10 }}>อนุมัติ!</Button>
                        <Button onClick={() => Noappove(item.idManagerProject)} variant="contained" color="error" size="medium" style={{ margin: 10 }}>ไม่อนุมัติ!</Button>
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

export default ApproveProject