package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Agency;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.repository.AgencyRepository;

@Service
public class AgencyService {
	@Autowired
	private AgencyRepository agencyrepo;
	public List<Agency> findAll(){
		return (List<Agency>) agencyrepo.findAll();
	}
	public List<Agency> findByUser(User user){
		return (List<Agency>) agencyrepo.findAgencyByUser(user);
	}
	public Agency findById(int id){
		return agencyrepo.findById(id).get();
	}
	public void save(Agency agency) {
		agencyrepo.save(agency);
	}
	public void delete(Agency agency) {
		agencyrepo.delete(agency);
	}
	public List<Agency> findAgencyByStatus(String status){
		return agencyrepo.findAgencyByStatus(status);
	}
}
