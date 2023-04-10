package th.ac.ku.kps.eng.cpe.se.response;

import th.ac.ku.kps.eng.cpe.se.model.User;

public class LoginResponse {
	private String status;

	private String accessToken;
	
	private String role;

	private String msg;

	public String getStatus() {
	return status;
	}

	public void setStatus(String status) {
	this.status = status;
	}

	public String getMsg() {
	return msg;
	}

	public void setMsg(String msg) {
	this.msg = msg;
	}

	public String getAccessToken() {
		return accessToken;
	}

	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

}
