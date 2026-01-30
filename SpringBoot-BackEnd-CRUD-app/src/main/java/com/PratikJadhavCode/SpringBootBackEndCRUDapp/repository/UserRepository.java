package com.PratikJadhavCode.SpringBootBackEndCRUDapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.PratikJadhavCode.SpringBootBackEndCRUDapp.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
