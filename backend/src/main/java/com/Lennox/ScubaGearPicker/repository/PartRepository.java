package com.Lennox.ScubaGearPicker.repository;

import com.Lennox.ScubaGearPicker.model.Part;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PartRepository extends JpaRepository<Part, Long> {
    Optional<Part> findByIdentifier(String identifier);

    List<Part> findAllByCategory(String category);
}
