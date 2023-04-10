package th.ac.ku.kps.eng.cpe.se.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import th.ac.ku.kps.eng.cpe.se.dto.TaskProjectDTO;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.model.TaskProject;
import th.ac.ku.kps.eng.cpe.se.repository.TaskProjectRepository;

@Service
public class TaskProjectService {
	@Autowired
	private TaskProjectRepository taskprojectrepo;
	public List<TaskProject> getAll(){
		return (List<TaskProject>) taskprojectrepo.findAll();
	}
	public void save(TaskProject taskproject) {
		taskprojectrepo.save(taskproject);
	}
	public void delete(int id) {
		taskprojectrepo.deleteById(id);
	}
	public List<TaskProject> getTaskProjectByProject(Project project){
		return (List<TaskProject>) taskprojectrepo.findByProject(project);
	}
	public TaskProject getTaskProjectById(int id) {
		return taskprojectrepo.findById(id).get();
	}
	public List<TaskProjectDTO> getCount(Project project){ 
		List<TaskProject> tp1 = taskprojectrepo.findByProject(project);
		List<TaskProjectDTO> tp2 = taskprojectrepo.countTaskProject(project);
		List<TaskProjectDTO> tp = new ArrayList<TaskProjectDTO>();
		for(int i=0;i<tp1.size();i++) {
			tp.add(new TaskProjectDTO(tp1.get(i),(long)0,tp1.get(i).getDistance()));
		}
		for(int i=0;i<tp2.size();i++) {
			if(tp.get(i).getTaskproject().equals(tp2.get(i).getTaskproject())) {
				tp.get(i).setCount(tp2.get(i).getCount());
			}
		}
		Collections.sort(tp,Comparator.comparing(TaskProjectDTO::getDistance));
		return tp;
	}
	public List<TaskProjectDTO> count(Project project){
		return taskprojectrepo.countTaskProject(project);
	}
}

