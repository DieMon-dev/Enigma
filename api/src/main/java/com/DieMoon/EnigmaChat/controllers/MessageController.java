package com.DieMoon.EnigmaChat.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.DieMoon.EnigmaChat.models.Message;
import com.DieMoon.EnigmaChat.services.chatServices.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chats/messages")
public class MessageController {
    private static final Logger logger = LoggerFactory.getLogger(MessageController.class);
    @Autowired
    private MessageService messageService;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @PostMapping("/send")
    public boolean sendMessage(@RequestBody Message newMessage) {
        boolean isSent = messageService.sendMessage(newMessage);

        if (isSent) {
            // Send a WebSocket message to update clients with the new message
            messagingTemplate.convertAndSend("/topic/messages/" + newMessage.getMessageChatId(), newMessage);
            logger.info("WebSocket message sent: {}", newMessage);
        }

        return isSent;
    }

    @GetMapping("/for/{chatId}")
    public List<Message> getMessagesByChatId(@PathVariable String chatId) {
        return messageService.getMessagesByChatId(chatId);
    }

    @GetMapping("/delete/{messageId}")
    public void deleteMessage(@PathVariable String messageId) {
        messageService.deleteMessage(messageId);
    }
}