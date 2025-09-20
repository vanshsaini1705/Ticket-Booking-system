// Configuration file for Garba Night Website
const CONFIG = {
    // Event Details
    event: {
        name: "Garba Night",
        year: "2025",
        date: "September 26th, 2025",
        time: "6:00 PM - 9:00 PM",
        venue: "RCERT Open Air Theatre",
        eventDateTime: "2025-09-26 18:00:00" // For countdown timer
    },

    // Location for Map Integration
    location: {
        lat: 26.76783682291688, 
        lng: 75.85645978195025,
        address: "RCERT Open Air Theatre, Jaipur, Rajasthan, India"
    },

    // Booking Configuration
    booking: {
        formUrl: "https://forms.gle/xheQFTJgfEeYPuzK7" // Google Form URL
    },

    // Contact Information
    contact: {
        email: "eventcollege123@gmail.com",
        phone: {
            "Vansh Saini": "+91 9887799990",
            "Rohit Sharma": "+91 8875445062", 
            "Event Coordinator": "+91 9079934306"
        }
    },

    // College Information
    college: {
        name: "RCERT",
        fullName: "Regional College of Engineering & Research Technology",
        logo: "assets/logo_name.png",
        website: "https://regional.ac.in/",
        description: "Regional College of Engineering & Research Technology (RCERT) is a premier educational institution committed to excellence in technical education. Our annual Garba Night celebration brings together students, faculty, and the community to celebrate the rich cultural heritage of Rajasthan."
    },

    // Developers Information
    developers: [
        {
            name: "Vansh Saini",
            role: "Lead Developer",
            social: {
                github: "https://github.com/vanshsaini1705",
                linkedin: "https://www.linkedin.com/in/vansh-saini-ba04262bb/",
                instagram: "https://www.instagram.com/vanshsaini1705/"
            }
        },
        {
            name: "Rohit Sharma",
            role: "Frontend Developer",
            social: {
                instagram: "https://www.instagram.com/its_rohit05824/",
                linkedin: "https://www.linkedin.com/in/rohit-sharma-a21a632a3/"
            }
        }
    ],

    // Event Rules and Guidelines
    rules: {
        title: "Event Rules & Guidelines",
        content: [
            {
                category: "Dress Code",
                rules: [
                    "Traditional Indian attire is mandatory",
                    "Chaniya Choli for girls, Kurta-Dhoti/Pajama for boys",
                    "Comfortable footwear recommended for dancing",
                    "Avoid heavy jewelry that might cause injury"
                ]
            },
            {
                category: "Entry Guidelines",
                rules: [
                    "Entry only with valid ticket and ID proof",
                    "Gates open at 5:30 PM",
                    "No re-entry after leaving the venue",
                    "Ticket must be presented at entry"
                ]
            },
            {
                category: "Safety Rules",
                rules: [
                    "No outside food or beverages allowed",
                    "Emergency exits must be kept clear",
                    "Report any suspicious activity to security",
                    "Follow COVID-19 safety protocols if applicable"
                ]
            }
        ]
    },

    // UI Assets
    ui: {
        heroBackground: "assets/Header_image.png",
        collegeImage: "assets/college_pic.png",
        rulesImage: "assets/Rules&Guidelines.png"
    },

    // Feature Toggles
    features: {
        enableCountdown: true,
        enableDeveloperSection: true,
        enableRulesModal: true,
        enableMapIntegration: true
    }
};

// Simplified Helper Functions
const ConfigHelper = {
    // Get formatted event date for countdown
    getEventDate: () => {
        return new Date(CONFIG.event.eventDateTime);
    },

    // Get Google Maps URL
    getMapUrl: () => {
        const { lat, lng } = CONFIG.location;
        return `https://www.google.com/maps?q=${lat},${lng}`;
    },

    // Get booking form URL
    getBookingFormUrl: () => {
        return CONFIG.booking.formUrl;
    }
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, ConfigHelper };
}
