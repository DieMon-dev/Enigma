package com.DieMoon.EnigmaChat.controllers;

import com.DieMoon.EnigmaChat.models.Chat;
import com.DieMoon.EnigmaChat.services.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/chats")
public class ChatController {
    @Autowired
    private ChatService chatService;

    @GetMapping()
    public List<Chat> getChats() {
        return chatService.getAllChats();
    }


}
