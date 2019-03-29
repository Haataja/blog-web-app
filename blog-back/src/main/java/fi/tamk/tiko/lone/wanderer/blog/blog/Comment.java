package fi.tamk.tiko.lone.wanderer.blog.blog;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Comment {
    @Id
    @GeneratedValue
    @Column(name = "comment_id")
    private long id;
    @ManyToOne
    @JoinColumn
    @JsonIgnore
    private BlogPost blogPost;
    private String commentField;
    private String commentTitle;
    private String nickname;

    public Comment() {
    }

    public Comment(String commentField, String commentTitle, String nickname) {
        this.commentField = commentField;
        this.commentTitle = commentTitle;
        this.nickname = nickname;
    }

    public BlogPost getBlogPost() {
        return blogPost;
    }

    public void setBlogPost(BlogPost blogPost) {
        this.blogPost = blogPost;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCommentField() {
        return commentField;
    }

    public void setCommentField(String commentField) {
        this.commentField = commentField;
    }

    public String getCommentTitle() {
        return commentTitle;
    }

    public void setCommentTitle(String commentTitle) {
        this.commentTitle = commentTitle;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
}
