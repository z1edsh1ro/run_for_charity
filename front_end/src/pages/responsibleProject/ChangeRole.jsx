import React from 'react'
import { useState } from "react";
import {  useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styles from '../../style/ChangeRole.module.css'
import '../../style/default.css';
function ChangeRole() {
    const MySwal = withReactContent(Swal);
    const { idAgency } = useParams();
    const navigate = useNavigate();
    const Mytoken = localStorage.getItem('token');
    const [file1, setFile1] = useState('')

    const handleChange1 = (e) => {
        console.log(e.target.files)
        setFile1(e.target.files[0])
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("token", Mytoken);

        var formdata = new FormData();
        formdata.append("evidencefile", file1);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/auth/appoves/" + idAgency, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.status === '200') {
                    MySwal.fire({
                        icon: 'success',
                        title: 'ส่งหลักฐานสำเร็จรอผู้รับผิดชอบหน่วยงานยื่นยัน',
                        text: 'You clicked the button!'
                    }).then((value) => {
                       
                            navigate('/profilereponsible')
                      
                    
                        
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
            .catch (error => console.log('error', error));
}

return (
    <div className={styles.bg}>
        <div className={styles.mainChangeRole}>
            <h1>ส่งหลักฐาน</h1>
            <div className={styles.Regis}>
                <form onSubmit={handleSubmit} id="form" className={styles.form}>
                    <div className={styles.inputChange}>
                        <input type="file" onChange={handleChange1} /> <br />

                    </div>
                    <button className={styles.btnRegis} type="submit" >ยืนยัน</button>
                </form>
            </div>
        </div>
    </div>
)

}

export default ChangeRole