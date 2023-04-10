package th.ac.ku.kps.eng.cpe.se.restservice;


import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;

import th.ac.ku.kps.eng.cpe.se.model.Donate;
import th.ac.ku.kps.eng.cpe.se.model.DonateDetail;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.response.DonateDetailResponse;
import th.ac.ku.kps.eng.cpe.se.service.DonateDetailService;
import th.ac.ku.kps.eng.cpe.se.service.DonateService;
import th.ac.ku.kps.eng.cpe.se.service.ProjectService;
import th.ac.ku.kps.eng.cpe.se.service.UserService;
import th.ac.ku.kps.eng.cpe.se.util.FileUploadUtil;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class DonateDetailController {
	@Autowired
	private DonateDetailService donateDetailService;
	@Autowired
	private UserService userservice;
	@Autowired
	private DonateService donateService;
	@Autowired
	private ProjectService projectservice;
	@GetMapping("/donatedetails")
	public List<DonateDetail> getAllDonateDetail(){
		return (List<DonateDetail>) donateDetailService.getAll();
	}
	@GetMapping("/donatedetails/{id}")
	public DonateDetail findDonateById(@PathVariable("id")int id){
		return donateDetailService.findDonateById(id);
	}
	@GetMapping("/donatedetails/projects/{id}")
	public List<DonateDetail> findDonateByProject(@PathVariable("id")int id){
		return donateDetailService.findDonateByProject(projectservice.getProjectById(id));
	}
	@GetMapping("/donatedetails/projects/count/{id}")
	public Long countDonateByProject(@PathVariable("id")int id){
		return donateDetailService.countDonateByProject(projectservice.getProjectById(id));
	}
	@GetMapping("/auth/donatedetails") //for user while login
	public DonateDetailResponse getDonateByUser(@RequestHeader("token") String token) {
		User user = userservice.validateToken(token);
		DonateDetailResponse reps = new DonateDetailResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			reps.setDonatedetail(donateDetailService.findDonateByUser(user));
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@GetMapping("/auth/donatedetailbyadmin") //for admin while login (show all)
	public DonateDetailResponse getDonateByAdmin(@RequestHeader("token") String token) {
		User user = userservice.validateToken(token);
		DonateDetailResponse reps = new DonateDetailResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			reps.setDonatedetail(donateDetailService.getAll());
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@GetMapping("/auth/donatedetails/status/{status}") //filter show dependent status by status of DonateDetail Ex. "รอพิจารณา","อนุมัติ","ไม่อนุมัติ"
	public DonateDetailResponse getDonateByStatus(@RequestHeader("token") String token,@PathVariable("status")String status) {
		User user = userservice.validateToken(token);
		DonateDetailResponse reps = new DonateDetailResponse();
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			reps.setDonatedetail(donateDetailService.findDonateByStatus(status));
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}	
	
	@PutMapping("/auth/donatedetails/status/{id}") //update status by id of DonateDetail
	public DonateDetailResponse updateStatus(@RequestHeader("token") String token,@PathVariable("id")int id,@RequestBody DonateDetail donatedetail) {
		User user = userservice.validateToken(token);
		DonateDetailResponse reps = new DonateDetailResponse();
		DonateDetail dd = donateDetailService.findDonateById(id);
		if (user != null) {	
			reps.setMsg("ok");
			reps.setStatus("200");
			dd.setStatusAppove(donatedetail.getStatusAppove());
			reps.setDonatedetail(donateDetailService.getAll());
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
	@PostMapping("/auth/donatedetails/{id}") //create
	public DonateDetailResponse update(@RequestHeader("token") String token,@PathVariable("id")int id,@RequestBody DonateDetail donatedetail) throws IOException{
		User user = userservice.validateToken(token);
		DonateDetailResponse reps = new DonateDetailResponse();
		if (user != null) {	
//			ObjectMapper objectMapper = new ObjectMapper();
//			DonateDetail donatedetail = objectMapper.readValue(donatedt, DonateDetail.class);
			Donate d = donateService.findByIdProject(id);
			donateDetailService.save(new DonateDetail(d,user,"",donatedetail.getAmount(),donatedetail.getDateDonate(),"","อนุมัติ"));
			reps.setMsg("donate");
			reps.setStatus("200");
			return reps;
		} else {
			reps.setMsg("Unauthorized");
			reps.setStatus("401");
			return reps;
		}
	}
//	@PostMapping("/auth/donatedetails") //create
//	public DonateDetailResponse update(@RequestHeader("token") String token,@RequestPart("evidencefile") MultipartFile evidencefile,@RequestPart String donatedt) throws IOException{
//		User user = userservice.validateToken(token);
//		ObjectMapper objectMapper = new ObjectMapper();
//		DonateDetailResponse reps = new DonateDetailResponse();
//		
//		if (user != null) {	
//			DonateDetail donatedetail = objectMapper.readValue(donatedt, DonateDetail.class);
//			String fileName = StringUtils.cleanPath(evidencefile.getOriginalFilename());
//	        String evidence = FileUploadUtil.saveFile(fileName, evidencefile);
//			donateDetailService.save(new DonateDetail(donatedetail.getDonate(),user,donatedetail.getAccountName(),donatedetail.getAmount(),donatedetail.getDateDonate(),evidence,"รอพิจารณา"));
//			reps.setMsg("ok");
//			reps.setStatus("200");
//			return reps;
//		} else {
//			reps.setMsg("Unauthorized");
//			reps.setStatus("401");
//			return reps;
//		}
//	}
}
