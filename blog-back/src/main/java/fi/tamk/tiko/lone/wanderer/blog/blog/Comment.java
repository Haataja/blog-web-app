/*
Blog application that provides platform for blogging.
Copyright (C) 2019  Hanna Haataja <hanna.haataja@tuni.fi>

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
package fi.tamk.tiko.lone.wanderer.blog.blog;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

/**
 * Java model for the database table Comment.
 */
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

    /**
     * Default constructor.
     */
    public Comment() {
    }

    /**
     * Constructor with parameters.
     * @param commentField The text of the comment.
     * @param commentTitle The title of the comment.
     * @param nickname The nickname of the person who left the comment.
     */
    public Comment(String commentField, String commentTitle, String nickname) {
        this.commentField = commentField;
        this.commentTitle = commentTitle;
        this.nickname = nickname;
    }

    /**
     * Gets the blog post that comment is commented to.
     * @return the blog post that comment is commented to.
     */
    public BlogPost getBlogPost() {
        return blogPost;
    }

    /**
     * Sets the blog post that comment is commented to.
     * @param blogPost the blog post that comment is commented to.
     */
    public void setBlogPost(BlogPost blogPost) {
        this.blogPost = blogPost;
    }

    /**
     * Gets the id of the comment.
     * @return the id of the comment.
     */
    public long getId() {
        return id;
    }

    /**
     * Sets the id of the comment.
     * @param id the id of the comment.
     */
    public void setId(long id) {
        this.id = id;
    }

    /**
     * Gets the text of the comment.
     * @return the text of the comment.
     */
    public String getCommentField() {
        return commentField;
    }

    /**
     * Sets the text of the comment.
     * @param commentField the text of the comment.
     */
    public void setCommentField(String commentField) {
        this.commentField = commentField;
    }

    /**
     * Gets the title of the comment.
     * @return the title of the comment.
     */
    public String getCommentTitle() {
        return commentTitle;
    }

    /**
     * Sets the title of the comment.
     * @param commentTitle the title of the comment.
     */
    public void setCommentTitle(String commentTitle) {
        this.commentTitle = commentTitle;
    }

    /**
     * Gets the nickname of the person who left the comment.
     * @return the nickname of the person who left the comment.
     */
    public String getNickname() {
        return nickname;
    }

    /**
     * Sets nickname of the person who left the comment.
     * @param nickname nickname of the person who left the comment.
     */
    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
}
