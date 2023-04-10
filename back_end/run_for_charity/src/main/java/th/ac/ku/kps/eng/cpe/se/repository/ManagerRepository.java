package th.ac.ku.kps.eng.cpe.se.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import th.ac.ku.kps.eng.cpe.se.model.Agency;
import th.ac.ku.kps.eng.cpe.se.model.FollowProject;
import th.ac.ku.kps.eng.cpe.se.model.Manager;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.User;

public interface ManagerRepository extends CrudRepository<Manager, Integer>{
//	@Query("from Manager.user as m inner join m.appovesForIdUser as au where au.project=:project")
//	public Manager findByProject(@Param("project") Project project);
	@Query("select m from Manager m inner join m.user u inner join u.appovesForIdUser a inner join a.project p where p = :project ")
	public Manager findByProject(@Param("project") Project project);
	@Query("from Manager m where m.user= :user ")
	public Manager findByUser(@Param("user") User user);
	@Query("from Manager m where m.user= :user and m.agency= :agency")
	public Manager findByUserAndByAgency(@Param("user") User user,@Param("agency") Agency agency);
	@Query("SELECT COUNT(m) from Manager m where m.agency= :agency")
	public Long countByAgency(@Param("agency") Agency agency);
}
