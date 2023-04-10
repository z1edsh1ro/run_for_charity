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

import  '../../style/default.css';

export default function User() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(true);
  const [info, setInfo] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
      const Mytoken = localStorage.getItem('token');
      var myHeaders = new Headers();
      myHeaders.append("Token",Mytoken);

      var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
      };

      fetch("http://localhost:8080/api/auth/registerprojects", requestOptions)
          .then(response => response.json())
          .then(result => {
              console.log(result)
              if (result.status === '200') {
                  console.log(result)
                  setInfo(result.registerproject)
                  setIsLoaded(false);

              }
              else if (result.status === '403') {
                  navigate('/');
                  alert("sdds")
              }
          })

          .catch(error => console.log('error', error));
  }, [])
  const Logout = () => {
      localStorage.removeItem('token');
      navigate('/');
  };
  // const search = (data) => {
  //   return data.filter(
  //     (item) =>{
  //       console.log(item);

  //     }
  //       // item.taskProject.project.nameProject.toLowerCase().includes(query)
  //       // item.user.idUser.toLowerCase().includes(query) 
  //       // item.phone.includes(query)
  //   );
  // };
  if (isLoaded)
      return (<div>Loading</div>)
  else
  {  
    return (
      <div>
        <Navbar/>
              <div className={styles.ProfileUser}>
                  <SideBar />
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ p: 2 }}>
  
          <Box display="flex">
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom>
              ประวัติการเข้าร่วม
              </Typography>
            </Box>
            <Box>
                <input
                  type="text"
                  placeholder="Search.."
                  className="search"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </Box>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">ชื่อโครงการที่สมัคร</TableCell>
                  <TableCell align="center">ชื่อผู้สมัคร</TableCell>
                  <TableCell align="center">เบอร์เสือวิ่ง</TableCell>
                  <TableCell align="center">จำนวนเงินค่าสมัคร</TableCell>
                  <TableCell align="center">ระยะทางที่สมัคร</TableCell>
                  <TableCell align="center">วันที่สมัคร</TableCell>
                  <TableCell align="center">วันที่เริ่มและวันสิ้นสุด</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {info.map((row) => (
                  <TableRow
                    key={row.idRegister}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center">{row.taskProject.project.nameProject}</TableCell>
                    <TableCell align="center">{row.user.idUser}</TableCell>
                    <TableCell align="center">{row.numberRunner}</TableCell>
                    <TableCell align="center">{row.taskProject.priceTask}</TableCell>
                    <TableCell align="center">{row.taskProject.distance} KM</TableCell>
                    <TableCell align="center">{row.dateRegister}</TableCell>
                    <TableCell align="center">{row.taskProject.project.dateStart } ถึง {row.taskProject.project.dateEnd}</TableCell>
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