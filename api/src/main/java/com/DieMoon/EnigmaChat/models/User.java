package com.DieMoon.EnigmaChat.models;

import lombok.Getter;
import lombok.Setter;

public class User{
    //setters and getters for the user model class

    @Getter
    @Setter
    private String userId;
    @Setter
    @Getter
    private Integer userLogin; //login is phone number
    @Setter
    @Getter
    private String userPassword;
    @Setter
    @Getter
    private String userName;
    @Setter
    @Getter
    private String token;
}
