# 🏁 Racing Digital Setup Guide

## 🧱 Tech Stack Overview

- **Frontend (UI):** Angular (via Nx)
- **Backend (API):** .NET Core Minimal API
- **Database (DB):** SQL Server

---

## ⚙️ Backend Setup (API)

1. **Create the Database**

   - Open SQL Server and create a new database (e.g., `RacingDb`).

2. **Update the Connection String**

   - Open `appsettings.json` in the API project.
   - Replace the `DefaultConnection` value with the connection string for your new database.

3. **Install Dependencies**

   ```bash
   cd api
   dotnet restore
   ```

4. **Apply Migrations and Run the API**

   ```bash
   dotnet ef database update
   dotnet watch
   ```

5. **Verify API is Running**

   - Navigate to: [http://localhost:5001/swagger](http://localhost:5001/swagger)
   - You should see the API documentation via Swagger.
   - Check your database — it should now have a `RaceResults` table pre-populated with seed data.
   - **Note**: I have added a 1.5s delay to the API calls to simulate a more realistic API approach (which in turn will show the loading spinners)

---

## 🖥️ Frontend Setup (UI)

1. **Install Dependencies**

   ```bash
   cd ui
   npm install
   ```

2. **Run the Angular App**

   ```bash
   nx serve racing-digital
   ```

3. **View the App**

   - Open: [http://localhost:4200](http://localhost:4200)
   - You should see the list of races displayed in the UI.

---
