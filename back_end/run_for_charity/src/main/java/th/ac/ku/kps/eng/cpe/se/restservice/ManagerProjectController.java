package th.ac.ku.kps.eng.cpe.se.restservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import th.ac.ku.kps.eng.cpe.se.model.Manager;
import th.ac.ku.kps.eng.cpe.se.model.ManagerProject;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.response.ManagerProjectResponse;
import th.ac.ku.kps.eng.cpe.se.response.ManagerResponse;
import th.ac.ku.kps.eng.cpe.se.service.ManagerProjectService;
import th.ac.ku.kps.eng.cpe.se.service.ManagerService;
import th.ac.ku.kps.eng.cpe.se.service.ProjectService;
import th.ac.ku.kps.eng.cpe.se.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ManagerProjectController {
	@Autowired
	private ManagerProjectService managerprojectservice;
	@Autowired
	private UserService userservice;
	@Autowired 
	private ManagerService managerservice;
	@Autowired 
	private ProjectService projectservice;
	@GetMapping("/auth/managerprojects")
	public ManagerProjectResponse getAll(@RequestHeader("token") String token) {
		User user = userservice.validateToken(token);
		ManagerProjectResponse reps = new ManagerProjectResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			reps.setManagerproject(managerprojectservice.findAll());
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@GetMapping("/auth/managerprojects/{status}")
	public ManagerProjectResponse findManagerProjectByStatus(@RequestHeader("token") String token,@PathVariable("status")String status) {
		User user = userservice.validateToken(token);
		ManagerProjectResponse reps = new ManagerProjectResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			reps.setManagerproject(managerprojectservice.findManagerProjectByStatus(status));
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@GetMapping("/auth/managerprojects/users")
	public ManagerProjectResponse findManagerProjectByStatus(@RequestHeader("token") String token) {
		User user = userservice.validateToken(token);
		ManagerProjectResponse reps = new ManagerProjectResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			reps.setManagerproject(managerprojectservice.findManagerProjectByUser(user));
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@PostMapping("/auth/managerprojects/{id}")
	public ManagerProjectResponse create(@RequestHeader("token") String token,@PathVariable("id")int id) {
		User user = userservice.validateToken(token);
		ManagerProjectResponse reps = new ManagerProjectResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			Manager m = managerservice.findByUser(user);
			Project p = projectservice.getProjectById(id);
			managerprojectservice.save(new ManagerProject(m, p, "รอพิจารณา"));
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@PutMapping("/auth/managerprojects/{id}/{status}")
	public ManagerProjectResponse update(@RequestHeader("token") String token,@PathVariable("id")int id,@PathVariable("status")String status) {
		User user = userservice.validateToken(token);
		ManagerProjectResponse reps = new ManagerProjectResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			ManagerProject m = managerprojectservice.findById(id);
			if(status.equals("pass")) {
				m.setStatus("อนุมัติ");
			}
			else {
				m.setStatus("ไม่อนุมัติ");
			}
			
			managerprojectservice.save(m);
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
}
