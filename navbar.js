class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #3B82F6;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      </style>
      <nav class="bg-white shadow-sm">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" class="text-2xl font-bold text-gray-800 flex items-center">
            <i data-feather="code" class="text-primary mr-2"></i>
            Atharv
          </a>
          <div class="hidden md:flex space-x-8">
            <a href="#" class="nav-link text-gray-600 hover:text-gray-800">Home</a>
            <a href="#about" class="nav-link text-gray-600 hover:text-gray-800">About</a>
            <a href="#projects" class="nav-link text-gray-600 hover:text-gray-800">Projects</a>
            <a href="#contact" class="nav-link text-gray-600 hover:text-gray-800">Contact</a>
          </div>
          <button class="md:hidden focus:outline-none">
            <i data-feather="menu" class="text-gray-600"></i>
          </button>
        </div>
      </nav>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);
