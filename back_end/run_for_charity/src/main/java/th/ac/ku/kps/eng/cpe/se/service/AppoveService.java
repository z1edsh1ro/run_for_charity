package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Agency;
import th.ac.ku.kps.eng.cpe.se.model.Appove;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.repository.AppoveRepository;

@Service
public class AppoveService {
	@Autowired
	private AppoveRepository appoverepo;
	public List<Appove> findAll(){
		return (List<Appove>) appoverepo.findAll();
	}
	public Appove findById(int id){
		return appoverepo.findById(id).get();
	}
	public List<Appove> findAppoveByTypeAgency(){
		return (List<Appove>) appoverepo.findAppoveByTypeApove();
	}
	public Appove findLeader(Agency agency,User user){
		return appoverepo.findleader(agency,user);
	}
	public void save(Appove appove) {
		appoverepo.save(appove);
	}
	public void delete(Appove appove) {
		appoverepo.delete(appove);
	}
	public List<Appove> findByType(String type){
		return (List<Appove>) appoverepo.findAppoveByType(type);
	}
	public Appove findByProject(Project project){
		return  appoverepo.findAppoveByProject(project);
	}
	public List<Appove> find(){
		return (List<Appove>) appoverepo.findAppove();
	}
	public List<Appove> findByDescription(String description){
		return (List<Appove>) appoverepo.findAppoveWithDescription(description);
	}
	public List<Appove> findByDescriptionAndType(String Type,String description){
		return (List<Appove>) appoverepo.findAppoveWithDescriptionAndTyoe(Type,description);
	}
}
