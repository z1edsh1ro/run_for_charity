package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.RegisterProject;
import th.ac.ku.kps.eng.cpe.se.model.TaskProject;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.repository.RegisterProjectRepository;

@Service
public class RegisterProjectService {
	@Autowired
	private RegisterProjectRepository registerprojectrepo;
	
	public List<RegisterProject> findRegisterProjectByUser(User user){
		return registerprojectrepo.findRegisterProject(user);
	}
	public List<RegisterProject> findAll(){
		return (List<RegisterProject>) registerprojectrepo.findAll();
	}
	public List<RegisterProject> findRegisterProjectByTypeAndUser(User user,String status){
		return registerprojectrepo.findRegisterProjectByTypeAndUser(user,status);
	}
	public List<RegisterProject> findRegisterProjectByType(String status){
		return registerprojectrepo.findRegisterProjectByType(status);
	}
	public List<RegisterProject> findRegisterProjectByProject(Project project){
		return registerprojectrepo.findRegisterProjectByProject(project);
	}
	public Long countRegisterProjectByProject(Project project){
		return registerprojectrepo.countRegisterProjectByProject(project);
	}
	public void save(RegisterProject regist){
		registerprojectrepo.save(regist);
	}
	public RegisterProject findRegisterProjectById(int id) {
		return registerprojectrepo.findById(id).get();
	}
	public long count (TaskProject taskproject) {
		return registerprojectrepo.count(taskproject);
	}
}
