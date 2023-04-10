package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;

import th.ac.ku.kps.eng.cpe.se.model.Agency;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.repository.UserRepository;


@Service
public class UserService {
	@Autowired
	private UserRepository userrepository;
	private static String JWT_TOKEN_KEY = "s5v8y/B?E(H+MbQeThWmYq3t6w9z$C&F)J@NcRfUjXn2r4u7x!A%D*G-KaPdSgVkYp3s6v8y/B?E(H+MbQeThWmZq4t7w!z$C&F)J@NcRfUjXn2r5u8x/A?D*G-KaPdS";
	
	public List<User> getAll(){
		return (List<User>) userrepository.findAll();
	}
	public List<User> findByProject(Project project){
		return (List<User>) userrepository.findByProject(project);
	}
	public Long countByProject(Project project){
		return userrepository.countByProject(project);
	}
	public List<User> findByAgency(Agency agency){
		return (List<User>) userrepository.findByAgency(agency);
	}
	public Long countByAgency(Agency agency){
		return userrepository.countByAgency(agency);
	}
	public void delete(int id) {
		userrepository.deleteById(id);
	}
	public void update(User user) {
		userrepository.save(user);
	}
	public User getUserById(String idUser) {
		return userrepository.findByUserId(idUser);
	}
	public User validateToken(String token) {
		try {
			if (token != null) {
				Algorithm algorithm = Algorithm.HMAC256(JWT_TOKEN_KEY);
				JWTVerifier verifier = JWT.require(algorithm).withIssuer("jwtauth").build(); // Reusable verifier
				// instance
				DecodedJWT jwt = verifier.verify(token);
				// Get the userId from token claim.
				Claim idUser = jwt.getClaim("idUser");
				// Find user by token subject(id).
				// c userDao = new UserDao();
				return getUserById(idUser.asString());
			}
		} catch (JWTVerificationException e) {
			// LOGGER.error(e.getMessage(), e);
		}
		return null;
	}
//    public LoginResponse  login(LoginDTO loginDTO) {
//        String msg = "";
//        User u = userrepository.findByUser(loginDTO.getUser());
//        if (u != null) {
//            String passwordDTO = loginDTO.getPassword();
//            String passwordDB = u.getPassword();
//            Boolean isPwdRight = passwordDTO.equals(passwordDB);
//            if (isPwdRight) {
//                User user = userrepository.findByUserAndPassword(loginDTO.getUser(), loginDTO.getPassword());
//                if (user!=null) {
//                    return new LoginResponse("Login Success", true);
//                } else {
//                    return new LoginResponse("Login Failed", false);
//                }
//            } else {
// 
//                return new LoginResponse("password Not Match", false);
//            }
//        }else {
//            return new LoginResponse("Email not exits", false);
//        }
//    }
}
