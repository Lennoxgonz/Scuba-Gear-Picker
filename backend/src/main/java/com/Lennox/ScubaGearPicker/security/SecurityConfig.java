package com.Lennox.ScubaGearPicker.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // Disable CSRF protection for stateless REST APIs
            .csrf(csrf -> csrf.disable())

            .authorizeHttpRequests(authz -> authz
                // Allow anyone (authenticated or not) to access the /api/gear endpoints
                .requestMatchers("/api/gear/**").permitAll()
                // All other requests must be authenticated
                .anyRequest().authenticated()
            )

            // 3. Enable CORS with default settings
            .cors(withDefaults())

            // 4. (Optional) If you want to keep form-based login for other endpoints
            .formLogin(withDefaults());

        return http.build();
    }
}