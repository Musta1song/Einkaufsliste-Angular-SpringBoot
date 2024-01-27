package com.example.shoppinglist;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Repository extends JpaRepository<Shoppinglist, Long> {
}
