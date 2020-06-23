package com.example.codeclan.DwarvesOfKurak.repository;

import com.example.codeclan.DwarvesOfKurak.models.Party;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PartyRepository extends JpaRepository<Party, Long> {
}