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

@Entity
public class BlogPost {
    @Id
    @GeneratedValue
    private long id;

    private LocalDate creationDate;
    @Column(columnDefinition="LONGTEXT")
    private String post;
    private String title;
    private String author;
    private int likes;

    public BlogPost(){
        setCreationDate(LocalDate.now());
    }

    public BlogPost(String post, String title, String author){
        setAuthor(author);
        setCreationDate(LocalDate.now());
        setPost(post);
        setTitle(title);
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }

    public String getPost() {
        return post;
    }

    public void setPost(String post) {
        this.post = post;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public long getId() {
        return id;
    }

    public int getLikes() {
        return likes;
    }
}
