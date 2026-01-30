package com.AakashKumarCode.SpringBootBackEndCRUDapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.AakashKumarCode.SpringBootBackEndCRUDapp.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
