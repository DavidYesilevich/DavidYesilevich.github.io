// ==========================================================================
// EDIT YOUR PORTFOLIO INFORMATION HERE
// ==========================================================================

const portfolioData = {
  // Basic Personal Info
  name: "David Yesilevich",
  initials: "DY",
  tagline: "A high school student exploring cybersecurity, engineering, finance, and civic leadership",
  location: "Brooklyn, NY",
  focus: "Cybersecurity, Engineering, Finance & Public Policy",
  status: "High School Student • Class of 2028 • Open to internship opportunities",
  
  // Optional photo. Leave as "" to show your clean monogram initials.
  // To use a photo, place your image (e.g., profile.jpg) in the directory and set this to "profile.jpg"
  avatarUrl: "",

  // About Section
  about: {
    // A short 1-2 sentence intro for the homepage
    short: "I'm a high school student with wide-ranging interests in cybersecurity, engineering, finance, and civic life, alongside a love for chess, music, and debate.",
    
    // A short, tight story for your About section. Double newlines (\n\n) create new paragraphs.
    long: "I'm driven to understand how systems work, whether that's a computer network, a piece of engineering, a financial market, or a piece of legislation. I explore cybersecurity through hands-on research, engineering through robotics and hackathons, finance through my school's investment club, and civic life through debate, journalism, and community outreach. I'm always looking for the next challenge to dig into and the next team to build something with."
  },

  // Focus Chips: short interactive tags shown under the About intro, each linking to a relevant section
  focusChips: [
    { label: "Cybersecurity", href: "#projects" },
    { label: "Engineering", href: "#projects" },
    { label: "Finance", href: "#experience" },
    { label: "Civic Leadership", href: "#experience" }
  ],

  // Contact Info
  contact: {
    intro: "I'm always excited to discuss new projects, opportunities, or ideas around cybersecurity, engineering, finance, and public policy. Feel free to reach out.",
    resumeUrl: "David_Yesilevich_Resume.pdf",
    email: "david695y@gmail.com",
    linkedin: "https://www.linkedin.com/in/david-yesilevich-230b083a8",
    linkedinName: "David Yesilevich",
    github: "https://github.com/DavidYesilevich",
    githubName: "DavidYesilevich"
  },

  // Education History
  education: [
    {
      institution: "Yeshivah of Flatbush High School",
      degree: "High School Diploma candidate • GPA: 4.04/4.33",
      dates: "Expected Graduation: June 2028",
      details: "Coursework: AP World History, AP Computer Science A, Architecture & Design, Principles of Intellectual Property, MIT OCW: Principles of Microeconomics • Principal's List, 2025-2026"
    }
  ],

  // Skills List, grouped by the categories used in the resume's "Skills & Hobbies" section
  skills: {
    "Computer Skills": ["3D Printing", "Java", "HTML", "Scratch", "Google Suite", "Canva"],
    "Languages": ["Russian (Fluent)", "Hebrew (Conversational)", "Spanish (Elementary)"],
    "Instruments": ["Piano", "Saxophone", "Guitar"]
  },

  // Interests / Hobbies
  interests: [
    {
      name: "Chess",
      desc: "Competitive player and team president; placed 9th individually and 1st in mixed doubles at the NY State Chess Championship, and 35th individually at US Chess Super Nationals."
    },
    {
      name: "Speech & Debate",
      desc: "Best Delegate award winner at International Model United Nations in Canada, with multiple honorable mentions at Yeshiva League and Yeshiva University Model UN conferences, plus top placements in TIKVAH debate competitions."
    },
    {
      name: "Engineering",
      desc: "Robotics team member working with Python and electrical engineering fundamentals; studies architecture and design coursework and co-led a 2nd place team at the Kohelet Hackathon."
    },
    {
      name: "Music",
      desc: "Piano, saxophone, and guitar player. Former National Children's Chorus singer who performed at Carnegie Hall and Lincoln Center and won a Grammy for Best Choral Performance in 2022 (with a nomination in 2024); also a soloist with the Yeshivah of Flatbush Choir."
    },
    {
      name: "Theater",
      desc: "Lead male role in Yeshivah of Flatbush's Hebrew theatrical productions, including Joseph in \"Joseph and the Technicolor Dreamcoat\" and Hans in \"Frozen.\""
    },
    {
      name: "Athletics",
      desc: "Member of the varsity soccer and track teams, earning an All-Star Award at the Long Island Soccer Cup and helping the soccer team reach the playoffs for the first time in five years."
    }
  ],

  // Projects List
  // - link: leave as "" if there is no live url or repository link
  projects: [
    {
      title: "DeFi Flash Loan Attack Research",
      year: "2026",
      description: "A final research project for an intensive cybersecurity program analyzing how flash loan-facilitated attacks exploit vulnerabilities in decentralized finance (DeFi) smart contracts, along with potential mitigation strategies.",
      role: "Researcher",
      technologies: ["Network Security", "Cryptography", "Smart Contract Analysis", "DeFi"],
      link: "",
      featured: true
    },
    {
      title: "Hockey Analytics & Standings Model",
      year: "2026",
      description: "Organized a team for the Wharton High School Data Science Competition and built a model analyzing thousands of rows of hockey data to predict standings and game outcomes.",
      role: "Team Organizer",
      technologies: ["Data Analysis", "Statistical Modeling", "Python"],
      link: "",
      featured: true
    },
    {
      title: "AI Anti-Propaganda Pitch",
      year: "2026",
      description: "Created a video pitch for an AI product that identifies propaganda and misinformation and, instead of simply censoring it, uses professional input to teach other AI systems to redirect users toward more factually accurate information.",
      role: "Creator & Presenter",
      technologies: ["AI Product Design", "Video Production", "Pitching"],
      link: "",
      featured: true
    },
    {
      title: "Competition Robot Build",
      year: "2024 - Present",
      description: "Meets weekly with the school robotics team to design and build a robot for an end-of-year competition, learning Python programming and core electrical engineering concepts along the way. Recurring Robotics Champion in 2023 and 2024.",
      role: "Team Member",
      technologies: ["Python", "Electrical Engineering", "Robotics"],
      link: "",
      featured: false
    }
  ],

  // Work Experience List (Timeline): paid/formal roles and internships only
  experience: [
    {
      organization: "NYU K12 STEM: Computer Science for Cyber Security",
      role: "Program Participant",
      dates: "July 2026 - Present",
      description: "Participate daily in an intensive cybersecurity program covering network security, ethical hacking, cryptography, and secure computing. Solve real-world challenges through hands-on labs, and conduct a research project analyzing flash loan-facilitated attacks in decentralized finance (DeFi)."
    },
    {
      organization: "William S. Levine Family Shoah Holocaust Institute",
      role: "Intern",
      dates: "June 2026 - Present",
      description: "Collaborate on a social media initiative presenting Jewish people and culture through authentic, engaging video content. Brainstorm video concepts and street-interview formats, and help plan, script, and film short-form content."
    },
    {
      organization: "Self-Employed",
      role: "Academic Tutor",
      dates: "October 2025 - Present",
      description: "Tutor a second-grade student across STEM subjects including engineering and astronomy through structured weekly sessions, customizing materials to introduce complex topics like aerodynamics and biology in an age-appropriate format."
    },
    {
      organization: "Brooklyn Voter Registration Initiative",
      role: "Volunteer",
      dates: "September 2025 - November 2025",
      description: "Executed voter registration verification and education initiatives for prospective voters, streamlining the registration process by providing accurate procedural guidance and resources."
    },
    {
      organization: "Summer Youth Employment Program",
      role: "Participant",
      dates: "Summer 2025, Summer 2026",
      description: "Completed weekly professional development training in resume building, interviewing, and workplace communication."
    }
  ],

  // Clubs & Activities, grouped into smaller categories: school clubs, teams, and extracurriculars
  clubs: {
    "Leadership Roles": [
      {
        organization: "Yeshivah of Flatbush Investment and Finance Club",
        role: "President",
        dates: "September 2024 - Present",
        description: "Lead weekly club meetings and compete in international stock challenges. Teach members fundamental and technical analysis, financial markets, and investment strategies."
      },
      {
        organization: "Yeshivah of Flatbush Model Congress Team",
        role: "Captain",
        dates: "September 2024 - Present",
        description: "Lead and plan weekly practices, compete in Model Congress competitions throughout the school year, and organize an intraschool end-of-year competition. Won 1st, 3rd, and 5th place awards at multiple events, including recurring 3rd and 5th place finishes in the Citron Model Congress League."
      },
      {
        organization: "Yeshivah of Flatbush Chess Team",
        role: "President",
        dates: "September 2024 - Present",
        description: "Lead and plan weekly practices, play on the first seated board, and compete against other schools in the Yeshivah League."
      }
    ],
    "Teams & Competitions": [
      {
        organization: "Yeshivah of Flatbush Model United Nations Team",
        role: "Starting Member",
        dates: "September 2024 - Present",
        description: "Participate in weekly practices and compete in Model UN conferences, earning awards at international, national, and local levels."
      },
      {
        organization: "Yeshivah of Flatbush Robotics Team",
        role: "Team Member",
        dates: "September 2024 - Present",
        description: "Meet weekly to design and build a robot for an end-of-year competition, learning Python programming and core electrical engineering concepts. Recurring Robotics Champion in 2023 and 2024."
      },
      {
        organization: "Yeshivah of Flatbush Soccer Team",
        role: "Team Member",
        dates: "September 2024 - Present",
        description: "Compete in matches against other schools, helping the team reach the playoffs for the first time in five years and earning an All-Star Award at the Long Island Soccer Cup."
      },
      {
        organization: "Yeshivah of Flatbush Track Team",
        role: "Team Member",
        dates: "September 2024 - Present",
        description: "Participate in weekly practices and compete in track races throughout the school year."
      }
    ],
    "Creative & Community": [
      {
        organization: "The Phoenix (School Newspaper)",
        role: "Contributing Writer",
        dates: "September 2025 - Present",
        description: "Write articles for the school newspaper on topics including business, current news, and the economy."
      },
      {
        organization: "TIKVAH",
        role: "Program Member",
        dates: "September 2023 - Present",
        description: "Participate in weekly discussions and debates on philosophical, governmental, and religious works, placing 2nd, 3rd, and 4th in multiple competitions. Attended the Millstone Scholars program and currently attend the Menachem Begin Scholars program. Spoke at the Jewish Leadership Conference before an audience of 1,200+ government officials, journalists, and community leaders."
      },
      {
        organization: "Yeshivah of Flatbush Choir",
        role: "Singer",
        dates: "September 2024 - Present",
        description: "Participate in weekly rehearsals and perform at events as a selected lead solo singer, including performances at the District Attorney's office and JFK Airport for holiday events."
      },
      {
        organization: "Yeshivah of Flatbush Hebrew Play",
        role: "Lead Male Role",
        dates: "September 2024 - Present",
        description: "Participate in daily rehearsals during the fall season and perform full-length plays in Hebrew, including the lead role of Joseph in \"Joseph and the Technicolor Dreamcoat\" and the lead male role of Hans in \"Frozen.\""
      },
      {
        organization: "National Children's Chorus",
        role: "Singer",
        dates: "September 2015 - August 2022",
        description: "Attended weekly practices and performed internationally, including at Carnegie Hall and Lincoln Center. Won a Grammy for Best Choral Performance in 2022 and was nominated for Best Traditional Pop Vocal Album in 2024."
      }
    ]
  },

  // Awards & Honors, combined and summarized from the resume's Awards and Achievements section
  awards: [
    "College Board National Recognition Program School Recognition Award, June 2026",
    "Yeshivah of Flatbush Principal's List, 2025-2026",
    "Best Delegate, International Model United Nations (Canada), March 2025",
    "Multiple Honorable Mentions, Yeshiva League & Yeshiva University Model United Nations, 2025-2026",
    "1st Place in Committee, Yeshiva League Model Congress, plus recurring 3rd and 5th place finishes, Citron Model Congress League, 2024-2026",
    "2nd Place Team, Kohelet Hackathon, March 2026",
    "NY State Chess Championship: 9th Individual, 1st Mixed Doubles (2024) • US Chess Super Nationals: 35th Individual (2017)",
    "Recurring Robotics Champion, 2023 and 2024",
    "All-Star Award, Long Island Soccer Cup, April 2026",
    "Grammy Award, Best Choral Performance (National Children's Chorus), 2022; Grammy nomination, Best Traditional Pop Vocal Album, 2024"
  ]
};

