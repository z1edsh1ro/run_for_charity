import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import MySwal from 'sweetalert2';
import '../../style/default.css';
import styles from '../../style/CreateProject.module.css'
function CreateProject() {
  const { idAgency } = useParams();
  const Mytoken = localStorage.getItem('token');


  const navigate = useNavigate();

  const [project, Setproject] = useState({})
  const [inputs, setInputs] = useState({});
  const [file1, setFile1] = useState('')
  const [file2, setFile2] = useState('')
  const [file3, setFile3] = useState('')

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleChange1 = (e) => {
    console.log(e.target.files)
    setFile1(e.target.files[0])
  }
  const handleChange2 = (e) => {
    console.log(e.target.files)
    setFile2(e.target.files[0])
  }
  const handleChange3 = (e) => {
    console.log(e.target.files)
    setFile3(e.target.files[0])
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const createUser = (formData) => {
      return axios.post('http://localhost:8080/api/projects/' + idAgency, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'token': Mytoken
        }
      });
    }
    formData.append('project', JSON.stringify({
      nameProject: inputs.nameProject,
      dateStart: inputs.dateStart,
      dateEnd: inputs.dateEnd,
      phone: inputs.phone,
      discription: inputs.discription,
      addressProject: inputs.addressProject,
      dateRegisStart: inputs.dateRegisStart,
      dateRegisEnd: inputs.dateRegisEnd,
    }
    ));

    formData.append('appove', JSON.stringify({
      dateAppove: formattedDate
    }
    ));

    formData.append('evidencefile', file1);
    formData.append('imagePofilefile', file2);
    formData.append('imagePosterfile', file3);
    // if (result.status === '200') {
    //           MySwal.fire({
    //             icon: 'success',
    //             title: 'อนุมัติสำเร็จ',
    //             text: 'You clicked the button!'
    //           }).then((value) => {
    //             window.location.reload(false);

    //           })
    //         }
    //         else {
    //           MySwal.fire({
    //             icon: 'error',
    //             title: 'Oops...',
    //             text: 'Something went wrong!',
    //             footer: '<a href="">Why do I have this issue?</a>'
    //           })
    //         }
    createUser(formData)
      .then(response => {
        console.log(11)
        console.log(response.data);
        Setproject(response.data)
        console.log(response.data.msg)
        MySwal.fire({
          icon: 'success',
          
          text: 'You clicked the button!'
        })
        // handle success
        window.location = '/taskproject/' + response.data.msg
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
      <div className={styles.mainCreateProject}>
        <h1>ลงทะเบียนโครงการ</h1>
        <div className={styles.Regis}>
          <form onSubmit={handleSubmit} id="form" className={styles.form}>
            <div className={styles.formMainCreateProject}>
              <div className={styles.formMainLeft}>
                <div className={styles.form_control}>
                  <label htmlFor='nameProject'>ชื่อโครงการ</label>
                  <input
                    type="text"
                    name="nameProject"
                    id='nameProject'
                    value={inputs.nameProject || ""}
                    onChange={handleChange} />
                </div>
                <div className={styles.form_control}>
                  <label htmlFor='dateStart'>วันเริ่มงาน</label>
                  <input
                    type="date"
                    name="dateStart"
                    id='dateStart'
                    value={inputs.dateStart || ""}
                    onChange={handleChange} />
                </div>
                <div className={styles.form_control}>
                  <label htmlFor='dateEnd'>วันจบงาน</label>
                  <input
                    type="date"
                    name="dateEnd"
                    id='dateEnd'
                    value={inputs.dateEnd || ""}
                    onChange={handleChange} />
                </div>
                <div className={styles.form_control}>
                  <label htmlFor='phone'>เบอร์โทรศัพท์</label>
                  <input
                    type="text"
                    name="phone"
                    id='phone'
                    value={inputs.phone || ""}
                    onChange={handleChange} />
                </div>
                <div className={styles.form_control}>
                  <label htmlFor='discription'>คำอธิบาย</label>
                  <input
                    type="text"
                    name="discription"
                    id='discription'
                    value={inputs.discription || ""}
                    onChange={handleChange} />
                </div>
              </div>
              <div className={styles.formMainRight}>
                <div className={styles.form_control}>
                  <label htmlFor='addressProject'>ที่อยู่</label>
                  <input
                    type="text"
                    name="addressProject"
                    id='addressProject'
                    value={inputs.addressProject || ""}
                    onChange={handleChange} />
                </div>
                <div className={styles.form_control}>
                  <label htmlFor='dateRegisStart'>วันเริ่มต้นการสมัคร</label>
                  <input
                    type="date"
                    name="dateRegisStart"
                    id='dateRegisStart'
                    value={inputs.dateRegisStart || ""}
                    onChange={handleChange} />
                </div>
                <div className={styles.form_control}>
                  <label htmlFor='dateRegisEnd'>วันสิ้นสุดการสมัคร</label>
                  <input
                    type="date"
                    name="dateRegisEnd"
                    id='dateRegisEnd'
                    value={inputs.dateRegisEnd || ""}
                    onChange={handleChange} />
                </div>
                <div>
                  <input type="file" onChange={handleChange1} /> <br />
                  <input type="file" onChange={handleChange2} /> <br />
                  <input type="file" onChange={handleChange3} /> <br />
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

export default CreateProject;