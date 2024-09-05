// Data for analysis
const analysisData = {
    need: [
        { item: "Manage complex documentation", importance: 95 },
        { item: "Reduce manual errors", importance: 90 },
        { item: "Mitigate non-compliance costs", importance: 85 },
        { item: "Ensure audit readiness", importance: 80 },
        { item: "Adapt to regulatory changes", importance: 75 }
    ],
    want: [
        { item: "Streamline operations", importance: 90 },
        { item: "Improve collaboration", importance: 85 },
        { item: "Enhance decision-making", importance: 80 },
        { item: "Scalable solutions", importance: 75 },
        { item: "Cost-effective compliance", importance: 70 }
    ],
    demand: [
        { item: "AI-driven automation", importance: 95 },
        { item: "Faster compliance processes", importance: 90 },
        { item: "Context-aware generation", importance: 85 },
        { item: "Adaptability to changes", importance: 80 },
        { item: "Data-driven insights", importance: 75 }
    ]
};

// Detailed reports
const detailedReports = {
    need: `
        <h3>Need Analysis: Why Pharma Companies Need Regulatory Documentation Software</h3>
        <p>Pharmaceutical companies operate in one of the most heavily regulated industries. Effective regulatory documentation management is essential to ensure compliance, avoid penalties, and maintain product quality and safety. Here are some key problems that create a need for regulatory software:</p>
        <ul>
            <li><strong>Complexity and Volume of Documentation:</strong> Pharma companies must prepare and manage a large number of documents, including Standard Operating Procedures (SOPs), deviation reports, Corrective and Preventive Actions (CAPAs), audit reports, validation protocols, and more. This complexity creates significant administrative burdens.</li>
            <li><strong>Error-Prone Manual Processes:</strong> Manual documentation processes are prone to human errors, missing information, and inconsistencies, leading to potential non-compliance with regulatory bodies like the FDA, EMA, and WHO.</li>
            <li><strong>High Costs of Compliance:</strong> Errors or inefficiencies in documentation can lead to high costs related to product recalls, fines, and lost reputation. This necessitates a robust system to manage and track all documents.</li>
            <li><strong>Audit Readiness and Data Integrity:</strong> Maintaining data integrity (ALCOA+ principles) and being prepared for regulatory audits are critical. Manual systems often lack the necessary audit trails and electronic record management needed for audit readiness.</li>
            <li><strong>Regulatory Updates and Changing Guidelines:</strong> The pharma regulatory landscape is constantly evolving. Companies need software that can adapt and ensure ongoing compliance without overhauling systems.</li>
        </ul>
        <p><strong>Conclusion:</strong> The need arises from the fundamental requirement of ensuring compliance, reducing risks, and maintaining operational efficiency in a highly regulated environment. This creates a strong foundation for needing a specialized regulatory software platform.</p>
    `,
    want: `
        <h3>Want Analysis: Why Pharma Companies Want Documentation Software</h3>
        <p>While the need is driven by regulatory requirements, the want is driven by the desire to improve efficiency, reduce operational overhead, and leverage technology for strategic advantages:</p>
        <ul>
            <li><strong>Streamlining Operations:</strong> Pharma companies want software solutions that can simplify documentation processes, reduce manual workloads, and eliminate bottlenecks in documentation workflows.</li>
            <li><strong>Improving Collaboration and Transparency:</strong> With multiple teams (QA, QC, production, regulatory affairs) involved in documentation, there is a want for a unified platform that improves collaboration, communication, and transparency.</li>
            <li><strong>Enhancing Decision-Making:</strong> Companies want software that provides insights, analytics, and reports to help management make informed decisions, track compliance status, and identify areas for improvement.</li>
            <li><strong>Scalability and Adaptability:</strong> As companies grow, their documentation needs change. They want a software solution that can easily scale and adapt to new regulatory requirements and internal processes.</li>
            <li><strong>Cost-Effective Solutions:</strong> While large pharma companies may afford more complex solutions, SMEs (small and medium enterprises) want a cost-effective solution that offers comprehensive compliance management without breaking the bank.</li>
        </ul>
        <p><strong>Conclusion:</strong> The want is motivated by a desire to optimize regulatory processes, improve efficiency, and leverage technology to stay competitive and compliant.</p>
    `,
    demand: `
        <h3>Demand Analysis: Why There is Demand for GenAI-Enabled Documentation Software Like Comply</h3>
        <p>With the advent of AI and machine learning, the demand is shifting toward more intelligent, automated, and adaptive solutions that go beyond traditional software capabilities:</p>
        <ul>
            <li><strong>Automation of Complex Tasks with GenAI:</strong> There is a growing demand for AI-driven solutions that can automate complex document generation tasks (like SOPs, CAPA, deviation reports) through simple prompts, reducing the burden on human resources and increasing accuracy.</li>
            <li><strong>Faster Compliance and Reduced Time to Market:</strong> GenAI-enabled solutions like Comply can significantly reduce the time needed to prepare and review documents, which is crucial for pharma companies to maintain compliance while accelerating time to market for new products.</li>
            <li><strong>Context-Aware Documentation Generation:</strong> Unlike traditional software, GenAI-enabled platforms like Comply can understand the context of documents and generate content that adheres to specific regulatory standards, minimizing the need for manual oversight.</li>
            <li><strong>Adaptability to Regulatory Changes:</strong> AI models like DPMS-GPT can be fine-tuned to adapt to changing regulations, making them more resilient and valuable than static traditional solutions. This adaptability is highly demanded in a constantly evolving regulatory environment.</li>
            <li><strong>Lower Costs and Higher ROI:</strong> By leveraging AI to handle documentation, pharma companies can reduce the costs associated with manual work, minimize errors, and avoid non-compliance penalties, thereby offering a higher return on investment.</li>
            <li><strong>Data-Driven Insights for Proactive Compliance:</strong> GenAI can provide predictive analytics and insights, helping companies anticipate compliance issues before they occur. This is a game-changer for risk management and planning.</li>
        </ul>
        <p><strong>Conclusion:</strong> The demand is driven by the pharmaceutical industry's shift towards digital transformation and the need for smarter, more adaptive, and cost-efficient compliance management solutions. Comply meets this demand with its GenAI capabilities, making it a strong contender in the RegTech space.</p>
    `
};

// Populate lists
function populateList(id, data) {
    const list = document.getElementById(id);
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.item;
        list.appendChild(li);
    });
}

populateList('need-list', analysisData.need);
populateList('want-list', analysisData.want);
populateList('demand-list', analysisData.demand);

// Create charts
function createChart(id, data, label) {
    const ctx = document.getElementById(id).getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(item => item.item),
            datasets: [{
                label: label,
                data: data.map(item => item.importance),
                backgroundColor: 'rgba(52, 152, 219, 0.6)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

createChart('needChart', analysisData.need, 'Importance of Needs');
createChart('wantChart', analysisData.want, 'Importance of Wants');
createChart('demandChart', analysisData.demand, 'Importance of Demands');

// Show report popup
function showReport(type) {
    const popup = document.getElementById('report-popup');
    const popupTitle = document.getElementById('popup-title');
    const popupContent = document.getElementById('popup-content');

    popupTitle.textContent = type.charAt(0).toUpperCase() + type.slice(1) + ' Analysis Report';
    popupContent.innerHTML = detailedReports[type];

    popup.style.display = 'block';
}

// Close report popup
function closeReport() {
    const popup = document.getElementById('report-popup');
    popup.style.display = 'none';
}

// Close popup when clicking outside of it
window.onclick = function(event) {
    const popup = document.getElementById('report-popup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}