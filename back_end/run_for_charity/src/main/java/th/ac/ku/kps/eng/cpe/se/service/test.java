package th.ac.ku.kps.eng.cpe.se.service;

import org.springframework.beans.factory.annotation.Autowired;

public class test {
	@Autowired 
	private static AppoveService appoveserice;

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		System.out.print(appoveserice.findAll());
	}

}
