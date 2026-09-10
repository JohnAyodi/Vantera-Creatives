// Vantera Creatives — portfolio interactions
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle?.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open);
  });

  navLinks?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
    });
  });

  // Portfolio filtering
  const filters = document.querySelectorAll(".filter");
  const projects = document.querySelectorAll(".project-card");

  filters.forEach(filter => {
    filter.addEventListener("click", () => {
      filters.forEach(f => f.classList.remove("active"));
      filter.classList.add("active");
      const selected = filter.dataset.filter;

      projects.forEach(project => {
        const show = selected === "all" || project.dataset.category === selected;
        project.style.display = show ? "" : "none";
      });
    });
  });

  // Project modal
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalType = document.getElementById("modalType");
  const modalDescription = document.getElementById("modalDescription");

  function closeModal() {
    modal?.classList.remove("open");
    modal?.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  projects.forEach(project => {
    project.addEventListener("click", () => {
      modalTitle.textContent = project.dataset.title || "Project";
      modalType.textContent = project.dataset.type || "Selected work";
      modalDescription.textContent = project.dataset.description || "";
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach(el => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });

  // Scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // Contact form -> prepares an email in the visitor's default mail app.
  const form = document.getElementById("contactForm");
  const success = document.querySelector(".form-success");

  form?.addEventListener("submit", e => {
    e.preventDefault();

    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const business = data.get("business") || "Not provided";
    const service = data.get("service");
    const message = data.get("message");

    const subject = encodeURIComponent(`Project enquiry — ${business}`);
    const body = encodeURIComponent(
`Hello Vantera Creatives,

My name is ${name}.
Email: ${email}
Business / organisation: ${business}
Service: ${service}

Project details:
${message}

I'd like to discuss this project further.

Thank you.`
    );

    // Replace this address with your real business email.
    window.location.href = `mailto:hello@vanteracreatives.com?subject=${subject}&body=${body}`;
    success.textContent = "Your email app should open with the enquiry prepared.";
    form.reset();
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});
