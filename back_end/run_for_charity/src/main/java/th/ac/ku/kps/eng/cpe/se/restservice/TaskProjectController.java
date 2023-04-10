package th.ac.ku.kps.eng.cpe.se.restservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import th.ac.ku.kps.eng.cpe.se.dto.TaskProjectDTO;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.TaskProject;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.response.TaskProjectResponse;
import th.ac.ku.kps.eng.cpe.se.service.ProjectService;
import th.ac.ku.kps.eng.cpe.se.service.TaskProjectService;
import th.ac.ku.kps.eng.cpe.se.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TaskProjectController {
	@Autowired 
	private TaskProjectService taskprojectservice;
	@Autowired
	private ProjectService projectservice;
	@Autowired
	private UserService userservice;
	@GetMapping("/taskprojects/{id}")
	public List<TaskProject> getTaskProject(@PathVariable("id") int id){
		return (List<TaskProject>) taskprojectservice.getTaskProjectByProject(projectservice.getProjectById(id));
	}
	@GetMapping("/taskprojects/count/{id}")
	public List<TaskProjectDTO> countTaskProject(@PathVariable("id")int id) {
		Project p = projectservice.getProjectById(id);
		return taskprojectservice.getCount(p);
	}
	@GetMapping("/taskprojects/id/{id}")
	public TaskProject getTaskProjectById(@PathVariable("id")int id) {
		return taskprojectservice.getTaskProjectById(id);
	}
	@DeleteMapping("/taskprojects/{id}")
	public void deleteTaskProject(@PathVariable("id")int id) {
		taskprojectservice.delete(id);
	}
	@PutMapping("/auth/taskprojects/{id}")
	public void updateTaskProject(@PathVariable("id")int id,@RequestBody TaskProject taskproject) {
		TaskProject tp = taskprojectservice.getTaskProjectById(id);
		tp.setTaskName(taskproject.getTaskName());
		tp.setPriceTask(taskproject.getPriceTask());
		tp.setDistance(taskproject.getDistance());
		tp.setLimitJoin(taskproject.getLimitJoin());
		taskprojectservice.save(tp);
	}
	@PostMapping("/auth/taskprojects/{id}")
	public TaskProjectResponse createTaskProject (@RequestHeader("token") String token,@PathVariable("id")int id,@RequestBody TaskProject taskproject) {
		//		return taskproject.getProject().getIdProject();
		User user = userservice.validateToken(token);
		TaskProjectResponse resp = new TaskProjectResponse();
		if (user!=null) {
			Project p = projectservice.getProjectById(id);
			taskprojectservice.save(new TaskProject(p,taskproject.getTaskName(),taskproject.getPriceTask(),taskproject.getDistance(),taskproject.getLimitJoin()));
			resp.setStatus("201");
			resp.setMsg("create");
			return resp;
		}
		resp.setStatus("401");
		resp.setMsg("Unauthorized");
		return resp;
	}
}
