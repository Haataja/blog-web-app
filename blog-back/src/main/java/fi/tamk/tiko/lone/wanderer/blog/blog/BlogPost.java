/*
Blog application that provides platform for blogging.
Copyright (C) 2019  Hanna Haataja <hanna.haataja@tuni.fi>

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
package fi.tamk.tiko.lone.wanderer.blog.blog;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Java model for the database table BlogPost.
 */
@Entity
public class BlogPost {
    @Id
    @GeneratedValue
    private long id;
    private LocalDate creationDate;
    @Column(columnDefinition = "LONGTEXT")
    private String post;
    private String title;
    private String author;
    private int likes;
    @OneToMany(mappedBy = "blogPost",cascade = CascadeType.ALL, fetch = FetchType.EAGER, targetEntity = Comment.class, orphanRemoval=true)
    private List<Comment> commentList;

    /**
     * Default constructor, sets creation date to current date.
     */
    public BlogPost() {
        setCreationDate(LocalDate.now());
        commentList = new ArrayList<>();
    }

    /**
     * Constructor with parameters.
     * @param post The text of the blog post.
     * @param title The title of the blog post.
     * @param author The author of the blog post.
     * @param comments The comments of the blog post.
     */
    public BlogPost(String post, String title, String author, Comment... comments) {
        setAuthor(author);
        setCreationDate(LocalDate.now());
        setPost(post);
        setTitle(title);
        this.commentList = Stream.of(comments).collect(Collectors.toList());
        this.commentList.forEach(x -> x.setBlogPost(this));
    }

    /**
     * Sets likes to the blog post.
     * @param likes number of likes.
     */
    public void setLikes(int likes) {
        this.likes = likes;
    }

    /**
     * Gets the comments of the blog post.
     * @return the comments of the blog post.
     */
    public List<Comment> getCommentList() {
        return commentList;
    }

    /**
     * Sets the comments of the blog post.
     * @param commentList the comments of the blog post.
     */
    public void setCommentList(List<Comment> commentList) {
        this.commentList = commentList;
    }

    /**
     * Gets the creation date of the blog post.
     * @return the creation date of the blog post.
     */
    public LocalDate getCreationDate() {
        return creationDate;
    }

    /**
     * Sets the creation date of the blog post.
     * @param creationDate the creation date of the blog post.
     */
    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }

    /**
     * Gets the text of the post.
     * @return the text of the post.
     */
    public String getPost() {
        return post;
    }

    /**
     * Sets the text of the post.
     * @param post the text of the post.
     */
    public void setPost(String post) {
        this.post = post;
    }

    /**
     * Gets the title of the post.
     * @return the text of the post.
     */
    public String getTitle() {
        return title;
    }

    /**
     * Sets the title of the post.
     * @param title the title of the post.
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * Gets the author of the post.
     * @return the author of the post.
     */
    public String getAuthor() {
        return author;
    }

    /**
     * Sets the author of the post.
     * @param author the author of the post.
     */
    public void setAuthor(String author) {
        this.author = author;
    }

    /**
     * Gets the id of the post.
     * @return the id of the post.
     */
    public long getId() {
        return id;
    }

    /**
     * Gets the number of likes of the post.
     * @return the number of likes of the post.
     */
    public int getLikes() {
        return likes;
    }
}
