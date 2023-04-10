const phone = localStorage.getItem('phone');
const money = localStorage.getItem('money');

console.log(phone,money );
// import React from 'react'
// import '../style/default.css'
// import Navbar from '../component/Navbar'
// import $ from 'jquery';
// function PaymentQrcode() {
//     const express = require('express')
//     const app = express();
//     const QRCode = require('qrcode')
//     const generatePayload = require('promptpay-qr')
//     const bodyParser = require('body-parser')
//     const _ = require('lodash')
//     const cors = require('cors')
//     app.use(cors())
//     app.use(bodyParser.json())
//     app.use(bodyParser.urlencoded({ extended: true }))
//     const server = app.listen(3000, () => {
//         console.log('server is running........')
//     })
//     app.post('/generateQR', (req, res) => {
//         const amount = parseFloat(_.get(req, ["body", "amount"]));
//         const mobileNumber = '0979252999';
//         const payload = generatePayload(mobileNumber, { amount });
//         const option = {
//             color: {
//                 dark: '#000',
//                 light: '#fff'
//             }
//         }
//         QRCode.toDataURL(payload, option, (err, url) => {
//             if (err) {
//                 console.log('generate fail')
//                 return res.status(400).json({
//                     RespCode: 400,
//                     RespMessage: 'bad : ' + err
//                 })
//             }
//             else {
//                 return res.status(200).json({
//                     RespCode: 200,
//                     RespMessage: 'good',
//                     Result: url
//                 })
//             }

//         })
//     })
//     function genQR() {
//         $.ajax({
//             method: 'post',
//             url: 'http://localhost:3000/generateQR',
//             data: {
//                 amount: parseFloat($("#amount").val())
//             },
//             success: function (response) {
//                 console.log('good', response)
//                 $("#imgqr").attr('src', response.Result)
//             }, error: function (err) {
//                 console.log('bad', err)
//             }
//         })
//     }
//     return (
//         <div className="main-qr">
//             <Navbar />
//             <div className="cardQr">
//                 <input type="text" id="amount" placeholder="amount" />
//                 <button onclick={genQR()}>Generate</button>
//             </div>
//             <img id="imgqr" src="" style="width: 500px; object-fit: contain;"></img>
//             <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>

//         </div>

//     )
// }

// export default PaymentQrcode