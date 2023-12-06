package com.DieMoon.EnigmaChat;

import com.DieMoon.EnigmaChat.models.User;
import com.DieMoon.EnigmaChat.services.UserService;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.UserRecord;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.stubbing.OngoingStubbing;
import org.springframework.boot.test.context.SpringBootTest;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.client.ExpectedCount.times;
import com.DieMoon.EnigmaChat.models.User;
import com.DieMoon.EnigmaChat.services.UserService;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.UserRecord;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
@SpringBootTest
class EnigmaChatApplicationTests {
	@Mock
	private FirebaseAuth firebaseAuth;

	@InjectMocks
	private UserService userService;

	public void UserServiceTest() {
		MockitoAnnotations.openMocks(this);
	}

//	@Test
//	public void testCreateUser() throws Exception {
//		// Arrange
//		User user = new User();
//		user.setUserPhoneNumber("test@example.com");
//		user.setUserPassword("testPassword");
//		user.setUserName("Test User");
//
//		UserRecord.UpdateRequest updateRequest = new UserRecord.UpdateRequest()
//				.setUid("testUserId")
//				.setEmail(user.getUserPhoneNumber())
//				.setDisplayName(user.getUserName());
//
//		when(firebaseAuth.createUser(any())).thenReturn(updateRequest);
//
//		// Act
//		User createdUser = userService.registerUser(user);
//
//		// Assert
//		verify(firebaseAuth, times(1)).createUser(any());
//
//		// Add more assertions based on your expected behavior
//		// For example, you might want to check if the createdUser has the correct UID
//
//		// Example:
//		// assertEquals("testUserId", createdUser.getUserId());
//	}
	@Test
	void contextLoads() {

	}

}
