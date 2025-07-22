package com.Lennox.ScubaGearPicker.gear;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
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
