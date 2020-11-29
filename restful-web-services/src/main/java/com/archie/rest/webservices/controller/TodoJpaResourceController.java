package com.archie.rest.webservices.controller;


import com.archie.rest.webservices.bean.Todo;
import com.archie.rest.webservices.service.TodoJpaResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoJpaResourceController {

    @Autowired
    private TodoJpaResourceService todojpaservice;
    /*
    * get mapping
    * url=/jpa/user/{username}/todos
    * 根據用戶名稱尋找此用戶所有的資料
    */
    @GetMapping(path = "/jpa/user/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {

        return todojpaservice.findByUsername(username);
    }
    /*
     * get mapping
     * url=/jpa/user/{username}/todos/{id}
     * 根據用戶名稱尋找此用戶所有的資料
     */
    @GetMapping(path = "/jpa/user/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username,@PathVariable long id) {
        Todo todo = todojpaservice.findById(id).get();
        return todo;
    }

    @DeleteMapping(path = "/jpa/user/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(
            @PathVariable String username,@PathVariable long id){
        todojpaservice.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(path = "/jpa/user/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(
            @PathVariable String username,@PathVariable long id,
            @RequestBody Todo todo){
        todo.setUsername(username);
        todojpaservice.save(todo);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @PostMapping(path = "/jpa/user/{username}/todos")
    public ResponseEntity<Void> creatTodo(
            @PathVariable String username,
            @RequestBody Todo todo){
        todo.setUsername(username);
        Todo createdTodo = todojpaservice.save(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }


}
