package com.DieMoon.EnigmaChat.services;

import com.DieMoon.EnigmaChat.models.User;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
public class UserService {
    public static final String COL_NAME="users";

    public String createUser(Integer userLogin, String userPassword) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection(COL_NAME).getParent().create(new User());
        return collectionsApiFuture.get().getUpdateTime().toString();
    }
    public String deleteUserById(String userId) {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> writeResult = dbFirestore.collection(COL_NAME).document(userId).delete();
        return "Document with User ID "+userId+" has been deleted";
    }


}
