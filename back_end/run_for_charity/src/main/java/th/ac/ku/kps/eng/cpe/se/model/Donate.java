package th.ac.ku.kps.eng.cpe.se.model;
// Generated Mar 31, 2023, 10:36:07 PM by Hibernate Tools 6.1.5.Final

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Donate generated by hbm2java
 */
public class Donate implements java.io.Serializable {

	private Integer idDonate;
	private Project project;
	private String statusWithdraw;
	@JsonIgnore private Set donateDetails = new HashSet(0);

	public Donate() {
	}

	public Donate(Project project, String statusWithdraw) {
		this.project = project;
		this.statusWithdraw = statusWithdraw;
	}

	public Donate(Project project, String statusWithdraw, Set donateDetails) {
		this.project = project;
		this.statusWithdraw = statusWithdraw;
		this.donateDetails = donateDetails;
	}

	public Integer getIdDonate() {
		return this.idDonate;
	}

	public void setIdDonate(Integer idDonate) {
		this.idDonate = idDonate;
	}

	public Project getProject() {
		return this.project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public String getStatusWithdraw() {
		return this.statusWithdraw;
	}

	public void setStatusWithdraw(String statusWithdraw) {
		this.statusWithdraw = statusWithdraw;
	}

	public Set getDonateDetails() {
		return this.donateDetails;
	}

	public void setDonateDetails(Set donateDetails) {
		this.donateDetails = donateDetails;
	}

}