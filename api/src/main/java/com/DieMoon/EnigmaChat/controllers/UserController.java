package com.DieMoon.EnigmaChat.controllers;

import com.DieMoon.EnigmaChat.models.User;
import com.DieMoon.EnigmaChat.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

import static java.lang.Character.isDigit;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/login/{login}")
    public User getUserByLogin(@PathVariable String login) {
        if (login.length() == 10 && isDigit(login.charAt(0))) {
            return userService.getUserByUserName(login);
        } else {
            return userService.getUserByUserName(login);
        }
    }
        @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable String id) {
        return userService.getUserById(id);
    }


    @GetMapping("check/userLogin/{login}")
    public boolean checkIfUserExists(@PathVariable String login) {
        return userService.checkIfUserExists(login);
    }
    @GetMapping("check/userPassword/{userLogin}/{userPassword}")
    public boolean checkIfUserPasswordMatches(@PathVariable String userLogin, @PathVariable String userPassword) {
        return userService.checkIfUserPasswordMatches(userLogin, userPassword);
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }


    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
    }
}
