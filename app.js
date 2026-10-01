/* =====================================================
   PROJECTS
   Add new projects to this array.
   image: filename inside assets/, or '' for no cover yet.
   repo: full GitHub URL, or ''.
   demo: full live URL, or ''.
   download: local downloadable file path, or ''.
===================================================== */

const projects = [
  {
    title: 'StockPort — Smart Stock Analyzer',
    categories: ['Finance', 'Data Analytics', 'GenAI'],
    featured: true,
    status: 'Interactive application',
    image: 'stock.png',

    tags: [
      'Python', 'Streamlit', 'yfinance',
      'Plotly', 'VADER', 'Groq'
    ],

    summary:
      'An interactive stock analysis application combining return and risk comparisons, news sentiment, simulations, and an AI assistant.',

    problem:
      'Stock analysis can feel fragmented and overly technical. The goal was to bring useful comparisons and beginner-friendly explanations into one interface.',

    approach:
      'Built a Streamlit application that retrieves historical Yahoo Finance data and compares selected stocks using returns, volatility, Sharpe ratio, and correlation. Users can rank stocks by balanced performance, maximum return, or minimum risk.',

    features: [
      'Company-name and ticker search',
      'Interactive portfolio selection and growth charts',
      'VADER sentiment analysis of recent news',
      'Correlation analysis across selected stocks',
      'One-year Monte Carlo scenarios for the best-ranked stock',
      'Groq-powered AI assistant for explaining metrics and results'
    ],

    result:
      'Published as a Streamlit application with an integrated analysis workflow. Monte Carlo outputs illustrate possible scenarios rather than guaranteed future returns.',

    repo:
      'https://github.com/surbhi1us/smart-stock-analyzer',

    demo:
      'https://stockport-analyzer.streamlit.app/',

    download: ''
  },

  {
    title: 'INSUREAI — Evidence-Grounded Insurance Pitches',
    categories: ['GenAI', 'Full Stack'],
    featured: true,
    status: 'Placement case-study prototype',
    image: 'insureai.png',

    tags: [
      'Python', 'FastAPI', 'React',
      'TypeScript', 'Groq', 'Document Retrieval'
    ],

    summary:
      'An insurance advisory prototype that generates client-specific pitches and audits policy claims against source-document evidence.',

    problem:
      'Preparing insurance pitches involves comparing policy documents and checking that client-facing statements are supported by the original wording.',

    approach:
      'Built a React and FastAPI application that profiles a client company, retrieves relevant policy information, generates a recommendation, and presents a claim-level evidence audit for advisor review.',

    features: [
      'Company and workforce profiling',
      'Policy comparison and document-grounded generation',
      'Claim-level verification with document and page references',
      'Advisor review and approval workflow',
      'PowerPoint pitch and PDF audit-report generation',
      'Grounded policy chatbot with out-of-scope guardrails'
    ],

    result:
      'Developed and deployed as a placement case-study prototype. The workflow makes supporting evidence available for review before a generated pitch is used.',

    repo:
      'https://github.com/surbhi1us/INSURE_AI',

    demo:
      'https://insure-ai-rcth.onrender.com',

    download: ''
  },

  {
    title: 'Image Denoising Using U-Net',
    categories: ['AI/ML', 'Computer Vision'],
    featured: true,
    status: 'Academic team project',
    image: 'image-denoising.png',

    tags: [
      'Python', 'TensorFlow', 'Keras',
      'U-Net', 'FastAPI', 'AWS EC2'
    ],

    summary:
      'A deep learning image-restoration system trained to remove synthetic Gaussian and Poisson noise, with a FastAPI inference service.',

    problem:
      'Noise obscures image detail. This project investigated how an encoder–decoder network and different loss functions affect reconstruction quality.',

    approach:
      'Prepared paired clean and noisy BSDS500 images at 256 × 256 resolution. Trained a U-Net with skip connections, batch normalization, and dropout, comparing MSE, SSIM, and a hybrid SSIM–MAE loss.',

    features: [
      'Synthetic Gaussian and Poisson noise generation',
      'Supervised clean–noisy image pairs',
      'U-Net encoder–decoder with skip connections',
      'Comparison of reconstruction loss functions',
      'Image-upload inference through FastAPI',
      'Previous deployment on AWS EC2'
    ],

    result:
      'The repository reports test SSIM of approximately 0.74 with hybrid loss. The API was previously deployed on AWS EC2; the hosted deployment is no longer active.',

    repo:
      'https://github.com/surbhi1us/Denoising-Model',

    demo: '',
    download: ''
  },

  {
    title: 'Indian Crop Production Forecasting',
    categories: ['Forecasting', 'Data Analytics'],
    featured: true,
    status: 'Time-series analysis project',
    image: 'crop.png',

    tags: [
      'Python', 'Pandas', 'Statsmodels',
      'Auto-ARIMA', 'Holt', 'KPSS'
    ],

    summary:
      'State-wise and crop-wise analysis of Indian agricultural production, comparing Holt’s Linear and Auto-ARIMA forecasts.',

    problem:
      'Agricultural production series differ in trend, volatility, and available history. The project explored suitable forecasting approaches for annual data with missing or limited observations.',

    approach:
      'Cleaned and reshaped annual production data spanning 1980–2022, standardized production units, explored historical trends, and used KPSS tests to assess stationarity before comparing Holt and Auto-ARIMA models.',

    features: [
      'Analysis across nine crop categories',
      'Fiscal-year conversion and wide-to-long data reshaping',
      'Production-unit conversion for cotton and jute',
      'State-level, crop-level, and All-India analysis',
      'KPSS stationarity testing',
      'Comparison of trend and forecast behaviour'
    ],

    result:
      'Compared forecasts across series with different data quality and trend behaviour, emphasizing model suitability and the limitations of short annual histories.',

    repo:
      'https://github.com/surbhi1us/Time-Series-Analysis-of-Indian-Crop-Production',

    demo: '',
    download: ''
  },

  {
    title: 'Predictive Maintenance for Injection Molding',
    categories: ['AI/ML'],
    featured: true,
    status: 'In progress · Capstone',
    image: 'injection.png',

    tags: [
      'Python', 'Pandas', 'Scikit-learn',
      'XGBoost', 'CatBoost', 'Predictive Maintenance'
    ],

    summary:
      'An ongoing capstone exploring machine-health and failure prediction for injection molding machine subsystems.',

    problem:
      'Legacy injection molding machines may lack stored per-cycle histories, making it difficult to develop data-driven maintenance models directly from factory records.',

    approach:
      'Developing a synthetic process dataset informed by realistic operating ranges and engineering input, then comparing supervised models for subsystem health prediction.',

    features: [
      'Synthetic industrial process-data preparation',
      'Subsystem-specific prediction targets',
      'Comparison of multiple machine learning models',
      'Chronological train, validation, and test splitting by mold',
      'Class-imbalance handling',
      'Macro-F1 evaluation'
    ],

    result:
      'The capstone is ongoing. This case study currently covers the dataset and modeling direction; dashboard and assistant completion are not claimed.',

    repo: '',
    demo: '',
    download: ''
  },

  {
    title: 'Smart Traffic Signal System',
    categories: ['AI/ML', 'Computer Vision'],
    featured: false,
    status: 'Computer vision project',
    image: 'traffic.png',

    tags: [
      'Python', 'YOLOv8', 'OpenCV',
      'Object Detection', 'Pygame'
    ],

    summary:
      'A traffic-signal project combining vehicle detection, orientation analysis, and emergency-vehicle priority.',

    problem:
      'Fixed signal timings may not reflect changing traffic demand. The project explores using visual traffic information to support adaptive signal allocation.',

    approach:
      'Used YOLOv8-based detection and vehicle-orientation analysis to support traffic counting and signal decisions, with a simulation for exploring emergency-vehicle priority.',

    features: [
      'Vehicle detection',
      'Vehicle-orientation analysis',
      'Traffic counting for signal decisions',
      'Emergency-vehicle priority',
      'Traffic simulation'
    ],

    result:
      'A project exploring the connection between computer vision and traffic-control logic. Public source code and a hosted demonstration are not available yet.',

    repo: '',
    demo: '',
    download: ''
  },

  {
    title: 'Samsung vs iPhone — Brand Sentiment',
    categories: ['Data Analytics'],
    featured: false,
    status: 'Tableau dashboard',
    image: 'sentiment.png',

    tags: [
      'Python', 'Twitter Data',
      'Tableau', 'Sentiment Analysis'
    ],

    summary:
      'A Tableau dashboard comparing sentiment and engagement around Samsung and iPhone using Twitter data.',

    problem:
      'Brand conversations contain both opinions and engagement signals. The project organizes those signals into an accessible comparative view.',

    approach:
      'Collected Twitter data with Python, prepared the dataset, and built a Tableau dashboard covering regional sentiment, engagement over time, influencers, and locations.',

    features: [
      'Regional sentiment distribution',
      'Engagement trends over time',
      'Top influencers and locations',
      'Word-cloud visualization',
      'Published Tableau dashboard'
    ],

    result:
      'Published an interactive dashboard on Tableau Public for exploring sentiment and engagement differences between the two brands.',

    repo:
      'https://github.com/surbhi1us/Samsung_vs_iPhone_Sentiment_Analysis',

    demo:
      'https://public.tableau.com/app/profile/surbhi.shirvatkar/viz/projecttwitter-brandsentimentanalysis/SamsungvsiPhoneBrandSentimentEngagementAnalysis',

    download: ''
  },

  {
    title: 'Business Data Statistical Analysis',
    categories: ['Data Analytics'],
    featured: false,
    status: 'Academic team project',
    image: 'business-analysis.png',

    tags: [
      'Python', 'Pandas', 'SciPy',
      'ANOVA', 'Hypothesis Testing'
    ],

    summary:
      'Statistical analysis of three months of business data using ANOVA and independent t-tests.',

    problem:
      'Observed differences in business data require statistical investigation before drawing conclusions about groups or time periods.',

    approach:
      'Loaded and prepared business data, handled missing values and duplicates, and used ANOVA and independent t-tests to investigate differences.',

    features: [
      'Data loading and formatting',
      'Missing-value and duplicate handling',
      'ANOVA',
      'Independent t-tests',
      'Statistical-result interpretation'
    ],

    result:
      'Produced a statistical-analysis workflow. The original business dataset is excluded from the public repository for confidentiality.',

    repo:
      'https://github.com/surbhi1us/BUSINESS-DATA-ANOVA',

    demo: '',
    download: ''
  },

  {
    title: 'Blood Connect — Blood Donation App',
    categories: ['Applications'],
    featured: false,
    status: 'Academic team project',
    image: 'bloodapp.png',

    tags: [
      'Java', 'XML', 'Android Studio',
      'Firebase Authentication', 'Firebase Database'
    ],

    summary:
      'An Android application supporting donor registration, user profiles, and blood-donor discovery.',

    problem:
      'Donors and people seeking blood need an accessible way to register information and find potential connections.',

    approach:
      'Developed an Android application using Java and XML, with Firebase Authentication for sign-in and a Firebase database for profiles and donor information.',

    features: [
      'User authentication',
      'User profiles',
      'Donor registration',
      'Donor search',
      'Donor-detail views'
    ],

    result:
      'Created an Android application with a downloadable APK and a public source repository.',

    repo:
      'https://github.com/surbhi1us/BloodDonationApp',

    demo: '',
    download: 'assets/blood-connect.apk'
  },

  {
    title: 'Radiant Beauty — Frontend Website',
    categories: ['Frontend'],
    featured: false,
    status: 'Frontend practice project',
    image: 'radiant-beauty.png',

    tags: [
      'HTML', 'CSS', 'JavaScript',
      'Responsive Design'
    ],

    summary:
      'A beauty storefront interface exploring product presentation and responsive web design.',

    problem:
      'A product-focused website needs a clear visual hierarchy and layouts that adapt to different screen sizes.',

    approach:
      'Built a beauty storefront interface using HTML, CSS, and JavaScript, focusing on product listings and responsive presentation.',

    features: [
      'Product-focused interface',
      'Responsive layouts',
      'HTML, CSS, and JavaScript implementation'
    ],

    result:
      'A frontend practice project available as source code. No hosted demo is currently linked.',

    repo:
      'https://github.com/surbhi1us/Practice-Project',

    demo: '',
    download: ''
  }
];

