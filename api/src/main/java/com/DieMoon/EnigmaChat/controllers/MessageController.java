package com.DieMoon.EnigmaChat.controllers;

import com.DieMoon.EnigmaChat.models.Message;
import com.DieMoon.EnigmaChat.services.chatServices.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chats/messages")
public class MessageController {
    @Autowired
    private MessageService messageService;

//    @PostMapping("/send/{messageSenderId}/{messageContent}/{messageChatId}/{messageSentAt}")

    @PostMapping("/send")
    public boolean sendMessage(@RequestBody Message newMessage){
        return messageService.sendMessage(newMessage);
    }

    @GetMapping("/for/{chatId}")
    public List<Message> getMessagesByChatId(@PathVariable String chatId){
        return messageService.getMessagesByChatId(chatId);
    }

    @GetMapping("/delete/{messageId}")
    public void deleteMessage(@PathVariable String messageId) {
        messageService.deleteMessage(messageId);
    }
}
