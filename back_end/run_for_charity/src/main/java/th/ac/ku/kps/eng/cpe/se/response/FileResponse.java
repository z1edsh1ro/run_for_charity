package th.ac.ku.kps.eng.cpe.se.response;

public class FileResponse {
	private String fileName;
	private String msg;
	public FileResponse() {
		
	}
	public FileResponse(String fileName, String msg) {
		super();
		this.setFileName(fileName);
		this.setMsg(msg);
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
}
