package com.example.BackendNotas.Controller;

import com.example.BackendNotas.DTO.UserDTO;
import com.example.BackendNotas.Entity.User;
import com.example.BackendNotas.Service.UserService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@RestController
@RestControllerAdvice
@CrossOrigin(origins = { "http://127.0.0.1:5173", "http://localhost:5173", "http://192.168.0.183:5173" })
@Validated
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    @PostMapping("/add")
    public ResponseEntity<?> add(@Valid @RequestBody UserDTO userDTO) {
        String email = userDTO.getEmail();
        Optional<User> sameEmailUser = userService.findByEmail(email);
        if (sameEmailUser.isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email: " + email + " already exists");
        }
        User user = userService.add(userDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body("User created");
    }

    @GetMapping("/list")
    public List<User> list() {
        return userService.list();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Optional<User> user = userService.findById(id);
        if(user.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ID: " + id + " not found");
        } else {
            userService.delete(id);
            return ResponseEntity.ok().body("User with id " + id + " deleted");
        }
    }

    @GetMapping("/search/{id}")
    public ResponseEntity<?> searchById(@PathVariable Long id) {
        Optional<User> user = userService.findById(id);
        return user.isEmpty()
                ? ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with ID " + id + " not found")
                : ResponseEntity.ok(user);
    }

    @GetMapping("/searchEmail/{email}")
    public ResponseEntity<?> searchByEmail(@PathVariable String email) {
        Optional<User> user = userService.findByEmail(email);
        return user.isEmpty()
                ? ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with Email " + email + " not found")
                : ResponseEntity.ok(user);
    }

}
