import React, { useState, useEffect } from 'react';

import { useParams } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, TextField, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
// import { Link } from 'react-router-dom';

export default function EditProfileUser() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const role = localStorage.getItem('role');
  const { id } = useParams();
  const [fristName, setfristName] = useState('');
  const [lastName, setlastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');


  useEffect(() => {
    const Mytoken = localStorage.getItem('token');
    var myHeaders = new Headers();
    myHeaders.append("token", Mytoken);
    var requestOptions1 = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/api/auth/user", requestOptions1)
      .then(response => response.json())
      .then(result => {
        setfristName(result.user.fristName);
        setlastName(result.user.lastName);
        setAge(result.user.age);
        setEmail(result.user.email);
        setAddress(result.user.address);
        setPhone(result.user.phone);
        console.log(result);

      })
      .catch(error => console.log('error', error));
  }, [id])

  const handleSubmit = event => {
    event.preventDefault();
    const Mytoken = localStorage.getItem('token');
    var myHeaders = new Headers();
    myHeaders.append("token", Mytoken);
    myHeaders.append("Content-Type", "application/json");


    var raw = JSON.stringify({
      "fristName": fristName,
      "lastName": lastName,
      "age": age,
      "address": address,
      "phone": phone,
      "email": email
    });

    var requestOptions2 = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/api/auth/users", requestOptions2)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.status === '200') {
          MySwal.fire({
            icon: 'success',
            title: 'แก้ไขโปรไฟล์สำเร็จ',
            text: 'You clicked the button!'
          }).then((value) => {

            if (role === 'ผู้รับผิดชอบโครงการ') {
              navigate('/ profileReponsible')
            }
            else if (role === 'ผู้รับผิดชอบหน่วยงาน') {

              navigate('/Profileagency')
            } else if (role === 'user') {

              navigate('/profileuser')
            }
            else {
              navigate('/profileadmin')
            }
            // alert('Success');
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


  // const { id } = useParams();
  // const [fristName, setfristName] = useState('');
  // const [age, setAge] = useState('');
  // const [email, setEmail] = useState('');
  // const [address, setAddress] = useState('');
  // const [phone, setPhone] = useState('');

  return (
    <React.Fragment>

      <CssBaseline />
      <Container maxWidth="sm" sx={{ p: 2 }}>
        <Typography variant='h6' gutterBottom component="div">
          create
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField id="fristName" label="fristName" variant='outlined'
                fullWidth required
                onChange={(e) => setfristName(e.target.value)}
                value={fristName} />
            </Grid>
            <Grid item xs={12}>
              <TextField id="lastName" label="lastName" variant='outlined'
                fullWidth required
                onChange={(e) => setlastName(e.target.value)}
                value={lastName} />
            </Grid>
            <Grid item xs={12}>
              <TextField id="age" label="age" variant='outlined'
                fullWidth required
                onChange={(e) => setAge(e.target.value)}
                value={age} />
            </Grid>
            <Grid item xs={12}>
              <TextField id="email" label="email" variant='outlined'
                fullWidth required
                onChange={(e) => setEmail(e.target.value)}
                value={email} />
            </Grid>
            <Grid item xs={12}>
              <TextField id="address" label="address" variant='outlined'
                fullWidth required
                onChange={(e) => setAddress(e.target.value)}
                value={address} />
            </Grid>
            <Grid item xs={12}>
              <TextField id="phone" label="phone" variant='outlined'
                fullWidth required
                onChange={(e) => setPhone(e.target.value)}
                value={phone} />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant="contained" fullWidth>update</Button>
            </Grid>
          </Grid>

        </form>

      </Container>
    </React.Fragment>
  );
}