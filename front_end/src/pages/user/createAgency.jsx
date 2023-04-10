import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid, TextField, Typography, Button } from '@mui/material';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import withReactContent from 'sweetalert2-react-content';
import styles from '../../style/CreateAgency.module.css'
import '../../style/default.css';
import axios from "axios";

export default function CreateAgency() {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [file1, setFile1] = useState('');
  const [inputs, setInputs] = useState({});
  const Mytoken = localStorage.getItem('token');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleChange1 = (e) => {
    console.log(e.target.files)
    setFile1(e.target.files[0])
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();



    const createUser = (formData) => {
      return axios.post('http://localhost:8080/api/auth/agencies', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'token': Mytoken
        }
      });
    }
    formData.append('agency', JSON.stringify({
      nameAgency: inputs.nameAgency,
      addressAgency: inputs.addressAgency,
      phone: inputs.phone
    }
    ));




    formData.append('evidencefile', file1);


    createUser(formData)
      .then(response => {
      console.log(response);
        MySwal.fire({
          icon: 'success',
          title: 'ส่งหลักฐานสำเร็จรอผู้รับผิดชอบหน่วยงานยื่นยัน',
          text: 'You clicked the button!'
        }).then((value) => {
          navigate('/profileuser')
        })
      })
      .catch(error => {
        console.log(error);
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      });
    console.log(inputs)
  }


  return (
    <div className={styles.bg}>
      <div className={styles.mainCreateAgency}>
        <h1>ลงทะเบียนหน่วยงาน</h1>
        <div className={styles.Regis}>
          <form onSubmit={handleSubmit} id="form" className={styles.form}>
            <div className={styles.formMainCreateProject}>
              <div className={styles.formMainLeft}>
                <div className={styles.form_control}>
                  <label htmlFor='nameAgency'>ชื่อหน่วยงาน</label>
                  <input
                    type="text"
                    name="nameAgency"
                    id='nameAgency'
                    value={inputs.nameAgency || ""}
                    onChange={handleChange} />
                </div>
                <div className={styles.form_control}>
                  <label htmlFor='addressAgency'>ที่อยู่หน่วยงาน</label>
                  <input
                    type="text"
                    name="addressAgency"
                    id='addressAgency'
                    value={inputs.addressAgency || ""}
                    onChange={handleChange} />
                </div>
                <div className={styles.form_control}>
                  <label htmlFor='phone'>เบอร์โทรศัพท์</label>
                  <input
                    type="number"
                    name="phone"
                    id='phone'
                    value={inputs.phone || ""}
                    onChange={handleChange} />
                </div>

                <div className={styles.inputfileAgency}>
                  <input type="file" onChange={handleChange1} /> <br />

                </div>
              </div>
            </div>
            <button className={styles.btnRegis} type="submit" >ยืนยัน</button>
          </form>
        </div>
      </div>
    </div>

  );
}
