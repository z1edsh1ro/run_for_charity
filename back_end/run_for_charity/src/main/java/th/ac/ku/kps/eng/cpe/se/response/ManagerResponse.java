package th.ac.ku.kps.eng.cpe.se.response;

import java.util.List;

import th.ac.ku.kps.eng.cpe.se.model.Manager;

public class ManagerResponse {
	private String status;
	private List<Manager> manager;
	private String msg;
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public List<Manager> getManager() {
		return manager;
	}
	public void setManager(List<Manager> manager) {
		this.manager = manager;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
}
