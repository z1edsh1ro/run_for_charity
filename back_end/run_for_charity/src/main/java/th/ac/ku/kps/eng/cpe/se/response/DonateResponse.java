package th.ac.ku.kps.eng.cpe.se.response;

import java.util.List;

import th.ac.ku.kps.eng.cpe.se.model.Donate;

public class DonateResponse {
	private String status;
	private List<Donate> donate;
	private String msg;
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public List<Donate> getDonate() {
		return donate;
	}
	public void setDonate(List<Donate> donate) {
		this.donate = donate;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
}
