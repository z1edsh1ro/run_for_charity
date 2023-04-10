package th.ac.ku.kps.eng.cpe.se.restservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import th.ac.ku.kps.eng.cpe.se.dto.LoginDTO;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.response.LoginResponse;
import th.ac.ku.kps.eng.cpe.se.service.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class LoginController {
	@Autowired
	private LoginService loginservice;
	@PostMapping("/login")
	public LoginResponse authenticateCredentials(@RequestBody LoginDTO login) {
		User user = loginservice.validUser(login);
		LoginResponse resp = new LoginResponse();
		if (user == null) {
			resp.setMsg("Invalid Username or password");
			resp.setStatus("401");
			return resp;
		}
		resp.setAccessToken(loginservice.generateToken(login));
		resp.setRole(user.getRole());
		//responsePojo.setResult(cus.getUsername());
		resp.setStatus("200");
		resp.setMsg("OK");
		return resp;
	}
}
