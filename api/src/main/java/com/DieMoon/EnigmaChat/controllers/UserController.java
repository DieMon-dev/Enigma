package com.DieMoon.EnigmaChat.controllers;

import com.DieMoon.EnigmaChat.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ExecutionException;

import static java.lang.Character.isDigit;

@RestController
public class UserController {
    @Autowired
     UserService userService;
        @GetMapping("/Login")
        @ResponseBody
        public String createUser(@RequestParam Integer userLogin, String userPassword) throws InterruptedException, ExecutionException {
            if (userLogin == null || userPassword == null)
                return "Login or password is empty";
            else if (isDigit(userLogin))
                return "Login must have numbers";
            else
                //return userService.createUser(userLogin, userPassword);
                return "Login"+userLogin+"\npwd:"+ userPassword;
        }
}
