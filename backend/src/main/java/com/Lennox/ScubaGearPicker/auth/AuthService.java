package com.Lennox.ScubaGearPicker.auth;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.Lennox.ScubaGearPicker.users.AppUser;
import com.Lennox.ScubaGearPicker.users.AppUserRepository;

@Service
public class AuthService {

    private final AppUserRepository appUserRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthService(AppUserRepository appUserRepository, PasswordEncoder passwordEncoder,
            AuthenticationManager authenticationManager) {
        this.appUserRepository = appUserRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }

    public void signUp(SignUpRequest request) {
        if (appUserRepository.findByUsername(request.username()).isPresent()) {
            throw new IllegalStateException("Username already exists");
        }

        if (appUserRepository.findByEmail(request.email()).isPresent()) {
            throw new IllegalStateException("Email is already registered");
        }
        var user = new AppUser(
                request.username(),
                request.email(),
                passwordEncoder.encode(request.password()));

        appUserRepository.save(user);
    }

    public String signIn(SignInRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.username(),
                        request.password()));

        // for testing, need to be replaced with JWT generatin
        return "User logged in successfully!";
    }
}