package th.ac.ku.kps.eng.cpe.se.response;

import java.util.List;

import th.ac.ku.kps.eng.cpe.se.model.DonateDetail;

public class DonateDetailResponse {
	private String status;
	private List<DonateDetail> donatedetail;
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
	public List<DonateDetail> getDonatedetail() {
		return donatedetail;
	}
	public void setDonatedetail(List<DonateDetail> donatedetail) {
		this.donatedetail = donatedetail;
	}

}
