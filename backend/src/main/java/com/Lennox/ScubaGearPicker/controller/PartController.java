package com.Lennox.ScubaGearPicker.controller;

import com.Lennox.ScubaGearPicker.model.Part;
import com.Lennox.ScubaGearPicker.service.PartService;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/parts")
public class PartController {

    final PartService partService;

    public PartController(PartService partService) {
        this.partService = partService;
    }

    @CrossOrigin(origins = "https://5173-lennoxgonz-scubagearpic-n1mewptafig.ws-us117.gitpod.io", allowCredentials = "true")
    @GetMapping("")
    public List<Part> getAllParts() {
        return partService.findAll();
    }

    @GetMapping("/identifier/{identifier}")
    public Optional<Part> getPartByIdentifier(@PathVariable String identifier) {
        return partService.findByIdentifier(identifier);
    }
    
    @CrossOrigin(origins = "https://5173-lennoxgonz-scubagearpic-n1mewptafig.ws-us117.gitpod.io", allowCredentials = "true")
    @GetMapping("/category/{category}")
    public List<Part> getAllPartsByCategory(@PathVariable String category) {
        return partService.findAllByCategory(category);
    }
    
}
