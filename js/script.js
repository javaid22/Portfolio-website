/**
 * JAVAID HABIB DEV - PORTFOLIO & DIGITAL CV JAVASCRIPT
 * Vanilla JavaScript (ES6+), Zero Heavy Dependencies
 * Features:
 *   1. Centralized Configuration Store
 *   2. ScrollSpy & Sticky Header Transition
 *   3. IntersectionObserver Reveal Animations
 *   4. Mobile Menu Auto-Close
 *   5. Interactive Contact Form with Validation & Mailto Generator
 *   6. Back-to-top Smooth Scrolling
 */

// ==========================================================================
// 1. CENTRALIZED CONFIGURATION (EDIT YOUR DETAILS HERE)
// ==========================================================================
const PORTFOLIO_CONFIG = {
  // Personal & Brand Identity
  brandName: "Javaid Habib Dev",
  fullName: "Javaid Habib",
  title: "WordPress Developer | PHP Developer | Full-Stack Web Developer",
  summary: "I build modern, responsive, and reliable digital experiences that help businesses establish their online presence, improve workflows, and grow with confidence.",
  
  // Experience Setting:
  // If you wish to set a verified number of years (e.g., "5+" or "6"), set experienceYears: "5+".
  // If left null or undefined, the portfolio displays "Experienced Developer" or "Multiple Years".
  experienceYears: "Multiple Years", 
  
  // Contact & Social Links (Update these to your real URLs)
  email: "m.javaidlearn@gmail.com",
  location: "Available for Remote Opportunities",
  availability: "Open to Relevant Opportunities",
  githubUrl: "https://github.com", // update to your GitHub profile
  linkedinUrl: "https://linkedin.com", // update to your LinkedIn profile
  cvDownloadPath: "#contact", // or "assets/docs/javaid-habib-cv.pdf" when uploaded
  
  // Live Projects with In-Depth Details for Modal Popup
  projects: [
    {
      id: "parts-for-volvos",
      title: "PartsForVolvos Online",
      category: "E-commerce Development",
      clientType: "Automotive Parts & Accessories Retailer",
      role: "WordPress & WooCommerce Developer",
      image: "assets/images/project-wordpress.webp",
      url: "https://www.partsforvolvosonline.com/",
      isConcept: false,
      badgeText: "Live Commercial Store",
      summary: "An expansive, high-volume e-commerce storefront engineered to handle intricate vehicle compatibility trees, thousands of automotive component SKUs, and streamlined online parts purchasing.",
      challenges: "Automotive replacement parts require precise vehicle year, model, and engine compatibility filtering. The primary challenge was structuring complex catalog taxonomies and search indexing without sacrificing fast page load times and mobile usability.",
      solutions: [
        "Implemented structured faceted catalog filtering by vehicle make, model series, and product category.",
        "Engineered optimized WooCommerce templates and customized checkout flows reducing cart drop-off.",
        "Integrated dynamic stock checks, technical specification tables, and related parts cross-selling.",
        "Applied database index tuning and responsive caching strategies for swift catalog exploration."
      ],
      keyFeatures: [
        "Vehicle Model Compatibility Selector",
        "High-performance Category Filtering",
        "Structured Automotive SKU Catalog",
        "Responsive Mobile-First Shopping Cart",
        "Secure Multi-currency Payment Gateway Integration"
      ],
      technologies: ["WordPress", "WooCommerce", "PHP 8", "MySQL", "JavaScript", "Custom CSS3", "REST APIs", "Responsive UX"]
    },
    {
      id: "wastemove",
      title: "WasteMove Product Experience",
      category: "WooCommerce",
      clientType: "Commercial Waste Management & Logistics",
      role: "WooCommerce & UX Developer",
      image: "assets/images/project-ecommerce.webp",
      url: "https://wastemove.uk/product/360l-bin-collection/",
      isConcept: false,
      badgeText: "Specialist Service Portal",
      summary: "A focused, conversion-optimized WooCommerce product experience designed for commercial waste collection plans, tiered wheelie bin services, and transparent recurring bookings.",
      challenges: "Commercial service products differ from standard retail items; they require clear communication of collection frequencies, compliance guidelines, container volumes, and regional service availability.",
      solutions: [
        "Designed and implemented custom WooCommerce product configuration fields with instant pricing recalculation.",
        "Created an intuitive single-product layout highlighting bin dimensions, capacity benefits, and collection schedules.",
        "Streamlined the checkout journey into a frictionless, transparent step-by-step booking funnel.",
        "Ensured rigorous responsive rendering and fast mobile interaction for on-the-go business clients."
      ],
      keyFeatures: [
        "Custom Service Option Selectors",
        "Dynamic Rate Calculation Engine",
        "Detailed Specification & Capacity Guide",
        "Streamlined Direct-to-Checkout Funnel",
        "Mobile-Optimized Commercial Booking UI"
      ],
      technologies: ["WooCommerce", "WordPress", "Custom PHP Hooks", "JavaScript ES6+", "Bootstrap 5", "UI/UX Optimization"]
    },
    {
      id: "mukth-ayurveda",
      title: "Mukth Ayurveda",
      category: "E-commerce Development",
      clientType: "Luxury Organic Herbal & Wellness Brand",
      role: "Front-End & E-commerce Developer",
      image: "assets/images/project-ayurveda.webp",
      url: "https://mukthaayurveda.com/shop/",
      isConcept: false,
      badgeText: "Wellness Storefront",
      summary: "A refined lifestyle e-commerce storefront centered on holistic Ayurvedic wellness remedies, botanical aesthetics, luxury editorial typography, and an effortless shopping journey.",
      challenges: "Communicating ancient holistic herbal traditions within a crisp, contemporary online store while ensuring lightning-fast product image loading and intuitive touch navigation on handheld devices.",
      solutions: [
        "Crafted a bespoke, tranquil dark aesthetic with warm botanical accents and generous breathing space.",
        "Built responsive grid layouts with quick-view drawers and interactive product ingredient breakdown tabs.",
        "Integrated custom cart drawer slides and micro-interactions for an elevated luxury retail feel.",
        "Optimized image delivery, web typography loading, and accessibility across all screen viewports."
      ],
      keyFeatures: [
        "Aesthetic Botanical Product Showcase",
        "Interactive Herbal Ingredient Breakdowns",
        "Smooth Slide-Out Shopping Bag",
        "Tailored Filtering by Wellness Benefit",
        "Accessible, Modern Typography Hierarchy"
      ],
      technologies: ["E-commerce", "WordPress / WooCommerce", "JavaScript ES6+", "CSS3 Custom Properties", "Responsive Design"]
    },
    {
      id: "business-dashboard",
      title: "Business Management Dashboard",
      category: "PHP / Laravel",
      clientType: "Enterprise Operations & SaaS Concept",
      role: "Full-Stack Laravel Developer",
      image: "assets/images/project-laravel.webp",
      url: "#contact",
      isConcept: true,
      badgeText: "Architectural Concept",
      summary: "A modular, data-dense enterprise dashboard application demonstrating complex business workflows, multi-tenant role permissions, KPI performance visualizations, and REST API functionality.",
      challenges: "Synthesizing disparate operational data streams—including revenues, client accounts, task pipelines, and billing metrics—into an intuitive, uncluttered administrative interface.",
      solutions: [
        "Architected clean MVC controllers, Eloquent ORM relationships, and RESTful API endpoints in Laravel.",
        "Integrated interactive chart visualizers displaying revenue velocity, user engagement, and project statuses.",
        "Implemented role-based permission tiers (Admin, Project Manager, Client Viewer) with secure token validation.",
        "Built responsive dark-mode data tables featuring sorting, search indexing, and CSV export capabilities."
      ],
      keyFeatures: [
        "Real-Time KPI Visualizations & Graphs",
        "Role-Based Access Control (RBAC)",
        "Searchable & Paginated Data Tables",
        "RESTful API Architecture & Endpoints",
        "Dark Navy Enterprise UI System"
      ],
      technologies: ["Laravel", "PHP 8", "MySQL", "REST API", "Bootstrap 5", "Chart.js", "JavaScript"]
    }
  ]
};

