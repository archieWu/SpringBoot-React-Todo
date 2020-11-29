package com.archie.rest.webservices.controller;


import com.archie.rest.webservices.bean.AuthenticationBean;
import com.archie.rest.webservices.bean.HelloWorldBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BasicAuthenticationController {

    /*Get
    * URI:/hello-world
    * method:"Hello World"
    * 2020/11/05
    * */

    @GetMapping(path = "/basicauth")
    public AuthenticationBean authenticationBean() {
        //throw new RuntimeException("Some Error has Happened! Contact Support at ***-***");
        return new AuthenticationBean("You are authenticated");
    }

}
