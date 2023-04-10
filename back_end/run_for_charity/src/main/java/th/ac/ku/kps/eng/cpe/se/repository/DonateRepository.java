package th.ac.ku.kps.eng.cpe.se.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import th.ac.ku.kps.eng.cpe.se.model.Donate;

public interface DonateRepository extends CrudRepository<Donate, Integer>{
	@Query("from Donate as d where d.statusWithdraw=:statusWithdraw")
	public List<Donate> findDonateByStatus(@Param("statusWithdraw") String statusWithdraw);
	@Query("from Donate as d where d.project.idProject= :id")
	public Donate findDonateByIdProject(@Param("id") int id);
}