// ==========================================================================
// CORE PORTFOLIO ENGINE (DO NOT EDIT UNLESS YOU WANT TO CHANGE ENGINE LOGIC)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial State Load (Theme & Accent Color)
  initThemeAndAccent();

  // 2. Global Elements Rendering (Header Monogram, Footer Brand)
  renderGlobalElements();

  // 3. Render Page Sections
  renderHero();
  renderAbout();
  renderProjects();
  renderExperience();
  renderClubs();
  renderSkills();
  renderContact();

  // 4. Register Interactive Event Listeners
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
  
  // Highlight active swatch in picker dropdown
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
 * Renders name/initials in the header, footer, and monogram.
 */
function renderGlobalElements() {
  document.querySelectorAll('[data-field="name"]').forEach(el => {
    el.textContent = portfolioData.name;
  });
  
  document.querySelectorAll('[data-field="initials"]').forEach(el => {
    el.textContent = portfolioData.initials;
  });

  // Render header monogram circle image or initials
  const headerMonogramWrapper = document.getElementById("header-monogram-wrapper");
  if (headerMonogramWrapper) {
    if (portfolioData.avatarUrl) {
      headerMonogramWrapper.innerHTML = `<img src="${portfolioData.avatarUrl}" alt="${portfolioData.name}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
    } else {
      headerMonogramWrapper.innerHTML = portfolioData.initials;
    }
  }

  // Set current copyright year
  const footerYear = document.getElementById("footer-year");
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
}

/**
 * Populates Hero Section
 */
function renderHero() {
  const avatarContainer = document.getElementById("hero-avatar-container");
  if (avatarContainer) {
    if (portfolioData.avatarUrl) {
      avatarContainer.innerHTML = `<img src="${portfolioData.avatarUrl}" alt="${portfolioData.name}" class="hero-avatar-circle-img">`;
    } else {
      avatarContainer.innerHTML = `<div class="hero-monogram-circle" data-field="initials">${portfolioData.initials}</div>`;
    }
  }

  typeTagline(portfolioData.tagline);
  setTextContentById("hero-intro", portfolioData.about.short);
  setTextContentById("hero-location", portfolioData.location);
  setTextContentById("hero-focus", portfolioData.focus);
  setTextContentById("hero-status", portfolioData.status);
}

/**
 * Types the hero tagline out one character at a time for a bit of motion on page load.
 * Respects prefers-reduced-motion by rendering the full text instantly.
 */
function typeTagline(text) {
  const el = document.getElementById("hero-tagline");
  if (!el || !text) return;

  const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    el.textContent = text;
    return;
  }

  el.textContent = "";
  el.classList.add("typing-cursor");
  let i = 0;
  const speed = 28;
  (function typeNext() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(typeNext, speed);
    } else {
      el.classList.remove("typing-cursor");
    }
  })();
}

/**
 * Populates About, Education & Interests
 */
function renderAbout() {
  const aboutLongContainer = document.getElementById("about-long");
  if (aboutLongContainer && portfolioData.about.long) {
    const paragraphs = portfolioData.about.long.split("\n\n");
    aboutLongContainer.innerHTML = paragraphs
      .map(pText => `<p>${pText.replace(/\n/g, "<br>")}</p>`)
      .join("");
  }

  const focusChipsContainer = document.getElementById("focus-chips-container");
  if (focusChipsContainer && portfolioData.focusChips) {
    focusChipsContainer.innerHTML = portfolioData.focusChips
      .map(chip => `<a href="${chip.href}" class="focus-chip">${chip.label}</a>`)
      .join("");
  }

  const educationContainer = document.getElementById("education-container");
  if (educationContainer && portfolioData.education) {
    educationContainer.innerHTML = portfolioData.education
      .map(edu => `
        <div class="edu-row">
          <h4 class="edu-school">${edu.institution}</h4>
          <div class="edu-degree">${edu.degree}</div>
          <div class="edu-details">${edu.dates} • ${edu.details}</div>
        </div>
      `)
      .join("");
  }

  const interestsContainer = document.getElementById("interests-container");
  if (interestsContainer && portfolioData.interests) {
    interestsContainer.innerHTML = portfolioData.interests
      .map(interest => `
        <div class="interest-row">
          <span class="interest-name">${interest.name}</span>
          <span class="interest-desc">${interest.desc}</span>
        </div>
      `)
      .join("");
  }

  const awardsContainer = document.getElementById("awards-container");
  if (awardsContainer && portfolioData.awards) {
    awardsContainer.innerHTML = portfolioData.awards
      .map(award => `
        <div class="award-row">
          <span class="award-icon">
            <svg viewBox="0 0 24 24"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"/></svg>
          </span>
          <span class="award-text">${award}</span>
        </div>
      `)
      .join("");
  }
}

/**
 * Populates Projects list as an editorial list with accordion details expansion
 */
function renderProjects() {
  const container = document.getElementById("projects-table-container");
  if (!container || !portfolioData.projects) return;

  if (portfolioData.projects.length === 0) {
    container.innerHTML = "<p>No projects configured.</p>";
    return;
  }

  container.innerHTML = portfolioData.projects.map((p, idx) => {
    const linkBtn = p.link 
      ? `<a href="${p.link}" class="expanded-btn" target="_blank" rel="noopener noreferrer">
           Visit Source Code
           <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
         </a>` 
      : `<span class="expanded-btn" style="opacity: 0.5; cursor: not-allowed; border-color: transparent;">No Link Available</span>`;

    const techPills = p.technologies 
      ? p.technologies.map(t => `<span class="tag">${t}</span>`).join("") 
      : "";

    return `
      <div class="project-row" data-index="${idx}" tabindex="0" role="button" aria-expanded="false" aria-label="Expand project ${p.title}">
        <div class="proj-year">${p.year}</div>
        <div class="proj-main">
          <span class="proj-title">${p.title}</span>
          <span class="proj-role">${p.role}</span>
        </div>
        <div class="proj-techs">
          ${techPills}
        </div>
        <div class="proj-arrow">
          <!-- Chevron Arrow -->
          <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5"/></svg>
        </div>
      </div>
      <div class="proj-expanded" id="proj-expanded-${idx}">
        <div class="proj-desc-expanded">${p.description}</div>
        ${linkBtn}
      </div>
    `;
  }).join("");

  // Add click listeners to handle interactive row expansion
  const rows = container.querySelectorAll(".project-row");
  rows.forEach(row => {
    row.addEventListener("click", () => {
      const idx = row.dataset.index;
      const isExpanded = row.classList.contains("active-row");

      // Reset all other rows for smooth accordion behaviour
      rows.forEach(r => {
        r.classList.remove("active-row");
        r.setAttribute("aria-expanded", "false");
        const arrow = r.querySelector(".proj-arrow svg");
        if (arrow) arrow.style.transform = "rotate(0deg)";
      });

      if (!isExpanded) {
        row.classList.add("active-row");
        row.setAttribute("aria-expanded", "true");
        const arrow = row.querySelector(".proj-arrow svg");
        if (arrow) arrow.style.transform = "rotate(180deg)";
      }
    });

    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        row.click();
      }
    });
  });
}

/**
 * Populates Timeline Experience rows
 */
function renderExperience() {
  const container = document.getElementById("experience-container");
  if (!container || !portfolioData.experience) return;

  if (portfolioData.experience.length === 0) {
    container.innerHTML = "<p>No experiences configured.</p>";
    return;
  }

  container.innerHTML = portfolioData.experience.map(exp => `
    <div class="timeline-row">
      <div class="time-dates">${exp.dates}</div>
      <div class="time-content">
        <h3 class="time-org">${exp.organization}</h3>
        <div class="time-role">${exp.role}</div>
        <p class="time-desc">${exp.description.replace(/\n/g, "<br>")}</p>
      </div>
    </div>
  `).join("");
}

/**
 * Populates Clubs & Activities as an interactive accordion, grouped into categories; click a row to expand its description.
 */
function renderClubs() {
  const container = document.getElementById("clubs-container");
  if (!container || !portfolioData.clubs) return;

  const categories = Object.entries(portfolioData.clubs);
  if (categories.length === 0) {
    container.innerHTML = "<p>No clubs configured.</p>";
    return;
  }

  let globalIdx = 0;
  container.innerHTML = categories.map(([categoryName, items]) => {
    const rowsHtml = items.map(c => {
      const idx = globalIdx++;
      return `
        <div class="club-row" data-index="${idx}" tabindex="0" role="button" aria-expanded="false" aria-label="Expand ${c.organization}">
          <div class="club-main">
            <span class="club-org">${c.organization}</span>
            <span class="club-role">${c.role}</span>
          </div>
          <div class="club-dates">${c.dates}</div>
          <div class="club-arrow">
            <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5"/></svg>
          </div>
        </div>
        <div class="club-expanded" id="club-expanded-${idx}">
          <div class="proj-desc-expanded">${c.description}</div>
        </div>
      `;
    }).join("");

    return `
      <div class="clubs-group">
        <h4 class="clubs-subheading">${categoryName}</h4>
        <div class="clubs-group-rows">${rowsHtml}</div>
      </div>
    `;
  }).join("");

  const rows = container.querySelectorAll(".club-row");
  rows.forEach(row => {
    row.addEventListener("click", () => {
      const isExpanded = row.classList.contains("active-row");

      rows.forEach(r => {
        r.classList.remove("active-row");
        r.setAttribute("aria-expanded", "false");
        const arrow = r.querySelector(".club-arrow svg");
        if (arrow) arrow.style.transform = "rotate(0deg)";
      });

      if (!isExpanded) {
        row.classList.add("active-row");
        row.setAttribute("aria-expanded", "true");
        const arrow = row.querySelector(".club-arrow svg");
        if (arrow) arrow.style.transform = "rotate(180deg)";
      }
    });

    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        row.click();
      }
    });
  });
}

/**
 * Populates Skills Section, automatically distributing skills into 3 columns
 */
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container || !portfolioData.skills) return;

  // portfolioData.skills is an object keyed by real resume category names,
  // e.g. { "Computer Skills": [...], "Languages": [...] }
  const categories = Object.entries(portfolioData.skills).map(([name, items]) => ({ name, items }));

  container.innerHTML = categories.map(cat => `
    <div class="skills-col">
      <h3>${cat.name}</h3>
      <ul class="skills-list">
        ${cat.items.map(item => `
          <li class="skill-row">
            <span>${item}</span>
            <span class="skill-dot"></span>
          </li>
        `).join("")}
      </ul>
    </div>
  `).join("");
}

/**
 * Populates Contact Section
 */
function renderContact() {
  setTextContentById("contact-intro", portfolioData.contact.intro);

  const resumeRow = document.getElementById("contact-resume-row");
  if (resumeRow && portfolioData.contact.resumeUrl) {
    resumeRow.setAttribute("href", portfolioData.contact.resumeUrl);
    resumeRow.setAttribute("download", "");
    const val = resumeRow.querySelector(".contact-value");
    if (val) val.textContent = "Download PDF";
  }

  const emailRow = document.getElementById("contact-email-row");
  if (emailRow) {
    emailRow.setAttribute("href", `mailto:${portfolioData.contact.email}`);
    const val = emailRow.querySelector(".contact-value");
    if (val) val.textContent = portfolioData.contact.email;

    // Click-to-copy interaction: copies the email address and shows a brief "Copied!" confirmation
    emailRow.addEventListener("click", (e) => {
      if (navigator.clipboard) {
        e.preventDefault();
        navigator.clipboard.writeText(portfolioData.contact.email).then(() => {
          if (val) {
            const original = portfolioData.contact.email;
            val.textContent = "Copied!";
            setTimeout(() => { val.textContent = original; }, 1500);
          }
        }).catch(() => {
          window.location.href = `mailto:${portfolioData.contact.email}`;
        });
      }
    });
  }

  const linkedinRow = document.getElementById("contact-linkedin-row");
  if (linkedinRow) {
    linkedinRow.setAttribute("href", portfolioData.contact.linkedin);
    const val = linkedinRow.querySelector(".contact-value");
    if (val) {
      if (portfolioData.contact.linkedinName) {
        val.textContent = portfolioData.contact.linkedinName;
      } else {
        const parts = portfolioData.contact.linkedin.split("/").filter(Boolean);
        val.textContent = parts[parts.length - 1] || "LinkedIn";
      }
    }
  }

  const githubRow = document.getElementById("contact-github-row");
  if (githubRow) {
    githubRow.setAttribute("href", portfolioData.contact.github);
    const val = githubRow.querySelector(".contact-value");
    if (val) {
      if (portfolioData.contact.githubName) {
        val.textContent = portfolioData.contact.githubName;
      } else {
        const parts = portfolioData.contact.github.split("/").filter(Boolean);
        val.textContent = parts[parts.length - 1] || "GitHub";
      }
    }
  }
}

/**
 * Registers interactive features:
 * - Scroll Indicator
 * - Scroll Spy Active Highlighting
 * - Color Swatches Toggle Dropdown
 * - Mobile navigation burger trigger
 * - Smooth scrolling menu triggers
 */
function registerInteractiveListeners() {
  const scrollProgress = document.getElementById("scroll-progress");
  const sections = document.querySelectorAll("section.scroll-section, section#home");
  const navLinks = document.querySelectorAll(".nav-link");

  // Scroll Indicators & Scroll Spy
  window.addEventListener("scroll", () => {
    // 1. Progress indicator width
    const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollMax > 0 && scrollProgress) {
      const pct = (window.scrollY / scrollMax) * 100;
      scrollProgress.style.width = `${pct}%`;
    }

    // 2. Active section highlights
    let currentId = "home";
    sections.forEach(sec => {
      const top = sec.offsetTop - 150; // offset slightly before element reaches view
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = sec.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href === `#${currentId}`) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      }
    });
  });

  // About Section Tabs (Education / Interests / Awards)
  const aboutTabs = document.querySelectorAll(".about-tab");
  const aboutPanels = document.querySelectorAll(".about-tab-panel");

  aboutTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      aboutTabs.forEach(t => {
        t.classList.toggle("active", t === tab);
        t.setAttribute("aria-selected", t === tab ? "true" : "false");
      });

      aboutPanels.forEach(panel => {
        const isMatch = panel.dataset.panel === target;
        panel.classList.toggle("active", isMatch);
        if (isMatch) {
          panel.removeAttribute("hidden");
        } else {
          panel.setAttribute("hidden", "");
        }
      });
    });
  });

  // Mobile navigation trigger
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const navLinksList = document.querySelector(".nav-links");

  if (mobileMenuToggle && navLinksList) {
    mobileMenuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinksList.classList.toggle("mobile-active");
      const isExpanded = navLinksList.classList.contains("mobile-active");
      mobileMenuToggle.setAttribute("aria-expanded", isExpanded);
    });

    // Close mobile menu if user clicks an anchor link
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navLinksList.classList.remove("mobile-active");
        mobileMenuToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu on clicks outside
    document.addEventListener("click", (e) => {
      if (!navLinksList.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        navLinksList.classList.remove("mobile-active");
        mobileMenuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Accent Color Palette Dropdown Toggle
  const paletteBtn = document.getElementById("palette-dropdown-btn");
  const swatchesMenu = document.getElementById("accent-swatches-menu");
  
  if (paletteBtn && swatchesMenu) {
    paletteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      swatchesMenu.classList.toggle("show");
      const isShow = swatchesMenu.classList.contains("show");
      paletteBtn.setAttribute("aria-expanded", isShow);
    });

    // Close dropdown on clicks outside
    document.addEventListener("click", (e) => {
      if (!swatchesMenu.contains(e.target) && !paletteBtn.contains(e.target)) {
        swatchesMenu.classList.remove("show");
        paletteBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Accent Switch Click Listeners
  const swatches = document.querySelectorAll(".swatch");
  swatches.forEach(swatch => {
    swatch.addEventListener("click", () => {
      const accent = swatch.dataset.accent;
      if (accent) {
        document.documentElement.setAttribute("data-accent", accent);
        localStorage.setItem("portfolio-accent", accent);

        swatches.forEach(s => s.classList.remove("active"));
        swatch.classList.add("active");
        
        // Hide dropdown menu upon selection
        if (swatchesMenu) {
          swatchesMenu.classList.remove("show");
          if (paletteBtn) paletteBtn.setAttribute("aria-expanded", "false");
        }
      }
    });
  });

  // Dark/Light Theme Button Click Listener
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("portfolio-theme", newTheme);
    });
  }
}

// --- HELPER UTILITY FUNCTIONS ---

/**
 * Safely sets the text content of an element by ID
 */
function setTextContentById(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}
