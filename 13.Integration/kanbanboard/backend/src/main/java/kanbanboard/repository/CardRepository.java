package kanbanboard.repository;

import java.util.List;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import kanbanboard.domain.Card;

@Repository
public class CardRepository {
  private final SqlSession sqlSession;

  public CardRepository(SqlSession sqlSession) {
    this.sqlSession = sqlSession;
  }

  public List<Card> findAll() {
    return sqlSession.selectList("card.findAll");
  }
}
