package th.ac.ku.kps.eng.cpe.se.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.beust.jcommander.Parameter;

import th.ac.ku.kps.eng.cpe.se.model.Agency;
import th.ac.ku.kps.eng.cpe.se.model.Appove;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.User;

public interface AppoveRepository extends CrudRepository<Appove, Integer>{
	@Query("from Appove as a where a.type=:type")
	public List<Appove> findAppoveByType(@Param("type") String type);
	@Query("from Appove as a where a.type='อนุมัติหน่วยงาน' and a.agency.status='รอพิจารณา'")
	public List<Appove> findAppoveByTypeApove();
	@Query("from Appove as a where a.project=:project")
	public Appove findAppoveByProject(@Param("project") Project type);
	@Query("from Appove as a where a.agency= :agency and a.userByIdUser= :user and a.type='อนุมัติผู้รับผิดชอบหน่วยงาน' and a.agency.status='อนุมัติ' and a.userByIdUser.role='ผู้รับผิดชอบหน่วยงาน'")
	public Appove findleader(@Param("agency") Agency agency,@Param("user")User user);
	@Query("from Appove as a where a.project.status='รอพิจราณา'")
	public List<Appove> findAppove();
	@Query("from Appove as a where a.description= :description")
	public List<Appove> findAppoveWithDescription(@Param("description") String des);
	@Query("from Appove as a where a.description= :description and a.type= :type")
	public List<Appove> findAppoveWithDescriptionAndTyoe(@Param("type") String type,@Param("description") String des);
}
