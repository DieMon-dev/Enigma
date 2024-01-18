package com.DieMoon.EnigmaChat.services.chatServices;

import com.google.cloud.firestore.Firestore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageService {
    @Autowired
    private ChatService chatService;
    private Firestore firestore;
}
