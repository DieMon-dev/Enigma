package com.DieMoon.EnigmaChat.services.serviceTools;

import com.DieMoon.EnigmaChat.models.PivotChats;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import lombok.SneakyThrows;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class PivotChatService {
    private Firestore firestore;

    public void createDependence(String chatId, String userId){
        firestore = DatabaseInitialize.getInstance().getFirestore();
        PivotChats newPivot = null;
        newPivot.setChatIdPivot(chatId);
        newPivot.setUserIdPivot(userId);

        ApiFuture<WriteResult> result = firestore.collection("pivotChats").document().set(newPivot);

        try {
            System.out.println("Update time : " + result.get().getUpdateTime());
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
    }


    public List<PivotChats> getAllPivotChats() {
        firestore = DatabaseInitialize.getInstance().getFirestore();
        List<PivotChats> pivots = new ArrayList<>();

        // Get users from Firestore
        CollectionReference chatsCollection = firestore.collection("pivotChats");
        ApiFuture<QuerySnapshot> querySnapshot = chatsCollection.get();

        try {
            for (QueryDocumentSnapshot document : querySnapshot.get().getDocuments()) {
                PivotChats pivotChat = document.toObject(PivotChats.class);
                pivots.add(pivotChat);
            }
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }

        return pivots;
    }

    public List<String> getUsersChatIdsByUserId(String userIdPivot) {
        firestore = DatabaseInitialize.getInstance().getFirestore();
        List<String> pivotChats = new ArrayList<>(); // Initialize the list


        CollectionReference usersCollection = firestore.collection("pivotChats");
        Query query = usersCollection.whereEqualTo("userIdPivot", userIdPivot);
        ApiFuture<QuerySnapshot> querySnapshot = query.get();

        try {
            for (QueryDocumentSnapshot document : querySnapshot.get()) {

                PivotChats pivotChat = document.toObject(PivotChats.class);
                pivotChats.add(pivotChat.getChatIdPivot());
            }
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
        return pivotChats;
    }

    @SneakyThrows
    public void deletePivotByChatId(String chatId){
        firestore = DatabaseInitialize.getInstance().getFirestore();
        CollectionReference pivotCollection = firestore.collection("PivotChats");
        ApiFuture<QuerySnapshot> future = pivotCollection.whereEqualTo("chatIdPivot", chatId).get();
// future.get() blocks on response
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        for (DocumentSnapshot document : documents) {
            System.out.println(document);
            pivotCollection.document(document.getId()).delete();
        }

    }


}
