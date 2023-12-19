package com.DieMoon.EnigmaChat.models;

import lombok.Getter;
import lombok.Setter;

@Getter
public class User{
    //setters and getters for the user model class

    @Setter
    private String userId;
    @Setter
    private String userLogin; //login is phone number

    //@Getter
    //@Setter
    //private String userPhoneNumber;
    @Setter
    private String userPassword;
    @Setter
    private String userName;
   //@Setter
    //@Getter
    //private String userToken;

}
