document.addEventListener('DOMContentLoaded', () => {
  const listEl = document.getElementById('post-list');
  const tabRow = document.getElementById('tab-row');
  const listView = document.getElementById('list-view');
  const articleView = document.getElementById('article-view');
  const articleContent = document.getElementById('article-content');
  const backLink = document.getElementById('back-link');

    let activeCategory = 'All';

  // Pre-select a category if the link included ?category=Markets, etc.
  const params = new URLSearchParams(window.location.search);
  const requested = params.get('category');
  if (requested && ['Learning', 'Markets', 'Careers'].includes(requested)) {
    activeCategory = requested;
    tabRow.querySelectorAll('.tab').forEach(t => {
      t.classList.toggle('active', t.dataset.category === requested);
    });
  }

  function renderList() {
    const posts = activeCategory === 'All'
      ? POSTS
      : POSTS.filter(p => p.category === activeCategory);

    listEl.innerHTML = posts.map(p => `
      <div class="post-row" data-id="${p.id}" tabindex="0" role="button" aria-label="Read: ${p.title}">
        <span class="post-date">${p.date}</span>
        <div>
          <h3>${p.title}</h3>
          <p>${p.excerpt}</p>
        </div>
      </div>
    `).join('');

    listEl.querySelectorAll('.post-row').forEach(row => {
      row.addEventListener('click', () => showArticle(row.dataset.id));
      row.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') showArticle(row.dataset.id);
      });
    });
  }

  function showArticle(id) {
    const post = POSTS.find(p => p.id === id);
    if (!post) return;
    articleContent.innerHTML = `
      <span class="eyebrow">${post.category}</span>
      <h1>${post.title}</h1>
      <p class="article-byline">${post.author} · ${post.date} · ${post.readTime}</p>
      <div class="article-body">
        ${post.body.map(para => `<p>${para}</p>`).join('')}
      </div>
    `;
    listView.classList.add('hidden');
    articleView.classList.add('visible');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function hideArticle() {
    articleView.classList.remove('visible');
    listView.classList.remove('hidden');
  }

  backLink.addEventListener('click', (e) => {
    e.preventDefault();
    hideArticle();
  });

  tabRow.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tabRow.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.dataset.category;
      hideArticle();
      renderList();
    });
  });

  renderList();
});
