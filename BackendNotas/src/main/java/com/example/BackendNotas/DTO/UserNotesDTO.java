package com.example.BackendNotas.DTO;

import com.example.BackendNotas.Entity.Note;
import com.example.BackendNotas.Entity.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Optional;

@Getter
@Setter
@AllArgsConstructor
public class UserNotesDTO {

    @JsonIgnoreProperties({"password"})
    private User user;
    private List<Note> notes;

}
