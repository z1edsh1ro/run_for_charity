package th.ac.ku.kps.eng.cpe.se.restservice;

import java.io.IOException;
import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.pheerathach.ThaiQRPromptPay;
import com.google.zxing.WriterException;

import th.ac.ku.kps.eng.cpe.se.dto.QRCodeDTO;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.response.CommonResponse;
import th.ac.ku.kps.eng.cpe.se.response.QRCodeResponse;
import th.ac.ku.kps.eng.cpe.se.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class QRCodeController {
	@Autowired
	private UserService userservice;
	@PostMapping("auth/createqrcode/{id}/{number}")
	public QRCodeResponse createQRCode(@RequestHeader("token") String token,@PathVariable("id")String id,@PathVariable("number")String number) throws IOException, WriterException {
		User user = userservice.validateToken(token);
		QRCodeResponse reps = new QRCodeResponse();
		if (user != null) {
			ThaiQRPromptPay qrcode = new ThaiQRPromptPay.Builder().dynamicQR().creditTransfer().mobileNumber(id).amount(new BigDecimal(number)).build();
//		String content = qrcode.generateContent();
			reps.setResults("data:image/png;base64,"+qrcode.drawToBase64(300, 300));
			reps.setMsg("create");
			reps.setStatus("201");
		}
		else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
		}
		return reps;
		
	}
}
