// ==========================================================================
// EDIT YOUR PORTFOLIO INFORMATION HERE
// ==========================================================================

const portfolioData = {
  // Basic Personal Info
  name: "YOUR NAME",
  initials: "YN",
  tagline: "A high school student who likes to build useful things",
  location: "YOUR CITY, STATE",
  focus: "Computer Science, Design & Mathematics",
  status: "High School Student • Open to internship opportunities",
  
  // Optional photo. Leave as "" to show your clean monogram initials.
  // To use a photo, place your image (e.g., profile.jpg) in the directory and set this to "profile.jpg"
  avatarUrl: "",

  // About Section
  about: {
    // A short 1-2 sentence intro for the homepage
    short: "I design websites, build scripts, and study science. I love learning how systems work and how to design clean digital experiences.",
    
    // A longer, descriptive story for your About page. Double newlines (\n\n) create new paragraphs.
    long: "I am a high school student with a deep curiosity for computing and visual arts. I enjoy building things with code, designing clean user interfaces, and researching science topics. I spend my free time coding small tools, organizing club meetings, and learning new skills.\n\nI believe that software should be intuitive, accessible, and elegant. Through my coursework and self-directed projects, I'm working to expand my knowledge in coding and design while looking for opportunities to collaborate on meaningful work."
  },

  // Contact Info
  contact: {
    intro: "I am always excited to discuss new projects, hear about opportunities, or just chat. Feel free to reach out via email or connect with me on socials.",
    email: "YOUR.EMAIL@example.com",
    linkedin: "https://linkedin.com/in/YOUR-USERNAME",
    github: "https://github.com/YOUR-USERNAME"
  },

  // Education History
  education: [
    {
      institution: "Your High School Name",
      degree: "High School Diploma candidate",
      dates: "2022 - 2026",
      details: "Relevant Coursework: AP Computer Science A, AP Calculus BC, AP Physics C • Web Development Club Founder • GPA: 4.0"
    }
  ],

  // Skills List (Pills on About Page)
  skills: [
    "HTML & CSS",
    "JavaScript (ES6+)",
    "Python",
    "Figma",
    "Git & GitHub",
    "Responsive Web Design",
    "Technical Writing"
  ],

  // Interests / Hobbies
  interests: [
    {
      name: "Creative Coding",
      desc: "Making generative art and interactive web visuals using canvas APIs."
    },
    {
      name: "Graphic Design",
      desc: "Experimenting with layouts, typography, and color theory in poster designs."
    },
    {
      name: "Science Olympiad",
      desc: "Competing in regional events focusing on data analysis and experimental design."
    }
  ],

  // Projects List
  // - featured: true shows the project on index.html and projects.html
  // - featured: false shows it only on projects.html
  // - link: leave as "" if there is no live url or repository link
  projects: [
    {
      title: "School Planner Tool",
      year: "2025",
      description: "A lightweight, browser-based student agenda application featuring customizable class schedules, notes, and local storage integration.",
      role: "Lead Developer & Designer",
      technologies: ["JavaScript", "HTML5", "CSS Grid", "localStorage"],
      link: "https://github.com/YOUR-USERNAME/school-planner",
      featured: true
    },
    {
      title: "Interactive Wing Simulator",
      year: "2024",
      description: "A visual simulation demonstrating air particle interaction with standard wing cross-sections, built for a science fair project.",
      role: "Independent Programmer",
      technologies: ["Python", "Pygame", "Physics Modeling"],
      link: "",
      featured: true
    },
    {
      title: "Neighborhood Food Drive Portal",
      year: "2023",
      description: "A mobile-friendly local event site that coordinated drop-off schedules, tracked progress, and reduced sign-up confusion by 25%.",
      role: "Volunteer Developer",
      technologies: ["HTML5", "CSS Flexbox", "JavaScript"],
      link: "https://github.com/YOUR-USERNAME/food-drive",
      featured: false
    }
  ],

  // Experience List (Timeline on Experience Page)
  experience: [
    {
      organization: "Local Technology Group",
      role: "Summer Coding Intern",
      dates: "June 2025 - August 2025",
      description: "Assisted the design team with responsive frontend mockups. Written automated test scripts in Python to verify API endpoints."
    },
    {
      organization: "School Coding Association",
      role: "President / Co-founder",
      dates: "September 2023 - Present",
      description: "Host weekly workshops introducing 20+ peers to basic HTML/CSS/JS syntax. Organizing a student hackathon in partnership with local community centers."
    },
    {
      organization: "Community Green Initiative",
      role: "Volunteer Webmaster",
      dates: "January 2024 - Present",
      description: "Created and updated dynamic registration forms for local park cleanups, simplifying volunteer registration processes."
    }
  ]
};

