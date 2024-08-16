package dev.nair.sportz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class SportzApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(SportzApplication.class, args);

		WelcomeMessage welcomeMessage = (WelcomeMessage) context.getBean("welcomeMessage");
		System.out.println(welcomeMessage);

	}

}