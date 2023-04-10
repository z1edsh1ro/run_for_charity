package th.ac.ku.kps.eng.cpe.se.response;

import java.util.List;

import th.ac.ku.kps.eng.cpe.se.model.RegisterProject;

public class RegisterProjectResponse {
	private String status;
	private List<RegisterProject> registerproject;
	private String msg;
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public List<RegisterProject> getRegisterproject() {
		return registerproject;
	}
	public void setRegisterproject(List<RegisterProject> registerproject) {
		this.registerproject = registerproject;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
}
