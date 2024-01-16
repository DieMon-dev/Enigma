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

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @PostMapping("/update")
    public User updateUserInfo(@RequestBody User user) {
        return userService.updateUserInfo(user);
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

    @GetMapping("/login/{login}")
    public User getUserByLogin(@PathVariable String login) {
        return userService.getUserByUserName(login);
    }

    @GetMapping("check/userPassword/{userLogin}/{userPassword}")
    public User checkIfUserPasswordMatches(@PathVariable String userLogin, @PathVariable String userPassword) {
        return userService.checkIfUserPasswordMatches(userLogin, userPassword);
    }

    @GetMapping("check/oldPwd/{userId}/{userPassword}")
    public boolean checkIfOldPwdMatches(@PathVariable String userId, @PathVariable String userPassword) {
        return userService.checkIfOldPwdMatches(userId, userPassword);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
    }
}
