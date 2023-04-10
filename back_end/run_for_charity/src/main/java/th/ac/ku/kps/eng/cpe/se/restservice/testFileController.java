package th.ac.ku.kps.eng.cpe.se.restservice;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import th.ac.ku.kps.eng.cpe.se.model.Donate;
import th.ac.ku.kps.eng.cpe.se.model.Project;
import th.ac.ku.kps.eng.cpe.se.response.FileResponse;
import th.ac.ku.kps.eng.cpe.se.service.ProjectService;
import th.ac.ku.kps.eng.cpe.se.util.FileUploadUtil;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class testFileController {
	@Autowired
	private ProjectService projectservice;

	@PostMapping("/upload")
    public FileResponse uploadFile(
            @RequestParam("file") MultipartFile multipartFile)
                    throws IOException {
         
        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        String filecode = FileUploadUtil.saveFile(fileName, multipartFile);
         
        FileResponse response = new FileResponse();
        response.setFileName(filecode);
        response.setMsg("success");
         
        return response;
    }
//	@PostMapping("/upload")
//	public FileResponse fileUpload(@RequestParam("file") MultipartFile file){
//			String filename = null;
//			try {
//				filename = fileservice.uploadImage(path, file);
//				Project p = projectservice.getProjectById(340);
//				p.setEvidence(filename);
//				projectservice.update(p);
//				FileResponse f = new FileResponse(filename, "success");
//				return f;
//			} catch (Exception e) {
//				// TODO Auto-generated catch block
//				FileResponse f = new FileResponse(filename, "error");
//				return f;
//			}						
//	}
}
