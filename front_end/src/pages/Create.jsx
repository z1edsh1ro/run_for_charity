import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, TextField, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

export default function Create() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [moblie, setMobile] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": name,
            "address": address,
            "mobile":  moblie
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/employees/save", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                window.location.href='/';
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
                                onChange={(e) => setName(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="address" label="address" variant='outlined'
                                fullWidth required
                                onChange={(e) => setAddress(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="mobile" label="mobile" variant='outlined'
                                fullWidth required
                                onChange={(e) => setMobile(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type='submit' variant="contained" fullWidth>Create</Button>
                        </Grid>
                    </Grid>

                </form>

            </Container>
        </React.Fragment>
    );
}