window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Toggle navigation menu for mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetID = event.target.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
  
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth',
      });
  
      // Close the mobile menu after click
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
  
  // Dynamic menu highlighting based on scroll position
  const sections = document.querySelectorAll('.section');
  const options = {
    threshold: 0.7,
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const navLink = document.querySelector(
        `.nav-menu a[href="#${entry.target.id}"]`
      );
      if (entry.isIntersecting) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    });
  }, options);
  
  sections.forEach((section) => observer.observe(section));
  
  // Add hover animation to buttons and links
  document.querySelectorAll('a, button').forEach((element) => {
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'scale(1.1)';
      element.style.transition = 'transform 0.2s ease';
    });
  
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'scale(1)';
    });
  });
  