package th.ac.ku.kps.eng.cpe.se.restservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import th.ac.ku.kps.eng.cpe.se.dto.UserDTO;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.response.RegisterResponse;
import th.ac.ku.kps.eng.cpe.se.service.UserService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class RegisterController {
	@Autowired
	private UserService userservice;
	
	@PostMapping("/user/create")
	public RegisterResponse createUsers(@Valid @RequestBody UserDTO user, BindingResult bindingResult){
		RegisterResponse resp = new RegisterResponse();
		if (bindingResult.hasErrors()||userservice.getUserById(user.getIdUser())!=null) {
			resp.setStatus("400");
			List<String> errors = bindingResult.getAllErrors().stream()
		            .map(ObjectError::getDefaultMessage)
		            .collect(Collectors.toList());
			if(userservice.getUserById(user.getIdUser())!=null) {
				errors.add("Invalid USER ID: USER ID DUPLICATE");
			}
			resp.setMsg(errors);
			return resp;
		}
		List<String> msg = new ArrayList<String>();
		msg.add("REGISTER SUCCESS");
		resp.setStatus("200");	
		userservice.update(new User(user.getIdUser(),user.getFristName(),user.getPassword(), user.getAge(), user.getAddress(), user.getPhone(), "user",user.getLastName(), user.getEmail()));
		resp.setUser(userservice.getUserById(user.getIdUser()));
		resp.setMsg(msg);
		return resp;
	}
//	private static final Pattern USERID_PATTERN = Pattern.compile("^[a-zA-Z0-9_]+$");
//    private static final Pattern EMAIL_PATTERN = Pattern.compile("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
//    private static final Pattern PASSWORD_PATTERN = Pattern.compile("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$");
//    private static final String ENGLISH_PATTERN = "[a-zA-Z]+";
//    private static final String THAI_PATTERN = "[ก-๙]+";
//    
//	@PostMapping("/user/create")
//	public RegisterResponse createUsers(@RequestBody User user){
//		RegisterResponse resp = new RegisterResponse();
//		List<String> msg = new ArrayList<String>();
//		if(!user.getIdUser().isBlank()&&!user.getPassword().isBlank()&&!user.getFristName().isBlank()&&!user.getLastName().isBlank()&&!user.getAddress().isBlank()&&!user.getEmail().isBlank()&&user.getAge()!=0&&user.getPhone()!=0) {
//			if(userservice.getUserById(user.getIdUser())==null) {
//				if(validateUserId(user.getIdUser())&&validatePassword(user.getPassword())&&validateEmail(user.getEmail())&&validateName(user.getFristName(),user.getLastName())) {
//					resp.setStatus("200");	
//					userservice.update(new User(user.getIdUser(),user.getFristName(),user.getPassword(), user.getAge(), user.getAddress(), user.getPhone(), "user",user.getLastName(), user.getEmail()));
//					resp.setUser(userservice.getUserById(user.getIdUser()));
//					msg.add("ลงทะเบียนสำเร็จ");
//				}
//				else {
//					resp.setStatus("error");
//					if(!validateUserId(user.getIdUser())) {
//						msg.add("USERNAME INCORRECT");
//					}
//					if(!validatePassword(user.getPassword())) {
//						msg.add("PASSWORD INCORRECT");
//					}
//					if(!validateEmail(user.getEmail())) {
//						msg.add("EMAIL INCORRECT");
//					}
//					if(!validateName(user.getFristName(),user.getLastName())){
//						msg.add("FIRSTNAME OR LASTNAME INCORRECT");
//					}
//				}
//			}
//			else {
//				resp.setStatus("error");
//				msg.add("USERNAME DUPLICATE");
//			}
//		}
//		else {
//			resp.setStatus("error");
//			msg.add("VALUE IS NULL");
//		}
//		resp.setMsg(msg);
//		return resp;
//	}
//	
//	private static boolean validateUserId(String name) {
//        Matcher matcher = USERID_PATTERN.matcher(name);
//        return matcher.matches();
//    }
//
//    private static boolean validateEmail(String email) {
//        Matcher matcher = EMAIL_PATTERN.matcher(email);
//        return matcher.matches();
//    }
//
//    private static boolean validatePassword(String password) {
//        Matcher matcher = PASSWORD_PATTERN.matcher(password);
//        return matcher.matches();
//    }
//    
//    private static boolean validateName(String fname, String lname) {
//    	if(fname.matches(".*" + THAI_PATTERN + ".*")&&lname.matches(".*" + THAI_PATTERN + ".*")) {
//    		return true;
//    	}
//    	else if(fname.matches(".*" + ENGLISH_PATTERN + ".*")&&lname.matches(".*" + ENGLISH_PATTERN + ".*")) {
//    		return true;
//    	}
//    	else {
//    		return false;
//    	} 
//    }
    
}
