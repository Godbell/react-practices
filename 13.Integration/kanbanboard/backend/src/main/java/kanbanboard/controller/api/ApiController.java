package kanbanboard.controller.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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


}
