package com.example.CoinAZBackend.helloWorld;

public class AuthenticationBean {

    private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public AuthenticationBean(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return String.format("HelloWorldBean{" +
                "message='" + message + '\'' +
                '}');
    }
}
