package th.ac.ku.kps.eng.cpe.se.restservice;

import java.io.IOException;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import th.ac.ku.kps.eng.cpe.se.model.RegisterProject;
import th.ac.ku.kps.eng.cpe.se.model.TaskProject;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.response.CommonResponse;
import th.ac.ku.kps.eng.cpe.se.response.RegisterProjectResponse;
import th.ac.ku.kps.eng.cpe.se.service.ProjectService;
import th.ac.ku.kps.eng.cpe.se.service.RegisterProjectService;
import th.ac.ku.kps.eng.cpe.se.service.TaskProjectService;
import th.ac.ku.kps.eng.cpe.se.service.UserService;
import th.ac.ku.kps.eng.cpe.se.util.FileUploadUtil; 

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class RegisterProjectController {
	@Autowired
	private RegisterProjectService registerprojectservice;
	@Autowired
	private UserService userservice;
	@Autowired
	private TaskProjectService tpservice;
	@Autowired
	private ProjectService projectservice;
	@GetMapping("/auth/registerprojects") //show project of user registed
	public RegisterProjectResponse getRegisterProject(@RequestHeader("token") String token) {
		User user = userservice.validateToken(token);
		RegisterProjectResponse reps = new RegisterProjectResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			reps.setRegisterproject(registerprojectservice.findRegisterProjectByUser(user));
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@GetMapping("/auth/registerprojects/status/{status}") //show project of user registed and status
	public RegisterProjectResponse getRegisterProject(@RequestHeader("token") String token,@PathVariable("status")String status) {
		User user = userservice.validateToken(token);
		RegisterProjectResponse reps = new RegisterProjectResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			reps.setRegisterproject(registerprojectservice.findRegisterProjectByTypeAndUser(user,status));
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@GetMapping("/registerprojects/projects/{id}")
	public List<RegisterProject> findByProject(@PathVariable("id") int id) {
		return registerprojectservice.findRegisterProjectByProject(projectservice.findById(id));
	}
	@GetMapping("/registerprojects/projects/count/{id}")
	public long countByProject(@PathVariable("id") int id) {
		return registerprojectservice.countRegisterProjectByProject(projectservice.findById(id));
	}
	@GetMapping("/count/{id}")
	public long count(@PathVariable("id") int id) {
		TaskProject tp = tpservice.getTaskProjectById(id);
		return registerprojectservice.count(tp);
	}
	@PostMapping("/auth/registerprojects/{id}") //create
	public RegisterProjectResponse createRegisterProject(@RequestHeader("token") String token,@PathVariable("id")int id,@RequestPart("evidencefile") MultipartFile evidencefile) throws IOException {
		User user = userservice.validateToken(token);
		RegisterProjectResponse reps = new RegisterProjectResponse();
//		ObjectMapper objectMapper = new ObjectMapper();
		if (user != null) {	
//			RegisterProject rp = objectMapper.readValue(regist, RegisterProject.class);
//			reps.setRegisterproject(registerprojectservice.findRegisterProjectByUser(user));
			Random rand = new Random();
			long millis=System.currentTimeMillis();  
			java.sql.Date date = new java.sql.Date(millis); 
			String fileName = StringUtils.cleanPath(evidencefile.getOriginalFilename());
	        String evidence = FileUploadUtil.saveFile(fileName, evidencefile);
	        TaskProject tp = tpservice.getTaskProjectById(id);
	        long count = registerprojectservice.count(tp);
	        if(count<=tp.getLimitJoin()) {
	        	reps.setMsg("create");
	        	reps.setStatus("201");
	        	registerprojectservice.save(new RegisterProject(tp,user,date,evidence,0,"รอพิจารณา"));
	        }
	        else {
	        	reps.setMsg("TaskProject Full");
	        	reps.setStatus("400");
	        }
	        
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@GetMapping("/auth/registerprojects/all") //show all
	public RegisterProjectResponse getAllRegisterProject(@RequestHeader("token") String token) {
		User user = userservice.validateToken(token);
		RegisterProjectResponse reps = new RegisterProjectResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			reps.setRegisterproject(registerprojectservice.findAll());
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@GetMapping("/auth/registerprojects/all/status/{status}") //show all by status
	public RegisterProjectResponse getAllRegisterProject(@RequestHeader("token") String token,@PathVariable("status")String status) {
		User user = userservice.validateToken(token);
		RegisterProjectResponse reps = new RegisterProjectResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			reps.setRegisterproject(registerprojectservice.findRegisterProjectByType(status));
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@PutMapping("/auth/registerprojects/status/{id}") //change status for admin
	public CommonResponse updateStatus(@RequestHeader("token") String token,@PathVariable("id")int id,@RequestBody RegisterProject regist) {
		User user = userservice.validateToken(token);
		CommonResponse reps = new CommonResponse();
		if (user != null) {
			RegisterProject rp = registerprojectservice.findRegisterProjectById(id);
			long count = registerprojectservice.count(rp.getTaskProject());
			rp.setStatus(regist.getStatus());
			rp.setNumberRunner((int)count+1);
			registerprojectservice.save(rp);
			reps.setMsg("update");
        	reps.setStatus("200");
		}
		else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
		}
		return reps;
		
	}
}
