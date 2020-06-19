package com.example.codeclan.DwarvesOfKurak.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.codeclan.DwarvesOfKurak.models.Character;

@Repository
public interface CharacterRepository extends JpaRepository<Character, Long> {

}
