package kanbanboard.controller.api;

import java.util.List;
import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import kanbanboard.domain.Card;
import kanbanboard.domain.Task;
import kanbanboard.dto.JsonResult;
import kanbanboard.repository.CardRepository;
import kanbanboard.repository.TaskRepository;



@RestController
@RequestMapping("/kanbanboard")
public class ApiController {

  private final CardRepository cardRepository;
  private final TaskRepository taskRepository;

  public ApiController(CardRepository cardRepository, TaskRepository taskRepository) {
    this.cardRepository = cardRepository;
    this.taskRepository = taskRepository;
  }

  @GetMapping("/card")
  public ResponseEntity<JsonResult<List<Card>>> getCards() {
    return ResponseEntity.ok().body(JsonResult.success(cardRepository.findAll()));
  }

  @GetMapping("/task")
  public ResponseEntity<JsonResult<List<Task>>> getTasks(@RequestParam("cardNo") Long cardNo) {
    return ResponseEntity.ok().body(JsonResult.success(taskRepository.findAllByCardNo(cardNo)));
  }

  @PostMapping("/task")
  public ResponseEntity<JsonResult<Task>> addTask(@RequestBody Task task) {
    taskRepository.insert(task);

    return ResponseEntity.ok().body(JsonResult.success(task));
  }

  @DeleteMapping("/task/{no}")
  public ResponseEntity<JsonResult<Task>> deleteTask(@PathVariable("no") Long no) {
    taskRepository.delete(no);

    return ResponseEntity.ok().body(JsonResult.success(null));
  }

  @PutMapping("/task/{no}")
  public ResponseEntity<JsonResult<Map<String, Object>>> updateDone(@PathVariable("no") Long no,
      @RequestParam("done") String done) {
    taskRepository.updateDone(no, done);

    return ResponseEntity.ok().body(JsonResult.success(Map.of("no", no, "done", done)));
  }
}
