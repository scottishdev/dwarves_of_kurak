package com.example.codeclan.DwarvesOfKurak.repository;

import com.example.codeclan.DwarvesOfKurak.models.Encounter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EncounterRepository extends JpaRepository<Encounter, Long> {

}
