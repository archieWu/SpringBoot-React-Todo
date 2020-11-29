package com.archie.rest.webservices.service;

import com.archie.rest.webservices.bean.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoResourceService {

    private static List<Todo> todos = new ArrayList<Todo>();
    private static long idCounter=0;


    static {
        todos.add(new Todo(++idCounter,"Archie","Leaen to Dance",new Date(),false));
        todos.add(new Todo(++idCounter,"Archie","Leaen to React",new Date(),false));
        todos.add(new Todo(++idCounter,"Archie","Leaen to Spring",new Date(),false));
    }

    public List<Todo> findAll(){
        return todos;
    }

    public Todo deleteById(long id){
        Todo todo = findById(id);
        if(todos.remove(todo)){
            return todo;
        }
        return null;
    }

    public Todo findById(long id) {

        for(Todo todo:todos){
            if(todo.getId()==id){
                return todo;
            }
        }
        return null;
    }

    public Todo save(Todo todo){
        if(todo.getId()==-1 || todo.getId()==0){
            todo.setId(++idCounter);
            todos.add(todo);
        } else {
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }

}
