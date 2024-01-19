package com.DieMoon.EnigmaChat.services.chatServices;

import com.DieMoon.EnigmaChat.models.Chat;
import com.DieMoon.EnigmaChat.models.Message;
import com.DieMoon.EnigmaChat.services.serviceTools.DatabaseInitialize;
import com.DieMoon.EnigmaChat.services.serviceTools.PivotChatService;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class ChatService {
    @Autowired
    private PivotChatService PivotChatService;
    private Firestore firestore;

    public boolean ifChatWithUserExists(String userIdLocal, String userIdRemote){
        List<String> pivotLocalUserChats = new ArrayList<>(); // Initialize the list
        List<String> pivotRemoteUserChats = new ArrayList<>(); // Initialize the list

        pivotLocalUserChats = PivotChatService.getUsersChatIdsByUserId(userIdLocal);
        pivotRemoteUserChats = PivotChatService.getUsersChatIdsByUserId(userIdRemote);


        for (String pivotLocalUserChat : pivotLocalUserChats) {
            for (String pivotRemoteUserChat : pivotRemoteUserChats) {
                if (pivotLocalUserChat.equals(pivotRemoteUserChat)) {
                    return true;
                }
            }
        }
        return false;

    }
    //TODO: create private chat
//    public Chat chatCreate(String userIdLocal, String userIdRemote){
//        firestore = DatabaseInitialize.getInstance().getFirestore();
//        Chat newchat = null;
//
//
//
//        return newchat;
//    }

    public List<Chat> getAllChats() {
        firestore = DatabaseInitialize.getInstance().getFirestore();
        List<Chat> chats = new ArrayList<>();

        // Get users from Firestore
        CollectionReference chatsCollection = firestore.collection("chats");
        ApiFuture<QuerySnapshot> querySnapshot = chatsCollection.get();

        try {
            for (QueryDocumentSnapshot document : querySnapshot.get().getDocuments()) {
                Chat chat = document.toObject(Chat.class);
                chats.add(chat);
            }
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }

        return chats;
    }

    public List<Chat> getChatsByUserId(String userIdPivot){
        firestore = DatabaseInitialize.getInstance().getFirestore();
        List<Chat> chats = new ArrayList<>();

        CollectionReference chatsCollection = firestore.collection("chats");
        for (String documentChat : PivotChatService.getUsersChatIdsByUserId(userIdPivot)) {
            ApiFuture<QuerySnapshot> querySnapshot = chatsCollection.whereEqualTo("chatId", documentChat).get();
            try {
                for (QueryDocumentSnapshot document : querySnapshot.get().getDocuments()) {
                    Chat chat = document.toObject(Chat.class);
                    chats.add(chat);
                }
            } catch (InterruptedException | ExecutionException e) {
                e.printStackTrace();
            }
        }

        return chats;
    }

    public void deleteChat(String chatId){
        //delete chat
        firestore = DatabaseInitialize.getInstance().getFirestore();
        firestore.collection("chats").document(chatId).delete();

        //delete related messages
        String messageChatId = chatId;
        MessageService messageService = new MessageService();
        List<Message> messages = new ArrayList<>();
        messages = messageService.getMessagesByChatId(messageChatId);
        for (Message message : messages) {
            messageService.deleteMessage(message.getMessageId());
        }

        //TODO: delete related pivotChats
    }

}
