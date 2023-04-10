package th.ac.ku.kps.eng.cpe.se.response;

import th.ac.ku.kps.eng.cpe.se.model.User;

public class UserResponse {
	private String status;
	private User user;
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
}
