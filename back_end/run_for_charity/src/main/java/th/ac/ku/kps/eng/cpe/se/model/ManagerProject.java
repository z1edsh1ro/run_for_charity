package th.ac.ku.kps.eng.cpe.se.model;
// Generated Mar 31, 2023, 10:36:07 PM by Hibernate Tools 6.1.5.Final

/**
 * ManagerProject generated by hbm2java
 */
public class ManagerProject implements java.io.Serializable {

	private Integer idManagerProject;
	private Manager manager;
	private Project project;
	private String status;

	public ManagerProject() {
	}

	public ManagerProject(Manager manager, Project project, String status) {
		this.manager = manager;
		this.project = project;
		this.status = status;
	}

	public Integer getIdManagerProject() {
		return this.idManagerProject;
	}

	public void setIdManagerProject(Integer idManagerProject) {
		this.idManagerProject = idManagerProject;
	}

	public Manager getManager() {
		return this.manager;
	}

	public void setManager(Manager manager) {
		this.manager = manager;
	}

	public Project getProject() {
		return this.project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}