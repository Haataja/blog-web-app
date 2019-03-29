/*
Blog application that provides platform for blogging.
Copyright (C) 2019  Hanna Haataja <hanna.haataja@tuni.fi>

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
package fi.tamk.tiko.lone.wanderer.blog.rest;

import fi.tamk.tiko.lone.wanderer.blog.blog.BlogPost;
import fi.tamk.tiko.lone.wanderer.blog.blog.BlogRepository;
import fi.tamk.tiko.lone.wanderer.blog.blog.Comment;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class BlogController {
    Logger log = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private BlogRepository blogRepository;


    @RequestMapping("/posts")
    public ResponseEntity<Iterable<BlogPost>> getPosts(){
        return new ResponseEntity<>(blogRepository.findAllByOrderByIdDesc(), HttpStatus.OK);
    }

    @PostMapping("/comment/{id}")
    public ResponseEntity<?> addComment(@PathVariable long id,@RequestBody Comment comment){
        log.debug("id: {} and comment {}", id, comment.toString());
        if(blogRepository.findById(id).isPresent()){
            log.debug("Got the post!");
            BlogPost blogPost = blogRepository.findById(id).get();
            comment.setBlogPost(blogPost);
            blogPost.getCommentList().add(comment);
            blogRepository.save(blogPost);
            return new ResponseEntity<>(comment,HttpStatus.OK);
        } else {
            return new ResponseEntity<>(comment,HttpStatus.NOT_FOUND);
        }
    }
}
