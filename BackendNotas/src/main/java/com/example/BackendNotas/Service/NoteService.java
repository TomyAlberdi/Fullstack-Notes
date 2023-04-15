package com.example.BackendNotas.Service;

import com.example.BackendNotas.DTO.NoteDTO;
import com.example.BackendNotas.Entity.Note;
import com.example.BackendNotas.Entity.User;
import com.example.BackendNotas.Repository.NoteRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class NoteService {

    private final NoteRepository noteRepository;
    private final UserService userService;

    public Note add(NoteDTO noteDTO) {

        Note note = new Note();
        note.setText(noteDTO.getText());

        Optional<User> userOptional = userService.findById(noteDTO.getUser_id());
        if (userOptional.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        } else {
            User user = userOptional.get();
            note.setUser(user);
            return noteRepository.save(note);
        }
    }

    public List<Note> listByUserId(Long id) {
        return noteRepository.getByUserId(id);
    }

    public Optional<Note> findById(Long id) {
        return noteRepository.findById(id);
    }

    public void delete(Long id) {
        noteRepository.deleteById(id);
    }

}