// Freeze config to avoid accidental mutations
Object.freeze(PORTFOLIO_CONFIG);

document.addEventListener("DOMContentLoaded", () => {
  initDynamicConfig();
  initHeaderScroll();
  initScrollSpy();
  initMobileNav();
  initScrollObserver();
  initContactForm();
  initBackToTop();
  initProjectModal();
});

// ==========================================================================
// 2. DYNAMIC CONFIGURATION INJECTION
// ==========================================================================
function initDynamicConfig() {
  // Experience Metric Injection
  const expElements = document.querySelectorAll(".dynamic-experience-val");
  const expValue = PORTFOLIO_CONFIG.experienceYears || "Experienced Developer";
  expElements.forEach(el => {
    el.textContent = expValue;
  });

  // Dynamic Email Links
  const emailLinks = document.querySelectorAll(".dynamic-email-link");
  emailLinks.forEach(el => {
    el.href = `mailto:${PORTFOLIO_CONFIG.email}`;
    if (el.dataset.showText === "true") {
      el.textContent = PORTFOLIO_CONFIG.email;
    }
  });

  // Social Links
  const githubLinks = document.querySelectorAll(".dynamic-github-link");
  githubLinks.forEach(el => {
    el.href = PORTFOLIO_CONFIG.githubUrl;
  });

  const linkedinLinks = document.querySelectorAll(".dynamic-linkedin-link");
  linkedinLinks.forEach(el => {
    el.href = PORTFOLIO_CONFIG.linkedinUrl;
  });

  // CV Download Button
  const cvButtons = document.querySelectorAll(".dynamic-cv-btn");
  cvButtons.forEach(btn => {
    btn.href = PORTFOLIO_CONFIG.cvDownloadPath;
  });
}

