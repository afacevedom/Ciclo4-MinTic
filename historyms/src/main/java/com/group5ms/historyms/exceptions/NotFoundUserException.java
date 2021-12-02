package com.group5ms.historyms.exceptions;

public class NotFoundUserException extends RuntimeException {
    public NotFoundUserException(String message){
        super(message);
    }
}
