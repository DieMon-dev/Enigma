package com.DieMoon.EnigmaChat.services.chatServices;

import com.DieMoon.EnigmaChat.models.Message;
import com.DieMoon.EnigmaChat.models.User;
import com.DieMoon.EnigmaChat.services.serviceTools.DatabaseInitialize;
import com.DieMoon.EnigmaChat.services.serviceTools.IdGeneration;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class MessageService {
    @Autowired
    private ChatService chatService;
    private Firestore firestore;

    public boolean sendMessage(Message newMessage){
        firestore = DatabaseInitialize.getInstance().getFirestore();
        String messageId = IdGeneration.generateMsgId();
        long currentTimeMillis = System.currentTimeMillis();
        Instant instant = Instant.ofEpochMilli(currentTimeMillis);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy/HH/mm/ss")
                .withZone(ZoneId.systemDefault());
        String messageSentAt = formatter.format(instant);

        newMessage.setMessageId(messageId);
        newMessage.setMessageSentAt(messageSentAt);
        firestore.collection("messages").document(messageId).set(newMessage);
        firestore.collection("chats").document(newMessage.getMessageChatId()).update("chatLastMsg", newMessage.getMessageContent());
        return true;
    }

    public List<Message> getMessagesByChatId(String messageChatId){
        firestore = DatabaseInitialize.getInstance().getFirestore();
        List<Message> messages = new ArrayList<>();

        CollectionReference messagesCollection = firestore.collection("messages");
        ApiFuture<QuerySnapshot> querySnapshot = messagesCollection.whereEqualTo("messageChatId", messageChatId).get();
        System.out.println("querySnapshot: " + querySnapshot);
        try {
            for (QueryDocumentSnapshot document : querySnapshot.get().getDocuments()) {
                Message message = document.toObject(Message.class);
                messages.add(message);
            }
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }

        return messages;
    }

    public void deleteMessage(String messageId) {
        firestore = DatabaseInitialize.getInstance().getFirestore();
        // Delete a user by ID from Firestore
        ApiFuture<WriteResult> writeResult = firestore.collection("messages").document(messageId).delete();

        try {
            System.out.println("Update time : " + writeResult.get().getUpdateTime());
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
    }
}
