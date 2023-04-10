package th.ac.ku.kps.eng.cpe.se.response;

import java.util.List;

import th.ac.ku.kps.eng.cpe.se.model.FollowProject;

public class FollowProjectResponse {
	private String status;
	private List<FollowProject> followproject;
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
	public List<FollowProject> getFollowproject() {
		return followproject;
	}
	public void setFollowproject(List<FollowProject> followproject) {
		this.followproject = followproject;
	}
}
