-- Database Creation
CREATE DATABASE IF NOT EXISTS krmu_lostfound;
USE krmu_lostfound;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    roll_number VARCHAR(20),
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('student', 'staff', 'admin') DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Items Table
CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    type ENUM('lost', 'found') NOT NULL,
    name VARCHAR(150) NOT NULL,
    category VARCHAR(50) NOT NULL,
    location VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    description TEXT NOT NULL,
    status ENUM('active', 'resolved') DEFAULT 'active',
    contact_name VARCHAR(100),
    contact_email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Insert Demo Data (Optional for testing)
INSERT INTO users (name, email, roll_number, password_hash, role) 
VALUES ('Super Admin', 'admin@krmangalam.edu.in', 'ADMIN001', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin')
ON DUPLICATE KEY UPDATE id=id; -- password is 'password'

INSERT INTO items (type, name, category, location, date, description, contact_name, contact_email) VALUES
('found', 'Prescription Glasses', 'Eyewear', 'Cafeteria', '2026-03-05', 'Black-framed prescription glasses in a brown leather case. Found on a table in the cafeteria. Currently kept with me — contact to verify and collect.', 'Rahul Sharma', 'rahul@krmangalam.edu.in'),
('lost', 'Black Umbrella', 'Other', 'Library', '2026-03-01', 'Black folding umbrella with a red logo. Left at the library entrance umbrella stand. Name "S. Mishra" written on handle.', 'Suman Mishra', 'suman@krmangalam.edu.in'),
('found', 'Set of 3 Keys (Red Chain)', 'Keys & Cards', 'Parking Area', '2026-02-22', 'Three keys on a red keychain with a small KRMU promotional tag. Found near the two-wheeler parking zone by the main gate.', 'Anurag Singh', 'anurag@krmangalam.edu.in'),
('found', 'Grey Laptop Bag', 'Bags & Accessories', 'Block B', '2026-02-21', 'Grey and black laptop bag found near Lab B-108. Contains USB cables and a charger brick inside. No laptop. Kept at DSW office.', 'DSW Office', 'dsw@krmangalam.edu.in');
