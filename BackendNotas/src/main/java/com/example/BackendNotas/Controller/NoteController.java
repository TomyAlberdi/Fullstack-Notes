package com.example.BackendNotas.Controller;

import com.example.BackendNotas.DTO.NoteDTO;
import com.example.BackendNotas.Entity.Note;
import com.example.BackendNotas.Entity.User;
import com.example.BackendNotas.Service.NoteService;
import com.example.BackendNotas.Service.UserService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@RestController
@RestControllerAdvice
@CrossOrigin(origins = { "http://127.0.0.1:5173", "http://localhost:5173" })
@Validated
@RequestMapping("/notes")
public class NoteController {

    private final NoteService noteService;
    private final UserService userService;

    @PostMapping("/add")
    public ResponseEntity<?> add(@Valid @RequestBody NoteDTO noteDTO) {
        Optional<User> user = userService.findById(noteDTO.getUser_id());
        if (user.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User id " + noteDTO.getUser_id() + " do not exists");
        } else {
            noteService.add(noteDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body("Note created");
        }
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<?> listByUser(@PathVariable Long id) {
        List<Note> notes = noteService.listByUserId(id);
        var array = new ArrayList<>();

        return notes.isEmpty()
                ? ResponseEntity.status(HttpStatus.NOT_FOUND).body(array)
                : ResponseEntity.ok(notes);
    }

}
