import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import { Grid, TextField, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import styles from '../../style/TaskProject.module.css'
function TaskProject() {

    const MySwal = withReactContent(Swal);
    const { idproject } = useParams();
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        var myHeaders = new Headers();
        const Mytoken = localStorage.getItem('token');
        myHeaders.append("Token", Mytoken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "taskName": inputs.taskName,
            "priceTask": inputs.priceTask,
            "distance": inputs.distance,
            "limitJoin": inputs.limitJoin

        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/auth/taskprojects/" + idproject, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result.status)
                if (result.status === '201') {
                    MySwal.fire({
                        icon: 'success',
                        title: 'เพิ่มรายละเอียดสำเร็จ',
                        text: 'You clicked the button!'
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

        setInputs({})
    }

    const goPage = () => {
        const role = localStorage.getItem('role');
        if (role === 'ผู้รับผิดชอบโครงการ') {
            navigate('/profileReponsible')
        }
        else if (role === 'ผู้รับผิดชอบหน่วยงาน') {

            navigate('/Profileagency')
        }
    }
    return (
        <React.Fragment>

            <CssBaseline />
            <Container maxWidth="sm" sx={{ p: 2, my: 10 }}>
                <div className={styles.taskHeader}>
                    <div>
                        <Typography variant='h6' gutterBottom component="div">
                            ข้อมูลการวิ่ง
                        </Typography>
                    </div>
                    <div>
                        <Button fullWidth variant="contained" endIcon={<SendIcon />} onClick={() => goPage()}></Button>
                    </div>

                </div>
                {/* "taskName": inputs.taskName,
            "priceTask": inputs.priceTask,
            "distance": inputs.distance,
            "limitJoin": inputs.limitJoin */}
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField label="taskName" variant='outlined'
                                fullWidth
                                type="text"
                                name="taskName"
                                id='taskName'
                                value={inputs.taskName || ""}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <TextField label="priceTask" variant='outlined'
                                fullWidth
                                type="text"
                                name="priceTask"
                                id='priceTask'
                                value={inputs.priceTask || ""}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <TextField label="distance" variant='outlined'
                                fullWidth
                                type="text"
                                name="distance"
                                id='distance'
                                value={inputs.distance || ""}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <TextField label="limitJoin" variant='outlined'
                                fullWidth
                                type="text"
                                name="limitJoin"
                                id='limitJoin'
                                value={inputs.limitJoin || ""}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <div>
                                <Button type='submit' fullWidth variant="contained" color="success">สร้างข้อมูล</Button>
                            </div>
                        </Grid>
                    </Grid>

                </form>

            </Container>
        </React.Fragment>
    );

}

export default TaskProject