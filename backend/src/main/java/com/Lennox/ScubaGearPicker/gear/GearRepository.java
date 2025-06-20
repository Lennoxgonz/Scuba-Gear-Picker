package com.Lennox.ScubaGearPicker.gear;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface GearRepository extends JpaRepository<Gear, Long> {
    Optional<Gear> findByIdentifier(String identifier);

    List<Gear> findAllByCategory(String category);
}
