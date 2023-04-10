package th.ac.ku.kps.eng.cpe.se.restservice;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

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
import th.ac.ku.kps.eng.cpe.se.model.RegisterProject;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.response.AgencyResponse;
import th.ac.ku.kps.eng.cpe.se.response.AppoveResponse;
import th.ac.ku.kps.eng.cpe.se.service.AgencyService;
import th.ac.ku.kps.eng.cpe.se.service.AppoveService;
import th.ac.ku.kps.eng.cpe.se.service.UserService;
import th.ac.ku.kps.eng.cpe.se.util.FileUploadUtil;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AppoveController {
	@Autowired
	private AppoveService appoveservice;
	@Autowired
	private UserService userservice;
	@Autowired
	private AgencyService agencyservice;
	@GetMapping("/auth/appoves") //show all appove
	public AppoveResponse getAll(@RequestHeader("token") String token) {
		User user = userservice.validateToken(token);
		AppoveResponse reps = new AppoveResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			reps.setAppove(appoveservice.findAll());
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@GetMapping("/auth/appoves/agency") //show all appove by type Ex. "อนุมัติโครงการ","อนุมัติหน่วยงาน","อนุมัติผู้รับผิดชอบโครงการ","อนุมัติผู้รับผิดชอบโครงการ"
	public AppoveResponse getAppoveAgency(@RequestHeader("token") String token) {
		User user = userservice.validateToken(token);
		AppoveResponse reps = new AppoveResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			reps.setAppove(appoveservice.findAppoveByTypeAgency());
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@GetMapping("/auth/appoves/description/{description}") //show all appove
	public AppoveResponse getAppove(@RequestHeader("token") String token,@PathVariable("description")String description) {
		User user = userservice.validateToken(token);
		AppoveResponse reps = new AppoveResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			reps.setAppove(appoveservice.findByDescription(description));
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@GetMapping("/auth/appoves/type/{type}/{description}") //show all appove
	public AppoveResponse getAppoveWithTypeAndDescription(@RequestHeader("token") String token,@PathVariable("type")String type,@PathVariable("description")String description) {
		User user = userservice.validateToken(token);
		AppoveResponse reps = new AppoveResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			reps.setAppove(appoveservice.findByDescriptionAndType(type,description));
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@GetMapping("/auth/appoves/type/{type}") //show all appove by type Ex. "อนุมัติโครงการ","อนุมัติหน่วยงาน","อนุมัติผู้รับผิดชอบโครงการ","อนุมัติผู้รับผิดชอบโครงการ"
	public AppoveResponse getAll(@RequestHeader("token") String token,@PathVariable("type")String type) {
		User user = userservice.validateToken(token);
		AppoveResponse reps = new AppoveResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			reps.setAppove(appoveservice.findByType(type));
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	
	@PutMapping("/auth/appoves/status/{id}") //change status of appove with id of appove
	public AppoveResponse updateStatus(@RequestHeader("token") String token,@PathVariable("id")int id,@RequestBody Appove appove) {
		User user = userservice.validateToken(token);
		AppoveResponse reps = new AppoveResponse();
		if (user != null) {	
			Appove a = appoveservice.findById(id);
			a.setType(appove.getType());
			appoveservice.save(a);
			reps.setMsg("ok");
			reps.setStatus("200");
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@PostMapping("/auth/appoves/{id}") //create Appove
	public AppoveResponse createAppove(@RequestHeader("token") String token,@PathVariable("id")int id,@RequestPart("evidencefile") MultipartFile evidencefile) throws IOException {
		User user = userservice.validateToken(token);
		AppoveResponse reps = new AppoveResponse();
		if (user != null) {	
			long millis=System.currentTimeMillis();  
			java.sql.Date date = new java.sql.Date(millis);
			String fileName = StringUtils.cleanPath(evidencefile.getOriginalFilename());
	        String evidence = FileUploadUtil.saveFile(fileName, evidencefile);
	        Agency agc = agencyservice.findById(id);
	        Appove av;
	        if(user.getRole().equals("user")) {
	        	av = new Appove(agc,user,date,"รอพิจารณา","อนุมัติผู้รับผิดชอบโครงการ",evidence);
	        	appoveservice.save(av);
		        reps.setMsg("create");
				reps.setStatus("200");
	        }
	        else if((user.getRole().equals("ผู้รับผิดชอบโครงการ"))) {
	        	av = new Appove(user,date,"รอพิจารณา","อนุมัติหน่วยงาน",evidence);
	        	appoveservice.save(av);
		        reps.setMsg("create");
				reps.setStatus("200");
	        }
	        else {
	        	reps.setMsg("Error Role");
				reps.setStatus("400");
	        }
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
}