/* =====================================================
   PROJECT DISPLAY
===================================================== */

const grid = document.querySelector('#projects');
const filters = document.querySelector('.filters');
const dialog = document.querySelector('#detail');
const detailContent = document.querySelector('#detail-content');

let projectOpener = null;

function escapeHTML(value = '') {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[character]));
}

function projectImage(project) {
  if (!project.image) {
    return `
      <div class="project-image project-cover-empty">
        <span>${escapeHTML(project.categories.join(' / '))}</span>
        <strong>${escapeHTML(project.title)}</strong>
      </div>
    `;
  }

  return `
    <div class="project-image">
      <img
        src="assets/${escapeHTML(project.image)}"
        alt="${escapeHTML(project.title)} screenshot"
        loading="lazy"
      >
    </div>
  `;
}

function projectLinks(project, inDialog = false) {
  const linkClass = inDialog ? 'button' : '';

  return `
    ${project.repo ? `
      <a
        class="${linkClass}"
        href="${escapeHTML(project.repo)}"
        target="_blank"
        rel="noopener"
      >View code</a>
    ` : ''}

    ${project.demo ? `
      <a
        class="${linkClass}"
        href="${escapeHTML(project.demo)}"
        target="_blank"
        rel="noopener"
      >Live demo</a>
    ` : ''}

    ${project.download ? `
      <a
        class="${linkClass}"
        href="${escapeHTML(project.download)}"
        download
      >Download APK</a>
    ` : ''}
  `;
}