// ==========================================================================
// 3. HEADER SCROLL & SHADOW
// ==========================================================================
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

// ==========================================================================
// 4. SCROLLSPY (ACTIVE NAVIGATION HIGHLIGHTING)
// ==========================================================================
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".site-header .nav-link-custom");
  if (!sections.length || !navLinks.length) return;

  const onScroll = () => {
    const scrollPos = window.scrollY + 120;
    
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
}

// ==========================================================================
// 5. MOBILE NAVIGATION AUTO-CLOSE
// ==========================================================================
function initMobileNav() {
  const navbarCollapse = document.getElementById("navbarNav");
  const navLinks = document.querySelectorAll(".site-header .nav-link-custom, .site-header .btn-amber-primary");
  if (!navbarCollapse) return;

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Check if Bootstrap collapse is shown
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        } else {
          navbarCollapse.classList.remove("show");
        }
      }
    });
  });
}

// ==========================================================================
// 6. INTERSECTION OBSERVER REVEAL ANIMATIONS
// ==========================================================================
function initScrollObserver() {
  const revealElements = document.querySelectorAll(".reveal-fade-up");
  if (!revealElements.length) return;

  if (!("IntersectionObserver" in window)) {
    // Fallback if browser doesn't support IntersectionObserver
    revealElements.forEach(el => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: "0px 0px -60px 0px",
    threshold: 0.12
  });

  revealElements.forEach((el, idx) => {
    // Add subtle staggered delay for grid elements
    if (el.classList.contains("service-card") || el.classList.contains("project-card") || el.classList.contains("tech-badge-card")) {
      const delay = (idx % 4) * 0.1;
      el.style.transitionDelay = `${delay}s`;
    }
    observer.observe(el);
  });
}

// ==========================================================================
// 7. CONTACT FORM LOGIC (CLIENT-SIDE VALIDATION & MAILTO PREPARATION)
// ==========================================================================
function initContactForm() {
  const form = document.getElementById("portfolioContactForm");
  const feedbackBox = document.getElementById("formFeedbackBox");
  if (!form) return;

  // Preselect service when "Discuss This Service" is clicked
  const serviceDiscussLinks = document.querySelectorAll(".discuss-service-link");
  serviceDiscussLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const serviceName = link.getAttribute("data-service");
      const serviceSelect = document.getElementById("contactProjectType");
      if (serviceSelect && serviceName) {
        serviceSelect.value = serviceName;
      }
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("contactName");
    const emailInput = document.getElementById("contactEmail");
    const subjectInput = document.getElementById("contactSubject");
    const projectTypeInput = document.getElementById("contactProjectType");
    const messageInput = document.getElementById("contactMessage");

    // Basic validity check
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim() || `Project Inquiry from ${name}`;
    const projectType = projectTypeInput.value || "General Inquiry";
    const message = messageInput.value.trim();

    // Prepare mailto body
    const fullBody = `Hello Javaid,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nMessage:\n${message}\n\n---\nSent via Javaid Habib Dev Portfolio`;
    const mailtoUrl = `mailto:${PORTFOLIO_CONFIG.email}?subject=${encodeURIComponent(subject + " - " + projectType)}&body=${encodeURIComponent(fullBody)}`;

    // Show transparent static confirmation message (no false claim of background server transmission)
    if (feedbackBox) {
      feedbackBox.className = "form-feedback-box active form-feedback-success";
      feedbackBox.innerHTML = `
        <div class="d-flex align-items-start gap-2">
          <i class="bi bi-check-circle-fill text-success fs-5"></i>
          <div>
            <strong>Thank you, ${name}!</strong>
            <p class="mb-2 mt-1">Your message inquiry has been formatted. Since this is a static showcase website, click the button below to launch your default mail app, or send an email directly to <a href="mailto:${PORTFOLIO_CONFIG.email}" class="text-amber fw-semibold">${PORTFOLIO_CONFIG.email}</a>.</p>
            <div class="d-flex flex-wrap gap-2 mt-2">
              <a href="${mailtoUrl}" class="btn btn-sm btn-amber-primary">
                <i class="bi bi-envelope-arrow-up"></i> Open in Email Client
              </a>
              <button type="button" id="copyMessageBtn" class="btn btn-sm btn-navy-outline">
                <i class="bi bi-clipboard"></i> Copy Message Text
              </button>
            </div>
          </div>
        </div>
      `;

      // Copy message button
      const copyBtn = document.getElementById("copyMessageBtn");
      if (copyBtn) {
        copyBtn.addEventListener("click", () => {
          navigator.clipboard.writeText(fullBody).then(() => {
            copyBtn.innerHTML = '<i class="bi bi-clipboard-check text-success"></i> Copied to Clipboard!';
            setTimeout(() => {
              copyBtn.innerHTML = '<i class="bi bi-clipboard"></i> Copy Message Text';
            }, 3000);
          }).catch(() => {
            alert("Could not automatically copy. Please select and copy text manually.");
          });
        });
      }

      feedbackBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    // Optionally attempt opening mail client in a polite non-blocking manner
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);

    form.reset();
  });
}

