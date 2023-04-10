package th.ac.ku.kps.eng.cpe.se.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.model.FollowProject;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.User;
import th.ac.ku.kps.eng.cpe.se.repository.FollowProjectRepository;
@Service
public class FollowProjectService {
	@Autowired
	private FollowProjectRepository fpRepo;
	public List<FollowProject> getAll() {
		return (List<FollowProject>) fpRepo.findAll();
	}
	public List<FollowProject> findFollowProjectByUser(User user){
		return (List<FollowProject>) fpRepo.findFollowProject(user);
	}
	public List<FollowProject> findFollowProjectByProject(Project project){
		return (List<FollowProject>) fpRepo.findFollowProjectByProject(project);
	}
	public Long countFollowProjectByProject(Project project){
		return fpRepo.countFollowProjectByProject(project);
	}
	public FollowProject findFollowProjectByUserAndByProject(Project project,User user){
		return fpRepo.findFollowProjectByUserAndByProject(project, user);
	}
	public FollowProject findFollowProjectById(int id) {
		return fpRepo.findById(id).get();
	}
	public void create(FollowProject follow) {
		fpRepo.save(follow);
	}
	public void delete(FollowProject follow) {
		fpRepo.delete(follow);
	}
}
