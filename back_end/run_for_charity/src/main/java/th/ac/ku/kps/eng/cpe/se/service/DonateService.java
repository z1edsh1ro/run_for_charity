package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.Donate;
import th.ac.ku.kps.eng.cpe.se.repository.DonateRepository;

@Service
public class DonateService {
	@Autowired
	private DonateRepository donaterepo;
	public void save(Donate donate) {
		donaterepo.save(donate);
	}
	public List<Donate> findAll(){
		return (List<Donate>) donaterepo.findAll();
	}
	public Donate findById(int id) {
		return donaterepo.findById(id).get();
	}
	public List<Donate> findByStatus(String status){
		return (List<Donate>) donaterepo.findDonateByStatus(status);
	}
	public Donate findByIdProject(int id) {
		return donaterepo.findDonateByIdProject(id);
	}
}
