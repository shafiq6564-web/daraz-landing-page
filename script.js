   let index = 0;
    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;
    const dots = document.querySelectorAll(".dot");

    function showSlide(i) {
      index = (i + totalSlides) % totalSlides;
      slides.style.transform = `translateX(${-index * 100}%)`;
      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
    }

    function nextSlide() {
      showSlide(index + 1);
    }

    function prevSlide() {
      showSlide(index - 1);
    }

    function currentSlide(i) {
      showSlide(i);
    }

    // Auto slide every 3 sec
    setInterval(nextSlide, 3000);

    // Initialize
    showSlide(index);