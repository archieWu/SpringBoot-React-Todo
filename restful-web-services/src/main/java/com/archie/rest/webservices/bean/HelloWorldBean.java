package com.archie.rest.webservices.bean;

public class HelloWorldBean {

    public HelloWorldBean(){}

    private String message;

    public HelloWorldBean(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
    @Override
    public String toString() {
        return "HelloWorldBean{" +
                "massage='" + message + '\'' +
                '}';
    }
}
