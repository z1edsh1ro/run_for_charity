package th.ac.ku.kps.eng.cpe.se.restservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import th.ac.ku.kps.eng.cpe.se.dto.RoleDTO;
import th.ac.ku.kps.eng.cpe.se.dto.UserDTO;
import th.ac.ku.kps.eng.cpe.se.model.Agency;
import th.ac.ku.kps.eng.cpe.se.model.Appove;
import th.ac.ku.kps.eng.cpe.se.model.Manager;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.response.CommonResponse;
import th.ac.ku.kps.eng.cpe.se.response.UserResponse;
import th.ac.ku.kps.eng.cpe.se.service.AgencyService;
import th.ac.ku.kps.eng.cpe.se.service.AppoveService;
import th.ac.ku.kps.eng.cpe.se.service.ManagerService;
import th.ac.ku.kps.eng.cpe.se.service.ProjectService;
import th.ac.ku.kps.eng.cpe.se.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {
	@Autowired
	private UserService userservice;
	@Autowired
	private AgencyService agencyservice;
	@Autowired
	private ManagerService managerservice;
	@Autowired
	private AppoveService appoveservice;
	@Autowired
	private ProjectService projectservice;
	@GetMapping("/auth/user")
	public UserResponse getAuthUser(@RequestHeader("token") String token){
		User user = userservice.validateToken(token);
		UserResponse userreps = new UserResponse();
		if (user != null) {
			userreps.setMsg("ok");
			userreps.setStatus("200");
			userreps.setUser(user);
			return userreps;
		} else {
			userreps.setMsg("Unauthorized");
			userreps.setStatus("401");
			return userreps;
		}
	}
	
	@GetMapping("/users/projects/{id}")
	public List<User> findByProject(@PathVariable("id")int id){
		return (List<User>) userservice.findByProject(projectservice.getProjectById(id));
	}
	
	@GetMapping("/users/project/count/{id}")
	public Long countByProject(@PathVariable("id")int id){
		return userservice.countByProject(projectservice.getProjectById(id));
	}
	
	@GetMapping("/users/agencies/{id}")
	public List<User> findByAgency(@PathVariable("id")int id){
		return (List<User>) userservice.findByAgency(agencyservice.findById(id));
	}

	@GetMapping("/users/agencies/count/{id}")
	public Long countByAgency(@PathVariable("id")int id){
		return userservice.countByAgency(agencyservice.findById(id));
	}
	
	@GetMapping("/users/{id}")
	public User countByProject(@PathVariable("id") String id){
		return userservice.getUserById(id);
	}
	
	@DeleteMapping("/users/{id}")
	public void deleteUser(@PathVariable("id")int id) {
		userservice.delete(id);
	}
	
	@PutMapping("auth/users")
	public CommonResponse updateUser(@RequestHeader("token") String token,@RequestBody UserDTO user) {
		User u = userservice.validateToken(token);
		CommonResponse reps = new CommonResponse();
		if (u != null) {
			u.setFristName(user.getFristName());
			u.setLastName(user.getLastName());
			u.setAge(user.getAge());
			u.setEmail(user.getEmail());
			u.setAddress(user.getAddress());
			u.setPhone(user.getPhone());
			userservice.update(u);
			reps.setMsg("Update");
			reps.setStatus("200");
		}
		else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
		}
		return reps;
		
	}
	@PutMapping("/auth/users/{id}")
	public CommonResponse updateStatus(@PathVariable("id") int id,@RequestHeader("token") String token,@RequestBody RoleDTO user) {
		User usertoken = userservice.validateToken(token);
		CommonResponse reps = new CommonResponse();
		Appove ap = appoveservice.findById(id);
		if (usertoken != null) {	
			Agency a = ap.getAgency();
			User u = ap.getUserByIdUser();
			if((user.getRole().equals("ผู้รับผิดชอบโครงการ")&&usertoken.getRole().equals("ผู้รับผิดชอบโครงการ"))) {
				ap.setDescription("อนุมัติ");
				u.setRole(user.getRole());
				managerservice.save(new Manager(a,u));
				userservice.update(u);
				ap.setUserByIdApprover(usertoken);
			}
			else if(user.getRole().equals("ผู้รับผิดชอบหน่วยงาน")&&user.getRole().equals("ผู้รับผิดชอบหน่วยงาน")){
				ap.setDescription("อนุมัติ");
				u.setRole(user.getRole());
				userservice.update(u);
				ap.setUserByIdApprover(usertoken);
			}
			else {
				ap.setDescription("ไม่อนุมัติ");
			}
			reps.setMsg("Update");
			reps.setStatus("200");
			appoveservice.save(ap);
		}	
		else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
		}
		return reps;
		
	}
}
