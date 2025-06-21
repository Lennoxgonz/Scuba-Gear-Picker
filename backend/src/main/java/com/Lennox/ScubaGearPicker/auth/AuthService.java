package com.Lennox.ScubaGearPicker.auth;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.Lennox.ScubaGearPicker.users.AppUser;
import com.Lennox.ScubaGearPicker.users.AppUserRepository;

@Service
public class AuthService {

    private final AppUserRepository appUserRepository;
    private final PasswordEncoder passwordEncoder;

    // Injecting  dependencies via the constructor
    public AuthService(AppUserRepository appUserRepository, PasswordEncoder passwordEncoder) {
        this.appUserRepository = appUserRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void register(RegisterRequest request) {
        // Check if username is taken
        if (appUserRepository.findByUsername(request.username()).isPresent()) {
            throw new IllegalStateException("Username already exists");
        }

        // Check is email is already registered
        if (appUserRepository.findByEmail(request.email()).isPresent()) {
            throw new IllegalStateException("Email is already registered");
        }
        // Create a new user and encode the password
        var user = new AppUser(
                request.username(),
                request.email(),
                passwordEncoder.encode(request.password())
        );

        // Save the new user to the database
        appUserRepository.save(user);
    }
}