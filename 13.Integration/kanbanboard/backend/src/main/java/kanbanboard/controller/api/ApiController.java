package kanbanboard.controller.api;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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


}
