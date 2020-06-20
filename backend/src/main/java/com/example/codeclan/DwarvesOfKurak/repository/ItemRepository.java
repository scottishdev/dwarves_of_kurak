package com.example.codeclan.DwarvesOfKurak.repository;

import com.example.codeclan.DwarvesOfKurak.models.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository <Item, Long> {
}
