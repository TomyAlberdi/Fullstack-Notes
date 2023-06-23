package com.example.BackendNotas.DTO;

import com.example.BackendNotas.Entity.User;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NoteDTO {

    private String title;
    private String text;
    private Long user_id;

}
