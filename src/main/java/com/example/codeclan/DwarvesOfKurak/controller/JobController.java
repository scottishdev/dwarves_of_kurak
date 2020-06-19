package com.example.codeclan.DwarvesOfKurak.controller;

import com.example.codeclan.DwarvesOfKurak.models.Job;
import com.example.codeclan.DwarvesOfKurak.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class JobController {

    @Autowired
    JobRepository jobRepository;

    @GetMapping(value = "/api/jobs")
    public ResponseEntity<List<Job>> getAllJobs(){
        return new ResponseEntity<>(jobRepository.findAll(), HttpStatus.OK);
    }
}
