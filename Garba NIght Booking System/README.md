# 🎭 Garba Night 2025 - Event Website

A beautiful, responsive event website for college Garba Night celebrations with Google Form integration for easy booking management.

## ✨ Features

### 🎯 Core Features
- **Single Page Design** with elegant design
- **Responsive & Mobile-Friendly** UI
- **Live Countdown Timer** to event
- **Interactive Highlights Section** with venue maps
- **Google Form Integration** for easy booking
- **Rules & Guidelines Modal**
- **Contact Information** with direct links

### 🎨 Customization Features
- **Easy Configuration** via `config.js`
- **Editable Content** (text, images, logos)
- **Theme Customization** (colors, fonts)
- **Developer Credits** section
- **Event Details** (date, time, venue)

## 📁 Project Structure

```
Garba Night Website/
├── index.html                      # Main website
├── styles.css                      # Main stylesheet
├── script.js                       # Frontend JavaScript
├── config.js                       # Configuration file
├── assets/                         # Images and media
│   ├── logo_name.png              # College logo
│   ├── Header_image.png           # Hero background
│   ├── college_pic.png            # About section image
│   ├── Rules&Guidelines.png       # Rules image
│   └── paymentQR.jpg              # Payment QR code
└── README.md                       # This file
```

## 🚀 Quick Setup Guide

### Step 1: Configure Your Event

1. **Update `config.js`**:
   ```javascript
   // Update Google Form URL for bookings
   booking: {
       formUrl: "https://forms.gle/YOUR_GOOGLE_FORM_ID"
   }
   ```

2. **Customize event details**:
   ```javascript
   event: {
       name: "Your Event Name",
       year: "2025",
       date: "September 26th, 2025",
       time: "6:00 PM - 9:00 PM",
       venue: "Your Venue Name"
   }
   ```

3. **Update college information**:
   ```javascript
   college: {
       name: "Your College",
       fullName: "Your College Full Name",
       logo: "assets/logo_name.png",
       website: "https://your-college-website.com"
   }
   ```

### Step 2: Add Your Images

Put these files in the `assets/` folder:
- `logo_name.png` (college logo)
- `Header_image.png` (hero background)
- `college_pic.png` (about section image)
- `Rules&Guidelines.png` (rules image)
- `paymentQR.jpg` (QR code for payments - optional)

### Step 3: Create Google Form

1. **Create a Google Form** for bookings with fields like:
   - Name
   - Email
   - Phone
   - Ticket Type
   - Number of People
   - Payment Screenshot Upload

2. **Copy the form URL** and update it in `config.js`

### Step 4: Test Locally

1. **Open `index.html`** in your browser
2. **Check all sections** work properly
3. **Test the booking button** redirects to your form
4. **Verify countdown timer** and other features

### Step 5: Deploy Website

**Option A: GitHub Pages**
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings

**Option B: Netlify**
1. Drag and drop the project folder to Netlify
2. Your site will be live instantly

**Option C: Local Testing**
1. Use a local web server (Python, Node.js, or VS Code Live Server)
2. Open `index.html` in your browser

## 🎨 Customization Guide

### Colors & Theme
```css
:root {
    --primary-color: #ff6b35;      /* Main brand color */
    --secondary-color: #f7931e;    /* Secondary accent */
    --accent-color: #c5282f;       /* Accent color */
}
```

### Event Information
```javascript
// In config.js
event: {
    name: "Your Event Name",
    date: "Event Date",
    venue: "Venue Name",
    eventDateTime: "2025-09-26 18:00:00" // For countdown
}
```

### Contact & Developer Information
```javascript
// Update contact details
contact: {
    email: "your-email@example.com",
    phone: "+91 9876543210"
}

// Add your team information
developers: [
    {
        name: "Your Name",
        role: "Developer",
        social: {
            github: "https://github.com/yourusername",
            linkedin: "https://linkedin.com/in/yourprofile"
        }
    }
]
```

## 🛠️ Technical Details

### Frontend Technologies
- **HTML5** with semantic markup
- **CSS3** with modern features (Grid, Flexbox, Animations)
- **Vanilla JavaScript** (ES6+)
- **Font Awesome** icons
- **Google Fonts** (Poppins)

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Responsiveness

The website is fully responsive with:
- **Mobile-first design** approach
- **Touch-friendly** interface
- **Responsive images** and media
- **Accessible navigation** on small screens

## 🎉 Credits

**Developed by**: RCERT Team
- Lead Developer: Vansh Saini
- Frontend Developer: Rohit Sharma

**Technologies Used**:
- HTML5/CSS3/JavaScript
- Font Awesome Icons
- Google Fonts

---

### 🚀 Ready to Launch?

1. ✅ Configure `config.js` with your event details
2. ✅ Create and link your Google Form for bookings
3. ✅ Add your college logo and images to assets folder
4. ✅ Test the website locally
5. ✅ Deploy to your hosting platform

**Your beautiful event website is ready to go live! 🎭✨**
