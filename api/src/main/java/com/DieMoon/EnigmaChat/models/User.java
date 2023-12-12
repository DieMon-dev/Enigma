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
    private String userLogin; //login is phone number
    @Getter
    @Setter
    private String userPhoneNumber;
    @Setter
    @Getter
    private String userPassword;
    @Setter
    @Getter
    private String userName;
    @Setter
    @Getter
    private String userToken;
}
