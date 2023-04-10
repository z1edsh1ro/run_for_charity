package th.ac.ku.kps.eng.cpe.se.restservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import th.ac.ku.kps.eng.cpe.se.model.Donate;
import th.ac.ku.kps.eng.cpe.se.model.DonateDetail;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.response.DonateResponse;
import th.ac.ku.kps.eng.cpe.se.service.DonateService;
import th.ac.ku.kps.eng.cpe.se.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class DonateController {
	@Autowired
	private DonateService donateservice;
	@Autowired
	private UserService userservice;
	@GetMapping("/donate") //show all
	public List<Donate>  getDonate(){
		return donateservice.findAll();
		}
	@GetMapping("/donates/{id}")
	public Donate findDonateById(@PathVariable("id")int id){
		return donateservice.findById(id);
	}
	
	@GetMapping("/auth/donates/status/{status}") //filter show dependent status
	public DonateResponse getDonateByStatus(@RequestHeader("token") String token,@PathVariable("status")String status) {
		User user = userservice.validateToken(token);
		DonateResponse reps = new DonateResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			reps.setDonate(donateservice.findByStatus(status));
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@PutMapping("/auth/donates/status/{id}") //use idProject in table of react
	public DonateResponse update(@RequestHeader("token") String token,@PathVariable("id")int id,@RequestBody Donate donate){
		User user = userservice.validateToken(token);
		Donate d =donateservice.findById(id);
		DonateResponse reps = new DonateResponse();
		if (user != null) {	
			d.setStatusWithdraw(donate.getStatusWithdraw());
			donateservice.save(d);
			reps.setMsg("ok");
			reps.setStatus("200");
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@PostMapping("/auth/donates")
	public DonateResponse update(@RequestHeader("token") String token,@RequestBody Donate donate){
		User user = userservice.validateToken(token);
		DonateResponse reps = new DonateResponse();
		if (user != null) {	
			donateservice.save(new Donate(donate.getProject(),"ยังไม่ถอน"));
			reps.setMsg("ok");
			reps.setStatus("200");
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
}
