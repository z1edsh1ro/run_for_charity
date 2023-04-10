//package th.ac.ku.kps.eng.cpe.se.restservice;
//
//import java.io.IOException;
//import java.util.Base64;
//
//import org.apache.tomcat.util.http.parser.MediaType;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.multipart.MultipartFile;
//
//import ch.qos.logback.core.util.ContentTypeUtil;
//import th.ac.ku.kps.eng.cpe.se.dto.FileEntity;
//
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//@RequestMapping("/api")
//public class StorageController {
//
//	@PostMapping("/")
//	public ResponseEntity<?> upload(@RequestParam("image") MultipartFile file) throws IOException{
//		String uploadImage;
//		return ResponseEntity.status(HttpStatus.OK).body(null);
//	}
//    @PostMapping("/upload")
//    public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file) {
//        try {
//            byte[] fileContent = file.getBytes();
//            String encodedContent = Base64.getEncoder().encodeToString(fileContent);
//            FileEntity fileEntity = new FileEntity();
//            fileEntity.setName(file.getOriginalFilename());
//            fileEntity.setContent(encodedContent);
//            fileRepository.save(fileEntity);
//            return ResponseEntity.status(HttpStatus.OK).body("File uploaded successfully.");
//        } catch (IOException e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload file.");
//        }
//    }
//}
