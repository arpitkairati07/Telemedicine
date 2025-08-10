# TeleMedicine Platform

A complete **TeleMedicine** web application where patients can book appointments with doctors from various specializations, make payments for bookings, or cancel them.  
The platform is built with **three main modules**:  
- **Admin Panel**
- **Frontend**
- **Backend**

---

## 📂 Project Structure

TeleMedicine/
│
├── Admin/ # Admin dashboard for managing doctors, earnings, and treatment data

├── Frontend/ # User interface for patients

├── Backend/ # API and database handling

└── README.md


---

## 🩺 Features

### 1. **Frontend (Patient Module)**
- **Doctor Browsing by Category:**
  - General Physician
  - Gynecologist
  - Dermatologist
  - Pediatrician
  - Neurologist
  - Gastroenterologist
- **Doctor Profile View:**
  - Name, specialization, availability, consultation fee, experience
- **Slot Booking:**
  - Select a preferred date & time
- **Payment or Cancellation Option:**
  - Pay online to confirm booking
  - Cancel appointment before confirmation

---

### 2. **Backend**
- **Booking Management:**
  - Handles slot availability, booking confirmations, and cancellations
- **Payment Processing:**
  - Integration with payment gateway
- **Database Handling:**
  - Stores doctors, patients, bookings, payment history, and treatment records
- **API for Admin & Frontend:**
  - RESTful APIs to connect the frontend and admin panel

---

### 3. **Admin Panel**
- **Doctor Management:**
  - Add new doctors with specialization, availability, and fee
  - Edit or remove doctors
- **Patient Treatment Tracking:**
  - View number of patients treated by each doctor
  - Check ongoing and past appointments
- **Earnings Overview:**
  - Doctor-wise earnings
  - Total platform revenue
- **Booking & Cancellation Reports:**
  - Track total bookings, cancellations, and completed appointments

---

## ⚙️ Tech Stack

### **Frontend:**
- React.js 
- Tailwind CSS 
- Axios for API calls

### **Backend:**
- Node.js & Express.js
- MongoDB
- JWT Authentication
- Payment Gateway (e.g., Razorpay )

### **Admin Panel:**
- React.js with Admin Dashboard UI
- DashBoard

---

## 🚀 Getting Started

### **1. Clone the repository**
```bash
git clone https://github.com/arpitkairati07/telemedicine.git

2. Install dependencies
cd Backend
npm install

cd ../Frontend
npm install

cd ../Admin
npm install

3.Start the servers
# Start backend
cd Backend
npm run server

# Start frontend
cd ../Frontend
npm run dev

# Start admin panel
cd ../Admin
npm run dev

📊 Future Enhancements

Video consultation integration

Prescription upload/download feature

Automated email/SMS reminders

Multi-language support


