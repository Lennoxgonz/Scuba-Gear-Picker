package com.Lennox.ScubaGearPicker.gear;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class GearService {
    private final GearRepository partRepository;

    public GearService(GearRepository partRepository) {
        this.partRepository = partRepository;
    }

    public void saveAll(List<Gear> parts) {
        partRepository.saveAll(parts);
    }

    public List<Gear> findAll() {
        return partRepository.findAll();
    }

    public List<Gear> findAllByCategory(String category) {
        return partRepository.findAllByCategory(category);
    }

    public Optional<Gear> findByIdentifier(String identifier) {
        return partRepository.findByIdentifier(identifier);
    }

}