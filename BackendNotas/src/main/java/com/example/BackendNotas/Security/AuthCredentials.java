package com.example.BackendNotas.Security;

import lombok.Data;

@Data
public class AuthCredentials {

    private String email;
    private String password;
}
