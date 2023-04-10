import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, TextField, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

export default function Update() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');


  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/api/employees/" + id, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setName(result.name);
        setAddress(result.address);
        setMobile(result.mobile);

      })
      .catch(error => console.log('error', error));
  }, [id])


  const handleSubmit = event => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "id":id,
      "name": name,
      "address": address,
      "mobile": mobile
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/api/employees/update/"+id, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        window.location.href = '/';
        alert('Success');
      })
      .catch(error => console.log('error', error));
  }



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
              <TextField id="name" label="name" variant='outlined'
                fullWidth required
                onChange={(e) => setName(e.target.value)}
                value={name} />

            </Grid>
            <Grid item xs={12}>
              <TextField id="address" label="address" variant='outlined'
                fullWidth required
                onChange={(e) => setAddress(e.target.value)}
                value={address} />
            </Grid>
            <Grid item xs={12}>
              <TextField id="mobile" label="mobile" variant='outlined'
                fullWidth required
                onChange={(e) => setMobile(e.target.value)}
                value={mobile} />
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