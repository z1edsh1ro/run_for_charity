package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Manager;
import th.ac.ku.kps.eng.cpe.se.model.ManagerProject;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.repository.ManagerProjectRepository;
import th.ac.ku.kps.eng.cpe.se.repository.ManagerRepository;


@Service
public class ManagerProjectService {
	@Autowired
	private ManagerProjectRepository managerrepo;
	public List<ManagerProject> findAll(){
		return (List<ManagerProject>) managerrepo.findAll();
	}
	public List<ManagerProject> findManagerProjectByStatus(String status){
		return (List<ManagerProject>) managerrepo.findManagerProjectByStatus(status);
	}
	public List<ManagerProject> findManagerProjectByUser(User user){
		return (List<ManagerProject>) managerrepo.findManagerProjectByUser(user);
	}
	public List<ManagerProject> findManagerProjectByManager(Manager manager){
		return (List<ManagerProject>) managerrepo.findManagerProjectByManager(manager);
	}
	public ManagerProject findById(int id){
		return managerrepo.findById(id).get();
	}
	public void save(ManagerProject managerProject) {
		managerrepo.save(managerProject);
	}
	public void delete(ManagerProject managerProject) {
		managerrepo.delete(managerProject);
	}
		
}
