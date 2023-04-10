package th.ac.ku.kps.eng.cpe.se.restservice;

import java.io.IOException;
import java.sql.Date;

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

import com.fasterxml.jackson.databind.ObjectMapper;

import th.ac.ku.kps.eng.cpe.se.model.Agency;
import th.ac.ku.kps.eng.cpe.se.model.Appove;
import th.ac.ku.kps.eng.cpe.se.model.Manager;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.response.AgencyResponse;
import th.ac.ku.kps.eng.cpe.se.service.AgencyService;
import th.ac.ku.kps.eng.cpe.se.service.AppoveService;
import th.ac.ku.kps.eng.cpe.se.service.ManagerService;
import th.ac.ku.kps.eng.cpe.se.service.UserService;
import th.ac.ku.kps.eng.cpe.se.util.FileUploadUtil;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AgencyController {
	@Autowired
	private AgencyService agencyservice;
	@Autowired
	private UserService userservice;
	@Autowired
	private AppoveService appoveservice;
	@Autowired
	private ManagerService managerservice;
	@GetMapping("/auth/agencies") //show all agency , for user when want to be ผูัรับผิดชอบโครงการ
	public AgencyResponse getAll(@RequestHeader("token") String token) {
		User user = userservice.validateToken(token);
		AgencyResponse reps = new AgencyResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			reps.setAgency(agencyservice.findAll());
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@GetMapping("/auth/agencies/status/{status}")
	public AgencyResponse getStatus(@RequestHeader("token") String token,@PathVariable("status")String status) {
		User user = userservice.validateToken(token);
		AgencyResponse reps = new AgencyResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			reps.setAgency(agencyservice.findAgencyByStatus(status));
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@GetMapping("/auth/agenciesbyuser") //Displays all departments that the user is a member
	public AgencyResponse getAgencyByUser(@RequestHeader("token") String token) {
		User user = userservice.validateToken(token);
		AgencyResponse reps = new AgencyResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			reps.setAgency(agencyservice.findByUser(user));
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("403");
			return reps;
		}
	}
	@PutMapping("/auth/agencies/{id}/{status}") //change status of agency with id of agency
	public AgencyResponse updateStatus(@RequestHeader("token") String token,@PathVariable("id")int id,@PathVariable("status")String status) {
		User user = userservice.validateToken(token);
		AgencyResponse reps = new AgencyResponse();
		if (user != null) {	
			if(user.getRole().equals("admin")) {
				Appove a = appoveservice.findById(id);
				Agency agc = a.getAgency();
				User u = a.getUserByIdUser();
				if(status.equals("pass")) {
					u.setRole("ผู้รับผิดชอบหน่วยงาน");
					a.setUserByIdApprover(user);
					agc.setStatus("อนุมัติ");
					managerservice.save(new Manager(agc,u));
					userservice.update(u);
					reps.setMsg("UPDATE");
					reps.setStatus("200");
				}
				else {
					a.setUserByIdApprover(user);
					agc.setStatus("ไม่อนุมัติ");
					reps.setMsg("UPDATE");
					reps.setStatus("200");
				}
				appoveservice.save(a);
				agencyservice.save(agc);
			}
			else {
				reps.setMsg("ERROR ROLE");
				reps.setStatus("400");
			}
			
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@PostMapping("/auth/agencies") //create agency
	public AgencyResponse update(@RequestHeader("token") String token,@RequestPart("evidencefile") MultipartFile evidencefile,@RequestPart String agency) throws IOException{
		ObjectMapper objectMapper = new ObjectMapper();
		User user = userservice.validateToken(token);
		AgencyResponse reps = new AgencyResponse();
		if (user != null) {	
			long millis=System.currentTimeMillis();  
			java.sql.Date date = new java.sql.Date(millis);
			Agency a = objectMapper.readValue(agency, Agency.class);
			String fileName = StringUtils.cleanPath(evidencefile.getOriginalFilename());
	        String evidence = FileUploadUtil.saveFile(fileName, evidencefile);
	        Agency newAgency = new Agency(a.getNameAgency(),a.getAddressAgency(),"รอพิจารณา",a.getPhone());
			agencyservice.save(newAgency);
		    appoveservice.save(new Appove(null,newAgency,null, user,date,"","อนุมัติหน่วยงาน", evidence));
//		    Appove(Project project, Agency agency, User userByIdApprover, User userByIdUser, Date dateAppove,
//					String description, String type, String evidence)
			reps.setMsg("ok");
			reps.setStatus("200");
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
}
