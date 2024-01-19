package com.DieMoon.EnigmaChat.controllers;

import com.DieMoon.EnigmaChat.models.Chat;
import com.DieMoon.EnigmaChat.services.chatServices.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/userChatList/{userIdPivot}")
    public List<Chat> getUserChats(@PathVariable String userIdPivot){ return  chatService.getChatsByUserId(userIdPivot);}

    @GetMapping("/check/usersChat/{userIdLocal}/{userIdRemote}")
    public boolean ifChatWithUserExists(@PathVariable String userIdLocal, @PathVariable String userIdRemote){ return chatService.ifChatWithUserExists(userIdLocal, userIdRemote); }

    @DeleteMapping("/delete/{chatId}")
    public void deleteMessage(@PathVariable String chatId) {
        chatService.deleteChat(chatId);
    }
}
