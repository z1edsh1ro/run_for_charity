package th.ac.ku.kps.eng.cpe.se.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class UserDTO {
	@NotBlank(message = "Invalid User ID: Empty User ID")
	@Size(min = 3, max = 20, message = "Invalid User ID: Must be of 3 - 20 characters")
	private String idUser;
	@NotBlank(message = "Invalid Password: Empty Password")
    @Size(min = 8, max = 15, message = "Invalid Password: Must be of 8 - 15 characters")
	private String password;
	@NotBlank(message = "Invalid Firstname: Empty Firstname")
	@Size(min = 3, max = 20, message = "Invalid firstname: Must be of 3 - 20 characters")
	private String fristName;
	@Min(value = 5, message = "You must be at least 5 years old to register.")
	@Max(value = 120, message = "You cannot be more than 120 years old.")
	private int age;
	@NotBlank(message = "Invalid Address: Empty Address")
	private String address;
	@Pattern(regexp = "\\d{10}", message = "Please enter a valid Phone Number.")
	private String phone;
	private String role;
	@NotBlank(message = "Invalid Lastname: Empty Lastname")
	@Size(min = 3, max = 20, message = "Invalid Lastname: Must be of 3 - 20 characters")
	private String lastName;
	@Email(message = "Invalid Email")
	@NotBlank(message = "Invalid Email: Empty Email")
	private String email;
	public String getIdUser() {
		return idUser;
	}
	public void setIdUser(String idUser) {
		this.idUser = idUser;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFristName() {
		return fristName;
	}
	public void setFristName(String fristName) {
		this.fristName = fristName;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
}
