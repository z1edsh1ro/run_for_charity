package th.ac.ku.kps.eng.cpe.se.service;

import java.time.ZonedDateTime;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;

import th.ac.ku.kps.eng.cpe.se.dto.LoginDTO;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.repository.UserRepository;

@Service
public class LoginService {
	@Autowired
	private UserRepository userrepository;
	private static String JWT_TOKEN_KEY = "s5v8y/B?E(H+MbQeThWmYq3t6w9z$C&F)J@NcRfUjXn2r4u7x!A%D*G-KaPdSgVkYp3s6v8y/B?E(H+MbQeThWmZq4t7w!z$C&F)J@NcRfUjXn2r5u8x/A?D*G-KaPdS";
	
	public User validUser(LoginDTO login) {
		User u = userrepository.findByUserId(login.getIdUser());
		if (u != null) {
           String passwordDTO = login.getPassword();
           String passwordDB = u.getPassword();
           Boolean isPwdRight = passwordDTO.equals(passwordDB);
           if (isPwdRight) {
               User user = userrepository.findByUserAndPassword(login.getIdUser(), login.getPassword());
               if (user!=null) {
                   return user;
               } else {
                   return null;
               }
           } else {

               return null;
           }
       }else {
           return null;
       }
	}
	
	public String generateToken(LoginDTO u) {
		try {
			Algorithm algorithm = Algorithm.HMAC256(JWT_TOKEN_KEY);
			Date expirationDate = Date.from(ZonedDateTime.now().plusHours(1).toInstant());
			Date issuedAt = Date.from(ZonedDateTime.now().toInstant());
			//return "issuedAt:"+issuedAt+"expirationDate:"+expirationDate+",username:"+c.getUsername()+",algorithm"+algorithm;
			return JWT.create()
					// Issue date.
					.withIssuedAt(issuedAt)
					// Expiration date.
					.withExpiresAt(expirationDate)
					.withClaim("idUser", 
							u.getIdUser())
							// Issuer of the token.
							.withIssuer("jwtauth")
							// And the signing algorithm.
							.sign(algorithm);



		} catch (JWTCreationException e) {
			// LOGGER.error(e.getMessage(), e);
		}
		return null;
	}

}
