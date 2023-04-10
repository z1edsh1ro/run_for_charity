package th.ac.ku.kps.eng.cpe.se.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import th.ac.ku.kps.eng.cpe.se.model.FollowProject;
import th.ac.ku.kps.eng.cpe.se.model.Manager;
import th.ac.ku.kps.eng.cpe.se.model.ManagerProject;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.User;



public interface ManagerProjectRepository extends CrudRepository<ManagerProject, Integer>{
	@Query("from ManagerProject m where m.status= :status")
	public List<ManagerProject> findManagerProjectByStatus(@Param("status") String status);
	@Query("from ManagerProject mp inner join mp.manager m where m.user= :user and mp.status='อนุมัติ'")
	public List<ManagerProject> findManagerProjectByUser(@Param("user") User user);
	@Query("from ManagerProject mp where mp.manager= :manager")
	public List<ManagerProject> findManagerProjectByManager(@Param("manager") Manager manager);
}
