package th.ac.ku.kps.eng.cpe.se.restservice;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;

import th.ac.ku.kps.eng.cpe.se.model.FollowProject;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.response.FollowProjectResponse;
import th.ac.ku.kps.eng.cpe.se.response.FollowProjectV2Response;
import th.ac.ku.kps.eng.cpe.se.service.FollowProjectService;
import th.ac.ku.kps.eng.cpe.se.service.ProjectService;
import th.ac.ku.kps.eng.cpe.se.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class FollowProjectController {
	@Autowired
	private FollowProjectService fpService;
	@Autowired
	private UserService userservice;
	@Autowired
	private ProjectService projectservice;
	@GetMapping("/auth/followprojects/all")
	public FollowProjectResponse getAll(@RequestHeader("token") String token){
		User user = userservice.validateToken(token);
		FollowProjectResponse followprojectreps = new FollowProjectResponse();
		if (user != null) {	
			followprojectreps.setMsg("ok");
			followprojectreps.setStatus("200");
			followprojectreps.setFollowproject(fpService.getAll());
			return followprojectreps;
		} else {
			followprojectreps.setMsg("Unauthorized");
			followprojectreps.setStatus("401");
			return followprojectreps;
		}
	}
	@GetMapping("/followprojects/project/{id}")
	public List<FollowProject> findByProject(@PathVariable("id")int id){
		return fpService.findFollowProjectByProject(projectservice.getProjectById(id));
	}
	@GetMapping("/followprojects/project/count/{id}")
	public Long countByProject(@PathVariable("id")int id){
		return fpService.countFollowProjectByProject(projectservice.getProjectById(id));
	}
	@GetMapping("/auth/followprojects/project/{id}")
	public FollowProjectResponse getByProject(@PathVariable("id")int id,@RequestHeader("token") String token){
		User user = userservice.validateToken(token);
		FollowProjectResponse followprojectreps = new FollowProjectResponse();
		if (user != null) {	
			Project p = projectservice.getProjectById(id);
			followprojectreps.setMsg("ok");
			followprojectreps.setStatus("200");
			followprojectreps.setFollowproject(fpService.findFollowProjectByProject(p));
			return followprojectreps;
		} else {
			followprojectreps.setMsg("Unauthorized");
			followprojectreps.setStatus("401");
			return followprojectreps;
		}
	}
	@GetMapping("/auth/followprojects")
	public FollowProjectResponse getFollowProject(@RequestHeader("token") String token){
		User user = userservice.validateToken(token);
		FollowProjectResponse followprojectreps = new FollowProjectResponse();
		if (user != null) {	
			followprojectreps.setMsg("ok");
			followprojectreps.setStatus("200");
			followprojectreps.setFollowproject(fpService.findFollowProjectByUser(user));
			return followprojectreps;
		} else {
			followprojectreps.setMsg("Unauthorized");
			followprojectreps.setStatus("401");
			return followprojectreps;
		}
	}
	@GetMapping("/auth/followprojects/{id}")
	public FollowProjectV2Response getFollowProjectByIdAndUser(@PathVariable("id")int id,@RequestHeader("token") String token){
		User user = userservice.validateToken(token);
		FollowProjectV2Response followprojectreps = new FollowProjectV2Response();
		if (user != null) {	
			Project p = projectservice.getProjectById(id);
			followprojectreps.setMsg("ok");
			followprojectreps.setStatus("200");
			if(fpService.findFollowProjectByUserAndByProject(p,user)!=null) {
				followprojectreps.setMsg("follow");
				followprojectreps.setStatus("200");
			}
			else {
				followprojectreps.setMsg("no follow");
				followprojectreps.setStatus("200");
			}
			return followprojectreps;
		} else {
			followprojectreps.setMsg("Unauthorized");
			followprojectreps.setStatus("401");
			return followprojectreps;
		}
	}
	
	@PostMapping("/auth/followprojects/{id}") //follow 
	public FollowProjectResponse FollowProject(@RequestHeader("token") String token,@PathVariable("id")int id){
		User user = userservice.validateToken(token);
		FollowProjectResponse followprojectreps = new FollowProjectResponse();
		if (user != null) {	
			Project project = projectservice.getProjectById(id);
			if(fpService.findFollowProjectByUserAndByProject(project, user)==null) {
				followprojectreps.setMsg("FOLLOW");
				followprojectreps.setStatus("200");
				fpService.create(new FollowProject(project,user));
				followprojectreps.setFollowproject(fpService.findFollowProjectByUser(user));
			}
			else {
				followprojectreps.setMsg("CANNOT FOLLOW");
				followprojectreps.setStatus("500");
			}
			return followprojectreps;
		} else {
			followprojectreps.setMsg("Unauthorized");
			followprojectreps.setStatus("401");
			return followprojectreps;
		}
	}
	
	@DeleteMapping("/auth/followprojects/{id}") //unfollow
	public FollowProjectResponse deleteFollowProject(@RequestHeader("token") String token,@PathVariable("id")int id){
		User user = userservice.validateToken(token);
		FollowProjectResponse followprojectreps = new FollowProjectResponse();
		Project fp = projectservice.getProjectById(id);
		if (user != null) {	
			followprojectreps.setMsg("UNFOLLOW");
			followprojectreps.setStatus("200");
			fpService.delete(fpService.findFollowProjectByUserAndByProject(fp, user));
			return followprojectreps;
		} else {
			followprojectreps.setMsg("Unauthorized");
			followprojectreps.setStatus("401");
			return followprojectreps;
		}
	}
	
}