function render(filter = 'all') {
  const visibleProjects = projects
    .map((project, index) => ({ project, index }))
    .filter(({ project }) =>
      filter === 'all' || project.categories.includes(filter)
    );

  grid.innerHTML = visibleProjects.map(({ project, index }) => `
    <article class="project">
      ${projectImage(project)}

      <div class="project-info">
        <div class="project-meta">
          <span>
            ${String(index + 1).padStart(2, '0')} /
            ${escapeHTML(project.categories.join(' · ').toUpperCase())}
          </span>
          <span>${project.featured ? 'FEATURED' : 'PROJECT'}</span>
        </div>

        <h3>${escapeHTML(project.title)}</h3>

        <span class="project-status">
          ${escapeHTML(project.status)}
        </span>

        <p>${escapeHTML(project.summary)}</p>

        <div class="tags">
          ${project.tags.map(tag =>
            `<span>${escapeHTML(tag)}</span>`
          ).join('')}
        </div>

        <div class="project-links">
          <button
            data-project="${index}"
            aria-label="Read case study: ${escapeHTML(project.title)}"
          >Read case study</button>

          ${projectLinks(project)}
        </div>
      </div>
    </article>
  `).join('');

  const count = document.querySelector('#count');

  if (count) {
    count.textContent = `Showing ${visibleProjects.length} projects`;
  }

  /*
   * If a cover filename is wrong, show the same clean fallback
   * used for projects without a cover.
   */
  grid.querySelectorAll('.project-image img').forEach(image => {
    image.addEventListener('error', () => {
      const cover = image.parentElement;
      const title = image.alt.replace(/ screenshot$/, '');

      cover.classList.add('project-cover-empty');
      cover.innerHTML = `
        <span>PROJECT</span>
        <strong>${escapeHTML(title)}</strong>
      `;
    }, { once: true });
  });
}