// ==========================================================================
// CORE PORTFOLIO ENGINE (DO NOT EDIT UNLESS YOU WANT TO CHANGE ENGINE LOGIC)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial State Load (Theme & Accent Color)
  initThemeAndAccent();

  // 2. Global Elements Rendering (Header Monogram, Footer Brand, Active Link Styling)
  renderGlobalElements();

  // 3. Page-Specific Rendering
  const pathname = window.location.pathname.split("/").pop();
  
  // Decide page mapping based on body ID (robust fallback for raw file double-click)
  const bodyId = document.body.id;
  
  if (bodyId === "home-page" || pathname === "index.html" || pathname === "") {
    renderHomePage();
  } else if (bodyId === "about-page" || pathname === "about.html") {
    renderAboutPage();
  } else if (bodyId === "projects-page" || pathname === "projects.html") {
    renderProjectsPage();
  } else if (bodyId === "experience-page" || pathname === "experience.html") {
    renderExperiencePage();
  } else if (bodyId === "contact-page" || pathname === "contact.html") {
    renderContactPage();
  }

  // 4. Register Interactive Listeners (Mobile Menu, Theme Switch, Accent Selection)
  registerInteractiveListeners();
});

/**
 * Initializes and loads the theme (Light/Dark) and Accent Color from localStorage.
 */
