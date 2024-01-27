package com.example.shoppinglist;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RestController
@RequestMapping("api/")



public class Controller {

    @Autowired
    private Repository repository;

    @GetMapping("shoppinglist")
    public List<Shoppinglist> getEntries() {
        return this.repository.findAll();
    }

    @PostMapping(value = "newEntry", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Shoppinglist> postEntry(@RequestBody Shoppinglist entry) {
        Shoppinglist _shoppinglist = repository.save(new Shoppinglist(entry.getProduct(), entry.getWeekday(), entry.getIsDone()));
        return new ResponseEntity<>(_shoppinglist, HttpStatus.CREATED);
    }

    @DeleteMapping("/shoppinglist/{id}")
    public Map<String, Boolean> deleteEntry(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        Shoppinglist entry = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Entry not found for this id :: " + id));

        repository.delete(entry);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    @Configuration
    @EnableWebMvc
    public static class WebConfig implements WebMvcConfigurer {

        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/**");
        }
    }

    @PutMapping("/shoppinglist/patch/{id}")
    public ResponseEntity<Shoppinglist> updateIsDone(@PathVariable("id") long id) {
        Optional<Shoppinglist> entryData = repository.findById(id);

        if (entryData.isPresent()) {
            Shoppinglist _entry = entryData.get();
            _entry.setIsDone(true);
            return new ResponseEntity<>(repository.save(_entry), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
