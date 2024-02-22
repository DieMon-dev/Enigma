package com.DieMoon.EnigmaChat.services.chatServices;

import com.DieMoon.EnigmaChat.models.Message;
import com.DieMoon.EnigmaChat.models.User;
import com.DieMoon.EnigmaChat.services.UserService;
import com.DieMoon.EnigmaChat.services.serviceTools.DatabaseInitialize;
import com.DieMoon.EnigmaChat.services.serviceTools.IdGeneration;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.concurrent.ExecutionException;

@Service
public class MessageService {
    @Autowired
    private ChatService chatService;
    private Firestore firestore;
    private static final UserService userService = new UserService();

    public boolean sendMessage(Message newMessage){
        firestore = DatabaseInitialize.getInstance().getFirestore();
        String messageId = IdGeneration.generateMsgId();
        //prepare the messageSentAt
        long currentTimeMillis = System.currentTimeMillis();
        Instant instant = Instant.ofEpochMilli(currentTimeMillis);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy/HH/mm/ss")
                .withZone(ZoneId.systemDefault());
        String messageSentAt = formatter.format(instant);

        //build the message
        newMessage.setMessageId(messageId);
        newMessage.setMessageSentAt(messageSentAt);
        try{
            firestore.collection("messages").document(messageId).set(newMessage);
            chatService.updateLastMsg(newMessage.getMessageId(), newMessage.getMessageChatId());
            return true;
        }catch (Exception e){
            return false;
        }
    }

    public Message getMessageById(String messageId){
        firestore = DatabaseInitialize.getInstance().getFirestore();
        DocumentReference docRef = firestore.collection("messages").document(messageId);
        ApiFuture<DocumentSnapshot> future = docRef.get();
        DocumentSnapshot document;
        Message message = null;
        try {
            document = future.get();
            if (document.exists()) {
                message = document.toObject(Message.class);
                return message;
            } else {
                System.out.println("There is no messages yet!");
            }
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
        return message;
    }

    public List<Message> sortMessagesByDate(List<Message> messages) {
        List<Message> sortedMessages = new ArrayList<>(messages);
        Collections.sort(sortedMessages, new Comparator<Message>() {
            SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy/HH/mm/ss");

            @Override
            public int compare(Message message1, Message message2) {
                try {
                    Date date1 = dateFormat.parse(message1.getMessageSentAt());
                    Date date2 = dateFormat.parse(message2.getMessageSentAt());

                    return date1.compareTo(date2);
                } catch (ParseException e) {
                    e.printStackTrace();
                }
                return 0;
            }
        });

        Collections.reverse(sortedMessages);

        return sortedMessages;
    }

    public String formatLastMessage(String localUserId, String lastMsgId){
        try {
            Message lastMessage = getMessageById(lastMsgId);
            if (lastMessage.getMessageSenderId().equals(localUserId)){
                return "You: " + lastMessage.getMessageContent();
            } else {
                String userSender = userService.getUserById(lastMessage.getMessageSenderId()).getUserName() + ": ";
                return userSender + lastMessage.getMessageContent();
            }
        }catch (Exception e){
            return "No messages yet...";
        }

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

        return sortMessagesByDate(messages);
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
