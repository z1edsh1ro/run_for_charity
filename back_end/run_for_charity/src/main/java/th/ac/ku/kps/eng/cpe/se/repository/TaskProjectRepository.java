package th.ac.ku.kps.eng.cpe.se.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import th.ac.ku.kps.eng.cpe.se.dto.TaskProjectDTO;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.TaskProject;

public interface TaskProjectRepository extends CrudRepository<TaskProject, Integer>{
	@Query("from TaskProject as tp where tp.project=:project")
	public List<TaskProject> findByProject(@Param("project") Project project);
	@Query("SELECT new th.ac.ku.kps.eng.cpe.se.dto.TaskProjectDTO(tp,COUNT(rp),tp.distance) "
			+"FROM TaskProject tp left join tp.registerProjects rp "
			+ "where tp.project= :project and rp.status='อนุมัติ' group by tp")
    List<TaskProjectDTO> countTaskProject(@Param("project")Project project);
}
