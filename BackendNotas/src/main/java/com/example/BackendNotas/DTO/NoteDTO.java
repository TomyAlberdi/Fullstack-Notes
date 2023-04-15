package com.example.BackendNotas.DTO;

import com.example.BackendNotas.Entity.User;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NoteDTO {

    @NotNull
    private String text;

    @NotNull
    private Long user_id;

}
