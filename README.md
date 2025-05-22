# CHROME-EXTENSION-FOR-PRODUCTIVITY-MANAGEMENT

COMPANY : CODETECH IT SOLUTIONS

NAME : VANGALA GREESHMA

INTERN ID : CT08WR151

DOMAIN : MERN STACK WEB DEVELOPMENT

DURATION : 8 WEEKS

MENTOR : NEELA SANTHOSH

---

# 🚀 Productivity Tracker Chrome Extension (MERN Stack Project)

This is Task 4 for the CODTECH MERN Stack Internship. The project involves developing a **Chrome Extension for Productivity Management** that helps users monitor their website usage, block distracting websites, and view daily productivity reports.

The backend is built using the **MERN stack** (MongoDB, Express.js, React.js (optional for admin dashboard), and Node.js), and the frontend consists of a Chrome Extension that integrates with it via REST APIs.

---

## 📌 Project Objective

To build a productivity tracking tool that runs as a Chrome Extension and communicates with a backend server to:

- Track the amount of time a user spends on different websites.
- Block distracting or blacklisted websites (user-defined).
- Generate daily productivity reports.
- Store data persistently using MongoDB.
- Sync preferences and logs across devices (via backend support).

---

## 🧩 Technologies Used

- **Frontend (Extension)**: HTML, JavaScript, Chrome APIs
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Environment Management**: dotenv
- **Tools**: VS Code, Postman, MongoDB Compass (optional)

---

## ✅ Features & Deliverables

### ✔ Time Tracker
- Automatically tracks time spent on active browser tabs.
- Logs time in the backend with site URLs and usage duration.

### ✔ Distraction Blocker
- User-defined list of distracting websites.
- Blocks or redirects when a user tries to visit those sites.

### ✔ Daily Reports
- Backend API provides detailed report on time spent per website.
- Frontend popup shows summarized daily activity.
- Can be extended to show charts and analytics using chart.js or React.

### ✔ MongoDB Integration
- All logs are stored in a MongoDB collection.
- Backend is capable of fetching, filtering, and aggregating data for reports.

### ✔ Chrome Extension Frontend
- Lightweight UI to view reports and adjust preferences.
- Uses `popup.html`, `popup.js`, and `background.js`.

### ✔ Device Sync (Optional Advanced)
- User preferences like blocklist and usage logs can be synced to the cloud via backend.

---

## Backend Setup

cd backend
npm install

Create a .env file in /backend:

PORT=5000
MONGODB_URI=mongodb://localhost:27017/productivity

Start MongoDB locally:

mongod

Then run:

node index.js

Server will run at http://localhost:5000.

---

## Load the Chrome Extension

-Go to chrome://extensions/

-Enable Developer mode

-Click Load unpacked

-Select the /extension folder

---

## API Endpoints

POST /api/log
Log a URL and time duration

Example:
json
{
  "url": "https://youtube.com",
  "time": 300
}

-GET /api/report
Returns a summary of total time spent per hostname

---

## Permissions (Chrome Extension)

manifest file includes:

"permissions": [
  "tabs",
  "webNavigation",
  "storage"
],
"host_permissions": [
  "<all_urls>"
]

This allows it to read active tabs and monitor user navigation.

---

### Output

![Image](https://github.com/user-attachments/assets/2adb1175-0fff-4e20-83f6-cec9802953c6)




![Image](https://github.com/user-attachments/assets/20b6e77a-12cf-4e10-b7c1-f693372056f0)





