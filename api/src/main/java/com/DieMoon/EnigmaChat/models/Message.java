package com.DieMoon.EnigmaChat.models;

import lombok.Getter;
import lombok.Setter;

public class Message {
    @Getter
    @Setter
    private String messageId;

    @Getter
    @Setter
    private String messageChatId;

    @Getter
    @Setter
    private String messageSenderId;

    @Getter
    @Setter
    private String messageSentAt;

    @Getter
    @Setter
    private String messageContent;
}
