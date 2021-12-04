package com.group5ms.historyms.controllers;

import com.group5ms.historyms.exceptions.NotFoundUserException;
import com.group5ms.historyms.models.History;
import com.group5ms.historyms.repositories.HistoryRepository;
import org.springframework.web.bind.annotation.*;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
public class HistoryController{
    private final HistoryRepository historyRepository;

    public HistoryController(HistoryRepository historyRepository) {
        this.historyRepository = historyRepository;
    }

    @PostMapping("/history")
    History newHistory (@RequestBody History history){
        history.setCreationDate(new Date());
        return historyRepository.save(history);
    }

    @GetMapping("/history/{data}")
    List<History> userHistry(@PathVariable String data){
        List<History> historyUser = historyRepository.findByUsername(data);
        List<History> historyCC = historyRepository.findByCc(data);

        List<History> histories = Stream.concat(historyUser.stream(), historyCC.stream()).collect(Collectors.toList());
        return histories;
    }
}