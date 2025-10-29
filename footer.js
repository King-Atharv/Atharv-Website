class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .social-icon {
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .social-icon:hover {
          transform: translateY(-3px);
          color: #3B82F6;
        }
      </style>
      <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-6 md:mb-0">
              <h3 class="text-xl font-bold mb-2">Atharv Nauriyal</h3>
              <p class="text-gray-400">9th Grade Student & Python Developer</p>
            </div>
            <div class="flex space-x-6">
              <a href="#" class="social-icon text-gray-400 hover:text-white">
                <i data-feather="github"></i>
              </a>
              <a href="#" class="social-icon text-gray-400 hover:text-white">
                <i data-feather="twitter"></i>
              </a>
              <a href="#" class="social-icon text-gray-400 hover:text-white">
                <i data-feather="linkedin"></i>
              </a>
              <a href="#" class="social-icon text-gray-400 hover:text-white">
                <i data-feather="mail"></i>
              </a>
            </div>
          </div>
          <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; ${new Date().getFullYear()} Atharv's Digital Showcase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
