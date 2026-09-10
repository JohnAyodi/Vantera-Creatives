/* =========================================================
   VANTERA CREATIVES
   Portfolio Interactions
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     MOBILE NAVIGATION
  ======================================================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle?.addEventListener("click", () => {

    const open = navLinks?.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(Boolean(open))
    );

  });


  navLinks?.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

      menuToggle?.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });


  /* =======================================================
     PORTFOLIO FILTERING
  ======================================================= */

  const filters = document.querySelectorAll(".filter");
  const projects = document.querySelectorAll(".project-card");

  filters.forEach(filter => {

    filter.addEventListener("click", () => {

      const selected = filter.dataset.filter;

      /* Update active button */

      filters.forEach(button => {

        button.classList.remove("active");

        button.setAttribute(
          "aria-selected",
          "false"
        );

      });

      filter.classList.add("active");

      filter.setAttribute(
        "aria-selected",
        "true"
      );


      /* Filter projects */

      projects.forEach(project => {

        const category = project.dataset.category;

        const show =
          selected === "all" ||
          category === selected;

        project.classList.toggle(
          "is-hidden",
          !show
        );

      });

    });

  });


  /* =======================================================
     PROJECT MODAL
  ======================================================= */

  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalType = document.getElementById("modalType");
  const modalDescription =
    document.getElementById("modalDescription");

  let lastFocusedProject = null;


  function openModal(project) {

    if (!modal) {
      return;
    }

    lastFocusedProject = project;

    if (modalTitle) {
      modalTitle.textContent =
        project.dataset.title || "Project";
    }

    if (modalType) {
      modalType.textContent =
        project.dataset.type || "Selected work";
    }

    if (modalDescription) {
      modalDescription.textContent =
        project.dataset.description || "";
    }

    modal.classList.add("open");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "modal-open"
    );

    document.querySelector(".modal-close")?.focus();

  }


  function closeModal() {

    if (!modal) {
      return;
    }

    modal.classList.remove("open");

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "modal-open"
    );

    lastFocusedProject?.focus();

  }


  /* Open modal on click */

  projects.forEach(project => {

    project.addEventListener("click", () => {
      openModal(project);
    });


    /* Keyboard accessibility */

    project.addEventListener("keydown", event => {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        openModal(project);

      }

    });

  });


  /* Close modal buttons */

  document
    .querySelectorAll("[data-close-modal]")
    .forEach(element => {

      element.addEventListener(
        "click",
        closeModal
      );

    });


  /* Close with Escape */

  document.addEventListener("keydown", event => {

    if (
      event.key === "Escape" &&
      modal?.classList.contains("open")
    ) {

      closeModal();

    }

  });


  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  const revealElements =
    document.querySelectorAll(".reveal");


  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach(element => {

      observer.observe(element);

    });

  } else {

    /* Fallback for older browsers */

    revealElements.forEach(element => {

      element.classList.add("visible");

    });

  }


  /* =======================================================
     CONTACT FORM
  ======================================================= */

  const form =
    document.getElementById("contactForm");

  const success =
    document.querySelector(".form-success");


  form?.addEventListener("submit", event => {

    event.preventDefault();


    const data =
      new FormData(form);


    const name =
      data.get("name") || "";

    const email =
      data.get("email") || "";

    const business =
      data.get("business") ||
      "Not provided";

    const service =
      data.get("service") ||
      "Not specified";

    const message =
      data.get("message") ||
      "";


    const subject =
      encodeURIComponent(
        `Project enquiry — ${business}`
      );


    const body =
      encodeURIComponent(
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


    /* Replace this with the real business email */

    const businessEmail =
      "hello@vanteracreatives.com";


    window.location.href =
      `mailto:${businessEmail}?subject=${subject}&body=${body}`;


    if (success) {

      success.textContent =
        "Your email app should open with the enquiry prepared.";

    }


    form.reset();

  });


  /* =======================================================
     DYNAMIC COPYRIGHT YEAR
  ======================================================= */

  const year =
    document.getElementById("year");

  if (year) {

    year.textContent =
      new Date().getFullYear();

  }

});
