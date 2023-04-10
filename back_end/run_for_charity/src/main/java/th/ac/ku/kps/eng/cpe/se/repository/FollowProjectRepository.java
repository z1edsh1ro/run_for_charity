package th.ac.ku.kps.eng.cpe.se.repository;

import java.util.List;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import th.ac.ku.kps.eng.cpe.se.model.FollowProject;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.User;

@Repository
public interface FollowProjectRepository extends CrudRepository<FollowProject, Integer>{
	@Query("from FollowProject as f where f.user=:user")
	public List<FollowProject> findFollowProject(@Param("user") User user);
	@Query("from FollowProject as f where f.project=:project and f.user=:user")
	public FollowProject findFollowProjectByUserAndByProject(@Param("project") Project project,@Param("user") User user);
	@Query("from FollowProject as f where f.project=:project")
	public List<FollowProject> findFollowProjectByProject(@Param("project") Project project);
	@Query("SELECT COUNT(f) from FollowProject as f where f.project=:project")
	public Long countFollowProjectByProject(@Param("project") Project project);
}
