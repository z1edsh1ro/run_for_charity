package th.ac.ku.kps.eng.cpe.se.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import th.ac.ku.kps.eng.cpe.se.model.DonateDetail;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.User;

@Repository
public interface DonateDetailRepository extends CrudRepository<DonateDetail, Integer>{
	@Query("from DonateDetail as d where d.user= :user")
	public List<DonateDetail> findDonate(@Param("user") User user);
	@Query("from DonateDetail as d where d.statusAppove= :statusAppove")
	public List<DonateDetail> findDonateByStatus(@Param("statusAppove") String statusAppove);
	@Query("from DonateDetail dt inner join dt.donate d inner join d.project p where p= :project and dt.statusAppove='อนุมัติ'")
	public List<DonateDetail> findDonateByProject(@Param("project") Project project);
	@Query("SELECT COUNT(dt) from DonateDetail dt inner join dt.donate d inner join d.project p where p= :project and dt.statusAppove='อนุมัติ'")
	public Long countDonateByProject(@Param("project") Project project);
}
