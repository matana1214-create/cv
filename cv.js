let currentLang = "en";

const cvData = {
  en: {
    dir: "ltr",
    name: "Matan Almagor",
    subtitle: "Technical Product Manager",
    phone: "Phone: 052-5322465",
    email: "Email: matana1214@gmail.com",
    location: "Location: Lod, Israel",
    summaryTitle: "Professional Summary",
    summary:
      "Technical Product Manager with hands-on experience leading logistics products and defining operational system requirements for the IDF Ground Forces (including work with Elbit Systems). Proven ability to manage teams, solve technical problems under pressure, and deliver working systems on tight schedules.",
    experienceTitle: "Experience",
    jobs: [
      {
        title: "Technical Product Manager | IDF Ground Forces",
        date: "2023 — 2025",
        bullets: [
          "Led development and integration teams, managing 2 logistics products simultaneously.",
          "End-to-End Product Creation (0 to 1): Defined and launched a new system from scratch, including roadmapping, backlog management, and writing User Stories.",
          "Defined requirements for an operational Ground Forces system, bringing it to full deployment within 3 months.",
          "Collaborated with Elbit Systems on the 'ZAYAD' project, coordinating requirements between developers, partners, and end-users.",
          "Managed daily product execution using Agile methodologies.",
        ],
      },
      {
        title:
          "Combat Team Commander (Captain) | IDF Givati Reconnaissance Patrol",
        date: "2019 — 2023",
        bullets: [
          "Executed duties as a Lead Officer, commanding 30 combat soldiers and 5 subordinate officers with full operational and logistical responsibility.",
          "Managed complex schedules, task allocation, and training programs under intense, 24/7 conditions.",
          "Led direct communication with senior leadership and resolved complex logistical problems in real time.",
        ],
      },
    ],
    educationTitle: "Education",
    edu: [
      {
        title:
          "B.A. Candidate in Management Information Systems & Business Administration",
        date: "2025 — Present",
        desc: "Peres Academic Center.",
      },
      {
        title: "Background & Training",
        date: "Various",
        bullets: [
          "IDF Infantry Officer Certification (2021).",
          "Advanced Torah Studies (Ma'aleh Eliyahu, 2017-2019).",
          "Full Matriculation (5 Units Math & Physics).",
        ],
      },
    ],
    skillsTitle: "Technical Skills",
    skillsHeader: ["Category", "Skills"],
    skills: [
      [
        "Management",
        "Agile, Jira, Project Management, Product Characterization",
      ],
      [
        "Technology",
        "SQL, Python, Java, JavaScript (Node.js, Express), System Analysis, Tableau",
      ],
    ],
    languagesTitle: "Languages",
    languagesHeader: ["Language", "Proficiency"],
    languages: [
      ["Hebrew", "Native"],
      ["English", "Professional Proficiency"],
    ],
  },
  he: {
    dir: "rtl",
    name: "מתן אלמגור",
    subtitle: "מנהל מוצר טכנולוגי",
    phone: "טלפון: 052-5322465",
    email: "אימייל: matana1214@gmail.com",
    location: "מיקום: לוד, ישראל",
    summaryTitle: "תמצית מקצועית",
    summary:
      "מנהל מוצר טכנולוגי עם ניסיון מעשי בהובלת פרויקטים, מערכות לוגיסטיקה ואפיון מערכות מבצעיות בזרוע היבשה (כולל עבודה מול אלביט). מביא איתו יכולת שטח מוכחת בניהול צוותים, פתרון תקלות מהיר תחת לחץ, והפיכת דרישות לקוח למערכות עובדות בלוחות זמנים קצרים.",
    experienceTitle: "ניסיון תעסוקתי",
    jobs: [
      {
        title: "מנהל מוצר טכנולוגי | זרוע היבשה",
        date: "2023 — 2025",
        bullets: [
          "ניהול והובלת צוותי פיתוח ואינטגרציה של 2 מוצרי לוגיסטיקה במקביל.",
          "אפיון והקמת מערכת חדשה מאפס (0 ל-1): הובלת כל שלבי המוצר כולל כתיבת דרישות, בניית מפות דרכים (Roadmaps), ניהול הבקלוג (Backlog) וכתיבת יוזר סטוריז (User Stories).",
          "אפיון דרישות למערכת מבצעית של זרוע היבשה; הקמה והפעלה של המערכת בשטח תוך 3 חודשים.",
          'עבודה שוטפת מול אלביט מערכות על פרויקט צי"ד – תיאום דרישות בין המפתחים, השותפים העסקיים ומשתמשי הקצה.',
          "עבודה יומיומית בסביבת Agile לקידום משימות הפיתוח.",
        ],
      },
      {
        title: "לוחם ומפקד צוות | סיירת גבעתי",
        date: "2019 — 2023",
        bullets: [
          "אחריות פיקודית ולוגיסטית מלאה על כ-30 לוחמים ו-5 מפקדי משנה.",
          'ניהול אופרציה מורכבת, חלוקת משימות, ניהול לו"ז ובניית תכנים תחת עבודה אינטנסיבית סביב השעון.',
          "עבודה שוטפת מול דרגים ממונים בכירים ופתרון בעיות בזמן אמת.",
        ],
      },
    ],
    educationTitle: "השכלה",
    edu: [
      {
        title: "סטודנט, תואר ראשון (.B.A) במערכות מידע ניהוליות ומנהל עסקים",
        date: "2025 — הווה",
        desc: "המרכז האקדמי פרס.",
      },
      {
        title: "רקע והכשרות",
        date: "שונות",
        bullets: [
          'קורס קציני חי"ר (2021).',
          "לימודים תורניים (ישיבת מעלה אליהו, 2017-2019).",
          'בגרות מלאה (5 יח"ל מתמטיקה ופיזיקה).',
        ],
      },
    ],
    skillsTitle: "כישורים",
    skillsHeader: ["קטגוריה", "כישורים"],
    skills: [
      ["ניהול ומתודולוגיות", "Agile, Jira, ניהול פרויקטים, אפיון דרישות"],
      [
        "טכנולוגי",
        "SQL, Python, Java, JavaScript (Node.js, Express),Tableau, ניתוח מערכות",
      ],
    ],
    languagesTitle: "שפות",
    languagesHeader: ["שפה", "רמת שליטה"],
    languages: [
      ["עברית", "שפת אם"],
      ["אנגלית", "שליטה טובה"],
    ],
  },
};