function initThemeAndAccent() {
  // Load Theme
  const savedTheme = localStorage.getItem("portfolio-theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Load Accent
  const savedAccent = localStorage.getItem("portfolio-accent") || "sage";
  document.documentElement.setAttribute("data-accent", savedAccent);
  
  // Update active class on current swatch button once rendered
  setTimeout(() => {
    const swatches = document.querySelectorAll(".swatch");
    swatches.forEach(swatch => {
      if (swatch.dataset.accent === savedAccent) {
        swatch.classList.add("active");
      } else {
        swatch.classList.remove("active");
      }
    });
  }, 50);
}

/**
 * Renders name/initials in the Header, Footer, and updates Navigation status.
 */
function renderGlobalElements() {
  // Fill text fields marked with data-field
  document.querySelectorAll('[data-field="name"]').forEach(el => {
    el.textContent = portfolioData.name;
  });
  
  document.querySelectorAll('[data-field="initials"]').forEach(el => {
    el.textContent = portfolioData.initials;
  });

  // Render dynamic avatar if URL is present, otherwise display monogram
  const headerMonogramWrapper = document.getElementById("header-monogram-wrapper");
  if (headerMonogramWrapper) {
    if (portfolioData.avatarUrl) {
      headerMonogramWrapper.innerHTML = `<img src="${portfolioData.avatarUrl}" alt="${portfolioData.name}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
    } else {
      headerMonogramWrapper.innerHTML = portfolioData.initials;
    }
  }

  // Set current year in Footer
  const footerYear = document.getElementById("footer-year");
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  // Set active link indicator on navigation
  const pathname = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === pathname || (pathname === "" && href === "index.html")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
}

/**
 * Binds DOM event listeners for interactivity: Theme toggle, Accent swatches, Mobile navigation
 */
function registerInteractiveListeners() {
  // Mobile Nav Hamburger Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-toggle");
  const navLinksList = document.querySelector(".nav-links");

  if (mobileMenuBtn && navLinksList) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinksList.classList.toggle("mobile-active");
      const isExpanded = navLinksList.classList.contains("mobile-active");
      mobileMenuBtn.setAttribute("aria-expanded", isExpanded);
    });
  }

  // Theme Toggle Button
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("portfolio-theme", newTheme);
    });
  }

  // Accent Color Swatches
  const swatches = document.querySelectorAll(".swatch");
  swatches.forEach(swatch => {
    swatch.addEventListener("click", () => {
      const accent = swatch.dataset.accent;
      if (accent) {
        document.documentElement.setAttribute("data-accent", accent);
        localStorage.setItem("portfolio-accent", accent);
        
        // Update active swatch highlight
        swatches.forEach(s => s.classList.remove("active"));
        swatch.classList.add("active");
      }
    });
  });
}

/**
 * Population logic for Homepage (index.html)
 */
function renderHomePage() {
  // Monogram / Avatar Image
  const heroAvatarContainer = document.getElementById("hero-avatar-container");
  if (heroAvatarContainer) {
    if (portfolioData.avatarUrl) {
      heroAvatarContainer.innerHTML = `<img src="${portfolioData.avatarUrl}" alt="${portfolioData.name}" class="hero-avatar-image">`;
    } else {
      heroAvatarContainer.innerHTML = `<div class="hero-avatar-monogram" data-field="initials">${portfolioData.initials}</div>`;
    }
  }

  // Basic tags
  setTextContentById("hero-tagline", portfolioData.tagline);
  setTextContentById("hero-intro", portfolioData.about.short);
  setTextContentById("hero-location", portfolioData.location);
  setTextContentById("hero-focus", portfolioData.focus);
  setTextContentById("hero-status", portfolioData.status);
  setTextContentById("about-preview-text", portfolioData.about.short);

  // Render 2-3 Featured Projects
  const featuredContainer = document.getElementById("featured-projects-container");
  if (featuredContainer) {
    const featuredProjects = portfolioData.projects.filter(p => p.featured);
    
    if (featuredProjects.length === 0) {
      featuredContainer.innerHTML = "<p>No featured projects currently configured.</p>";
      return;
    }

    featuredContainer.innerHTML = featuredProjects
      .map(p => generateProjectHtml(p))
      .join("");
  }
}

/**
 * Population logic for About Page (about.html)
 */
function renderAboutPage() {
  // Long Bio paragraph rendering
  const aboutLongContainer = document.getElementById("about-long");
  if (aboutLongContainer && portfolioData.about.long) {
    const paragraphs = portfolioData.about.long.split("\n\n");
    aboutLongContainer.innerHTML = paragraphs
      .map(pText => `<p>${pText.replace(/\n/g, "<br>")}</p>`)
      .join("");
  }

  // Skills Pills
  const skillsContainer = document.getElementById("skills-container");
  if (skillsContainer && portfolioData.skills) {
    skillsContainer.innerHTML = portfolioData.skills
      .map(skill => `<span class="skill-pill">${skill}</span>`)
      .join("");
  }

  // Education Rows
  const educationContainer = document.getElementById("education-container");
  if (educationContainer && portfolioData.education) {
    educationContainer.innerHTML = portfolioData.education
      .map(edu => `
        <div class="education-item">
          <h3 class="education-school">${edu.institution}</h3>
          <div class="education-degree">${edu.degree}</div>
          <div class="education-meta">${edu.dates} • ${edu.details}</div>
        </div>
      `)
      .join("");
  }

  // Interests / Hobby list
  const interestsContainer = document.getElementById("interests-container");
  if (interestsContainer && portfolioData.interests) {
    interestsContainer.innerHTML = portfolioData.interests
      .map(interest => `
        <div class="interest-item">
          <span class="interest-name">${interest.name}</span>
          <p class="interest-desc">${interest.desc}</p>
        </div>
      `)
      .join("");
  }
}

/**
 * Population logic for Projects Page (projects.html)
 */
function renderProjectsPage() {
  const projectsContainer = document.getElementById("projects-container");
  if (projectsContainer && portfolioData.projects) {
    if (portfolioData.projects.length === 0) {
      projectsContainer.innerHTML = "<p>No projects listed yet. Check back soon!</p>";
      return;
    }
    
    projectsContainer.innerHTML = portfolioData.projects
      .map(p => generateProjectHtml(p))
      .join("");
  }
}

/**
 * Population logic for Experience Page (experience.html)
 */
function renderExperiencePage() {
  const experienceContainer = document.getElementById("experience-container");
  if (experienceContainer && portfolioData.experience) {
    if (portfolioData.experience.length === 0) {
      experienceContainer.innerHTML = "<p>No experiences configured yet.</p>";
      return;
    }

    experienceContainer.innerHTML = portfolioData.experience
      .map(exp => `
        <div class="timeline-item">
          <div class="timeline-header">
            <h3 class="timeline-org">${exp.organization}</h3>
            <span class="timeline-dates">${exp.dates}</span>
          </div>
          <div class="timeline-role">${exp.role}</div>
          <p class="timeline-desc">${exp.description.replace(/\n/g, "<br>")}</p>
        </div>
      `)
      .join("");
  }
}

/**
 * Population logic for Contact Page (contact.html)
 */
function renderContactPage() {
  setTextContentById("contact-intro", portfolioData.contact.intro);
  
  // Update Contact Cards & Hrefs
  const emailCard = document.getElementById("contact-email-card");
  if (emailCard) {
    emailCard.setAttribute("href", `mailto:${portfolioData.contact.email}`);
    const val = emailCard.querySelector(".contact-value");
    if (val) val.textContent = portfolioData.contact.email;
  }

  const linkedinCard = document.getElementById("contact-linkedin-card");
  if (linkedinCard) {
    linkedinCard.setAttribute("href", portfolioData.contact.linkedin);
    const val = linkedinCard.querySelector(".contact-value");
    if (val) {
      // Show username snippet
      const parts = portfolioData.contact.linkedin.split("/").filter(Boolean);
      val.textContent = parts[parts.length - 1] || "LinkedIn Profile";
    }
  }

  const githubCard = document.getElementById("contact-github-card");
  if (githubCard) {
    githubCard.setAttribute("href", portfolioData.contact.github);
    const val = githubCard.querySelector(".contact-value");
    if (val) {
      const parts = portfolioData.contact.github.split("/").filter(Boolean);
      val.textContent = parts[parts.length - 1] || "GitHub Profile";
    }
  }
}

// --- HELPER UTILITY FUNCTIONS ---

/**
 * Helper to set text content of element safely if it exists
 */
function setTextContentById(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

/**
 * Helper to convert a single project data object into clean HTML markup
 */
function generateProjectHtml(p) {
  // Title markup: click to visit link if configured, else plain text with no link wrapper
  const titleContent = p.link 
    ? `<a href="${p.link}" class="project-title-link" target="_blank" rel="noopener noreferrer">
         ${p.title}
         <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
       </a>`
    : `<span class="project-title-link" style="cursor: default;">${p.title}</span>`;

  const techTags = p.technologies
    ? p.technologies.map(t => `<span class="tag">${t}</span>`).join("")
    : "";

  return `
    <div class="project-item">
      <div class="project-header">
        ${titleContent}
        <span class="project-year">${p.year}</span>
      </div>
      <div class="project-role">${p.role}</div>
      <p class="project-desc">${p.description}</p>
      <div class="project-tags">
        ${techTags}
      </div>
    </div>
  `;
}
