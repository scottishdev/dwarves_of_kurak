package com.example.codeclan.DwarvesOfKurak.repository;

import com.example.codeclan.DwarvesOfKurak.models.Monster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MonsterRepository extends JpaRepository<Monster, Long> {
}
