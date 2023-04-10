package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.DonateDetail;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.repository.DonateDetailRepository;

@Service
public class DonateDetailService {
	@Autowired
	private DonateDetailRepository donateDetailRepo;
	
	public List<DonateDetail> getAll(){
		return (List<DonateDetail>) donateDetailRepo.findAll();
	}
	public List<DonateDetail> findDonateByUser(User user){
		return (List<DonateDetail>) donateDetailRepo.findDonate(user);
	}
	public void save(DonateDetail donatedetail) {
		donateDetailRepo.save(donatedetail);
	}
	public DonateDetail findDonateById(int id) {
		return donateDetailRepo.findById(id).get();
	}
	public List<DonateDetail> findDonateByStatus(String status){
		return (List<DonateDetail>) donateDetailRepo.findDonateByStatus(status);
	}
	public List<DonateDetail> findDonateByProject(Project project){
		return (List<DonateDetail>) donateDetailRepo.findDonateByProject(project);
	}
	public Long countDonateByProject(Project project){
		return donateDetailRepo.countDonateByProject(project);
	}

}