// ==========================================================================
// 8. BACK TO TOP SCROLL
// ==========================================================================
function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.style.opacity = "1";
      backToTopBtn.style.pointerEvents = "auto";
    } else {
      backToTopBtn.style.opacity = "0";
      backToTopBtn.style.pointerEvents = "none";
    }
  }, { passive: true });

  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// ==========================================================================
// 9. PROJECT DETAILS POPUP MODAL
// ==========================================================================
function initProjectModal() {
  const modalEl = document.getElementById("projectDetailModal");
  if (!modalEl) return;

  const modalInstance = new bootstrap.Modal(modalEl);

  // Modal DOM elements
  const modalCategory = document.getElementById("modalProjectCategory");
  const modalTitle = document.getElementById("modalProjectTitle");
  const modalImg = document.getElementById("modalProjectImage");
  const modalClient = document.getElementById("modalProjectClient");
  const modalRole = document.getElementById("modalProjectRole");
  const modalStatus = document.getElementById("modalProjectStatus");
  const modalOverview = document.getElementById("modalProjectOverview");
  const modalChallenge = document.getElementById("modalProjectChallenge");
  const modalSolutions = document.getElementById("modalProjectSolutions");
  const modalFeatures = document.getElementById("modalProjectFeatures");
  const modalTags = document.getElementById("modalProjectTags");
  const modalActionLink = document.getElementById("modalProjectActionLink");

  // Attach click listeners to all project detail trigger elements
  const triggers = document.querySelectorAll(".btn-project-details, .project-thumb-overlay, .project-title-clickable");

  triggers.forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = trigger.dataset.projectId || trigger.closest("[data-project-id]")?.dataset.projectId;
      if (!projectId) return;

      const project = PORTFOLIO_CONFIG.projects.find(p => p.id === projectId);
      if (!project) return;

      // Populate Modal Content
      if (modalCategory) modalCategory.textContent = project.category;
      if (modalTitle) modalTitle.textContent = project.title;
      if (modalImg) {
        modalImg.src = project.image;
        modalImg.alt = `${project.title} Interface Preview`;
      }
      if (modalClient) modalClient.textContent = project.clientType || "Commercial Web Project";
      if (modalRole) modalRole.textContent = project.role || "Lead Web Developer";
      if (modalStatus) {
        modalStatus.textContent = project.badgeText || (project.isConcept ? "Concept Project" : "Live Commercial");
      }
      if (modalOverview) modalOverview.textContent = project.summary;
      if (modalChallenge) modalChallenge.textContent = project.challenges;

      // Populate Solutions List
      if (modalSolutions) {
        modalSolutions.innerHTML = project.solutions.map(sol => `
          <li>
            <i class="bi bi-check-circle-fill"></i>
            <span>${sol}</span>
          </li>
        `).join("");
      }

      // Populate Key Features List
      if (modalFeatures) {
        modalFeatures.innerHTML = project.keyFeatures.map(feat => `
          <li>
            <i class="bi bi-lightning-charge-fill"></i>
            <span>${feat}</span>
          </li>
        `).join("");
      }

      // Populate Tech Tags
      if (modalTags) {
        modalTags.innerHTML = project.technologies.map(t => `
          <span class="project-tag">${t}</span>
        `).join("");
      }

      // Action button
      if (modalActionLink) {
        modalActionLink.href = project.url;
        if (project.isConcept) {
          modalActionLink.innerHTML = `<span>Discuss Architecture</span> <i class="bi bi-chat-dots-fill"></i>`;
          modalActionLink.removeAttribute("target");
          modalActionLink.onclick = () => {
            modalInstance.hide();
          };
        } else {
          modalActionLink.innerHTML = `<span>Visit Live Website</span> <i class="bi bi-box-arrow-up-right"></i>`;
          modalActionLink.setAttribute("target", "_blank");
          modalActionLink.setAttribute("rel", "noopener noreferrer");
          modalActionLink.onclick = null;
        }
      }

      // Open Modal
      modalInstance.show();
    });
  });
}
