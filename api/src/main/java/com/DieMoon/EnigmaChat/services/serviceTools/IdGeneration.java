package com.DieMoon.EnigmaChat.services.serviceTools;

import com.DieMoon.EnigmaChat.services.UserService;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class IdGeneration {
    private static final UserService userService = new UserService();
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("ddMMyyyyHHmmssSSS");
    private static final SecureRandom secureRandom = new SecureRandom();


    public static String generateUserId() {
        String beginning = LocalDateTime.now().format(formatter);
        String ending = generateRandomNumbers();
        String id = beginning + "." + ending;

        //check
        if (userService.checkIfIdExists(id)){
            return generateUserId();
        }
        else{
            return id;
        }

    }

    public static String generateMsgId() {
        String beginning = LocalDateTime.now().format(formatter);
        String someSymbols = generateRandomCharacters();
        String ending = generateRandomNumbers();
        System.out.println(someSymbols);
        String id = generateRandomCharacters() + beginning + someSymbols + ending +generateRandomCharacters();
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

    private static String generateRandomCharacters() {
        SecureRandom secureRandom = new SecureRandom();
        Integer randomNumbers = 1;

        for (int i = 0; i < 10; i++) {
            randomNumbers = randomNumbers * secureRandom.nextInt(10);
        }

        StringBuilder sb = new StringBuilder(String.valueOf(randomNumbers));

        // Define the characters you want to include in the random part
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=<>?";

        for (int i = 0; i < 14; i++) {
            int randomIndex = secureRandom.nextInt(characters.length());
            sb.append(characters.charAt(randomIndex));
        }

        return sb.toString();
    }
}
