package com.DieMoon.EnigmaChat.models;

import lombok.Getter;
import lombok.Setter;

public class Chat {
    @Getter
    @Setter
    private String chatId;

    @Getter
    @Setter
    private String chatLastMsg;

    @Getter
    @Setter
    private String chatTitle;//userName1 + "?/?" + userName2

}
