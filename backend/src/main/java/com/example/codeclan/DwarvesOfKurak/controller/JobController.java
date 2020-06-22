package com.example.codeclan.DwarvesOfKurak.controller;

import com.example.codeclan.DwarvesOfKurak.models.Item;
import com.example.codeclan.DwarvesOfKurak.models.Job;
import com.example.codeclan.DwarvesOfKurak.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class JobController {

    @Autowired
    JobRepository jobRepository;

    @GetMapping(value = "/api/jobs")
    public ResponseEntity<List<Job>> getAllJobs(){
        return new ResponseEntity<>(jobRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/api/jobs/{id}")
    public ResponseEntity getJob(@PathVariable Long id){
        return new ResponseEntity<>(jobRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value="/api/jobs")
    public ResponseEntity<Job> createItem(@RequestBody Job job){
        jobRepository.save(job);
        return new ResponseEntity<>(job, HttpStatus.CREATED);
    }

    @PutMapping (value="/api/jobs/{id}")
    public ResponseEntity<Job> updateItem(@RequestBody Job job){
        jobRepository.save(job);
        return new ResponseEntity<>(job, HttpStatus.OK);
    }

    @DeleteMapping(value="/api/jobs/{id}")
    public ResponseEntity<Long> deleteItem(@PathVariable Long id){
        jobRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
