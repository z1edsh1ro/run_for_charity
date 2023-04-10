package th.ac.ku.kps.eng.cpe.se.dto;

import th.ac.ku.kps.eng.cpe.se.model.TaskProject;

public class TaskProjectDTO {
	private TaskProject taskproject;
	private Long count;
	private int distance;
	public TaskProjectDTO(TaskProject taskproject, Long count, int distance) {
		super();
		this.taskproject = taskproject;
		this.count = count;
		this.distance = distance;
	}
	public TaskProjectDTO() {
		super();
	}
	public TaskProjectDTO(TaskProject taskproject, Long count) {
		super();
		this.taskproject = taskproject;
		this.count = count;
	}
	public TaskProject getTaskproject() {
		return taskproject;
	}
	public void setTaskproject(TaskProject taskproject) {
		this.taskproject = taskproject;
	}
	public Long getCount() {
		return count;
	}
	public void setCount(Long count) {
		this.count = count;
	}
	public int getDistance() {
		return distance;
	}
	public void setDistance(int distance) {
		this.distance = distance;
	}
}
