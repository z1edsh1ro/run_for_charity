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
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../style/default.css';

import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';

export default function User() {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(true);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const Mytoken = localStorage.getItem('token');
     var myHeaders = new Headers();
     myHeaders.append("Token", Mytoken);
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/api/auth/followprojects", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.status === '200') {

          setInfo(result.followproject)
          setIsLoaded(false);
        }
        else if (result.status === '403') {
          navigate('/');

        }
      })

      .catch(error => console.log('error', error));
  }, [])
  const Logout = () => {
    localStorage.removeItem('token');
    navigate('/');

  };
  const getProject = (id) => {
    window.location = '/detaileventpage/' + id
  }
  // const deletefollow = (idProject) => {
  //   const Mytoken = localStorage.getItem('token');
  //    var myHeaders = new Headers();
  //   var requestOptions = {
  //     method: 'DELETE',
  //     headers: myHeaders,
  //     redirect: 'follow'
  //   };

  //   fetch("http://localhost:8080/api/auth/followprojects/" + idProject, requestOptions)
  //     .then(response => response.text())
  //     .then(result => {
  //       console.log(result)
  //       if (result.status === '200') {
  //         MySwal.fire({
  //           icon: 'success',
  //           title: 'ลบการติดตามสำเร็จ',
  //           text: 'ยันยัน'
  //         })
  //       }
  //       else {
  //         MySwal.fire({
  //             icon: 'error',
  //             title: 'Oops...',
  //             text: 'Something went wrong!',
  //             footer: '<a href="">Why do I have this issue?</a>'
  //         })
  //     }
  //     })
  //     .catch(error => console.log('error', error));
  // }

  if (isLoaded)
    return (<div>Loading</div>)
  else {
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
                    โครงการที่ติดตาม
                  </Typography>
                </Box>
              </Box>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">ชื่อผู้ใช้</TableCell>
                      <TableCell align="center">ชื่อหน่วยงานที่เปิดโครงการ</TableCell>
                      <TableCell align="center">วันสิ้นสุดการลงทะเบียน</TableCell>
                      <TableCell align="center">วันเริ่มงาน</TableCell>
                  
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {info.map((row) => (
                      <TableRow
                        key={row.idFollow}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >

                        <TableCell align="center">{row.project.nameProject}</TableCell>
                        <TableCell align="center">{row.project.agency.nameAgency}</TableCell>
                        <TableCell align="center">{row.project.dateRegisEnd}</TableCell>
                        <TableCell align="center">{row.project.dateStart}</TableCell>
                        <ButtonGroup variant="contained" color="info">
                          <Button onClick={() => getProject(row.project.idProject)}>รายละเอียด</Button>
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
}