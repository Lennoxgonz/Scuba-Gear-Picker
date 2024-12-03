package com.Lennox.ScubaGearPicker.controller;

import com.Lennox.ScubaGearPicker.model.Part;
import com.Lennox.ScubaGearPicker.service.PartService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/parts")
public class PartController {

    final PartService partService;

    public PartController(PartService partService) {
        this.partService = partService;
    }

    @GetMapping("/all")
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
