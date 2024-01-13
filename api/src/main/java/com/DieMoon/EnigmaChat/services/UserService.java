package com.DieMoon.EnigmaChat.services;

import com.DieMoon.EnigmaChat.models.User;
import com.google.api.core.ApiFuture;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.*;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;
import lombok.SneakyThrows;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.FileInputStream;
import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

import com.google.cloud.firestore.Firestore;

@Service
public class UserService {
    //Initialize Firestore database
    public Firestore firestore;
    @PostConstruct
        public void initialize() {
        try {
            FileInputStream serviceAccount =
                    new FileInputStream("src/main/resources/serviceAccountKey.json");

            FirebaseOptions options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .setDatabaseUrl("https://enigmachat-2024-default-rtdb.europe-west1.firebasedatabase.app")
                    .build();

            FirebaseApp.initializeApp(options);

            firestore = FirestoreClient.getFirestore();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    //functions for the user service
    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();

        // Get users from Firestore
        CollectionReference usersCollection = firestore.collection("users");
        ApiFuture<QuerySnapshot> querySnapshot = usersCollection.get();

        try {
            for (QueryDocumentSnapshot document : querySnapshot.get().getDocuments()) {
                User user = document.toObject(User.class);
                users.add(user);
            }
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }

        return users;
    }

    public User getUserById(String id) {
        // Get a user by ID from Firestore
        User user = null;

        DocumentReference userRef = firestore.collection("users").document(id);
        ApiFuture<DocumentSnapshot> documentSnapshot = userRef.get();

        try {
            if (documentSnapshot.get().exists()) {
                user = documentSnapshot.get().toObject(User.class);
            }
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }

        return user;
    }

    public boolean checkIfIdExists(String userId){
        CollectionReference usersCollection = firestore.collection("users");
        Query query = usersCollection.whereEqualTo("userId", userId);
        ApiFuture<QuerySnapshot> querySnapshot = query.get();

        try {
            return !querySnapshot.get().getDocuments().isEmpty();
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
        return false;
    }

    public User createUser(User user) {
        // Create a new user in Firestore
        String userId = IdGeneration.generateUserId();
        user.setUserId(userId);
        ApiFuture<WriteResult> result = firestore.collection("users").document(userId).set(user);

        try {
            System.out.println("Update time : " + result.get().getUpdateTime());
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }

        return user;
    }

    public void deleteUser(String id) {
        // Delete a user by ID from Firestore
        ApiFuture<WriteResult> writeResult = firestore.collection("users").document(id).delete();

        try {
            System.out.println("Update time : " + writeResult.get().getUpdateTime());
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
    }

    public User getUserByUserName(String userName) {
        //get user by username for in-app search
        User user = null;

        CollectionReference usersCollection = firestore.collection("users");
        Query query = usersCollection.whereEqualTo("userName", userName);
        ApiFuture<QuerySnapshot> querySnapshot = query.get();

        try {
            if (!querySnapshot.get().getDocuments().isEmpty()) {
                user = querySnapshot.get().getDocuments().get(0).toObject(User.class);
            }
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }

        return user;
    }

    public boolean checkIfUserExists(String userLogin) {
        //check if user exists while creating user

        CollectionReference usersCollection = firestore.collection("users");
        Query query = usersCollection.whereEqualTo("userLogin", userLogin);
        ApiFuture<QuerySnapshot> querySnapshot = query.get();

        try {
            return !querySnapshot.get().getDocuments().isEmpty();
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
        return false;
    }


    public User checkIfUserPasswordMatches(String userLogin, String userPassword) {
        //check if user password matches while logging in
        User user = null;
        CollectionReference usersCollection = firestore.collection("users");
        Query query = usersCollection.whereEqualTo("userLogin", userLogin).whereEqualTo("userPassword", userPassword);
        ApiFuture<QuerySnapshot> querySnapshot = query.get();

        try {
            if (!querySnapshot.get().getDocuments().isEmpty()) {
                user = querySnapshot.get().getDocuments().get(0).toObject(User.class);
            }
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
        return user;
    }

    public boolean checkIfOldPwdMatches(String userId, String userPassword) {
        //check if old password matches while changing password, if old password matches, then return true
        User user = null;
        CollectionReference usersCollection = firestore.collection("users");
        Query query = usersCollection.whereEqualTo("userId", userId);
        ApiFuture<QuerySnapshot> querySnapshot = query.get();

        try {
            if (!querySnapshot.get().getDocuments().isEmpty()) {
                user = querySnapshot.get().getDocuments().get(0).toObject(User.class);
            }
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
        System.out.println(user.getUserPassword());
        System.out.println(userPassword);
        return user.getUserPassword().equals(userPassword);
    }

    @SneakyThrows
    public User updateUserInfo(User user) {
        //getting old user data
        User oldUser = null;
        CollectionReference usersCollection = firestore.collection("users");
        Query query = usersCollection.whereEqualTo("userId", user.getUserId());
        ApiFuture<QuerySnapshot> querySnapshot = query.get();
        oldUser = querySnapshot.get().getDocuments().get(0).toObject(User.class);

        //checking for password empty field and setting old value if empty
        if (user.getUserPassword().equals("")){
            user.setUserPassword(oldUser.getUserPassword());
        }

        ApiFuture<WriteResult> writeResult = firestore.collection("users").document(user.getUserId()).set(user);

        try {
            System.out.println("Update time : " + writeResult.get().getUpdateTime());
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
        return user;
    }

}