/* Filters are generated automatically from project categories. */

function buildFilters() {
  const categories = [...new Set(
    projects.flatMap(project => project.categories)
  )];

  filters.innerHTML = `
    <button
      class="active"
      data-filter="all"
      aria-pressed="true"
    >
      All work
      <span>${String(projects.length).padStart(2, '0')}</span>
    </button>

    ${categories.map(category => `
      <button
        data-filter="${escapeHTML(category)}"
        aria-pressed="false"
      >${escapeHTML(category)}</button>
    `).join('')}
  `;
}

filters.addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');

  if (!button) return;

  filters.querySelectorAll('[data-filter]').forEach(item => {
    const active = item === button;

    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });

  render(button.dataset.filter);
});

/* =====================================================
   CASE STUDY DIALOG
===================================================== */

grid.addEventListener('click', event => {
  const button = event.target.closest('[data-project]');

  if (!button) return;

  const project = projects[Number(button.dataset.project)];

  if (!project) return;

  projectOpener = button;

  detailContent.innerHTML = `
    <span class="eyebrow">
      ${escapeHTML(project.categories.join(' / ').toUpperCase())}
    </span>

    <h2>${escapeHTML(project.title)}</h2>

    <span class="project-status">
      ${escapeHTML(project.status)}
    </span>

    <div class="tags">
      ${project.tags.map(tag =>
        `<span>${escapeHTML(tag)}</span>`
      ).join('')}
    </div>

    ${project.image ? `
      <img
        class="case-study-image"
        src="assets/${escapeHTML(project.image)}"
        alt="${escapeHTML(project.title)} screenshot"
      >
    ` : ''}

    <h3>The problem</h3>
    <p>${escapeHTML(project.problem)}</p>

    <h3>The approach</h3>
    <p>${escapeHTML(project.approach)}</p>

    <h3>Project highlights</h3>
    <ul class="case-study-features">
      ${project.features.map(feature =>
        `<li>${escapeHTML(feature)}</li>`
      ).join('')}
    </ul>

    <h3>Outcome & current status</h3>
    <p>${escapeHTML(project.result)}</p>

    <div class="case-study-links">
      ${projectLinks(project, true)}
    </div>
  `;

  const image = detailContent.querySelector('.case-study-image');

  if (image) {
    image.addEventListener('error', () => image.remove(), {
      once: true
    });
  }

  dialog.showModal();
});

