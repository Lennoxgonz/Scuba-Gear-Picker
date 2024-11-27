package com.Lennox.ScubaGearPicker.util;

import com.Lennox.ScubaGearPicker.model.Part;
import com.Lennox.ScubaGearPicker.service.PartService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Component
public class JsonDataLoader implements CommandLineRunner {

    private final PartService partService;

    @Autowired
    public JsonDataLoader(PartService partService) {
        this.partService = partService;
    }

    @Override
    public void run(String... args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        TypeReference<List<Part>> typeReference = new TypeReference<List<Part>>(){};
        InputStream inputStream = TypeReference.class.getResourceAsStream("/data/parts.json");

        try {
            List<Part> parts = mapper.readValue(inputStream, typeReference);
            partService.saveAll(parts);
            System.out.println("Parts successfully imported!");
        } catch (IOException e) {
            System.out.println("Failed to import parts: " + e.getMessage());
        }
    }
}