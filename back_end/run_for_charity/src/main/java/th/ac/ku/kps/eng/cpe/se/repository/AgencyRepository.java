package th.ac.ku.kps.eng.cpe.se.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import th.ac.ku.kps.eng.cpe.se.model.Agency;
import th.ac.ku.kps.eng.cpe.se.model.User;

public interface AgencyRepository extends CrudRepository<Agency, Integer>{
	@Query("from Agency as a inner join a.managers as m where m.user=:user")
	public List<Agency> findAgencyByUser(@Param("user") User user);
	@Query("from Agency as a where a.status= :status")
	public List<Agency> findAgencyByStatus(@Param("status")String status);
}
