package th.ac.ku.kps.eng.cpe.se.response;

import java.util.List;

import th.ac.ku.kps.eng.cpe.se.model.Agency;

public class AgencyResponse {
	private String status;
	private List<Agency> agency;
	private String msg;
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public List<Agency> getAgency() {
		return agency;
	}
	public void setAgency(List<Agency> agency) {
		this.agency = agency;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
}
