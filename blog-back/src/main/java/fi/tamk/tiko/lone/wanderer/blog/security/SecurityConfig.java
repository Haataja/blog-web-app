package fi.tamk.tiko.lone.wanderer.blog.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * Configures the login with spring security.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    /**
     * Username of the admin user.
     */
    @Value("${blog.user.name}")
    private String username;

    /**
     * Password of the admin user.
     */
    @Value("${blog.user.password}")
    private String password;

    /**
     * Configures the login and allowed for all paths.
     * @param httpSecurity httpSecurity
     * @throws Exception Thrown on exception.
     */
    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.csrf().disable()
                .authorizeRequests()
                .antMatchers("/").permitAll()
                .antMatchers("/posts").permitAll()
                .antMatchers("/comment/*").permitAll()
                .antMatchers("/posts/like/*").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin().defaultSuccessUrl("/admin")
                .and()
                .logout().logoutSuccessUrl("/")
                .invalidateHttpSession(true)
                .and().httpBasic();
    }

    /**
     * Configures the username and password and role.
     * @param authentication auth.
     * @throws Exception thrown on exception.
     */
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder authentication)
            throws Exception {
        authentication.inMemoryAuthentication()
                .withUser(username)
                .password(passwordEncoder().encode(password))
                .authorities("ADMIN");
    }

    /**
     * Encodes the password when send from form to back.
     * @return encoded password.
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     * Configures the resources accessible for all.
     * @param web web
     * @throws Exception thrown on exception.
     */
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/css/**", "/js/**", "/img/**", "/static/**","/**.json");
    }
}

