package fi.tamk.tiko.lone.wanderer.blog;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BlogApplication {
    public static String BASEURL = "http://localhost:8080/";
    public static String RESOURCE = "posts/";

    private static Logger log = LoggerFactory.getLogger(BlogApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(BlogApplication.class, args);
        log.info("INSTRUCTIONS");
        log.info("------------");
        log.info("GET all blog posts curl -X GET {}{}",BASEURL,RESOURCE);
    }

}
