package th.ac.ku.kps.eng.cpe.se.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import th.ac.ku.kps.eng.cpe.se.model.Donate;
import th.ac.ku.kps.eng.cpe.se.model.Project;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Integer>{
	@Query("from Project as p inner join p.donates as d where p.status='อนุมัติ' and d.statusWithdraw='ยังไม่ถอน' ")
	public List<Project> getAll();
	@Query("from Project as p where p.status= :status")
	public List<Project> findByStatus(String status);
}
