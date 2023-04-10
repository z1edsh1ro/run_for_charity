import Navbar from "../component/Navbar";
import { useState, useEffect } from "react";
import "../style/default.css";
import { useParams,useNavigate } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Grid, TextField, Typography, Button } from '@mui/material';
import Swal from 'sweetalert2';
import styles from '../style/DetailEventpage.module.css'
import withReactContent from 'sweetalert2-react-content';
import axios from "axios";


function RegisterForRun() {
    const MySwal = withReactContent(Swal);
    const [file, setFile] = useState('')
    const { id } = useParams();
    const [isLoaded, setIsLoaded] = useState(true);
    const [data, setData] = useState('');
    const [info, setInfo] = useState('');
    const [imageKey, setImageKey] = useState(Date.now());
    const Mytoken = localStorage.getItem('token');
    var myHeaders = new Headers();
    myHeaders.append("token", Mytoken);

    async function fetchData() {
      try {
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow'
        };
        const response1 = await fetch('http://localhost:8080/api/taskprojects/id/'+id);
        // console.log(response);
        const json1 = await response1.json();
        setData(json1);
        // await new Promise(resolve => setTimeout(resolve, 3000));
        // const fetchData=async()=>{
        //   setTimeout(async()=>{
        //   const response = await axios.get(
        //     'http://localhost:8080/api/auth/createqrcode/'+data.project.phone+"/"+data.priceTask, requestOptions
        //   )
        //   setInfo(response);
        //   console.log(info)
        // },2000)
        // }
        // fetchData()
        // const response2 = await fetch('http://localhost:8080/api/auth/createqrcode/'+data.project.phone+"/"+data.priceTask, requestOptions);
        // const json2 = await response2.json();
        // setInfo(json2);
        // console.log(json2);
      } catch (error) {
        console.log(error);
      }
    }

    const handleChange = (e) => {
      console.log(e.target.files)
      setFile(e.target.files[0])
    }

    async function fetchQRCODE() {
      try {
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow'
        };
        const response = await fetch('http://localhost:8080/api/auth/createqrcode/'+data.project.phone+"/"+data.priceTask, requestOptions);
        console.log(response);
        // console.log(data.project.phone)
        const json = await response.json();
        setInfo(json);
      } catch (error) {
        console.log(error);
      }
    }

    // async function fetchQRCODE() {
    //   try {
    //     var requestOptions = {
    //       method: 'POST',
    //       headers: myHeaders,
    //       redirect: 'follow'
    //     };
    //     const response = await fetch('http://localhost:8080/api/auth/createqrcode/'+,{

    //     });
    //     console.log(response);
    //     const json = await response.json();
    //     setData(json);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    useEffect(() => {
      // var requestOptions1 = {
      //   method: 'GET',
      //   redirect: 'follow'
      // };
      // fetch("http://localhost:8080/api/taskprojects/id/"+id, requestOptions1)
      //   .then(response => response.json())
      //   .then(result => {
      //     console.log(result)
      //     setTask(result);
      //     console.log(task);
      //   })
      //   .catch(error => console.log('error', error));
      fetchData();
      // new Promise(resolve => setTimeout(resolve, 3000));
      
      // fetchData();
      // fetchQRCODE();
    }, []);
    // useEffect(() => {
    //   if(data!=null){
    //     console.log("dd")
    //     fetchQRCODE()
    //   }
      
    // }, []);
    // useEffect(() => {
    //   fetchQRCODE();
    // }, []);
    // useEffect(() => {
    //   var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     redirect: 'follow'
    //   };

    // fetch("http://localhost:8080/api/auth/createqrcode/"+data.project.phone+"/"+data.priceTask, requestOptions)
    // .then(response => response.json())
    // .then(result => {
    //     console.log(result)
    //     if (result.status === '201') {
    //       // console.log(task)
    //         setInfo(result.results)
    //         setIsLoaded(false);
    //         // console.log(result.results)
    //     }
    //     else if (result.status === '401') {
    //         navigate('/');
    //     }
    // })
    // .catch(error => console.log('error', error));
    // }, []);
    const check=()=>{
        fetchQRCODE()
    }
    const handleSubmit = (event) => {
      event.preventDefault();
    
      const formData = new FormData();
      formData.append('evidencefile',file);
    
      createUser(formData)
        .then(response => {
          console.log(response.data);
          // handle success
        })
        .catch(error => {
          console.log(error);
          // handle error
        });
    }

    const createUser = (formData) => {
      return axios.post('http://localhost:8080/api/auth/registerprojects/'+id, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'token':Mytoken
        }
      });
    }

    // const getProject = (id) => {
    //   myHeaders.append("token", Mytoken);
      
    //   var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     redirect: 'follow'
    //   };
    //   fetch("http://localhost:8080/api/auth/registerprojects/"+id, requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));

    //     var requestOptions = {
    //         method: 'POST',
    //         headers: myHeaders,
    //         // body: formdata,
    //         redirect: 'follow'
    //     };
        // fetch("http://localhost:8080/api/auth/auth/donatedetails/" , requestOptions)
        //     .then(response => response.json())
        //     .then(result => {
        //         console.log(result)
        //         if (result.status === '200') {
        //             MySwal.fire({
        //                 icon: 'success',
        //                 title: 'ส่งหลักฐานสำเร็จรอผู้รับผิดชอบหน่วยงานยื่นยัน',
        //                 text: 'You clicked the button!'
        //             }).then((value) => {
                       
        //                     navigate('/home') 
        //             })
        //         }
        //         else {
        //             MySwal.fire({
        //                 icon: 'error',
        //                 title: 'Oops...',
        //                 text: 'Something went wrong!',
        //                 footer: '<a href="">Why do I have this issue?</a>'
        //             })
        //         }
        //     })
        //     .catch(error => console.log('error', error));
    return (
        <div className={styles.DetailEventPage}>
        <Navbar />
        <section id={styles.event}>
        <div className={styles.main2}>
            <ul className={styles.cards}>
                <li className={styles.cards_item}>
                    <div className={styles.card}>
                        <div  className={styles.card_content}>
                            {/* <h2 className={styles.card_title}>{nameProject}</h2> */}
                            <img src={`${info.results}`} key={imageKey}/>
                            <Button type='submit' variant="contained" onClick={() => check()} fullWidth>แสดง QR CODE</Button>
                            <p className={styles.card_text2}>จำนวนเงิน : </p><p className={styles.card_text}>{data.priceTask} บาท</p><br></br>
                            {/* <p className={styles.card_text2}>วันที่เปิดรับสมัคร : </p><p className={styles.card_text}> {dateregisStart} - {dateregisEnd}</p><br></br>
                            <p className={styles.card_text2}>วันวิ่ง : </p><p className={styles.card_text}> {dateStart} - {dateEnd}</p><br></br>
                            <p className={styles.card_text2}>ติดต่อสอบถาม : </p><p className={styles.card_text}> {phoneProject}</p><br></br>
                            <p className={styles.card_text}> {discription}</p> */}
                            <div>
                              <input type="file" onChange={handleChange} /> <br />
                              <button onClick={handleSubmit} >SUBMIT</button>
                            </div>
                            {/* <Grid item xs={12}><Button type='submit' variant="contained" onClick={() => getProject(1)} fullWidth>ยืนยัน</Button></Grid> */}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    <footer className={styles["section-p1"]}>
        <div className={styles.content}>
          <div className={`${styles.left} ${styles.box}`}>
            <div className={styles.upper}>
              <div className={styles.topic}>เกี่ยวกับเรา</div>
              <p>SE Project: Charity</p>
            </div>
            <div className={styles.lower}>
              <div className={styles.topic}>ติดต่อเรา</div>
              <div>
                <p>
                  1 Village,Kampangsaen Sub-district, Kampangsaen
                  District,Nakhon Pathom,73140
                </p>
                <p>CONTACT PHONE: (+66)02-58741XX</p>
                <p>9.00-17.00,Mon - Fri</p>
              </div>
            </div>
          </div>
          <div className={`${styles.middle} ${styles.box}`}>
            <div className={styles.topic}>Info</div>
            <div>
              <a href="#">วิ่งเพื่อการกุศลคือ</a>
            </div>
            <div>
              <a href="#">คู่มือการใช้งานเว็บไซต์</a>
            </div>
            <div>
              <a href="#">นโยบาย</a>
            </div>
            <div>
              <a href="#">คำถามที่พบบ่อย</a>
            </div>
          </div>
          <div className={`${styles.right} ${styles.box}`}>
            <form action="#">
              <div className={styles.topic}>Follow Us</div>
              <div className={styles["media-icons"]}>
              <a href="#"><FacebookIcon /></a>
                                <a href="#"><InstagramIcon /></a>
                                <a href="#"><YouTubeIcon /></a>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>©2023,SE Project - Run For Charity</p>
        </div>
      </footer>
    </div>
    );
}
export default RegisterForRun