document.querySelector('#close').onclick = () => dialog.close();

dialog.addEventListener('close', () => {
  projectOpener?.focus();
});

dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;

  const bounds = dialog.getBoundingClientRect();

  const outside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;

  if (outside) dialog.close();
});

buildFilters();
render();

/* Keep your existing theme, animation, and toolkit code below. */

const theme = document.querySelector('#theme');

function setTheme(light) {
    document.body.classList.toggle('light', light);

    theme.textContent = light ? 'Dark mode' : 'Light mode';

    theme.setAttribute(
        'aria-label',
        light ? 'Switch to dark theme' : 'Switch to light theme'
    );
}

try {
    setTheme(localStorage.getItem('portfolio-theme') === 'light');
} catch {}

theme.onclick = () => {
    const light = !document.body.classList.contains('light');

    setTheme(light);

    try {
        localStorage.setItem(
            'portfolio-theme',
            light ? 'light' : 'dark'
        );
    } catch {}
};

document.querySelector('#copy').onclick = async () => {
    try {
        await navigator.clipboard.writeText('surbhi1us@gmail.com');

        document.querySelector('#copy-status').textContent =
            'Email copied';
    } catch {
        document.querySelector('#copy-status').textContent =
            'Select the email address above to copy it.';
    }
};

const canvas = document.querySelector('#field'),
    ctx = canvas.getContext('2d'),
    motion = document.querySelector('#motion');

let w,
    h,
    t = 0,
    paused = matchMedia('(prefers-reduced-motion: reduce)').matches,
    frame;

function resize() {
    const r = canvas.getBoundingClientRect();

    w = r.width;
    h = r.height;

    canvas.width = w * devicePixelRatio;
    canvas.height = h * devicePixelRatio;

    ctx.setTransform(
        devicePixelRatio,
        0,
        0,
        devicePixelRatio,
        0,
        0
    );

    draw();
}

let pointer = {
    x: -1000,
    y: -1000
};

canvas.addEventListener('pointermove', e => {
    const r = canvas.getBoundingClientRect();

    pointer = {
        x: e.clientX - r.left,
        y: e.clientY - r.top
    };
});

canvas.addEventListener('pointerleave', () => {
    pointer = {
        x: -1000,
        y: -1000
    };
});

function draw() {
    const lightMode = document.body.classList.contains('light');
    ctx.fillStyle = lightMode ? '#fff8ed' : '#101b2b';
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = lightMode ? '#e4d9c9' : '#263449';
    ctx.lineWidth = .5;

    for (let x = 0; x < w; x += 32) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
    }

    for (let y = 0; y < h; y += 32) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
    }

    const points = [];

    for (let row = 0; row < 29; row++) {
        for (let col = 0; col < 34; col++) {
            let a = col / 33 * Math.PI * 2,
                b = row / 28 * Math.PI;

            let x = Math.sin(b) * Math.cos(a + t * .16),
                y = Math.cos(b),
                z = Math.sin(b) * Math.sin(a + t * .16);

            const angle = -.42;

            let yy = y * Math.cos(angle) - z * Math.sin(angle),
                zz = y * Math.sin(angle) + z * Math.cos(angle);

            let wave = .065 * Math.sin(a * 4 + b * 6 + t);

            const size = Math.min(w, h) * .32;

            let px = w / 2 + x * (1 + wave) * size,
                py = h / 2 + yy * (1 + wave) * size;

            let distance = Math.hypot(
                px - pointer.x,
                py - pointer.y
            );

            if (distance < 90) {
                px += (px - pointer.x) * .13;
                py += (py - pointer.y) * .13;
            }

            points.push({
                x: px,
                y: py,
                z: zz
            });
        }
    }

    points.sort((a, b) => a.z - b.z);

    points.forEach(p => {
        const alpha = (p.z + 1) * .36 + .17;

        ctx.fillStyle = lightMode
            ? `rgba(36,86,184,${alpha})`
            : `rgba(197,244,109,${alpha})`;

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            1.1 + (p.z + 1) * .7,
            0,
            Math.PI * 2
        );

        ctx.fill();
    });
}