function renderCV() {
  const data = cvData[currentLang];
  const content = document.getElementById("cv-content");

  let html = `
    <div class="header-table" dir="${data.dir}">
      <div class="header-cell-left">
        <h1>${data.name}</h1>
        <div class="subtitle">${data.subtitle}</div>
      </div>
      <div class="header-cell-right">
        <div>${data.phone}</div>
        <div>${data.email}</div>
        <div>${data.location}</div>
      </div>
    </div>

    <div class="section-block" dir="${data.dir}">
      <h2>${data.summaryTitle}</h2>
      <p>${data.summary}</p>
    </div>

    <div class="section-block" dir="${data.dir}">
      <h2>${data.experienceTitle}</h2>
  `;

  data.jobs.forEach((job) => {
    html += `
      <div class="item-block">
        <div class="item-title-row">
          <span class="item-title">${job.title}</span>
          <span class="item-date">${job.date}</span>
        </div>
        <ul class="bullet-list">
    `;
    job.bullets.forEach((bullet) => {
      html += `<li>${bullet}</li>`;
    });
    html += `</ul></div>`;
  });

  html += `</div>
    <div class="section-block" dir="${data.dir}">
      <h2>${data.educationTitle}</h2>
  `;

  data.edu.forEach((edu) => {
    html += `
      <div class="item-block">
        <div class="item-title-row">
          <span class="item-title">${edu.title}</span>
          <span class="item-date">${edu.date}</span>
        </div>
    `;

    if (edu.bullets) {
      html += `<ul class="bullet-list" style="margin-top: 4px;">`;
      edu.bullets.forEach((bullet) => {
        html += `<li>${bullet}</li>`;
      });
      html += `</ul>`;
    } else {
      html += `<p style="margin-top: 4px;">${edu.desc}</p>`;
    }

    html += `</div>`;
  });

  html += `</div>
    <div class="tables-layout" dir="${data.dir}">
      <div class="table-col table-col-left">
        <h2>${data.skillsTitle}</h2>
        <table>
          <tr><th>${data.skillsHeader[0]}</th><th>${data.skillsHeader[1]}</th></tr>
  `;

  data.skills.forEach((skill) => {
    html += `<tr><td class="tech-font">${skill[0]}</td><td>${skill[1]}</td></tr>`;
  });

  html += `
        </table>
      </div>
      <div class="table-col table-col-right">
        <h2>${data.languagesTitle}</h2>
        <table>
          <tr><th>${data.languagesHeader[0]}</th><th>${data.languagesHeader[1]}</th></tr>
  `;

  data.languages.forEach((langItem) => {
    html += `<tr><td>${langItem[0]}</td><td>${langItem[1]}</td></tr>`;
  });

  html += `
        </table>
      </div>
    </div>
  `;

  content.innerHTML = html;

  // עדכון טקסט לכפתור השפה
  document.getElementById("btn-toggle-lang").innerText =
    currentLang === "en" ? "(Hebrew) עברית" : "English (אנגלית)";

  // עדכון טקסט ואייקון לכפתור ההורדה
  const downloadIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: -4px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`;

  document.getElementById("btn-download-pdf").innerHTML =
    currentLang === "en"
      ? `${downloadIcon} Download PDF`
      : `${downloadIcon} PDF-הורד כ`;
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "he" : "en";
  renderCV();
}

// פונקציית ההורדה ל-PDF מפעילה את מנגנון ההדפסה של הדפדפן לשמירה נקייה
function downloadPDF() {
  window.print();
}
