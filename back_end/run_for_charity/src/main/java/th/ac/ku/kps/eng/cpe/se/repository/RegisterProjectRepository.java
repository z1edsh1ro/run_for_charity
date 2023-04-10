package th.ac.ku.kps.eng.cpe.se.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.RegisterProject;
import th.ac.ku.kps.eng.cpe.se.model.TaskProject;
import th.ac.ku.kps.eng.cpe.se.model.User;

@Repository
public interface RegisterProjectRepository extends CrudRepository<RegisterProject, Integer>{
	@Query("from RegisterProject as r where r.user=:user")
	public List<RegisterProject> findRegisterProject(@Param("user") User user);
	@Query("SELECT COUNT(rp) FROM RegisterProject rp WHERE rp.taskProject= :taskProject and rp.status='อนุมัติ'")
    long count(@Param("taskProject") TaskProject taskProject);
	@Query("from RegisterProject as r where r.user= :user and r.status= :status")
	public List<RegisterProject> findRegisterProjectByTypeAndUser(@Param("user") User user,@Param("status") String status);
	@Query("from RegisterProject as r where r.status= :status")
	public List<RegisterProject> findRegisterProjectByType(@Param("status") String status);
	@Query("from RegisterProject r inner join r.taskProject tp inner join tp.project p where p= :project and r.status='อนุมัติ'")
	public List<RegisterProject> findRegisterProjectByProject(@Param("project")Project project);
	@Query("SELECT COUNT(r) from RegisterProject r inner join r.taskProject tp inner join tp.project p where p= :project and r.status='อนุมัติ'")
	public Long countRegisterProjectByProject(@Param("project")Project project);
}