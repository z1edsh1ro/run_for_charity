package th.ac.ku.kps.eng.cpe.se.response;

import java.util.List;

import th.ac.ku.kps.eng.cpe.se.model.ManagerProject;

public class ManagerProjectResponse {
	private String status;
	private List<ManagerProject> managerproject;
	private String msg;
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public List<ManagerProject> getManagerproject() {
		return managerproject;
	}
	public void setManagerproject(List<ManagerProject> managerproject) {
		this.managerproject = managerproject;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
}
