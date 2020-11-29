package com.archie.rest.webservices.bean;

import lombok.*;

import javax.persistence.*;
import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "userinformation")


public class UserBean {
    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String name;
    private Date birthDate;
    private String grander;
}
