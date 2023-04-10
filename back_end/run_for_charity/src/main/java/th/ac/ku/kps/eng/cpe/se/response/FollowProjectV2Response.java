package th.ac.ku.kps.eng.cpe.se.response;

import java.util.List;

import th.ac.ku.kps.eng.cpe.se.model.FollowProject;

public class FollowProjectV2Response {
	private String status;
	private FollowProject followproject;
	private String msg;
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public FollowProject getFollowproject() {
		return followproject;
	}
	public void setFollowproject(FollowProject followproject) {
		this.followproject = followproject;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
}
