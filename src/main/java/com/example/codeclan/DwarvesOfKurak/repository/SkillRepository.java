package com.example.codeclan.DwarvesOfKurak.repository;

import com.example.codeclan.DwarvesOfKurak.models.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {

}
