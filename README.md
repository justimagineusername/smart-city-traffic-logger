# Smart City Traffic Logger

A backend service to simulate and manage traffic light changes across city intersections.  
Built with Node.js, Express, and PostgreSQL using an MVX (Model-View-Anything) architecture optimized for RESTful APIs.

---

## Features

- Manage city intersections with full CRUD operations.
- Log and track traffic light color changes (`red`, `yellow`, `green`) per intersection.
- Clean separation of concerns: models, controllers, routes, and middleware.
- Input validation and comprehensive error handling.
- PostgreSQL database with normalized schema and cascade delete rules.

---

## Architecture

- **Model:** Data access and database operations (`intersectionModel.js`, `lightLogModel.js`).
- **Controller:** Business logic and request handling.
- **Routes:** RESTful API endpoints.
- **Middleware:** Validation and error handling.
- **Database:** PostgreSQL with foreign keys and timestamped events.

---

## Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/smart-city-traffic-logger.git
   cd smart-city-traffic-logger
