package th.ac.ku.kps.eng.cpe.se.dto;

public class LoginDTO {
	private String idUser;
	private String password;

	public LoginDTO() {
	}
	 
	public LoginDTO(String idUser, String password) {
	this.setIdUser(idUser);
	this.password = password;
	}
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getIdUser() {
		return idUser;
	}

	public void setIdUser(String idUser) {
		this.idUser = idUser;
	}


}
