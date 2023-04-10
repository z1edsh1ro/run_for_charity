package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Agency;
import th.ac.ku.kps.eng.cpe.se.model.Manager;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.repository.ManagerRepository;

@Service
public class ManagerService {
	@Autowired
	private ManagerRepository managerrepo;
	public List<Manager> findAll(){
		return (List<Manager>) managerrepo.findAll();
	}
	public Manager findById(int id){
		return managerrepo.findById(id).get();
	}
	public Manager findByUser(User user){
		return managerrepo.findByUser(user);
	}
	public Manager findByUserAndAgency(User user,Agency agency){
		return managerrepo.findByUserAndByAgency(user, agency);
	}
	public Long countManager(Agency agency) {
		return managerrepo.countByAgency(agency);
	}
	public void save(Manager manager) {
		managerrepo.save(manager);
	}
	public void delete(Manager manager) {
		managerrepo.delete(manager);
	}
	public Manager findByProject(Project project) {
		return managerrepo.findByProject(project);
	}
}
