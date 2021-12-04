package com.group5ms.historyms.repositories;

import com.group5ms.historyms.models.History;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface HistoryRepository extends MongoRepository<History, String>{
    List<History> findByUsername (String username);
    List<History> findByCc (String cc);
}
