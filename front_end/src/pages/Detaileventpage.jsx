import React, { useState ,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";

import Navbar from '../component/Navbar'
import styles from '../style/DetailEventpage.module.css'
import { BsBookmarkFill,BsBookmark, BsBookmarksFill } from 'react-icons/bs';
import Modal from 'react-modal';
import {Link} from "react-router-dom";
import { TextField} from "@mui/material";
import { set } from "lodash";
import Button from '@mui/material/Button';
import { Style  } from "@mui/icons-material";
import pop from "../style/PopUp.module.css";
// function SwitchIcon() {
//     const [icon, setIcon] = useState('icon1');
  
//     const handleClick = () => {
//       if (icon === 'icon1') {
//         setIcon('icon2');
//       } else {
//         setIcon('icon1');
//       }
//     };
  
//     return (
       
//       <button className={styles.btn3} onClick={handleClick}>
//         {icon === 'icon1' ? <BsBookmarkFill /> : <BsBookmark />}
//       </button>
//     );
//   }

//   function PopupButton() {
//     const [isOpen, setIsOpen] = useState(false);
  
//     const toggleModal = () => {
//       setIsOpen(!isOpen);
//     };
  
//     return (
//       <div>
//         <button className={styles.btn2} onClick={toggleModal} >บริจาค</button>
//         <Modal className={styles.idv} isOpen={isOpen} onRequestClose={toggleModal} >
//           <div className={styles.idv}>
//           <h2>หน้าชำระ</h2>
//           {/* Qrcode */}
//           {/* <form onSubmit={handleSubmit} >
//           <TextField id="outlined-basic" label="จำนวนเงิน" variant="outlined" 
          
//           // onChange={(e)=>}
         
//           /> 
//             <Link>
//             <button className={styles.bt} variant="contained">ดำเนินการจ่ายเงิน</button>
//             </Link>
//           </form>  */}
//           <TextField id="outlined-basic" label="จำนวนเงิน" variant="outlined"/>
//           <Link to={"/eventpage"}><button className={styles.bt} type="submit">ดำเนินการจ่ายเงิน</button></Link>
//           <button className={styles.bt} onClick={toggleModal}>ยกเลิก</button>
//           </div>
//         </Modal>
//       </div>
//     );
//   }

function DetailEventPage() {
  const { id } = useParams();
  const [nameProject, setnameProject] = useState('');
  const [discription, setdiscription] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [dateregisStart, setDateregisStart] = useState('');
  const [dateregisEnd, setDateregisEnd] = useState('');
  const [addressProject, setAddressProject] = useState('');
  const [phoneProject,  setPhoneproject] = useState('');
  const [info, setInfo] = useState('');
  const [task, setTask] = useState('');
  const [imagePoster, setImagePoster] = useState('');
  const [select, setSelect] = useState('');
  const [money, setMoney] = useState('');
  // useEffect(() => {

  //   const Mytoken = localStorage.getItem('token');
  //   var myHeaders = new Headers();
  //   myHeaders.append("token", Mytoken);
  //   var requestOptions = {
  //     method: 'GET',
  //     headers: myHeaders,
  //     redirect: 'follow'
  //   };
  //   fetch("http://localhost:8080/api/auth/followprojects/"+id, requestOptions)
  //     .then(response => response.JSON())
  //     .then(result => {console.log(result)
  //       setInfo(result);
  //     })
  //     .catch(error => console.log('error', error));
      

  // }, [])
  // console.log(info);

//   const [idAgency, setAgency] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [phone, setPhone] = useState('');
    useEffect(() => {
        const Mytoken = localStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Token", Mytoken);

         var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        var requestOptions1 = {
          method: 'GET',
          redirect: 'follow'
      };

        fetch("http://localhost:8080/api/auth/followprojects/"+id, requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result)
          setInfo(result);
        })
        .catch(error => console.log('error', error));
        
        fetch("http://localhost:8080/api/taskprojects/count/"+id, requestOptions1)
        .then(response => response.json())
        .then(result => {console.log(result)
          setTask(result);
        })
        .catch(error => console.log('error', error));

        fetch("http://localhost:8080/api/projects/" + id, requestOptions)
          .then(response => response.json())
          .then(result => { console.log(result);
            setnameProject(result.nameProject);
            setdiscription(result.discription);
            setDateStart(result.dateStart);
            setDateEnd(result.dateEnd);
            setAddressProject(result.addressProject);
            setDateregisStart(result.dateRegisStart);
            setDateregisEnd(result.dateRegisEnd);
            setPhoneproject(result.phone);
            setDateStart(result.dateStart);
            setDateEnd(result.dateEnd);
            setImagePoster(result.imagePoster);
            // setAgency(result.idAgency);
            // setEmail(result.email);
            // setAddress(result.address);
            // setPhone(result.phone);
            // console.log(result);
    
          })
          .catch(error => console.log('error', error));
      }, [id])

      function FollowPost() {
        console.log(id)
          const Mytoken = localStorage.getItem('token');
          var myHeaders = new Headers();
          myHeaders.append("token", Mytoken);

          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
          };

        fetch("http://localhost:8080/api/auth/followprojects/"+id, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      }

       function FollowDelete() {
          const Mytoken = localStorage.getItem('token');
          var myHeaders = new Headers();
          myHeaders.append("token", Mytoken);
          var requestOptions = {
          method: 'DELETE',
          headers: myHeaders,
          redirect: 'follow'
          };

          fetch("http://localhost:8080/api/auth/followprojects/"+id, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
       }

      function Check(){
        
        if (info.msg ==='follow'){
          return 'icon2'
        }
        else
        { 
            return 'icon1'
        }
    
      }
      function SwitchIcon() {
        const [icon, setIcon] = useState(Check());
        console.log(info.msg);
    

    
        
        console.log("==============");
        const handleClick = () => {
          if (icon === 'icon1') {
            FollowPost()
            setIcon('icon2');
            
          } else {
            FollowDelete()
            setIcon('icon1');  
                    
          }
        };
          
        return (          
          <div>
      {icon === 'icon2' ? ( 
        <BsBookmarksFill size={32} color="red" className="book-icon" onClick={handleClick} />
      ) : (
        <BsBookmark size={32} color="blue" className="book-icon cilcked" onClick={handleClick} />
      )}
    </div>
        );
      }
      // const [money, setMoney] = useState('');
      //   const [data, setData] = useState({
      //     money:money,
      //     phone:phoneProject,
      //     idProject:id
      //   });
      function PopupButton() {
        const [isOpen, setIsOpen] = useState(false);


        const toggleModal = () => {
          setIsOpen(!isOpen);
        };

        const goto = (id)=>{
          console.log(id)
          // window.location = '/donate/' + id
        }
        return (
           <div class="main"> 
            <button className={pop.btn2} onClick={toggleModal} >บริจาค</button>
            <Modal className={pop.idv} isOpen={isOpen} onRequestClose={toggleModal} >
              <div className={pop.idv}>
              <h2>หน้าชำระ</h2>

              <TextField id="money" label="จำนวนเงิน" variant="outlined"
              onChang={(e) => {
                setMoney(e.target.value);
                console.log(money);
              }}
              />

              {/* <input id={id} value={money} onInput={e => setMoney(e.target.value)}/> */}
              <button type="submit" className={styles.bt} onClick={() => goto(money)}>ดำเนินการจ่ายเงิน</button>
              <button type="button" className={pop.bt} onClick={toggleModal}>ยกเลิก</button>
              </div>
            </Modal>
          </div>
        );
      }
      // function asd(){
      //   localStorage.setItem('money', money);
      //   localStorage.setItem('phone', phone);
      //   window.location = '/paymentqrcode/' + id
      // }
      function click(id){
        window.location = '/donate/' + id
      }
      const handleChange1 = event => {
        setSelect(event.target.value);
      }
    return (
        <div className={styles.DetailEventPage}>
        <Navbar />
        <section id={styles.event}>
        <div className={styles.main}>
            <ul className={styles.cards}>
                <li className={styles.cards_item}>
                    <div className={styles.card}>
                        <div  className={styles.card_content}>
                            <h2 className={styles.card_title}>{nameProject}</h2>
                            <div className={styles.card_image}>{imagePoster && <img src={require(`../Files-Upload/${imagePoster}`)}/>}</div>
                            <p className={styles.card_text2}>สถานที่วิ่ง : </p><p className={styles.card_text}> {addressProject}</p><br></br>
                            <p className={styles.card_text2}>วันที่เปิดรับสมัคร : </p><p className={styles.card_text}> {dateregisStart} - {dateregisEnd}</p><br></br>
                            <p className={styles.card_text2}>วันวิ่ง : </p><p className={styles.card_text}> {dateStart} - {dateEnd}</p><br></br>
                            <p className={styles.card_text2}>ติดต่อสอบถาม : </p><p className={styles.card_text}> {phoneProject}</p><br></br>
                            <p className={styles.card_text}> {discription}</p>
                            
                    

                            <div className={styles.container2}>
                            <p class={styles.card_text3}>เลือกประเภท : &emsp;
                            <select value={select} onChange={handleChange1}>
                            <option value="">โปรดเลือก</option>
                              {task && task.map(item => (
                                <option  key={item.taskproject.idTaskProject} value={item.taskproject.idTaskProject}>{item.taskproject.taskName} : ({parseInt(item.taskproject.limitJoin)-parseInt(item.count)})</option>
                              ))}
                            </select>
                            {/* <p>Selected value: {select}</p> */}
                            </p><br></br>
                            <Button onClick={() => click(select)} variant="contained" color="success" >สมัคร</Button>
                            <PopupButton/>
                            <SwitchIcon/>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
        <footer className={styles['section-p1']}>
            <div className={styles.content}>
                <div className={`${styles.left} ${styles.box}`}>
                    <div className={styles.upper}>
                        <div className={styles.topic}>เกี่ยวกับเรา</div>
                        <p>SE Project: Charity</p>
                    </div>
                    <div className={styles.lower}>
                        <div className={styles.topic}>ติดต่อเรา</div>
                        <div>
                            <p>1 Village,Kampangsaen Sub-district, Kampangsaen District,Nakhon Pathom,73140</p>
                            <p>CONTACT PHONE: (+66)02-58741XX</p>
                            <p>9.00-17.00,Mon - Fri</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.middle} ${styles.box}`}>
                    <div className={styles.topic}>Info</div>
                    <div><a href="#">วิ่งเพื่อการกุศลคือ</a></div>
                    <div><a href="#">คู่มือการใช้งานเว็บไซต์</a></div>
                    <div><a href="#">นโยบาย</a></div>
                    <div><a href="#">คำถามที่พบบ่อย</a></div>
                </div>
                <div className={`${styles.right} ${styles.box}`}>
                    <form action="#">
                        <div className={styles.topic}>Follow Us</div>
                        <div className={styles['media-icons']}>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
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
export default DetailEventPage