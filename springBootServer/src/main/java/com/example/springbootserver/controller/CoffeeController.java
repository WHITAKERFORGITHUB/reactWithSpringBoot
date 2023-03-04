package com.example.springbootserver.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@CrossOrigin("*")
@RestController
// So to reach it endpoints can be api/user/**
@RequestMapping("api/coffeeController")
public class CoffeeController {
    @GetMapping("test")
    public HashMap testController() {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("first", 3333);
        return map;
    }
}
