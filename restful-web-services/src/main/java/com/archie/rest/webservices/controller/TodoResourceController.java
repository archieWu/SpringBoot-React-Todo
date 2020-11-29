package com.archie.rest.webservices.controller;


import com.archie.rest.webservices.bean.Todo;
import com.archie.rest.webservices.service.TodoResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.*;

//@RestController
//@CrossOrigin(origins = "http://localhost:4200")
//public class TodoResourceController {
//
//    @Autowired
//    private TodoResourceService todoservice;
//
//    @GetMapping(path = "/user/{username}/todos")
//    public List<Todo> getAllTodos(@PathVariable String username) {
//        return todoservice.findAll();
//    }
//
//    @GetMapping(path = "/user/{username}/todos/{id}")
//    public Todo getTodo(@PathVariable String username,@PathVariable long id) {
//        Todo todo = todoservice.findById(id);
//        return todo;
//    }
//
//    @DeleteMapping(path = "/user/{username}/todos/{id}")
//    public ResponseEntity<Void> deleteTodo(
//            @PathVariable String username,@PathVariable long id){
//        Todo todo = todoservice.deleteById(id);
//        if(todo!=null){
//            return ResponseEntity.noContent().build();
//        }
//        return ResponseEntity.notFound().build();
//    }
//
//    @PutMapping(path = "/user/{username}/todos/{id}")
//    public ResponseEntity<Todo> updateTodo(
//            @PathVariable String username,@PathVariable long id,
//            @RequestBody Todo todo){
//        Todo todoUpdated = todoservice.save(todo);
//        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
//    }
//
//    @PostMapping(path = "/user/{username}/todos")
//    public ResponseEntity<Void> saveTodo(
//            @PathVariable String username,
//            @RequestBody Todo todo){
//        Todo createdTodo = todoservice.save(todo);
//
//        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
//                .path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
//
//        return ResponseEntity.created(uri).build();
//    }
//
//
//}
