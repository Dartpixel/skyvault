# 🌩️ SkyVault – Secure & Seamless Cloud File Storage System

SkyVault is a cloud-based file storage solution designed for secure, efficient, and user-friendly file and folder management. Built with a full-stack architecture, it supports both user and admin roles with differentiated access controls and features. It is ideal for individuals or small teams looking for a self-hosted storage system.

---

## 🚀 Features

### 🔐 User Module
- **User Dashboard**: Overview of folders and recent file activities.
- **Manage Folders**: Create, rename, or delete folders.
- **Manage Files**: Upload, download, or delete files within folders.
- **Change Password**: Update user credentials securely.
- **Send Feedback**: Communicate feedback directly through the interface.
- **About Project**: View app information and version.

### 🛠 Admin Module
- **Admin Dashboard**: Overview of platform usage and system health.
- **Manage User Profiles**: View, edit, or remove registered users.
- **View All Folders/Files**: Monitor all stored content system-wide.
- **Read Feedback**: Access and respond to user-submitted feedback.
- **About Project**: View admin-level details.

---

## 🏗️ Tech Stack

| Layer        | Technology              |
|--------------|--------------------------|
| **Frontend** | HTML, CSS, ReactJs    |
| **Backend**  | Node.js, Express.js      |
| **Database** | MongoDB                  |
| **Cloud**    | AWS S3 (File Storage)    |
| **Authentication** | JWT (JSON Web Tokens) |

---

## 🛡️ Security

- Secrets are stored in `.env` (excluded from version control)
- AWS credentials are never pushed to GitHub
- Role-based access control (RBAC)
- Input validation and sanitization

---

## ⚙️ How to Use SkyVault on Another System

Follow these steps to clone, configure, and run SkyVault on a new machine.

---

### 🧾 1. Prerequisites

Ensure the following are installed:

- [Node.js (v14+)](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)
- [AWS Account](https://aws.amazon.com/) (for S3 integration)

---

### 📦 2. Clone the Repository

git clone https://github.com/Dartpixel/skyvault.git

cd skyvault

cd backend

npm install

cd frontend

npm install

### Create your .env file in /backend and set environment variables

touch .env

PORT=5000

MONGODB_URI=your_mongo_uri

JWT_SECRET=your_jwt_secret

AWS_ACCESS_KEY_ID=your_aws_key

AWS_SECRET_ACCESS_KEY=your_aws_secret

AWS_REGION=your_aws_region

S3_BUCKET_NAME=your_bucket_name

### Now run these command for frontned and backend
npm start and npm run dev

## 📬 Feedback and Contribution

We welcome contributions and suggestions. Feel free to:

- 📌 [Submit a pull request](https://github.com/Dartpixel/skyvault/pulls)
- 🐞 [Create an issue](https://github.com/Dartpixel/skyvault/issues)
- 💬 Share feedback directly through the app’s feedback form

Your input helps us improve SkyVault continuously!

---

## 🧑‍💻 Author

**Kartik Sharma**  
Developer | Tech Enthusiast
📧 Reach me on [LinkedIn](https://www.linkedin.com/in/kartiksharma2004/)

---