function tick() {
    draw();

    if (!paused) {
        t += .018;
        frame = requestAnimationFrame(tick);
    }
}

function syncMotion() {
    motion.textContent = paused ? 'Play motion' : 'Pause motion';
    motion.setAttribute('aria-pressed', String(paused));
}

motion.onclick = () => {
    paused = !paused;

    cancelAnimationFrame(frame);
    syncMotion();
    tick();
};

new ResizeObserver(resize).observe(canvas);

syncMotion();
tick();

document.addEventListener('visibilitychange', () => {
    cancelAnimationFrame(frame);

    if (!document.hidden) {
        tick();
    }
});

const skillGroups = [
  {
    title: 'Programming',
    skills: ['Python', 'SQL', 'C++', 'R']
  },
  {
    title: 'Data Science & ML',
    skills: [
      'Pandas', 'NumPy', 'Scikit-learn',
      'Machine Learning', 'Statistical Analysis',
      'Feature Engineering', 'Model Evaluation'
    ]
  },
  {
    title: 'Deep Learning',
    skills: ['TensorFlow', 'Keras', 'CNN', 'U-Net']
  },
  {
    title: 'Generative AI & NLP',
    skills: [
      'Generative AI', 'LLMs', 'TF-IDF',
      'Lexical Retrieval', 'NLP', 'VADER'
    ]
  },
  {
    title: 'Computer Vision',
    skills: ['YOLOv8', 'OpenCV', 'Object Detection', 'Image Processing']
  },
  {
    title: 'Visualization & BI',
    skills: ['Power BI', 'Tableau', 'Plotly', 'Matplotlib', 'Excel']
  },
  {
    title: 'Backend & Applications',
    skills: [
      'FastAPI', 'REST APIs', 'Streamlit',
      'Flask', 'Django', 'Django REST Framework'
    ]
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'SQLite', 'Firebase']
  },
  {
    title: 'Cloud & Deployment',
    skills: ['AWS', 'EC2', 'S3', 'IAM']
  },
  {
    title: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook']
  },
  {
    title: 'Data Preparation & Forecasting',
    skills: [
      'ETL Basics', 'Data Preprocessing',
      'Time-Series Analysis', 'Forecasting'
    ]
  },
  {
    title: 'Web & Mobile',
    skills: [
      'HTML', 'CSS', 'JavaScript', 'React', 'Vite',
      'Java', 'Android Studio', 'XML', 'Figma'
    ]
  },
  {
    title: 'Enterprise Exposure',
    skills: ['SAP MM', 'SAP SD', 'SAP ABAP']
  }
];

document.querySelector('#skills-grid').innerHTML =
  skillGroups.map((group, index) => `
    <article>
      <span class="number">
        ${String(index + 1).padStart(2, '0')}
      </span>

      <h3>${group.title}</h3>

      <div class="tags">
        ${group.skills.map(skill => `<span>${skill}</span>`).join('')}
      </div>
    </article>
  `).join('');

  /* Highlight the navbar link for the current section */
const sectionLinks = [...document.querySelectorAll('header nav a')]
    .filter(link => link.getAttribute('href')?.startsWith('#'));

const linkedSections = sectionLinks
    .map(link => ({
        link,
        section: document.getElementById(
            link.getAttribute('href').slice(1)
        )
    }))
    .filter(item => item.section)
    .sort((a, b) =>
        a.section.getBoundingClientRect().top -
        b.section.getBoundingClientRect().top
    );

function highlightCurrentSection() {
    const header = document.querySelector('header');
    const threshold = header.getBoundingClientRect().bottom + 80;

    let current = null;

    for (const item of linkedSections) {
        if (item.section.getBoundingClientRect().top <= threshold) {
            current = item;
        }
    }

    /* Select the final section when reaching the page bottom */
    const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 5;

    if (atBottom && linkedSections.length) {
        current = linkedSections[linkedSections.length - 1];
    }

    sectionLinks.forEach(link => {
        const active = link === current?.link;

        link.classList.toggle('active', active);

        if (active) {
            link.setAttribute('aria-current', 'location');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

let navUpdatePending = false;

window.addEventListener('scroll', () => {
    if (navUpdatePending) return;

    navUpdatePending = true;

    requestAnimationFrame(() => {
        highlightCurrentSection();
        navUpdatePending = false;
    });
}, { passive: true });

window.addEventListener('resize', highlightCurrentSection);
window.addEventListener('load', highlightCurrentSection);

highlightCurrentSection();