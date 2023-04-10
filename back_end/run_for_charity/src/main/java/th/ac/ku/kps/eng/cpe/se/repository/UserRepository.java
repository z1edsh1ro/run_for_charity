package th.ac.ku.kps.eng.cpe.se.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import th.ac.ku.kps.eng.cpe.se.model.Agency;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.User;
@Repository
public interface UserRepository extends CrudRepository<User, Integer>{
//	@Query("from User as u inner join u.donates as d where d.idUser=:idUser")
//	public List<User> findUserDonateById(@Param("idUser") int idUser);
	@Query("from User as u where u.idUser=:idUser")
	public User findByUserId(@Param("idUser") String idUser);
	@Query("from User as u where u.idUser=:idUser and u.password=:password")
	public User findByUserAndPassword(@Param("idUser") String idUser,@Param("password") String password);
	@Query("from User as u inner join u.managers m inner join m.managerProjects mp where mp.project= :project and mp.status='อนุมัติ'")
	public List<User> findByProject(@Param("project") Project project);
	@Query("SELECT COUNT(u) from User as u inner join u.managers m inner join m.managerProjects mp where mp.project= :project and mp.status='อนุมัติ'")
	public Long countByProject(@Param("project") Project project);
	@Query("from User as u inner join u.managers m inner join m.agency a where a= :agency")
	public List<User> findByAgency(@Param("agency") Agency agency);
	@Query("SELECT COUNT(u) from User as u inner join u.managers m inner join m.agency a where a= :agency")
	public Long countByAgency(@Param("agency") Agency agency);
}
