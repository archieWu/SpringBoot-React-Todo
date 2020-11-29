package com.archie.rest.webservices.service;

import com.archie.rest.webservices.bean.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoJpaResourceService extends JpaRepository<Todo, Long> {
    List<Todo> findByUsername(String username);
}

