package com.group5ms.historyms.models;
import org.springframework.data.annotation.Id;
import java.util.Date;

public class History {
    @Id
    private String username;
    private Integer cc;
    private String title;
    private String text;
    private Date creationDate;

    public History(String username, Integer cc, String title, String text, Date creationDate){
        this.username = username;
        this.cc = cc;
        this.title = title;
        this.text = text;
        this.creationDate = creationDate;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getCc() {
        return cc;
    }

    public void setCc(Integer cc) {
        this.cc = cc;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }
}
