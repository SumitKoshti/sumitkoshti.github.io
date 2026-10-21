const menu = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menu?.addEventListener('click', () => navLinks.classList.toggle('mobile'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('mobile')));

const projects = {
  nykaa: {
    label: 'CASE STUDY / MARKETING ANALYTICS',
    title: 'Nykaa Marketing Campaign Analysis',
    intro: 'An end-to-end marketing analytics project designed to understand which campaigns, channels and audience segments contribute to stronger conversion and commercial performance.',
    stats: [['40,323','campaign records'],['5','channel types'],['20+','business KPIs']],
    sections: [
      ['Business problem','Evaluate marketing campaign effectiveness across channels, audiences and time, and identify opportunities to improve conversion efficiency and ROI.'],
      ['Analysis','Loaded and analyzed campaign data in MySQL, used SQL for KPI and trend analysis, applied Python for exploratory/statistical analysis, and built a Power BI model with DAX measures.'],
      ['Key areas','Campaign performance · channel analysis · audience analysis · funnel conversion · CTR · CPC · CPA · AOV · ROI · festive-season performance'],
      ['Outcome','A recruiter-ready example of taking raw marketing data through SQL and Python analysis into an interactive Power BI business dashboard.']
    ]
  },
  sports: {
    label: 'CASE STUDY / MARKETING ANALYTICS',
    title: 'Sports 24 Marketing Data Analysis',
    intro: 'Marketing performance analysis focused on understanding reduced engagement and conversion across digital campaigns.',
    stats: [['3.91M','views'],['0.60M','clicks'],['15.37%','CTR']],
    sections: [
      ['Business problem','Identify the performance patterns behind engagement and conversion and turn the findings into measurable marketing actions.'],
      ['Analysis','Used MySQL for analytical queries, Python for exploration and Power BI for KPI visualization and performance monitoring.'],
      ['Focus','Views · clicks · CTR · engagement · conversion · campaign performance'],
      ['Outcome','Created a business-focused dashboard that connects acquisition activity to engagement and conversion metrics.']
    ]
  },
  credit: {
    label: 'CASE STUDY / BUSINESS INTELLIGENCE',
    title: 'Credit Card Weekly Dashboard',
    intro: 'A Power BI dashboard built to monitor financial KPIs and weekly business performance.',
    stats: [['57M','YTD revenue'],['8M','interest'],['45.5M','transaction amount']],
    sections: [
      ['Business problem','Provide a consolidated view of revenue, transactions and interest metrics for faster weekly performance tracking.'],
      ['Analysis','Built KPI measures and an interactive Power BI report using DAX, data modelling and visual segmentation.'],
      ['Focus','Revenue · transaction amount · interest · weekly trends · KPI monitoring'],
      ['Outcome','A concise BI dashboard designed for recurring management reporting and performance review.']
    ]
  },
  vendor: {
    label: 'CASE STUDY / SALES ANALYTICS',
    title: 'Vendor Sales Performance',
    intro: 'A sales analytics project focused on understanding vendor performance, trends and business opportunities.',
    stats: [['SQL','core analysis'],['Python','EDA'],['Power BI','reporting']],
    sections: [
      ['Business problem','Understand which vendors and sales segments contribute to performance and where management attention is needed.'],
      ['Analysis','Structured sales data for SQL analysis, explored trends and distributions in Python, then translated the findings into an interactive Power BI report.'],
      ['Focus','Sales performance · vendor contribution · trends · KPIs · segmentation'],
      ['Outcome','A complete analytics workflow demonstrating business-question framing, data analysis and BI storytelling.']
    ]
  }
};

const modal = document.getElementById('projectModal');
const content = document.getElementById('modalContent');

document.querySelectorAll('[data-project]').forEach(btn => {
  btn.addEventListener('click', () => {
    const p = projects[btn.dataset.project];
    content.innerHTML = `
      <div class="modal-label">${p.label}</div>
      <h2>${p.title}</h2>
      <p>${p.intro}</p>
      <div class="modal-stat">${p.stats.map(s => `<div><strong>${s[0]}</strong><span>${s[1]}</span></div>`).join('')}</div>
      ${p.sections.map(s => `<h3 style="font-size:17px;margin-top:22px">${s[0]}</h3><p style="margin-top:6px">${s[1]}</p>`).join('')}
    `;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  });
});
document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });
function closeModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
