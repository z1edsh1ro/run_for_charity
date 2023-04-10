import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styles from '../../style/Register.module.css';

import '../../style/default.css';


function Register() {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);
    const [inputs, setInputs] = useState({});


    const form = document.getElementById('form');
    const iduser = document.getElementById('iduser');
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    const age = document.getElementById('age');
    const address = document.getElementById('address');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    // const check = 0;
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // if (check === 0) {
        checkRequired([iduser, fname, lname, password, password2, age, address, phone, email]);
        checkLength(iduser, 3, 20);
        checkLength(fname, 3, 20);
        checkLength(lname, 3, 20);
        checkLength(password, 8, 15);
        checkLength(password2, 8, 15);
        checkLength(address, 1, 500);
        checkLength(phone, 1, 10);

        checkEmail(email);
        checkPasswordMatch(password, password2);
        // check = 1;

        // }

        var myHeaders = new Headers();
        // event.preventDefault();
        // alert(inputs);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "idUser": inputs.iduser,
            "fristName": inputs.fname,
            "password": inputs.password,
            "age": inputs.age,
            "address": inputs.address,
            "phone": inputs.phone,
            "lastName": inputs.lname,
            "email": inputs.email,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/user/create", requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result)
                console.log(result)
                if (result.status === 'ok') {

                    MySwal.fire({
                        // icon: 'success',
                        title: 'Good job!',
                        text: 'You clicked the button!'
                    }).then((value) => {
                        navigate('/')
                    })
                }
                else {
                    MySwal.fire({
                        // icon: 'error',
                        // title: 'Oops...',
                        text: "" + result.msg,
                        footer: '<a href="">Why do I have this issue?</a>'
                    })
                }
            })
            .catch(error => console.log('error', error));
    }

    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = styles.form_controlE;
        const small = formControl.querySelector('small');
        small.innerText = message;
    }
    function showSucces(input) {
        const formControl = input.parentElement;
        formControl.className = styles.form_controlS;
        const small = formControl.querySelector('small');
        small.innerText = '';
    }
    function checkEmail(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(input.value.trim())) {
            showSucces(input)
        } else {
            showError(input, 'อีเมล์ของคุณไม่ถูกต้อง!!!');
        }
    }
    function checkRequired(inputArr) {
        inputArr.forEach(function (input) {
            if (input.value.trim() === '') {
                showError(input, `${getFieldName(input)} ของคุณไม่ถูกต้อง!!!`)
            } else {
                showSucces(input);
            }
        });
    }
    function checkLength(input, min, max) {
        if (input.value.length < min) {
            showError(input, `${getFieldName(input)} ต้องไม่น้อยกว่า ${min} ตัว`);
        } else if (input.value.length > max) {
            showError(input, `${getFieldName(input)} ต้องไม่มากกว่า ${max} ตัว`);
        } else {
            showSucces(input);
        }
    }
    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }
    function checkPasswordMatch(input1, input2) {
        if (input1.value !== input2.value) {
            showError(input2, 'รหัสผ่านของคุณไม่ตรงกัน');
        }
    }
    // function checkAge(input) {
    //     if(input.value >0 ){
    //         showSucces(input);
    //     }
    //     showError(input, `${getFieldName(input)} must be greater than 0`);
    // }

    return (
        <div className={styles.back}>
        
        <div className={styles.bg}>
            <div className={styles.mainRegis}>
                <h1>สมัครสมาชิก</h1>
                <div className={styles.Regis}>
                    <form onSubmit={handleSubmit} id="form" className={styles.form}>
                        <div className={styles.form_control}>
                            <label htmlFor='iduser'>ยูสเซอร์ไอดี</label>
                            <input
                                type="text"
                                name="iduser"
                                id='iduser'
                                value={inputs.iduser || ""}
                                onChange={handleChange} />
                            <div >
                                <small></small>

                            </div>
                        </div>
                        <div className={styles.form_control}>
                            <label htmlFor='password'>รหัสผ่าน</label>
                            <input
                                type="password"
                                name="password"
                                id='password'
                                value={inputs.password || ""}
                                onChange={handleChange} />
                            <div >
                                <small></small>
                            </div>
                        </div>
                        <div className={styles.form_control}>
                            <label htmlFor='password2'>รหัสผ่าน</label>
                            <input
                                type="password"
                                name="password2"
                                id='password2'
                                value={inputs.password2 || ""}
                                onChange={handleChange} />
                            <div >
                                <small></small>
                            </div>
                        </div>
                        <div className={styles.form_control}>
                            <label htmlFor='fname'>ชื่อจริง</label>
                            <input
                                type="text"
                                name="fname"
                                id='fname'
                                value={inputs.fname || ""}
                                onChange={handleChange} />
                            <div >
                                <small></small>
                            </div>
                        </div>
                        <div className={styles.form_control}>
                            <label htmlFor='lname'>นามสกุล</label>
                            <input
                                type="text"
                                name="lname"
                                id='lname'
                                value={inputs.lname || ""}
                                onChange={handleChange} />
                            <div >
                                <small></small>
                            </div>
                        </div>
                        <div className={styles.form_control}>
                            <label htmlFor='email'>อีเมล&nbsp;&nbsp;</label>
                            <input
                                type="text"
                                name="email"
                                id='email'
                                value={inputs.email || ""}
                                onChange={handleChange} />
                            <div className='alertSmall'>
                                <small></small>

                            </div>
                        </div>
                        <div className={styles.form_control}>
                            <label htmlFor='age'>อายุ&nbsp;&nbsp;</label>
                            <input
                                type="number"
                                name="age"
                                id='age'
                                min="5" max="120"
                                value={inputs.age || ""}
                                onChange={handleChange} />
                            <div >
                                <small></small>

                            </div>
                        </div>


                        <div className={styles.form_control}>
                            <label htmlFor='address'>ที่อยู่&nbsp;&nbsp;</label>
                            <input
                                type="textarea"
                                name="address"
                                id='address'
                                value={inputs.address || ""}
                                onChange={handleChange} />
                            <div >
                                <small></small>

                            </div>
                        </div>


                        <div className={styles.form_control}>
                            <label htmlFor='phone'>เบอร์โทรศัพท์</label>
                            <input
                                type="number"
                                name="phone"
                                id='phone'
                                value={inputs.phone || ""}
                                onChange={handleChange} />
                            <small></small>
                        </div>

                        <button className={styles.btnRegis} type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Register