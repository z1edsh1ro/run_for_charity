package th.ac.ku.kps.eng.cpe.se.restservice;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import th.ac.ku.kps.eng.cpe.se.model.Agency;
import th.ac.ku.kps.eng.cpe.se.model.Manager;
import th.ac.ku.kps.eng.cpe.se.model.ManagerProject;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.response.AgencyResponse;
import th.ac.ku.kps.eng.cpe.se.response.ManagerResponse;
import th.ac.ku.kps.eng.cpe.se.service.AgencyService;
import th.ac.ku.kps.eng.cpe.se.service.AppoveService;
import th.ac.ku.kps.eng.cpe.se.service.ManagerProjectService;
import th.ac.ku.kps.eng.cpe.se.service.ManagerService;
import th.ac.ku.kps.eng.cpe.se.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ManagerController {
	@Autowired
	private ManagerService managerservice;
	@Autowired
	private UserService userservice;
	@Autowired
	private AgencyService agencyservice;
	@Autowired
	private ManagerProjectService managerprojectservice;
	@Autowired
	private AppoveService appoveservice;
	@GetMapping("/auth/managers") //show all manager
	public ManagerResponse getAll(@RequestHeader("token") String token) {
		User user = userservice.validateToken(token);
		ManagerResponse reps = new ManagerResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			reps.setManager(managerservice.findAll());
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@GetMapping("/managers/{id}") //show all manager
	public Long count(@PathVariable("id")int id) {
		return managerservice.countManager(agencyservice.findById(id));
	}
	@DeleteMapping("/auth/managers/{id}")
	public ManagerResponse leave(@RequestHeader("token") String token,@PathVariable("id")int id) {
		User user = userservice.validateToken(token);
		ManagerResponse reps = new ManagerResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			Agency a = agencyservice.findById(id);
			Manager m = managerservice.findByUserAndAgency(user,a);
			List<ManagerProject> mp = managerprojectservice.findManagerProjectByManager(m);
			for (int i = 0; i < mp.size(); i++) {
				managerprojectservice.delete(mp.get(i));
			}
			managerservice.delete(m);
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
		}
		return reps;
	}
//	@PostMapping(" ") //create manager
//	public ManagerResponse createManager(@RequestHeader("token") String token,@RequestBody Manager manager) {
//		User user = userservice.validateToken(token);
//		ManagerResponse reps = new ManagerResponse();
//		if (user != null) {	
//			managerservice.save(new Manager(manager.getAgency(),manager.getProject(),user));
//			reps.setMsg("ok");
//			reps.setStatus("200");
//			return reps;
//		} else {
//			reps.setMsg("Unauthorized");
//			reps.setStatus("401");
//			return reps;
//		}
//	}
	
}
