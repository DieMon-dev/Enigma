package com.DieMoon.EnigmaChat.services;

import com.DieMoon.EnigmaChat.models.Chat;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class ChatService {
    private Firestore firestore;

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

}
