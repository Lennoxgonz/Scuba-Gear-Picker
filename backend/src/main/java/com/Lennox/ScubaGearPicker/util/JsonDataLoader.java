package com.Lennox.ScubaGearPicker.util;

import com.Lennox.ScubaGearPicker.model.Part;
import com.Lennox.ScubaGearPicker.service.PartService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Component
public class JsonDataLoader implements CommandLineRunner {

    private final PartService partService;

    public JsonDataLoader(PartService partService) {
        this.partService = partService;
    }

    @Override
    public void run(String... args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        InputStream inputStream = TypeReference.class.getResourceAsStream("/data/parts.json");
        List<Part> allParts = new ArrayList<>();

        try {
            JsonNode rootNode = mapper.readTree(inputStream);

            loadCategory(mapper, rootNode, "masks", allParts);
            loadCategory(mapper, rootNode, "snorkels", allParts);
            loadCategory(mapper, rootNode, "bcds", allParts);
            loadCategory(mapper, rootNode, "tanks-valve", allParts);
            loadCategory(mapper, rootNode, "regulators", allParts);
            loadCategory(mapper, rootNode, "diveComputers", allParts);
            loadCategory(mapper, rootNode, "fins", allParts);
            loadCategory(mapper, rootNode, "gauges-compasses", allParts);
            loadCategory(mapper, rootNode, "weights-belts", allParts);

            partService.saveAll(allParts);
            System.out.println("Parts successfully imported!");
        } catch (IOException e) {
            System.out.println("Failed to import parts: " + e.getMessage());
        }
    }

    private void loadCategory(ObjectMapper mapper, JsonNode rootNode, String category, List<Part> allParts) {
        JsonNode categoryNode = rootNode.get(category);
        if (categoryNode != null && !categoryNode.isEmpty()) {
            List<Part> categoryParts = mapper.convertValue(categoryNode, new TypeReference<List<Part>>(){});
            allParts.addAll(categoryParts);
            System.out.println("Loaded " + categoryParts.size() + " items from " + category);
        }
    }
}