# 🚀 Frontend Code Challenge  

This repository contains my solution for a frontend coding challenge focused on redesigning the **skip selection page** while maintaining its functionality. The goal was to enhance **UI/UX**, ensure **responsiveness**, and write **clean, maintainable React code**.  

## 📌 Challenge Overview  

### 🎯 Task  
Redesign the skip selection page from [We Want Waste](https://wewantwaste.co.uk/) while:  
- Preserving its existing functionality.  
- Enhancing the overall **UI/UX** for a better user experience.  
- Ensuring **responsiveness** on both mobile and desktop.  
- Using the provided API to fetch skip options dynamically.  

### 🔗 API for Skip Data  
Skip options are retrieved from:  
```
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft
```

### 🔗 CodeSandbox URL  
```
### 🔗 API for Skip Data  
Skip options are retrieved from:  
```
https://codesandbox.io/p/github/usamabutt19/frontend-code-challenge/master
```

## 🛠️ Tech Stack & Libraries  
- **React** – Functional components with hooks.  
- **TypeScript** – Ensuring type safety and maintainability.  
- **React Awesome Reveal** – Adding subtle animations.  
- **Lucide React** – Providing scalable icons for UI elements.  
- **Tailwind CSS** – Styling for a clean, responsive layout.  

## 🚀 My Approach  

### 🏗️ 1. Component Structure & State Management  
- Designed a **modular component structure** for better code maintainability.  
- Utilized **React hooks** (`useState`, `useEffect`) for managing state and fetching data.  
- Ensured a **clear separation of concerns**, keeping API calls and UI logic separate.
- Created **reusable components** to avoid code duplication and keep the codebase clean.  
- Separated UI components from the main app file to improve **readability and maintainability**.

### 🎨 2. UI/UX Enhancements  
- Implemented a **modern, minimalistic UI** with improved readability.  
- Used consistent **spacing, typography, and color schemes** for a polished appearance.  
- Optimized **layout and interactions** for better usability.  

### 📱 3. Responsive Design  
- Built a **fully responsive interface** that adapts to different screen sizes.  
- Leveraged **Tailwind CSS** for flexible and scalable styling.  
- Used **mobile-first design principles** with appropriate media queries.  

## 📂 Project Structure  
```
frontend-code-challenge/
│-- src/
│   │-- assets/        # Static files (icons, images)
│   │-- components/    # Reusable UI components
│   │-- common/        # Shared interfaces & types
│-- README.md         # Project documentation
```

## 📌 How to Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/usamabutt19/frontend-code-challenge.git
   cd frontend-code-challenge
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser.

## ✅ Future Improvements
- Add more animations for a smoother UI experience.
- Implement more comprehensive error handling.
- Optimize accessibility using ARIA attributes.

## 🏆 Conclusion
This project demonstrates my ability to write clean, maintainable React code while focusing on UI/UX and responsiveness. Feel free to explore the repository and suggest improvements!

---
**Author:** [Usama Butt](https://github.com/usamabutt19)
