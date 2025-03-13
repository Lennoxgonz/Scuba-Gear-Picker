package com.Lennox.ScubaGearPicker.controller;

import com.Lennox.ScubaGearPicker.model.Part;
import com.Lennox.ScubaGearPicker.service.PartService;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "https://5173-lennoxgonz-scubagearpic-t5oybvaq8uc.ws-us118.gitpod.io", allowCredentials = "true")
@RequestMapping("api/parts")
public class PartController {

    final PartService partService;

    public PartController(PartService partService) {
        this.partService = partService;
    }

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
