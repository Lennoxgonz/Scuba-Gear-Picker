package com.Lennox.ScubaGearPicker.service;

import com.Lennox.ScubaGearPicker.model.Part;
import com.Lennox.ScubaGearPicker.repository.PartRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PartService {
    private final PartRepository partRepository;

    public PartService(PartRepository partRepository) {
        this.partRepository = partRepository;
    }

    public void saveAll(List<Part> parts) {
        partRepository.saveAll(parts);
    }

    public Optional<List<Part>> findAllByCategory(String category) {
        return partRepository.findAllByCategory(category);
    }
}