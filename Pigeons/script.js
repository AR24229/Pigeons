document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("show");
});

document.getElementById("pokazGolabia").addEventListener("click", function () {
  const div = document.getElementById("miejsceNaGolabia");

  // Jeśli jeszcze nie pokazano animacji
  if (!div.querySelector("dotlottie-player")) {
    div.innerHTML = `
      <dotlottie-player 
        src="https://lottie.host/87f0e301-51bd-414b-a29e-50e47e88f8ec/J0xUZncptJ.lottie" 
        background="transparent" 
        speed="1" 
        style="width: 300px; height: 300px;" 
        loop autoplay>
      </dotlottie-player>
    `;
  }
});
