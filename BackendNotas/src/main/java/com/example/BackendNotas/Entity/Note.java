package com.example.BackendNotas.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Optional;

@Getter
@Setter
@Entity
@Table(name = "Note")
@AllArgsConstructor
@NoArgsConstructor
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 50)
    @Column(name = "title")
    private String title;

    @NotNull
    @Column(name = "text", columnDefinition = "LONGTEXT")
    private String text;

    @NotNull
    @NotBlank
    private Long user_id;

}
