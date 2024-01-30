package com.DieMoon.EnigmaChat.services.serviceTools;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;

import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;
import lombok.Getter;

import javax.annotation.PostConstruct;
import java.io.FileInputStream;

// Use the application default credentials



public class DatabaseInitialize {
    @Getter
    private static final DatabaseInitialize instance = new DatabaseInitialize();
    private Firestore firestore;

    private DatabaseInitialize() {
        // Initialize Firestore
        initialize();
    }

    @PostConstruct
    public Firestore initialize() {
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
        return firestore;
    }

    public Firestore getFirestore() {
        return firestore;
    }

}