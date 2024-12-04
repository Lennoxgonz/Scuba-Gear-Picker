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

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @GetMapping("")
    public List<Part> getAllParts() {
        return partService.findAll();
    }

    @GetMapping("/identifier/{identifier}")
    public Optional<Part> getPartByIdentifier(@PathVariable String identifier) {
        return partService.findByIdentifier(identifier);
    }

    @GetMapping("/category/{category}")
    public List<Part> getAllPartsByCategory(@PathVariable String category) {
        return partService.findAllByCategory(category);
    }
    
}
