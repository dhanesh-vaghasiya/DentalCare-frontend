# Dental Care - AI-Powered Dental Education & Diagnostics

A high-fidelity, minimalist frontend web application for dental education and diagnostic purposes, developed as a B.Tech Semester 6 academic research project.

## 🦷 Features

### 1. AI Dental Scanner (Home Page)
- **Drag-and-drop upload**: Upload dental X-rays or oral photos
- **Processing animation**: Real-time scanning visualization
- **Split-screen results**: 
  - Left: Uploaded image with bounding boxes highlighting detected areas
  - Right: Dental insights with confidence scores for conditions like Plaque, Cavities, and Gum Inflammation

### 2. Educational Hub (Learn Page)
- **Sidebar navigation**: Categories include Anatomy, Common Pathologies, and Surgical Procedures
- **Interactive diagrams**: 3D tooth structures with hoverable hotspots showing detailed tooltips
- **Dental dictionary**: Accordion-style dropdowns with simplified explanations of complex dental terms

### 3. Clinical Services & Pricing
- **Service cards**: 6 professional dental services with transparent pricing:
  - Routine Cleaning: ₹1,500
  - Dental Implants: From ₹25,000
  - Root Canal Treatment: ₹4,000
  - Orthodontics: ₹35,000+
  - Teeth Whitening: ₹8,000
  - Crown & Bridge: ₹6,000 - ₹15,000
- **Call-to-action**: "Book Consultation" button on each card

### 4. Student Research Team (About Us)
- **Team profiles**: 6 circular profile cards featuring:
  - Name and role
  - B.Tech Semester 6 designation
  - Short bio describing their contribution
  - Social media links (GitHub, LinkedIn, Email)
- **Project information**: Technologies used, goals, and academic disclaimer

## 🎨 Design Specifications

### Color Palette
- **Arctic White**: #FFFFFF (Primary background)
- **Soft Mint Green**: #E0F2F1 (Accent backgrounds)
- **Deep Navy**: #1A237E (Typography and primary elements)
- **Accent Teal**: #00897B (Interactive elements)

### Typography
- **Font Family**: Inter (via Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700

### Layout
- Sticky navigation bar with smooth scrolling
- Responsive grid layouts
- Card-based design system
- Smooth animations and transitions

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

### Build for Production

To create an optimized production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
frontend/
├── index.html                 # HTML entry point
├── package.json              # Project dependencies
├── vite.config.js            # Vite configuration
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx               # Main app component with routing
│   ├── index.css             # Global styles and CSS variables
│   ├── components/
│   │   ├── Navigation.jsx    # Sticky navigation bar
│   │   ├── Navigation.css
│   │   ├── Footer.jsx        # Footer with academic disclaimer
│   │   └── Footer.css
│   └── pages/
│       ├── Home.jsx          # AI Dental Scanner page
│       ├── Home.css
│       ├── Learn.jsx         # Educational Hub page
│       ├── Learn.css
│       ├── Services.jsx      # Clinical Services page
│       ├── Services.css
│       ├── Team.jsx          # Student Research Team page
│       └── Team.css
```

## 🛠️ Technologies Used

- **React 18**: Modern UI library with hooks
- **React Router DOM**: Client-side routing
- **Vite**: Fast build tool and dev server
- **Lucide React**: Beautiful icon library
- **CSS3**: Custom styling with CSS Grid and Flexbox

## 🎓 Academic Purpose

This application has been developed for educational and research purposes as part of a B.Tech Semester 6 curriculum. The AI diagnostic features are intended for demonstration and learning purposes only. All medical decisions should be made in consultation with qualified healthcare professionals.

## 👥 Development Team

- **Arjun Sharma** - AI Specialist & Project Lead
- **Priya Patel** - Frontend Lead & UI/UX Designer
- **Rohan Kumar** - Backend Developer
- **Ananya Singh** - Data Scientist
- **Vikram Reddy** - DevOps Engineer
- **Sneha Gupta** - Quality Assurance Lead

## 📄 License

This project is developed for academic research purposes.

## 🤝 Contributing

As this is an academic project, contributions are limited to the development team. However, feedback and suggestions are welcome.

---

**Note**: This is a frontend demonstration. For full functionality, integrate with the backend API available in the `backend/` directory.
