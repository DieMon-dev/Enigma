package com.DieMoon.EnigmaChat.controllers;

import com.DieMoon.EnigmaChat.models.Chat;
import com.DieMoon.EnigmaChat.services.chatServices.ChatService;
//import com.DieMoon.EnigmaChat.services.serviceTools.EventsListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chats")
public class ChatController {
//TODO listen to chat changes
    @Autowired
    private ChatService chatService;
//    private final EventsListener chatListener;
//
//    @Autowired
//    public EnigmaChatApplication(EventsListener chatListener) {
//        this.chatListener = chatListener;
//    }
//    @Autowired
//    private ChatService chatService;


    @GetMapping("/create/{userId1}/{userId2}")
    public Chat createChat(@PathVariable String userId1, @PathVariable String userId2){ return chatService.chatCreate(userId1, userId2); };

    @GetMapping()
    public List<Chat> getChats() {
        return chatService.getAllChats();
    }

    @GetMapping("/userChatList/{userIdPivot}")
    public List<Chat> getUserChats(@PathVariable String userIdPivot){ return  chatService.getChatsByUserId(userIdPivot);}

    @GetMapping("/check/usersChat/{userIdLocal}/{userIdRemote}")
    public boolean ifChatWithUserExists(@PathVariable String userIdLocal, @PathVariable String userIdRemote){ return chatService.ifChatWithUserExists(userIdLocal, userIdRemote); }

    @GetMapping("/delete/{chatId}")
    public void deleteChat(@PathVariable String chatId) {
        chatService.deleteChat(chatId);
    }
}
