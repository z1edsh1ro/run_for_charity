package th.ac.ku.kps.eng.cpe.se.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.repository.ProjectRepository;

@Service
public class ProjectService {
	@Autowired
	private ProjectRepository projectrepository;
	
	public List<Project> getAll(){
		return (List<Project>) projectrepository.findAll();
	}
	public List<Project> getAllProject(){
		return (List<Project>) projectrepository.getAll();
	}
	public List<Project> findByStatus(String status){
		return (List<Project>) projectrepository.findByStatus(status);
	}
	public Project findById(int id) {
		return projectrepository.findById(id).get();
	}
	public void delete(int id) {
		projectrepository.deleteById(id);
	}
	public void update(Project project) {
		projectrepository.save(project);
	}
	public Project getProjectById(int id) {
		return projectrepository.findById(id).get();
	}
	
//	public List<Project> findByName(String name){
//		return (List<Project>) projectrepository.findByName(name);
//	}
//	public String delete(int id){
//		projectrepository.findById(id);
//		return "yes";
//	}
}
