package th.ac.ku.kps.eng.cpe.se.response;

import java.util.List;

import th.ac.ku.kps.eng.cpe.se.model.TaskProject;

public class TaskProjectResponse {
	private String status;
	private List<TaskProject> taskproject;
	private String msg;
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public List<TaskProject> getTaskproject() {
		return taskproject;
	}
	public void setTaskproject(List<TaskProject> taskproject) {
		this.taskproject = taskproject;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
}
