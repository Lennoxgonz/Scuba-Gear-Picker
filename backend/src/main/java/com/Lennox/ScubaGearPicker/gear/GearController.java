package com.Lennox.ScubaGearPicker.gear;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = {"https://5173-lennoxgonz-scubagearpic-t5oybvaq8uc.ws-us118.gitpod.io", "http://localhost:5173/"}, allowCredentials = "true")
@RequestMapping("api/gear")
public class GearController {

    final GearService partService;

    public GearController(GearService partService) {
        this.partService = partService;
    }

    @GetMapping("")
    public List<Gear> getAllParts() {
        return partService.findAll();
    }

    @GetMapping("/identifier/{identifier}")
    public Optional<Gear> getPartByIdentifier(@PathVariable String identifier) {
        return partService.findByIdentifier(identifier);
    }

    @GetMapping("/category/{category}")
    public List<Gear> getAllPartsByCategory(@PathVariable String category) {
        return partService.findAllByCategory(category);
    }

}
