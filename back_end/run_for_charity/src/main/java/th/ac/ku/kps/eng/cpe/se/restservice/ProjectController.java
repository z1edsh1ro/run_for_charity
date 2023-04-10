package th.ac.ku.kps.eng.cpe.se.restservice;

import java.io.IOException;
import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
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
import com.mysql.fabric.Response;

import th.ac.ku.kps.eng.cpe.se.model.Agency;
import th.ac.ku.kps.eng.cpe.se.model.Appove;
import th.ac.ku.kps.eng.cpe.se.model.Donate;
import th.ac.ku.kps.eng.cpe.se.model.Manager;
import th.ac.ku.kps.eng.cpe.se.model.ManagerProject;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.response.ProjectResponse;
import th.ac.ku.kps.eng.cpe.se.service.AgencyService;
import th.ac.ku.kps.eng.cpe.se.service.AppoveService;
import th.ac.ku.kps.eng.cpe.se.service.DonateService;
import th.ac.ku.kps.eng.cpe.se.service.ManagerProjectService;
import th.ac.ku.kps.eng.cpe.se.service.ManagerService;
import th.ac.ku.kps.eng.cpe.se.service.ProjectService;
import th.ac.ku.kps.eng.cpe.se.service.UserService;
import th.ac.ku.kps.eng.cpe.se.util.FileUploadUtil;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ProjectController {
	@Autowired
	private ProjectService projectservice;
	@Autowired
	private UserService userservice;
	@Autowired
	private AgencyService agencyservice;
	@Autowired
	private DonateService donateserivce;
	@Autowired
	private AppoveService appoveservice;
	@Autowired
	private ManagerService managerservice;
	@Autowired
	private ManagerProjectService managerprojectservice;
	@GetMapping("/projects/all")
	public List<Project> getAll(){
		return projectservice.getAll();
	}
	@GetMapping("/projects")
	public List<Project> getAllProjects(){
		return projectservice.getAllProject();
	}
	@GetMapping("/projects/{id}")
	public Project getProject(@PathVariable("id")int id){
		return projectservice.getProjectById(id);
	}
	@GetMapping("/projects/status/{status}")
	public List<Project> getProject(@PathVariable("status")String status){
		return projectservice.findByStatus(status);
	}
	@PostMapping("/projects/{id}")
	public ProjectResponse createProjects(@RequestHeader("token") String token,@RequestPart String appove,@PathVariable("id")int id,@RequestPart("evidencefile") MultipartFile evidencefile,@RequestPart("imagePofilefile") MultipartFile imagePofilefile,@RequestPart("imagePosterfile") MultipartFile imagePosterfile, @RequestPart String project) throws IOException{
		ObjectMapper objectMapper = new ObjectMapper();
		ProjectResponse presp = new ProjectResponse();
		User user = userservice.validateToken(token);
		if (user != null) {	
			Project p = objectMapper.readValue(project, Project.class);
			Appove a = objectMapper.readValue(appove, Appove.class);
			String fileName1 = StringUtils.cleanPath(evidencefile.getOriginalFilename());
	        String evidence = FileUploadUtil.saveFile(fileName1, evidencefile);
	        String fileName2 = StringUtils.cleanPath(imagePofilefile.getOriginalFilename());
	        String imagePofile = FileUploadUtil.saveFile(fileName2, imagePofilefile);
	        String fileName3 = StringUtils.cleanPath(imagePosterfile.getOriginalFilename());
	        String imagePoster = FileUploadUtil.saveFile(fileName3, imagePosterfile);
	        Agency agency = agencyservice.findById(id);
	        Project newProject = new Project(agency,p.getNameProject(),p.getDateStart(),p.getDateEnd(),p.getPhone(),p.getAddressProject(),"รอพิจารณา",0,p.getDateRegisStart(),p.getDateRegisEnd(),p.getDiscription(),imagePofile,imagePoster);
	        projectservice.update(newProject);
	        appoveservice.save(new Appove(newProject,agency,  null, user, a.getDateAppove(),"","อนุมัติโครงการ", evidence));   
	        //        managerservice.save(new Manager(null, newProject, user) );
	        //      Agency a = new Agency();
	        presp.setStatus("201");
	        presp.setMsg(newProject.getIdProject().toString());
		}
		else {
			presp.setStatus("401");
	        presp.setMsg("Unauthorized");
		}
        
        return presp;
	}
//	@DeleteMapping("/project/{id}")
//	public void deleteProject(@PathVariable("id")int id) {
//		projectservice.delete(id);
//	}
	@PutMapping("/projects/{id}/{status}")
	public ProjectResponse updateStatusProject(@RequestHeader("token") String token,@PathVariable("id")int id,@PathVariable("status")String status) {
		User user = userservice.validateToken(token);
		ProjectResponse reps = new ProjectResponse();
		if (user != null) {
			Project p = projectservice.getProjectById(id);
			Appove a = appoveservice.findByProject(p);
			if(status.equals("pass")&&user.getRole().equals("ผู้รับผิดชอบหน่วยงาน")&&(a.getUserByIdUser()!=user)) {
				Manager m = managerservice.findByProject(p);
		        donateserivce.save(new Donate(p,"ยังไม่ถอน"));
				managerprojectservice.save(new ManagerProject(m,p,"อนุมัติ"));
				a.setUserByIdApprover(user);
				appoveservice.save(a);
				p.setStatus("อนุมัติ");
				projectservice.update(p);
				reps.setMsg("update");
				reps.setStatus("200");
			}
			else if(status.equals("fail")&&user.getRole().equals("ผู้รับผิดชอบหน่วยงาน")&&(a.getUserByIdUser()!=user)){
				p.setStatus("ไม่อนุมัติ");
				projectservice.update(p);
				reps.setMsg("update");
				reps.setStatus("200");
			}
			else {
				reps.setMsg("ERROR ROLE");
				reps.setStatus("400");
			}
		}
		else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
		}
		return reps;
		
	}
	@PostMapping("auth/projects/close/{id}")
	public ProjectResponse closeProject(@RequestHeader("token") String token,@PathVariable("id")int id) {
		User user = userservice.validateToken(token);
		ProjectResponse reps = new ProjectResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			Donate d = donateserivce.findById(id);
			d.setStatusWithdraw("ถอนแล้ว");
			donateserivce.save(d);
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			
		}
		return reps;
	}
}
