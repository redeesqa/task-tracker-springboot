# 🗂️ Task Tracker

**Task Tracker** is a responsive web application for managing tasks. Built with **Java**, **Spring Boot**, **Thymeleaf**, and **H2 Database**, it showcases full-stack development skills including CRUD operations, search functionality, theme switching, and persistent data storage.

---

## 🚀 Features

- ✅ Add, edit, delete tasks  
- ✅ Mark tasks as done or not done  
- ✅ Search tasks by title  
- ✅ Light/Dark theme toggle with localStorage persistence  
- ✅ Persistent H2 file-based database (data saved between sessions)

---

## 🛠️ Technologies Used

- Java 25  
- Spring Boot 3  
- Spring Data JPA + Hibernate  
- Thymeleaf  
- HTML5 / CSS3 / JavaScript  
- H2 Database (file-based)

---

## 📁 Project Structure

```
src/
├── main/
│   ├── java/com/denys/tasktracker/
│   │   ├── Task.java
│   │   ├── TaskController.java
│   │   └── TaskRepository.java
│   └── resources/
│       ├── templates/
│       │   ├── index.html
│       │   ├── add.html
│       │   └── edit.html
│       ├── static/
│       │   ├── css/style.css
│       │   └── js/theme-toggle.js
│       └── application.properties
```

---

## 🧪 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/redeesqa/task-tracker-springboot.git
   cd task-tracker-springboot
   ```

2. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

3. Open in browser:
   ```
   http://localhost:8080
   ```

4. (Optional) Access H2 console:
   ```
   http://localhost:8080/h2-console
   JDBC URL: jdbc:h2:file:./data/tasks
   ```

---

## 👤 Author

**Denys Davydenko**  
📍 Split, Croatia  
📧 Email: [davydenkodenys.p@gmail.com](mailto:davydenkodenys.p@gmail.com)  
🔗 LinkedIn: [linkedin.com/in/denys-davydenko](https://www.linkedin.com/in/denys-davydenko)  
🐙 GitHub: [github.com/redeesqa](https://github.com/redeesqa)

---

## 📄 License

This project is licensed under the **MIT License** — you are free to use, modify, and distribute it with proper attribution.
