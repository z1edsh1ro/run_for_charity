package th.ac.ku.kps.eng.cpe.se.run_for_charity;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("th.ac.ku.kps.eng.cpe.se")
@EnableJpaRepositories("th.ac.ku.kps.eng.cpe.se.repository")

public class RunForCharityApplication {

	public static void main(String[] args) {
		SpringApplication.run(RunForCharityApplication.class, args);
	}

}
