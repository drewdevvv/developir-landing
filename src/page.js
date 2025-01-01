export function renderPage() {
  return `<!DOCTYPE html>
<html>
<head>
  <title>Developir</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: 'Inter', sans-serif; }
    @keyframes slideDown {
      from { transform: translateY(-10px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }
    .slide-down { animation: slideDown 0.5s ease forwards; }
    .shake { animation: shake 0.5s ease; }
  </style>
</head>
<body class="bg-[#1B1E23] text-white min-h-screen">
  <nav class="px-6 py-4 border-b border-gray-800">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <a href="/" class="flex items-center gap-2">
        <img src="/media/logo2.png" alt="Developir" class="h-8">
      </a>
      <div class="flex gap-8">
        <a href="#services" class="text-gray-300 hover:text-white transition-colors">Services</a>
        <a href="#industries" class="text-gray-300 hover:text-white transition-colors">Industries</a>
      </div>
    </div>
  </nav>

  <main class="max-w-7xl mx-auto px-6 py-16">
    <div class="grid lg:grid-cols-[2fr_1fr] gap-8">
      <div class="space-y-8">
        <img src="/media/untitled.webp" alt="Featured" class="w-full h-64 object-cover rounded-xl mb-8">
        
        <div class="bg-[#22262C] p-8 rounded-xl">
          <div class="w-12 h-12 bg-[#1B1E23] rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-[#9BB537]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-[#9BB537]">AI-Leveraged Technologies</h2>
          <p class="text-gray-300 mb-6">Harness the power of AI to automate routine tasks, gain insights, and make data-driven decisions without the complexity.</p>
          <a href="/learn" class="text-[#9BB537] hover:text-[#8BA22F] transition-colors font-medium">Learn more</a>
        </div>

        <div class="bg-[#22262C] p-8 rounded-xl">
          <div class="w-12 h-12 bg-[#1B1E23] rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-[#9BB537]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
            </svg>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-[#9BB537]">Boosting Digital Footprint</h2>
          <p class="text-gray-300 mb-6">Build a strong online presence that connects with your community and expands your reach, while staying true to your mission.</p>
          <a href="/learn" class="text-[#9BB537] hover:text-[#8BA22F] transition-colors font-medium">Learn more</a>
        </div>

        <div class="bg-[#22262C] p-8 rounded-xl">
          <div class="w-12 h-12 bg-[#1B1E23] rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-[#9BB537]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-[#9BB537]">Authentic Collaboration</h2>
          <p class="text-gray-300 mb-6">Create meaningful connections with your team and community through tools that enhance real human interaction, not replace it.</p>
          <a href="/learn" class="text-[#9BB537] hover:text-[#8BA22F] transition-colors font-medium">Learn more</a>
        </div>
      </div>

      <div class="bg-[#22262C] p-8 rounded-xl h-fit sticky top-8">
        <h2 class="text-2xl font-semibold mb-6">Stay Updated</h2>
        <form id="signup-form">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-2 text-gray-300">Name</label>
              <input type="text" name="name" required 
                class="w-full px-4 py-3 bg-[#1B1E23] border border-gray-700 rounded-lg focus:outline-none focus:border-[#9BB537] text-white">
            </div>
            <div>
              <label class="block text-sm font-medium mb-2 text-gray-300">Email</label>
              <input type="email" name="email" required 
                class="w-full px-4 py-3 bg-[#1B1E23] border border-gray-700 rounded-lg focus:outline-none focus:border-[#9BB537] text-white">
            </div>
            <button type="submit" 
              class="w-full bg-[#9BB537] text-white py-3 rounded-lg hover:bg-[#8BA22F] transition-colors font-medium">
              Get in touch
            </button>
          </div>
        </form>
        <div id="message" class="mt-6 text-center hidden slide-down"></div>
      </div>
    </div>
  </main>

  <script>
    document.getElementById('signup-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const form = e.target;
      const msg = document.getElementById('message');
      const btn = form.querySelector('button');
      btn.disabled = true;
      btn.innerHTML = 'Subscribing...';
      msg.classList.add('hidden');
      msg.classList.remove('slide-down', 'shake');
      
      try {
        const res = await fetch('/subscribe', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            name: form.name.value,
            email: form.email.value
          })
        });
        
        if (res.ok) {
          msg.textContent = 'Thanks for subscribing!';
          msg.className = 'mt-6 text-center text-[#9BB537] slide-down';
          form.reset();
        } else {
          throw new Error('Subscription failed');
        }
      } catch (err) {
        msg.textContent = 'Something went wrong. Please try again.';
        msg.className = 'mt-6 text-center text-red-400 shake';
      }
      msg.classList.remove('hidden');
      btn.disabled = false;
      btn.innerHTML = 'Subscribe';
      
      msg.addEventListener('animationend', () => {
        msg.classList.remove('shake');
      });
    });
  </script>
</body>
</html>`;}