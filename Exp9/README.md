# 🔐 Spring Security + JWT Authentication Demo

This project demonstrates how to implement authentication and authorization using Spring Security and JSON Web Tokens (JWT) in a RESTful API.

It showcases how users can securely log in and access protected resources by passing a Bearer Token in the Authorization header.

---

## 🚀 Features

- User Authentication using Email & Password
- JWT Token Generation on Login
- Stateless Session Management
- Secure REST APIs using Spring Security
- Role-based Authorization (optional extension)
- MySQL / PostgreSQL Database Integration
- Password Encryption using BCrypt

---

## 🛠️ Tech Stack

- Java 17+
- Spring Boot
- Spring Security
- JWT (JSON Web Token)
- Hibernate / JPA
- MySQL / PostgreSQL
- Maven

---

## 📁 Project Structure

com.Yash.rest_example
│
├── Controller
├── Service
├── Repository
├── Entity
├── Security
└── Config

---

## 🔑 Authentication Flow

1. User sends login request with credentials
2. Server validates user using Spring Security
3. JWT token is generated
4. Token is returned to client
5. Client sends token in Authorization header for protected APIs
6. Server validates token before granting access

---

## 📌 API Endpoints

### 🔓 Public Endpoints

POST /register

POST /login

---

### 🔒 Protected Endpoints

GET /api/students/{id}

Headers:
Authorization: Bearer <your_jwt_token>

---

## 🧪 Testing with Postman

1. Login using /api/auth/login
2. Copy token
3. Use it in Authorization header for protected APIs

---

## 🔐 Security Configuration

- CSRF disabled
- Stateless session
- JWT filter added before UsernamePasswordAuthenticationFilter
- BCrypt password encoding

---

## Screenshots

![Exp9/SS/Screenshot 2026-04-03 094117.png](<SS/Screenshot 2026-04-03 094117.png>)

![Exp9/SS/Screenshot 2026-04-03 094342.png](<SS/Screenshot 2026-04-03 094342.png>)

![Exp9/SS/Screenshot 2026-04-03 094401.png](<SS/Screenshot 2026-04-03 094401.png>)

![Exp9/SS/Screenshot 2026-04-03 094417.png](<SS/Screenshot 2026-04-03 094417.png>)

---

## ▶️ How to Run

git clone https://github.com/DueYash/SpringSecurity.git
cd your-repo
mvn spring-boot:run

---
