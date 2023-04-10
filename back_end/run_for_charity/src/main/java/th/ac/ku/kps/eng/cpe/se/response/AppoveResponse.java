package th.ac.ku.kps.eng.cpe.se.response;

import java.util.List;

import th.ac.ku.kps.eng.cpe.se.model.Appove;

public class AppoveResponse {
	private String status;
	private List<Appove> appove;
	private String msg;
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public List<Appove> getAppove() {
		return appove;
	}
	public void setAppove(List<Appove> appove) {
		this.appove = appove;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
}
