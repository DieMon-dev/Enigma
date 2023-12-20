package com.DieMoon.EnigmaChat.services;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class IdGeneration {
    private static final UserService userService = new UserService();
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("ddMMyyyyHHmmssSSS");
    private static final SecureRandom secureRandom = new SecureRandom();


    public static String generateUserId() {
        String beginning = LocalDateTime.now().format(formatter);
        String ending = generateRandomNumbers();
        String id = beginning + "." + ending;
        return id;
        // TODO Check for uniqueness
//        if (userService.checkIfIdExists(id)){
//            return generateId();
//        }
//        else{
//            return id;
//        }
    }

    private static String generateRandomNumbers() {
        StringBuilder randomNumbers = new StringBuilder();
        for (int i = 0; i < 10; i++) {
            randomNumbers.append(secureRandom.nextInt(10));
        }
        return randomNumbers.toString();
    }
}
