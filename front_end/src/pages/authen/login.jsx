import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styles from '../../style/Login.module.css'
import  '../../style/default.css'


function Login() {

    const MySwal = withReactContent(Swal);

    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        // alert(inputs);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "idUser": inputs.username,
            "password": inputs.password,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,     
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/login", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                localStorage.setItem('role', result.guest);
                const role = localStorage.getItem('role');
                if (result.status === '200') {
                    MySwal.fire({
                        icon: 'success',
                        title: 'Good job!',
                        text: 'You clicked the button!'
                    }).then((value) => {
                        if(role === 'ผู้รับผิดชอบโครงการ'){
                            navigate('/profilereponsible')
                        }
                        else if(role === 'user'){
                            navigate('/profileuser')
                        }
                        else if(role === 'admin'){
                            navigate('/profileadmin')
                        }
                        else{
                            navigate('/profileagency')
                        }
                        localStorage.setItem('token', result.accessToken);
                        
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
    const regis = () => {
        navigate('register');
    };
    return (
    <div className={styles.back}>
        <div className={styles.mainLogin}>
            <h1>เข้าสู่ระบบ</h1>
            
            <form onSubmit={handleSubmit} className={styles.form}>
                <label >Username</label>
                <input
                    placeholder='username'
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                    required="required"
                />
                <label >Password</label>
                <input
                    placeholder='password'
                    type="password"
                    name="password"
                    value={inputs.password || ""}
                    onChange={handleChange}
                    required="required"

                />
                <button className={styles.loginBtn} type="submit">Login</button>
            </form>
            <div className={styles.member}>
                หากยังไม่มีบัญชี? <span onClick={regis}>สมัครที่นี่</span>   
            </div>
        </div>
        </div>
    )
}

export default Login