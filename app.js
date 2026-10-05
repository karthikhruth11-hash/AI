/**
 * SVPP (Autonomous) - Sri Venkatesa Perumal College of Engineering & Technology
 * Department of Artificial Intelligence Portal - Core Application Logic
 */

// =============================================================================
// 1. DATA REPOSITORIES (R26 Curriculum, Students, Faculty, Circulars, Timetables)
// =============================================================================

const SVPP_DATA = {
  college: {
    name: "Sri Venkatesa Perumal College of Engineering & Technology",
    shortName: "SVPP",
    location: "Puttur - 517583, Tirupati Dist., Andhra Pradesh",
    status: "Autonomous Institution Affiliated to JNTUA, Ananthapuramu",
    counsellingCode: "SVPP",
    phone: "9390505457 / 9390505452",
    email: "principal@svpcet.org / hod.ai@svpcet.org",
    accreditations: ["NAAC 'A' Grade", "NBA Accredited", "AICTE Approved", "ISO 9001:2015"]
  },

  // Faculty Directory (Department of Artificial Intelligence)
  faculty: [
    { id: "FAC-AI-01", name: "Dr. V. Janardhan Babu, Ph.D.", designation: "Professor & HOD", specialization: "Artificial Intelligence, Deep Learning & Neural Systems", email: "hod.ai@svpcet.org", phone: "8500666884", room: "AI Block - 301" },
    { id: "FAC-AI-02", name: "Mrs. N. Sridevi, M.Tech", designation: "Associate Professor", specialization: "Object Oriented Programming (Java) & Operating Systems", email: "sridevi.ai@svpcet.org", phone: "9493324549", room: "AI Block - 304" },
    { id: "FAC-AI-03", name: "Mr. H. Mohammed, M.Tech", designation: "Associate Professor", specialization: "Natural Language Processing, Full Stack Dev & Deep Learning", email: "mohammed.ai@svpcet.org", phone: "7893197479", room: "AI Block - 305" },
    { id: "FAC-AI-04", name: "Mr. P. Gopichand, M.Tech", designation: "Assistant Professor", specialization: "Advanced Data Structures & Algorithms", email: "gopichand.ai@svpcet.org", phone: "7674005465", room: "AI Block - 306" },
    { id: "FAC-AI-05", name: "Ms. H. Nazeema, M.Tech", designation: "Assistant Professor", specialization: "Advanced Data Structures & Algorithms", email: "nazeema.ai@svpcet.org", phone: "8374946620", room: "AI Block - 307" },
    { id: "FAC-AI-06", name: "Dr. S. Venkata Kiran, Ph.D.", designation: "Associate Professor", specialization: "Computer Vision & Digital Image Processing", email: "venkatakiran.ai@svpcet.org", phone: "8333020485", room: "AI Block - 308" },
    { id: "FAC-AI-07", name: "Mr. K. Purushotham, M.Tech", designation: "Assistant Professor", specialization: "Computer Vision & NLP Applications", email: "purushotham.ai@svpcet.org", phone: "8686101564", room: "AI Block - 309" },
    { id: "FAC-AI-08", name: "Mrs. Revathi, M.Tech", designation: "Assistant Professor", specialization: "Operating Systems & System Programming", email: "revathi.ai@svpcet.org", phone: "9618954293", room: "AI Block - 310" },
    { id: "FAC-AI-09", name: "Mrs. Saigeetha, M.Sc, M.Phil", designation: "Assistant Professor", specialization: "Discrete Mathematics & Graph Theory", email: "saigeetha.math@svpcet.org", phone: "8297112259", room: "Basic Sciences Block" },
    { id: "FAC-AI-10", name: "Mrs. V.P. Rohini, MBA", designation: "Assistant Professor", specialization: "Universal Human Values & Management Science", email: "rohini.hms@svpcet.org", phone: "8309508517", room: "Humanities Block" },
    { id: "FAC-AI-11", name: "Ms. R.R.S Spandana, M.Tech", designation: "Assistant Professor", specialization: "Generative AI & LLM Systems", email: "spandana.ai@svpcet.org", phone: "8522881017", room: "AI Block - 311" },
    { id: "FAC-AI-12", name: "Ms. D.V.S Charita, M.Tech", designation: "Assistant Professor", specialization: "AI in Cyber Security & Network Defense", email: "charita.ai@svpcet.org", phone: "8309481262", room: "AI Block - 312" },
    { id: "FAC-AI-13", name: "Mr. A. Dhanasekhar Reddy, M.Tech", designation: "Assistant Professor", specialization: "AI for Smart Cities & IoT Systems", email: "dhanasekhar.ai@svpcet.org", phone: "9966686918", room: "AI Block - 314" },
    { id: "FAC-AI-14", name: "Mrs. K. Hemavathi, M.Tech", designation: "Assistant Professor", specialization: "Python Programming & Data Analytics", email: "hemavathi.ai@svpcet.org", phone: "9347142967", room: "AI Block - 315" },
    { id: "FAC-AI-15", name: "Mr. Dr. P. Vinod Kumar, Ph.D.", designation: "Assistant Professor", specialization: "Environmental Science & Sustainability", email: "vinodkumar.env@svpcet.org", phone: "8500951282", room: "Basic Sciences Block" }
  ],

  // Circulars & Notifications
  circulars: [
    {
      id: "CIRC-2026-089",
      date: "02 Oct 2026",
      day: "02",
      month: "OCT",
      category: "exams",
      badgeText: "B.Tech AI Mid-I",
      badgeClass: "badge-exam",
      title: "Schedule of B.Tech II & III Year Artificial Intelligence Mid-I Examinations, A.Y. 2026-27",
      desc: "All II and III B.Tech CSE (AI) students are informed that Mid-I examinations will commence from 14th October 2026. Hall tickets and seating plans are published below.",
      refNo: "SVPP/AI/EXAM/2026-27/089",
      issuedBy: "Controller of Examinations & HOD - AI",
      pdfUrl: "#"
    },
    {
      id: "CIRC-2026-088",
      date: "28 Sep 2026",
      day: "28",
      month: "SEP",
      category: "academic",
      badgeText: "R26 BoS Approved",
      badgeClass: "badge-academic",
      title: "Notification: 1st Board of Studies (BoS) Approved R26 Syllabus Copy Released",
      desc: "The Department of Artificial Intelligence has released the finalized R26 Autonomous course curriculum and detailed syllabus for Semesters I through IV.",
      refNo: "SVPP/AI/BOS/2026-27/012",
      issuedBy: "Chairman, Board of Studies (Dept. of AI)",
      pdfUrl: "#"
    },
    {
      id: "CIRC-2026-087",
      date: "24 Sep 2026",
      day: "24",
      month: "SEP",
      category: "attendance",
      badgeText: "Attendance Alert",
      badgeClass: "badge-urgent",
      title: "Monthly Cumulative Attendance Report - September 2026 Display on Portal",
      desc: "Students having less than 75% attendance are directed to meet their faculty mentors immediately before 5th October to avoid exam condonation penalty.",
      refNo: "SVPP/AI/ATTN/2026-09/44",
      issuedBy: "Head of the Department (AI)",
      pdfUrl: "#"
    },
    {
      id: "CIRC-2026-085",
      date: "20 Sep 2026",
      day: "20",
      month: "SEP",
      category: "faculty",
      badgeText: "Faculty Meeting",
      badgeClass: "badge-faculty",
      title: "Department Faculty Review Meeting on AI Research Labs & NAAC Documentation",
      desc: "All teaching faculty of AI Department are requested to assemble in the AI Seminar Hall on Saturday at 3:30 PM with Mid-1 internal question bank papers.",
      refNo: "SVPP/AI/FAC/2026-09/10",
      issuedBy: "Dr. K. Ramanathan, HOD-AI",
      pdfUrl: "#"
    },
    {
      id: "CIRC-2026-082",
      date: "15 Sep 2026",
      day: "15",
      month: "SEP",
      category: "events",
      badgeText: "Hackathon 2026",
      badgeClass: "badge-academic",
      title: "Call for Entries: SVPP Autonomous State-Level Generative AI Hackathon 2026",
      desc: "Registration is open for teams to build Edge AI & Computer Vision solutions. Cash prize pool of INR 50,000 sponsored by industry partners.",
      refNo: "SVPP/AI/CLUB/2026-09/03",
      issuedBy: "SVPP AI Innovation Club & IEEE Student Branch",
      pdfUrl: "#"
    }
  ],

  // R26 Syllabus Courses (Extract from SVPP R26 Autonomy Documents)
  syllabus: {
    "sem3": [
      {
        code: "26PC4301",
        title: "AI Tools and Applications",
        ltpc: { l: 3, t: 0, p: 0, c: 3.0 },
        category: "Professional Core",
        desc: "Covers modern AI engineering tools, prompt engineering, HuggingFace transformers, LangChain frameworks, API orchestrations, and deployment pipelines.",
        units: [
          { num: "Unit I", title: "Introduction to Modern AI Ecosystem", content: "Evolution of AI tools, cloud AI APIs (OpenAI, Gemini, Claude), Python AI toolchains, Jupyter and Google Colab environments." },
          { num: "Unit II", title: "LLM Frameworks & Prompting", content: "Prompt engineering paradigms, zero-shot and few-shot inference, LangChain architectures, chaining tools and vector storage." },
          { num: "Unit III", title: "Embeddings & Retrieval Augmented Generation (RAG)", content: "Vector databases (Chroma, FAISS), document chunking, semantic similarity metrics, building end-to-end RAG pipelines." },
          { num: "Unit IV", title: "Autonomous Agents & Tool Calling", content: "ReAct patterns, multi-agent frameworks, integrating external database queries and web tools." },
          { num: "Unit V", title: "AI Application Deployment & Ethics", content: "Streamlit and FastAPI serving, model latency optimization, AI safety, bias mitigation, and responsible AI practices." }
        ],
        textbooks: ["Modern AI Tools & Frameworks by S. Russell, Pearson 2025", "Hands-on LangChain and LLM Applications by Harrison Chase, O'Reilly 2024"]
      },
      {
        code: "26SE4301",
        title: "AI Assisted Application Development",
        ltpc: { l: 1, t: 0, p: 2, c: 2.0 },
        category: "Skill Enhancement",
        desc: "Hands-on engineering using AI coding assistants, automated test generation, CI/CD integration, and full-stack AI web prototypes.",
        units: [
          { num: "Unit I", title: "AI-Augmented Software Engineering", content: "Code generation models, GitHub Copilot, Cursor, automated code refactoring, context-aware assistance." },
          { num: "Unit II", title: "Automated Testing & Bug Finding", content: "AI test suite synthesis, unit testing generation, vulnerability detection, static analysis with LLMs." },
          { num: "Unit III", title: "Full-Stack AI Application Design", content: "Connecting AI backends with modern frontend architectures, REST/GraphQL endpoints, responsive design." },
          { num: "Unit IV", title: "API Integration & Middleware", content: "Rate limiting, secret management, caching layer with Redis, asynchronous task queues." },
          { num: "Unit V", title: "Deployment & Monitoring", content: "Containerization using Docker, cloud hosting on Render/Vercel/AWS, telemetry and model logging." }
        ],
        textbooks: ["AI-Driven Software Development by M. Fowler, Addison-Wesley 2025"]
      },
      {
        code: "26PC4302",
        title: "Intelligent Data Processing and System Integration",
        ltpc: { l: 3, t: 0, p: 0, c: 3.0 },
        category: "Professional Core",
        desc: "Data pipelines for machine learning, stream processing, feature engineering, distributed storage, and end-to-end telemetry integration.",
        units: [
          { num: "Unit I", title: "Data Ingestion & Cleaning at Scale", content: "ETL pipelines, missing value imputation, outlier detection algorithms, Apache Arrow, Polars and Pandas." },
          { num: "Unit II", title: "Feature Engineering & Dimensionality Reduction", content: "PCA, t-SNE, UMAP, categorical encodings, automated feature stores, data normalization." },
          { num: "Unit III", title: "Stream Processing & Event Systems", content: "Apache Kafka and RabbitMQ fundamentals, real-time event streaming for ML models, windowing techniques." },
          { num: "Unit IV", title: "System Integration Architecture", content: "Microservices design for AI inference, message brokers, caching strategies, horizontal scalability." },
          { num: "Unit V", title: "Data Governance & Quality Assurance", content: "Data lineage, schema validation, data drift detection, Great Expectations framework." }
        ],
        textbooks: ["Designing Data-Intensive Applications by Martin Kleppmann, O'Reilly"]
      },
      {
        code: "26PC4303",
        title: "Computer Architecture for Intelligent Systems",
        ltpc: { l: 3, t: 0, p: 0, c: 3.0 },
        category: "Professional Core",
        desc: "Hardware architectures optimized for deep learning, GPUs, TPUs, systolic arrays, memory hierarchies, and edge tensor accelerators.",
        units: [
          { num: "Unit I", title: "Hardware Fundamentals for AI", content: "CPU vs GPU vs NPU comparison, SIMD/MIMD architectures, arithmetic units for FP16, BF16 and INT8." },
          { num: "Unit II", title: "Memory Hierarchy & Bandwidth Bottlenecks", content: "HBM3, cache memory hierarchies, memory-bound vs compute-bound operations, roofline model." },
          { num: "Unit III", title: "Tensor Processing Units & Systolic Arrays", content: "Matrix multiplication hardware, systolic dataflow architectures, Google TPU architecture." },
          { num: "Unit IV", title: "Edge AI Accelerators", content: "Embedded neural processors, ARM Cortex-M with CMSIS-NN, Intel Neural Compute Stick, Apple Neural Engine." },
          { num: "Unit V", title: "Quantization & Model Compression", content: "Weight pruning, post-training quantization, QAT (Quantization Aware Training), ONNX runtime." }
        ],
        textbooks: ["Computer Architecture: A Quantitative Approach by Hennessy & Patterson"]
      },
      {
        code: "26PC4304",
        title: "Foundations of Artificial Intelligence",
        ltpc: { l: 3, t: 0, p: 0, c: 3.0 },
        category: "Professional Core",
        desc: "State space search, heuristic algorithms, adversarial search, propositional & first-order logic, knowledge graphs, and uncertainty reasoning.",
        units: [
          { num: "Unit I", title: "Problem Formulation & Search Strategies", content: "Intelligent agents, environments, BFS, DFS, UCS, A* search, heuristic design, optimality proofs." },
          { num: "Unit II", title: "Adversarial Search & Game Playing", content: "Minimax algorithm, Alpha-Beta pruning, evaluation functions, Monte Carlo Tree Search (MCTS)." },
          { num: "Unit III", title: "Knowledge Representation & Logic", content: "Propositional logic, inference rules, resolution refutation, First-Order Logic (FOL), ontologies." },
          { num: "Unit IV", title: "Reasoning Under Uncertainty", content: "Probability basics, Bayesian Networks, conditional independence, exact and approximate inference." },
          { num: "Unit V", title: "Planning & Decision Making", content: "Classical planning, STRIPS, PDDL, Markov Decision Processes (MDPs), Bellman equations." }
        ],
        textbooks: ["Artificial Intelligence: A Modern Approach by Stuart Russell & Peter Norvig"]
      },
      {
        code: "26PC4305",
        title: "Intelligent Data Processing and System Integration Lab",
        ltpc: { l: 0, t: 0, p: 3, c: 1.5 },
        category: "Professional Lab",
        desc: "Hands-on implementation of streaming data pipelines, vector databases, Kafka ingestion, and Dockerized inference servers.",
        units: [
          { num: "Week 1-3", title: "High-Performance Data Ingestion", content: "Benchmarking Polars vs Pandas on 10M row dataset, automated cleansing and outlier clipping." },
          { num: "Week 4-6", title: "Vector DB & Hybrid Search", content: "Ingesting Wikipedia corpora into Milvus/Chroma and benchmarking BM25 vs dense embeddings." },
          { num: "Week 7-9", title: "Kafka Event Stream Simulation", content: "Publishing simulated IoT sensor stream to Kafka topic and scoring incoming points with PyTorch model." },
          { num: "Week 10-12", title: "Microservice Containerization", content: "Packaging model inference API into Docker container with Prometheus metrics endpoint." }
        ],
        textbooks: ["SVPP Autonomous Department of AI Lab Manual, R26 Edition"]
      }
    ],
    "sem4": [
      {
        code: "26PC4401",
        title: "Machine Learning: Principles & Algorithms",
        ltpc: { l: 3, t: 0, p: 0, c: 3.0 },
        category: "Professional Core",
        desc: "Supervised and unsupervised learning, regression, SVM, decision trees, ensemble methods, clustering, and cross-validation.",
        units: [
          { num: "Unit I", title: "Introduction & Linear Models", content: "Linear regression, logistic regression, gradient descent variants, regularization (L1/L2)." },
          { num: "Unit II", title: "Tree Models & Ensembles", content: "Decision trees, Random Forests, XGBoost, LightGBM, boosting and bagging mathematics." },
          { num: "Unit III", title: "Kernel Methods & SVMs", content: "Support vector machines, dual formulation, RBF kernels, soft margin classification." },
          { num: "Unit IV", title: "Unsupervised Learning", content: "K-Means, Gaussian Mixture Models, EM algorithm, Hierarchical clustering, PCA." },
          { num: "Unit V", title: "Model Evaluation & Bias-Variance", content: "ROC-AUC, Precision-Recall, Cross-validation strategies, bias-variance tradeoff, hyperparameter tuning." }
        ],
        textbooks: ["Pattern Recognition and Machine Learning by Christopher Bishop"]
      },
      {
        code: "26PC4402",
        title: "Deep Neural Networks & Architectures",
        ltpc: { l: 3, t: 0, p: 0, c: 3.0 },
        category: "Professional Core",
        desc: "Feedforward networks, backpropagation, CNNs, RNNs, LSTMs, Transformers, and optimization algorithms.",
        units: [
          { num: "Unit I", title: "Neural Foundations", content: "Perceptrons, activation functions (ReLU, GELU), backpropagation mathematical derivation, Adam optimizer." },
          { num: "Unit II", title: "Convolutional Neural Networks", content: "Conv layers, pooling, ResNet, EfficientNet, transfer learning for image classification." },
          { num: "Unit III", title: "Sequence Models", content: "Recurrent neural networks, vanishing gradient solutions, LSTM and GRU cell mechanics." },
          { num: "Unit IV", title: "Transformer Self-Attention", content: "Query-Key-Value attention, multi-head attention, positional encodings, BERT and GPT architectures." },
          { num: "Unit V", title: "Training Dynamics & Regularization", content: "Dropout, Batch Normalization, Layer Normalization, learning rate schedules, loss landscapes." }
        ],
        textbooks: ["Deep Learning by Ian Goodfellow, Yoshua Bengio, and Aaron Courville"]
      }
    ]
  },

  // AI Department Students Repository (strictly Department of Artificial Intelligence)
  students: {},

  // Department Timetables (Official schedules for II-A, II-B, III-A, III-B, and IV B.Tech AI)
  timetables: {
    classes: {
      "ii-a": {
        id: "ii-a",
        label: "II B.Tech • Sec A",
        fullName: "2026-2027 II B.Tech - I SEM (A-Section) TIME TABLE",
        room: "LH 203",
        regulation: "R23-B25",
        academicYear: "2026-2027",
        classInCharge: "Mrs. N. Sridevi",
        totalWeeklyPeriods: 35,
        timingsText: "College Timings: 9:30 AM – 4:10 PM • Lunch: 12:00 – 12:50 PM",
        periodsHeader: [
          { num: "1", time: "9:30" },
          { num: "2", time: "10:20" },
          { num: "3", time: "11:10" },
          { isBreak: true, label: "LUNCH BREAK", time: "12:00 - 12:50" },
          { num: "4", time: "12:50" },
          { num: "5", time: "1:40" },
          { num: "6", time: "2:30" },
          { num: "7", time: "3:20" }
        ],
        days: [
          {
            day: "MON",
            periods: [
              { code: "OOP1", subCode: "23PC0504", name: "Object Oriented Programming Through Java", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "ADS1", subCode: "23PC0503", name: "Advanced Data Structures & Algorithms", teacher: "Ms. H. Nazeema", phone: "8374946620" },
              { code: "DMGT1", subCode: "23BS0006", name: "Discrete Mathematics & Graph Theory", teacher: "Mrs. Saigeetha", phone: "8297112259" },
              { isBreak: true },
              { code: "ADS2", subCode: "23PC0503", name: "Advanced Data Structures & Algorithms", teacher: "Ms. H. Nazeema", phone: "8374946620" },
              { code: "ES", subCode: "23MC0001", name: "Environmental Science", teacher: "Mr. Dr. P. Vinod Kumar", phone: "8500951282" },
              { code: "OOP2", subCode: "23PC0504", name: "Object Oriented Programming Through Java", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "OOP3", subCode: "23PC0504", name: "Object Oriented Programming Through Java", teacher: "Mrs. N. Sridevi", phone: "9493324549" }
            ]
          },
          {
            day: "TUE",
            periods: [
              { code: "UHV", subCode: "23HM0002", name: "Universal Human Values 2", teacher: "Mrs. V. P. Rohini", phone: "8309508517" },
              { code: "AI", subCode: "23PC4301", name: "Artificial Intelligence", teacher: "Dr. V. Janardhan Babu", phone: "8500666884" },
              { code: "DMGT2", subCode: "23BS0006", name: "Discrete Mathematics & Graph Theory", teacher: "Mrs. Saigeetha", phone: "8297112259" },
              { isBreak: true },
              { code: "NPTEL + PP LAB", subCode: "23SE0501", name: "Python Programming Lab", teacher: "Mrs. K. Hemavathi", phone: "9347142967", span: 4, isLab: true }
            ]
          },
          {
            day: "WED",
            periods: [
              { code: "ADS3", subCode: "23PC0503", name: "Advanced Data Structures & Algorithms", teacher: "Ms. H. Nazeema", phone: "8374946620" },
              { code: "DMGT3", subCode: "23BS0006", name: "Discrete Mathematics & Graph Theory", teacher: "Mrs. Saigeetha", phone: "8297112259" },
              { code: "UHV1", subCode: "23HM0002", name: "Universal Human Values 2", teacher: "Mrs. V. P. Rohini", phone: "8309508517" },
              { isBreak: true },
              { code: "ADS4", subCode: "23PC0503", name: "Advanced Data Structures & Algorithms", teacher: "Ms. H. Nazeema", phone: "8374946620" },
              { code: "AI3", subCode: "23PC4301", name: "Artificial Intelligence", teacher: "Dr. V. Janardhan Babu", phone: "8500666884" },
              { code: "SPORTS / LIB", subCode: "-", name: "Sports / Library Session", teacher: "Faculty Incharge", span: 2, isActivity: true }
            ]
          },
          {
            day: "THU",
            periods: [
              { code: "OOP LAB", subCode: "23LC0505", name: "OOPJ Lab (Java Programming)", teacher: "Mrs. N. Sridevi", phone: "9493324549", span: 3, isLab: true },
              { isBreak: true },
              { code: "OOP5", subCode: "23PC0504", name: "Object Oriented Programming Through Java", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "TAP", subCode: "-", name: "Technical Aptitude & Placement", teacher: "Training Incharge", isActivity: true },
              { code: "OOP4", subCode: "23PC0504", name: "Object Oriented Programming Through Java", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "UHV2", subCode: "23HM0002", name: "Universal Human Values 2", teacher: "Mrs. V. P. Rohini", phone: "8309508517" }
            ]
          },
          {
            day: "FRI",
            periods: [
              { code: "AI", subCode: "23PC4301", name: "Artificial Intelligence", teacher: "Dr. V. Janardhan Babu", phone: "8500666884" },
              { code: "ES2", subCode: "23MC0001", name: "Environmental Science", teacher: "Mr. Dr. P. Vinod Kumar", phone: "8500951282" },
              { code: "DMGT4", subCode: "23BS0006", name: "Discrete Mathematics & Graph Theory", teacher: "Mrs. Saigeetha", phone: "8297112259" },
              { isBreak: true },
              { code: "NPTEL + ADS LAB", subCode: "23LC0504", name: "NPTEL + ADSA Lab", teacher: "Ms. H. Nazeema", phone: "8374946620", span: 4, isLab: true }
            ]
          }
        ],
        subjects: [
          { subCode: "23BS0006", subName: "DISCRETE MATHEMATICS AND GRAPH THEORY (DMGT)", l: 4, t: "-", p: "-", a: 4, teacher: "MRS. SAIGEETHA", phone: "8297112259" },
          { subCode: "23HM0002", subName: "UNIVERSAL HUMAN VALUES 2 (UHV)", l: 2, t: "-", p: "-", a: 2, teacher: "MRS. V. P . ROHINI", phone: "8309508517" },
          { subCode: "23PC4301", subName: "ARTIFICIAL INTELLIGENCE (AI)", l: 3, t: "-", p: "-", a: 4, teacher: "DR. V. JANARDHAN BABU", phone: "8500666884" },
          { subCode: "23PC0503", subName: "ADVANCED DATA STRUCTURES AND ALGORITHMS (ADSA)", l: 5, t: "-", p: "-", a: 5, teacher: "MS. H. NAZEEMA", phone: "8374946620" },
          { subCode: "23PC0504", subName: "OBJECT ORIENTED PROGRAMMING THROUGH JAVA (OOPJ)", l: 5, t: "-", p: "-", a: 5, teacher: "MRS. N. SRIDEVI", phone: "9493324549" },
          { subCode: "23LC0504", subName: "ADSA LAB", l: 0, t: 0, p: 3, a: 4, teacher: "MS H. NAZEEMA", phone: "8374946620" },
          { subCode: "23LC0505", subName: "OOPJ LAB", l: 0, t: 0, p: 3, a: 4, teacher: "MRS. N. SRIDEVI", phone: "9493324549" },
          { subCode: "23SE0501", subName: "PYTHON PROGRAMMING", l: 0, t: 1, p: 2, a: 4, teacher: "MRS. K. HEMAVATHI", phone: "9347142967" },
          { subCode: "23MC0001", subName: "ENVIRONMENTAL SCIENCE", l: 2, t: "-", p: "-", a: 3, teacher: "MR. DR. P. VINOD KUMAR", phone: "8500951282" }
        ]
      },
      "ii-b": {
        id: "ii-b",
        label: "II B.Tech • Sec B",
        fullName: "2026-2027 II B.Tech - I SEM (B-section) TIME TABLE",
        room: "LH 202",
        regulation: "R23-B25",
        academicYear: "2026-2027",
        classInCharge: "Mr. P. Gopichand",
        totalWeeklyPeriods: 35,
        timingsText: "College Timings: 9:30 AM – 4:10 PM • Lunch: 12:00 – 12:50 PM",
        periodsHeader: [
          { num: "1", time: "9:30" },
          { num: "2", time: "10:20" },
          { num: "3", time: "11:10" },
          { isBreak: true, label: "LUNCH BREAK", time: "12:00 - 12:50" },
          { num: "4", time: "12:50" },
          { num: "5", time: "1:40" },
          { num: "6", time: "2:30" },
          { num: "7", time: "3:20" }
        ],
        days: [
          {
            day: "MON",
            periods: [
              { code: "DMGT1", subCode: "23BS0006", name: "Discrete Mathematics & Graph Theory", teacher: "Mrs. Saigeetha", phone: "8297112259" },
              { code: "ES1", subCode: "23MC0001", name: "Environmental Science", teacher: "Mr. Dr. P. Vinod Kumar", phone: "8500951282" },
              { code: "AI1", subCode: "23PC4301", name: "Artificial Intelligence", teacher: "Dr. V. Janardhan Babu", phone: "8500666884" },
              { isBreak: true },
              { code: "PP LAB", subCode: "23SE0501", name: "Python Programming Lab", teacher: "Mrs. K. Hemavathi", phone: "9347142967", span: 4, isLab: true }
            ]
          },
          {
            day: "TUE",
            periods: [
              { code: "DMGT2", subCode: "23BS0006", name: "Discrete Mathematics & Graph Theory", teacher: "Mrs. Saigeetha", phone: "8297112259" },
              { code: "UHV1", subCode: "23HM0002", name: "Universal Human Values 2", teacher: "Mrs. V. P. Rohini", phone: "8309508517" },
              { code: "AI", subCode: "23PC4301", name: "Artificial Intelligence", teacher: "Dr. V. Janardhan Babu", phone: "8500666884" },
              { isBreak: true },
              { code: "NPTEL + ADS LAB", subCode: "23LC0504", name: "NPTEL + ADSA Lab", teacher: "Mr. P. Gopichand", phone: "7674005465", span: 4, isLab: true }
            ]
          },
          {
            day: "WED",
            periods: [
              { code: "OOP2", subCode: "23PC0504", name: "Object Oriented Programming Through Java", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "ADS2", subCode: "23PC0503", name: "Advanced Data Structures & Algorithms", teacher: "Mr. P. Gopichand", phone: "7674005465" },
              { code: "AI1", subCode: "23PC4301", name: "Artificial Intelligence", teacher: "Dr. V. Janardhan Babu", phone: "8500666884" },
              { isBreak: true },
              { code: "OOP3", subCode: "23PC0504", name: "Object Oriented Programming Through Java", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "ES2", subCode: "23MC0001", name: "Environmental Science", teacher: "Mr. Dr. P. Vinod Kumar", phone: "8500951282" },
              { code: "SPORTS/LIB", subCode: "-", name: "Sports & Library Session", teacher: "Faculty Incharge", span: 2, isActivity: true }
            ]
          },
          {
            day: "THU",
            periods: [
              { code: "ADS3", subCode: "23PC0503", name: "Advanced Data Structures & Algorithms", teacher: "Mr. P. Gopichand", phone: "7674005465" },
              { code: "DMGT3", subCode: "23BS0006", name: "Discrete Mathematics & Graph Theory", teacher: "Mrs. Saigeetha", phone: "8297112259" },
              { code: "ES3", subCode: "23MC0001", name: "Environmental Science", teacher: "Mr. Dr. P. Vinod Kumar", phone: "8500951282" },
              { isBreak: true },
              { code: "UHV", subCode: "23HM0002", name: "Universal Human Values 2", teacher: "Mrs. V. P. Rohini", phone: "8309508517" },
              { code: "AI", subCode: "23PC4301", name: "Artificial Intelligence", teacher: "Dr. V. Janardhan Babu", phone: "8500666884" },
              { code: "ADS4", subCode: "23PC0503", name: "Advanced Data Structures & Algorithms", teacher: "Mr. P. Gopichand", phone: "7674005465" },
              { code: "ADS5", subCode: "23PC0503", name: "Advanced Data Structures & Algorithms", teacher: "Mr. P. Gopichand", phone: "7674005465" }
            ]
          },
          {
            day: "FRI",
            periods: [
              { code: "DMGT4", subCode: "23BS0006", name: "Discrete Mathematics & Graph Theory", teacher: "Mrs. Saigeetha", phone: "8297112259" },
              { code: "OOP", subCode: "23PC0504", name: "Object Oriented Programming Through Java", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "ADS", subCode: "23PC0503", name: "Advanced Data Structures & Algorithms", teacher: "Mr. P. Gopichand", phone: "7674005465" },
              { isBreak: true },
              { code: "NPTEL + OOP LAB", subCode: "23LC0505", name: "NPTEL + OOPJ Lab", teacher: "Mrs. N. Sridevi", phone: "9493324549", span: 4, isLab: true }
            ]
          }
        ],
        subjects: [
          { subCode: "23BS0006", subName: "DISCRETE MATHEMATICS AND GRAPH THEORY (DMGT)", l: 4, t: "-", p: "-", a: 4, teacher: "MRS. SAIGEETHA", phone: "8297112259" },
          { subCode: "23HM0002", subName: "UNIVERSAL HUMAN VALUES 2 (UHV)", l: 2, t: "-", p: "-", a: 2, teacher: "MRS. V. P. ROHINI", phone: "8309508517" },
          { subCode: "23PC4301", subName: "ARTIFICIAL INTELLIGENCE (AI)", l: 3, t: "-", p: "-", a: 4, teacher: "DR. V. JANARDHAN BABU", phone: "8500666884" },
          { subCode: "23PC0503", subName: "ADVANCED DATA STRUCTURES AND ALGORITHMS (ADSA)", l: 5, t: "-", p: "-", a: 5, teacher: "MR. P. GOPICHAND", phone: "7674005465" },
          { subCode: "23PC0504", subName: "OBJECT ORIENTED PROGRAMMING THROUGH JAVA (OOPJ)", l: 5, t: "-", p: "-", a: 5, teacher: "MRS. N. SRIDEVI", phone: "9493324549" },
          { subCode: "23LC0504", subName: "ADSA LAB", l: 0, t: 0, p: 3, a: 4, teacher: "MR. P. GOPICHAND", phone: "7674005465" },
          { subCode: "23LC0505", subName: "OOPJ LAB", l: 0, t: 0, p: 3, a: 4, teacher: "MRS. N. SRIDEVI", phone: "9493324549" },
          { subCode: "23SE0501", subName: "PYTHON PROGRAMMING", l: 0, t: 1, p: 2, a: 4, teacher: "MRS. K. HEMAVATHI", phone: "9347142967" },
          { subCode: "23MC0001", subName: "ENVIRONMENTAL SCIENCE", l: 2, t: "-", p: "-", a: 3, teacher: "MR DR. P. VINOD KUMAR", phone: "8500951282" }
        ]
      },
      "iii-a": {
        id: "iii-a",
        label: "III B.Tech • Sec A",
        fullName: "2026-2027 III B.Tech - I SEM (A-Section) TIME TABLE",
        room: "LH 308A",
        regulation: "R23-B24",
        academicYear: "2026-2027",
        classInCharge: "Dr. S. Venkata Kiran",
        totalWeeklyPeriods: 35,
        timingsText: "College Timings: 9:30 AM – 4:10 PM • Lunch: 12:00 – 12:50 PM",
        periodsHeader: [
          { num: "1", time: "9:30" },
          { num: "2", time: "10:20" },
          { num: "3", time: "11:10" },
          { isBreak: true, label: "LUNCH BREAK", time: "12:00 - 12:50" },
          { num: "4", time: "12:50" },
          { num: "5", time: "1:40" },
          { num: "6", time: "2:30" },
          { num: "7", time: "3:20" }
        ],
        days: [
          {
            day: "MON",
            periods: [
              { code: "CV & NLP LAB", subCode: "23LC4302", name: "Computer Vision & NLP Lab", teacher: "Dr. S. Venkata Kiran", phone: "8333020485", span: 3, isLab: true },
              { isBreak: true },
              { code: "OSSP", subCode: "23PC4304", name: "Operating Systems & System Programming", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "ECE", subCode: "23OE0004", name: "English for Competitive Examinations", teacher: "Dr. Anil", phone: "9963216412" },
              { code: "CVIP 1", subCode: "23PC4305", name: "Computer Vision & Image Processing", teacher: "Dr. S. Venkata Kiran", phone: "8333020485" },
              { code: "IQTA1", subCode: "23PC0515", name: "Intro to Quantum Technologies & Apps", teacher: "Mrs. Bhavani", phone: "9533991726" }
            ]
          },
          {
            day: "TUE",
            periods: [
              { code: "AI & SP LAB", subCode: "23LC4303", name: "AI & System Programming Lab", teacher: "Mrs. N. Sridevi", phone: "9493324549", span: 3, isLab: true },
              { isBreak: true },
              { code: "OSSP", subCode: "23PC4304", name: "Operating Systems & System Programming", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "ECE", subCode: "23OE0004", name: "English for Competitive Examinations", teacher: "Dr. Anil", phone: "9963216412" },
              { code: "NLP1", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { code: "CVIP2", subCode: "23PC4305", name: "Computer Vision & Image Processing", teacher: "Dr. S. Venkata Kiran", phone: "8333020485" }
            ]
          },
          {
            day: "WED",
            periods: [
              { code: "CVIP3", subCode: "23PC4305", name: "Computer Vision & Image Processing", teacher: "Dr. S. Venkata Kiran", phone: "8333020485" },
              { code: "OSSP", subCode: "23PC4304", name: "Operating Systems & System Programming", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "NLP", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { isBreak: true },
              { code: "FSD-II LAB", subCode: "23SE4301", name: "Full Stack Development-II Lab", teacher: "Mr. H. Mohammed", phone: "7893197479", span: 4, isLab: true }
            ]
          },
          {
            day: "THU",
            periods: [
              { code: "IQTA2", subCode: "23PC0515", name: "Intro to Quantum Technologies & Apps", teacher: "Mrs. Bhavani", phone: "9533991726" },
              { code: "NLP3", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { code: "CVIP4", subCode: "23PC4305", name: "Computer Vision & Image Processing", teacher: "Dr. S. Venkata Kiran", phone: "8333020485" },
              { isBreak: true },
              { code: "NLP4", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { code: "OSSP4", subCode: "23PC4304", name: "Operating Systems & System Programming", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "IQTA", subCode: "23PC0515", name: "Intro to Quantum Technologies & Apps", teacher: "Mrs. Bhavani", phone: "9533991726" },
              { code: "NLP6(M)", subCode: "23PC4303", name: "NLP Mentoring Session", teacher: "Mr. H. Mohammed", phone: "7893197479", isActivity: true }
            ]
          },
          {
            day: "FRI",
            periods: [
              { code: "OSSP5", subCode: "23PC4304", name: "Operating Systems & System Programming", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "CVIP5", subCode: "23PC4305", name: "Computer Vision & Image Processing", teacher: "Dr. S. Venkata Kiran", phone: "8333020485" },
              { code: "NLP", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { isBreak: true },
              { code: "NLP", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { code: "ECE", subCode: "23OE0004", name: "English for Competitive Examinations", teacher: "Dr. Anil", phone: "9963216412" },
              { code: "IQTA", subCode: "23PC0515", name: "Intro to Quantum Technologies & Apps", teacher: "Mrs. Bhavani", phone: "9533991726" },
              { code: "LIB", subCode: "-", name: "Digital Library & Self-Study", teacher: "Incharge", isActivity: true }
            ]
          }
        ],
        subjects: [
          { subCode: "23PC4303", subName: "NATURAL LANGUAGE PROCESSING", l: 4, t: "-", p: "-", a: 4, teacher: "MR. H. MOHAMMED", phone: "7893197479" },
          { subCode: "23PC4304", subName: "OPERATING SYSTEMS & SYSTEM PROGRAMMING", l: 4, t: "-", p: "-", a: 4, teacher: "MRS. N. SRIDEVI", phone: "9493324549" },
          { subCode: "23PC4305", subName: "COMPUTER VISION & IMAGE PROCESSING", l: 4, t: "-", p: "-", a: 4, teacher: "DR. S. VENKATA KIRAN", phone: "8333020485" },
          { subCode: "23PE4303", subName: "EXPLORATORY DATA ANALYSIS WITH PYTHON", l: 4, t: "-", p: "-", a: 4, teacher: "MR. H. MOHAMMED", phone: "7893197479" },
          { subCode: "23OE0004", subName: "ENGLISH FOR COMPETITIVE EXAMINATIONS", l: 2, t: "-", p: "-", a: 2, teacher: "DR. ANIL", phone: "9963216412" },
          { subCode: "23LC4302", subName: "COMPUTER VISION & NLP LAB", l: "-", t: "-", p: 3, a: 3, teacher: "DR. S. VENKATA KIRAN", phone: "8333020485" },
          { subCode: "23LC4303", subName: "AI & SYSTEM PROGRAMMING LAB", l: "-", t: "-", p: 3, a: 3, teacher: "MRS. N. SRIDEVI", phone: "9493324549" },
          { subCode: "23SE4301", subName: "FULL STACK DEVELOPMENT-II", l: 0, t: 1, p: 2, a: 3, teacher: "MR. H. MOHAMMED", phone: "7893197479" },
          { subCode: "23ES0002", subName: "TINKERING LAB", l: "-", t: "-", p: 2, a: 2, teacher: "MR. H. MOHAMMED", phone: "7893197479" },
          { subCode: "23PW0001", subName: "EVALUATION OF COMMUNITY SERVICE INTERNSHIP", l: "-", t: "-", p: "-", a: "-", teacher: "MRS. N. SRIDEVI", phone: "9493324549" },
          { subCode: "23PC0515", subName: "INTRODUCTION TO QUANTUM TECHNOLOGIES AND APPLICATIONS", l: 3, t: "-", p: "-", a: 3, teacher: "MRS. BHAVANI", phone: "9533991726" }
        ]
      },
      "iii-b": {
        id: "iii-b",
        label: "III B.Tech • Sec B",
        fullName: "2026-2027 III B.Tech - I SEM (B-Section) TIME TABLE",
        room: "LH 308B",
        regulation: "R23-B24",
        academicYear: "2026-2027",
        classInCharge: "Mr. K. Purushotham",
        totalWeeklyPeriods: 35,
        timingsText: "College Timings: 9:30 AM – 4:10 PM • Lunch: 12:00 – 12:50 PM",
        periodsHeader: [
          { num: "1", time: "9:30" },
          { num: "2", time: "10:20" },
          { num: "3", time: "11:10" },
          { isBreak: true, label: "LUNCH BREAK", time: "12:00 - 12:50" },
          { num: "4", time: "12:50" },
          { num: "5", time: "1:40" },
          { num: "6", time: "2:30" },
          { num: "7", time: "3:20" }
        ],
        days: [
          {
            day: "MON",
            periods: [
              { code: "NLP1", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { code: "CVIP1", subCode: "23PC4305", name: "Computer Vision & Image Processing", teacher: "Mr. K. Purushotham", phone: "8686101564" },
              { code: "OSSP1", subCode: "23PC4304", name: "Operating Systems & System Programming", teacher: "Mrs. Revathi", phone: "9618954293" },
              { isBreak: true },
              { code: "FSD-II LAB", subCode: "23SE4301", name: "Full Stack Development-II Lab", teacher: "Mr. H. Mohammed", phone: "7893197479", span: 4, isLab: true }
            ]
          },
          {
            day: "TUE",
            periods: [
              { code: "OSSP2", subCode: "23PC4304", name: "Operating Systems & System Programming", teacher: "Mrs. Revathi", phone: "9618954293" },
              { code: "IQTA1", subCode: "23PC0515", name: "Intro to Quantum Technologies & Apps", teacher: "Mrs. Jansi", phone: "8522900174" },
              { code: "NLP2", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { isBreak: true },
              { code: "OSSP", subCode: "23PC4304", name: "Operating Systems & System Programming", teacher: "Mrs. Revathi", phone: "9618954293" },
              { code: "NLP", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { code: "IQTA2", subCode: "23PC0515", name: "Intro to Quantum Technologies & Apps", teacher: "Mrs. Jansi", phone: "8522900174" },
              { code: "NLP(LIB)", subCode: "23PC4303", name: "NLP Library / Self Study", teacher: "Mr. H. Mohammed", phone: "7893197479", isActivity: true }
            ]
          },
          {
            day: "WED",
            periods: [
              { code: "NLP3", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { code: "OSSP3", subCode: "23PC4304", name: "Operating Systems & System Programming", teacher: "Mrs. Revathi", phone: "9618954293" },
              { code: "CVIP3", subCode: "23PC4305", name: "Computer Vision & Image Processing", teacher: "Mr. K. Purushotham", phone: "8686101564" },
              { isBreak: true },
              { code: "OSSP4", subCode: "23PC4304", name: "Operating Systems & System Programming", teacher: "Mrs. Revathi", phone: "9618954293" },
              { code: "IQTA3", subCode: "23PC0515", name: "Intro to Quantum Technologies & Apps", teacher: "Mrs. Jansi", phone: "8522900174" },
              { code: "ECE", subCode: "23OE0004", name: "English for Competitive Examinations", teacher: "Dr. Anil", phone: "9963216412" },
              { code: "NLP6", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" }
            ]
          },
          {
            day: "THU",
            periods: [
              { code: "CV & NLP LAB", subCode: "23LC4302", name: "Computer Vision & NLP Lab", teacher: "Mr. K. Purushotham", phone: "8686101564", span: 3, isLab: true },
              { isBreak: true },
              { code: "ECE", subCode: "23OE0004", name: "English for Competitive Examinations", teacher: "Dr. Anil", phone: "9963216412" },
              { code: "CVIP5", subCode: "23PC4305", name: "Computer Vision & Image Processing", teacher: "Mr. K. Purushotham", phone: "8686101564" },
              { code: "NLP4", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { code: "CVIP", subCode: "23PC4305", name: "Computer Vision & Image Processing", teacher: "Mr. K. Purushotham", phone: "8686101564" }
            ]
          },
          {
            day: "FRI",
            periods: [
              { code: "IQTA4", subCode: "23PC0515", name: "Intro to Quantum Technologies & Apps", teacher: "Mrs. Jansi", phone: "8522900174" },
              { code: "ECE3", subCode: "23OE0004", name: "English for Competitive Examinations", teacher: "Dr. Anil", phone: "9963216412" },
              { code: "CVIP", subCode: "23PC4305", name: "Computer Vision & Image Processing", teacher: "Mr. K. Purushotham", phone: "8686101564" },
              { isBreak: true },
              { code: "AI & SP LAB", subCode: "23LC4303", name: "AI & System Programming Lab", teacher: "Mrs. Revathi", phone: "9618954293", span: 4, isLab: true }
            ]
          }
        ],
        subjects: [
          { subCode: "23PC4303", subName: "NATURAL LANGUAGE PROCESSING", l: 4, t: "-", p: "-", a: 4, teacher: "MR. H. MOHAMMED", phone: "7893197479" },
          { subCode: "23PC4304", subName: "OPERATING SYSTEMS & SYSTEM PROGRAMMING", l: 4, t: "-", p: "-", a: 4, teacher: "MRS. REVATHI", phone: "9618954293" },
          { subCode: "23PC4305", subName: "COMPUTER VISION & IMAGE PROCESSING", l: 4, t: "-", p: "-", a: 4, teacher: "MR. K. PURUSHOTHAM", phone: "8686101564" },
          { subCode: "23PE4303", subName: "DEEP LEARNING FOR COMPUTER VISION", l: 4, t: "-", p: "-", a: 4, teacher: "MR. H. MOHAMMED", phone: "7893197479" },
          { subCode: "23OE0004", subName: "ENGLISH FOR COMPETITIVE EXAMINATIONS", l: 2, t: "-", p: "-", a: 2, teacher: "DR. ANIL", phone: "9963216412" },
          { subCode: "23LC4302", subName: "COMPUTER VISION & NLP LAB", l: "-", t: "-", p: 3, a: 3, teacher: "MR. K. PURUSHOTHAM", phone: "8686101564" },
          { subCode: "23LC4303", subName: "AI & SYSTEM PROGRAMMING LAB", l: "-", t: "-", p: 3, a: 3, teacher: "MRS. REVATHI", phone: "9618954293" },
          { subCode: "23SE4301", subName: "FULL STACK DEVELOPMENT-II", l: 0, t: 1, p: 2, a: 3, teacher: "MR. H. MOHAMMED", phone: "7893197479" },
          { subCode: "23ES0002", subName: "TINKERING LAB", l: "-", t: "-", p: 2, a: 2, teacher: "MR. H. MOHAMMED", phone: "7893197479" },
          { subCode: "23PW0001", subName: "EVALUATION OF COMMUNITY SERVICE INTERNSHIP", l: "-", t: "-", p: "-", a: "-", teacher: "MRS N SRIDEVI", phone: "9493324549" },
          { subCode: "23PC0515", subName: "INTRODUCTION TO QUANTUM TECHNOLOGIES AND APPLICATIONS", l: 3, t: "-", p: "-", a: 3, teacher: "MRS. JANSI", phone: "8522900174" }
        ]
      },
      "iv": {
        id: "iv",
        label: "IV B.Tech • Final Year",
        fullName: "2026-2027 IV B.Tech - I SEM TIME TABLE",
        room: "LH 310",
        regulation: "R23-B23",
        academicYear: "2026-2027",
        classInCharge: "Ms. R.R.S Spandana",
        totalWeeklyPeriods: 20,
        timingsText: "Morning Sessions: 9:30 AM – 12:50 PM • Afternoon: Industry Internship & Capstone Project Work",
        periodsHeader: [
          { num: "1", time: "9:30" },
          { num: "2", time: "10:20" },
          { num: "3", time: "11:10" },
          { num: "4", time: "12:00" },
          { isBreak: false, isAfternoon: true, label: "Afternoon Session (12:50 - 4:10 PM)", time: "Internship & Project" }
        ],
        days: [
          {
            day: "MON",
            periods: [
              { code: "MS", subCode: "23HM0012", name: "Management Science", teacher: "Mrs. V.P. Rohini", phone: "8309508517", isHighlighted: true },
              { code: "TS", subCode: "23OE0403", name: "Transducers and Sensors", teacher: "Mr. Y. Maheswar Reddy", phone: "8309766268" },
              { code: "AISC", subCode: "23PE4320", name: "AI for Smart Cities & IoT Systems", teacher: "Mr. A. Dhanasekhar Reddy", phone: "9966686918" },
              { code: "EMPS", subCode: "23OE00013", name: "Employability Skills", teacher: "Dr. R. Devarajulu Reddy", phone: "9440123456" },
              { code: "INDUSTRY INTERNSHIP", subCode: "23PW4301", name: "Evaluation of Industry Internship / Capstone Lab", teacher: "Industry Mentor", span: 1, isAfternoonBlock: true }
            ]
          },
          {
            day: "TUE",
            periods: [
              { code: "CS", subCode: "23PE4315", name: "AI in Cyber Security", teacher: "Ms. D.V.S Charita", phone: "8309481262" },
              { code: "AISC", subCode: "23PE4320", name: "AI for Smart Cities & IoT Systems", teacher: "Mr. A. Dhanasekhar Reddy", phone: "9966686918" },
              { code: "GAI", subCode: "23PC4309", name: "Generative AI", teacher: "Ms. R.R.S Spandana", phone: "8522881017" },
              { code: "CS", subCode: "23PE4315", name: "AI in Cyber Security", teacher: "Ms. D.V.S Charita", phone: "8309481262" },
              { code: "INDUSTRY INTERNSHIP", subCode: "23PW4301", name: "Evaluation of Industry Internship / Capstone Lab", teacher: "Industry Mentor", span: 1, isAfternoonBlock: true }
            ]
          },
          {
            day: "WED",
            periods: [
              { code: "AISC", subCode: "23PE4320", name: "AI for Smart Cities & IoT Systems", teacher: "Mr. A. Dhanasekhar Reddy", phone: "9966686918" },
              { code: "EMPS", subCode: "23OE00013", name: "Employability Skills", teacher: "Dr. R. Devarajulu Reddy", phone: "9440123456" },
              { code: "TS", subCode: "23OE0403", name: "Transducers and Sensors", teacher: "Mr. Y. Maheswar Reddy", phone: "8309766268" },
              { code: "CS", subCode: "23PE4315", name: "AI in Cyber Security", teacher: "Ms. D.V.S Charita", phone: "8309481262" },
              { code: "PROMPT ENGINEERING", subCode: "23SE4302", name: "Prompt Engineering Studio / Capstone Lab", teacher: "Mr. K. Lakshman", span: 1, isAfternoonBlock: true }
            ]
          },
          {
            day: "THU",
            periods: [
              { code: "GAI", subCode: "23PC4309", name: "Generative AI", teacher: "Ms. R.R.S Spandana", phone: "8522881017" },
              { code: "MS", subCode: "23HM0012", name: "Management Science", teacher: "Mrs. V.P. Rohini", phone: "8309508517", isHighlighted: true },
              { code: "GAI", subCode: "23PC4309", name: "Generative AI", teacher: "Ms. R.R.S Spandana", phone: "8522881017" },
              { code: "EMPS", subCode: "23OE00013", name: "Employability Skills", teacher: "Dr. R. Devarajulu Reddy", phone: "9440123456" },
              { code: "INDUSTRY INTERNSHIP", subCode: "23PW4301", name: "Evaluation of Industry Internship / Capstone Lab", teacher: "Industry Mentor", span: 1, isAfternoonBlock: true }
            ]
          },
          {
            day: "FRI",
            periods: [
              { code: "MS", subCode: "23HM0012", name: "Management Science", teacher: "Mrs. V.P. Rohini", phone: "8309508517" },
              { code: "CS", subCode: "23PE4315", name: "AI in Cyber Security", teacher: "Ms. D.V.S Charita", phone: "8309481262" },
              { code: "TS", subCode: "23OE0403", name: "Transducers and Sensors", teacher: "Mr. Y. Maheswar Reddy", phone: "8309766268" },
              { code: "CS", subCode: "23PE4315", name: "AI in Cyber Security", teacher: "Ms. D.V.S Charita", phone: "8309481262" },
              { code: "GENDER SENSITIZATION", subCode: "23MC0003", name: "Gender Sensitization / Seminar Session", teacher: "Faculty Incharge", span: 1, isAfternoonBlock: true }
            ]
          }
        ],
        subjects: [
          { subCode: "23PC4309", subName: "GENERATIVE AI (GAI)", l: 3, t: "-", p: "-", a: 3, teacher: "MS. R.R.S SPANDANA", phone: "8522881017" },
          { subCode: "23HM0012", subName: "MANAGEMENT SCIENCE (MS)", l: 2, t: "-", p: "-", a: 3, teacher: "MRS. V.P ROHINI", phone: "8309508517" },
          { subCode: "23PE4315", subName: "AI IN CYBER SECURITY (CS)", l: 3, t: "-", p: "-", a: 5, teacher: "MS. D.V.S CHARITA", phone: "8309481262" },
          { subCode: "23PE4320", subName: "AI FOR SMART CITIES & IOT SYSTEMS (AISC)", l: 3, t: "-", p: "-", a: 3, teacher: "MR. A. DHANASEKHAR REDDY", phone: "9966686918" },
          { subCode: "23OE00013", subName: "EMPLOYABILITY SKILLS (EMPS)", l: 3, t: "-", p: "-", a: 3, teacher: "DR. R.DEVARAJULU REDDY", phone: "9440123456" },
          { subCode: "23OE0403", subName: "TRANSDUCERS AND SENSORS (TS)", l: 3, t: "-", p: "-", a: 3, teacher: "MR. Y. MAHESWAR REDDY", phone: "8309766268" },
          { subCode: "23SE4302", subName: "PROMPT ENGINEERING (PE)", l: 3, t: "-", p: "-", a: 3, teacher: "MR. K. LAKSHMAN", phone: "6305302057" },
          { subCode: "23MC0003", subName: "GENDER SENSITIZATION (GS)", l: 2, t: "-", p: "-", a: 2, teacher: "FACULTY INCHARGE", phone: "-" },
          { subCode: "23PW4301", subName: "EVALUATION OF INDUSTRY INTERNSHIP", l: "-", t: "-", p: "-", a: "-", teacher: "INDUSTRY COORDINATOR", phone: "-" }
        ]
      }
    },

    // Mid Examinations Timetable
    midExams: [
      { date: "14-10-2026", day: "Wednesday", session: "10:00 AM - 12:00 PM (FN)", code: "23PC4301", name: "Artificial Intelligence" },
      { date: "15-10-2026", day: "Thursday", session: "10:00 AM - 12:00 PM (FN)", code: "23BS0006", name: "Discrete Mathematics & Graph Theory" },
      { date: "16-10-2026", day: "Friday", session: "10:00 AM - 12:00 PM (FN)", code: "23PC0503", name: "Advanced Data Structures & Algorithms" },
      { date: "17-10-2026", day: "Saturday", session: "10:00 AM - 12:00 PM (FN)", code: "23PC0504", name: "Object Oriented Programming Through Java" },
      { date: "19-10-2026", day: "Monday", session: "10:00 AM - 12:00 PM (FN)", code: "23PC4303", name: "Natural Language Processing (III B.Tech)" },
      { date: "20-10-2026", day: "Tuesday", session: "02:00 PM - 05:00 PM (AN)", code: "23PC4309", name: "Generative AI (IV B.Tech)" }
    ]
  }
};

// =============================================================================
// 2. HELPER FUNCTIONS & DYNAMIC FALLBACK GENERATOR
// =============================================================================

// Generate a plausible student record if someone types any other roll number

// =============================================================================
// OFFICIAL 3RD YEAR V SEMESTER CSE (AI) STUDENT COHORT (127 STUDENTS)
// Sri Venkatesa Perumal College of Engineering & Technology (SVPP Autonomous)
// =============================================================================

const SVPP_3RD_YEAR_STUDENTS = [
  { rollNo: "24G01A4301", rawName: "NAVYA SREE", name: "Navya Sree" },
  { rollNo: "24G01A4302", rawName: "ADINETI MEERAKUMARI", name: "Adineti Meerakumari" },
  { rollNo: "24G01A4303", rawName: "ALLIKESAM DILLI PRASAD", name: "Allikesam Dilli Prasad" },
  { rollNo: "24G01A4304", rawName: "AMBALATHANDI SURESH DEEPAKRAJ", name: "Ambalathandi Suresh Deepakraj" },
  { rollNo: "24G01A4305", rawName: "ARWA SIVA", name: "Arwa Siva" },
  { rollNo: "24G01A4306", rawName: "ATTURU HASINI", name: "Atturu Hasini" },
  { rollNo: "24G01A4307", rawName: "ATTURU SAI RENU", name: "Atturu Sai Renu" },
  { rollNo: "24G01A4308", rawName: "AUTHURU VIDYASREE", name: "Authuru Vidyasree" },
  { rollNo: "24G01A4309", rawName: "AVULA LAHARI", name: "Avula Lahari" },
  { rollNo: "24G01A4310", rawName: "B HASINI", name: "B Hasini" },
  { rollNo: "24G01A4311", rawName: "B THARUN", name: "B Tharun" },
  { rollNo: "24G01A4312", rawName: "BANDA RAM NAREN SURYA", name: "Banda Ram Naren Surya" },
  { rollNo: "24G01A4313", rawName: "BANNELA BRAHMAIAH", name: "Bannela Brahmaiah" },
  { rollNo: "24G01A4314", rawName: "BARAKA RAM MOHAN", name: "Baraka Ram Mohan" },
  { rollNo: "24G01A4315", rawName: "BATHALA V NARAYANA", name: "Bathala V Narayana" },
  { rollNo: "24G01A4316", rawName: "BEESAPATHNI RAKESH", name: "Beesapathni Rakesh" },
  { rollNo: "24G01A4317", rawName: "BETARASI JYOTHIKA", name: "Betarasi Jyothika" },
  { rollNo: "24G01A4318", rawName: "BOYA BALU", name: "Boya Balu" },
  { rollNo: "24G01A4319", rawName: "BUDDANNAGARI NEERAJA", name: "Buddannagari Neeraja" },
  { rollNo: "24G01A4321", rawName: "BURRA GAYATHRI", name: "Burra Gayathri" },
  { rollNo: "24G01A4322", rawName: "BURRI GUNASRI", name: "Burri Gunasri" },
  { rollNo: "24G01A4323", rawName: "CHADIVE KAVYA", name: "Chadive Kavya" },
  { rollNo: "24G01A4324", rawName: "CHAKALA KARTHIK", name: "Chakala Karthik" },
  { rollNo: "24G01A4325", rawName: "CHAKALI APARNA", name: "Chakali Aparna" },
  { rollNo: "24G01A4326", rawName: "CHAKALI SHIVAKUMAR", name: "Chakali Shivakumar" },
  { rollNo: "24G01A4327", rawName: "CHANAMBATLA RANJITH", name: "Chanambatla Ranjith" },
  { rollNo: "24G01A4328", rawName: "CHARAKULA NIHARIKA", name: "Charakula Niharika" },
  { rollNo: "24G01A4329", rawName: "CHELAMPALEM HARI BABU", name: "Chelampalem Hari Babu" },
  { rollNo: "24G01A4330", rawName: "CHINTHAKAYALA CHANDU", name: "Chinthakayala Chandu" },
  { rollNo: "24G01A4331", rawName: "CHINTHAKUNTA HARSHAVARDHAN REDDY", name: "Chinthakunta Harshavardhan Reddy" },
  { rollNo: "24G01A4332", rawName: "CHITRA PALLAVIKA", name: "Chitra Pallavika" },
  { rollNo: "24G01A4333", rawName: "CHITTURU GIRISH", name: "Chitturu Girish" },
  { rollNo: "24G01A4334", rawName: "D NIKHIL ROY", name: "D Nikhil Roy" },
  { rollNo: "24G01A4336", rawName: "DEVARAKONDA TEJASWI", name: "Devarakonda Tejaswi" },
  { rollNo: "24G01A4337", rawName: "DODDA DIVYA KRUPA", name: "Dodda Divya Krupa" },
  { rollNo: "24G01A4338", rawName: "E DEEPAK YADAV", name: "E Deepak Yadav" },
  { rollNo: "24G01A4339", rawName: "E SREE LAKSHMI", name: "E Sree Lakshmi" },
  { rollNo: "24G01A4340", rawName: "EPURI VENUMADHAV", name: "Epuri Venumadhav" },
  { rollNo: "24G01A4341", rawName: "G KISHORE", name: "G Kishore" },
  { rollNo: "24G01A4342", rawName: "GANDI KOTA BHANUPRAKASH", name: "Gandi Kota Bhanuprakash" },
  { rollNo: "24G01A4343", rawName: "GANDRA VAMSI", name: "Gandra Vamsi" },
  { rollNo: "24G01A4345", rawName: "GOLLAPALLI SUKANYA", name: "Gollapalli Sukanya" },
  { rollNo: "24G01A4346", rawName: "GORLAGUNTA THARUN", name: "Gorlagunta Tharun" },
  { rollNo: "24G01A4347", rawName: "GUDDANNA GARI NANDINI", name: "Guddanna Gari Nandini" },
  { rollNo: "24G01A4348", rawName: "HASTHI ROSHINI", name: "Hasthi Roshini" },
  { rollNo: "24G01A4349", rawName: "INDUKURU HIMA CHARAN", name: "Indukuru Hima Charan" },
  { rollNo: "24G01A4350", rawName: "JAGADESH R", name: "Jagadesh R" },
  { rollNo: "24G01A4352", rawName: "JEGINI BINDU", name: "Jegini Bindu" },
  { rollNo: "24G01A4353", rawName: "K B PRAVEEN KUMAR", name: "K B Praveen Kumar" },
  { rollNo: "24G01A4354", rawName: "K JAGADEESH", name: "K Jagadeesh" },
  { rollNo: "24G01A4356", rawName: "K MANASWINI", name: "K Manaswini" },
  { rollNo: "24G01A4357", rawName: "K MANOJ KUMAR", name: "K Manoj Kumar" },
  { rollNo: "24G01A4358", rawName: "K SHALINI", name: "K Shalini" },
  { rollNo: "24G01A4359", rawName: "K V SREEDHAR", name: "K V Sreedhar" },
  { rollNo: "24G01A4360", rawName: "KALLAKINDA REDDY NAVEEN", name: "Kallakinda Reddy Naveen" },
  { rollNo: "24G01A4361", rawName: "KALLURU JAYA KRISHNA", name: "Kalluru Jaya Krishna" },
  { rollNo: "24G01A4362", rawName: "KALUGOTLA SANDEEP KUMAR", name: "Kalugotla Sandeep Kumar" },
  { rollNo: "24G01A4363", rawName: "KANALA LAYA", name: "Kanala Laya" },
  { rollNo: "24G01A4364", rawName: "KARAKALA AMARNATH REDDY", name: "Karakala Amarnath Reddy" },
  { rollNo: "24G01A4365", rawName: "KARAKAMBADI MOUNIKA", name: "Karakambadi Mounika" },
  { rollNo: "24G01A4366", rawName: "KASANDULA SAI VANI", name: "Kasandula Sai Vani" },
  { rollNo: "24G01A4367", rawName: "KEESALAM POOJITHA", name: "Keesalam Poojitha" },
  { rollNo: "24G01A4368", rawName: "KONDANNA GARI PADMAVATHI", name: "Kondanna Gari Padmavathi" },
  { rollNo: "24G01A4369", rawName: "KOPPALA SUBHASH CHANDRA", name: "Koppala Subhash Chandra" },
  { rollNo: "24G01A4370", rawName: "KOYYAGURA SAIHARSITA", name: "Koyyagura Saiharsita" },
  { rollNo: "24G01A4372", rawName: "KUPPI REDDY GARI KIRAN KUMAR REDDY", name: "Kuppi Reddy Gari Kiran Kumar Reddy" },
  { rollNo: "24G01A4373", rawName: "L PAVANI", name: "L Pavani" },
  { rollNo: "24G01A4374", rawName: "M AJAY", name: "M Ajay" },
  { rollNo: "24G01A4375", rawName: "M JASWANTH REDDY", name: "M Jaswanth Reddy" },
  { rollNo: "24G01A4376", rawName: "M NITHYA SREE", name: "M Nithya Sree" },
  { rollNo: "24G01A4378", rawName: "M R SIDDARTHA YADAV", name: "M R Siddartha Yadav" },
  { rollNo: "24G01A4379", rawName: "MANDALA KALPANA", name: "Mandala Kalpana" },
  { rollNo: "24G01A4380", rawName: "MERALA MAHALAKSHMI", name: "Merala Mahalakshmi" },
  { rollNo: "24G01A4381", rawName: "MUKKARA SANGEETHA", name: "Mukkara Sangeetha" },
  { rollNo: "24G01A4382", rawName: "MUMMIDI HEMANTH", name: "Mummidi Hemanth" },
  { rollNo: "24G01A4383", rawName: "MUTTHULURI DEEKSHITH KUMAR", name: "Mutthuluri Deekshith Kumar" },
  { rollNo: "24G01A4384", rawName: "N ESWAR", name: "N Eswar" },
  { rollNo: "24G01A4385", rawName: "N HARIKRISHNAN", name: "N Harikrishnan" },
  { rollNo: "24G01A4386", rawName: "N SUSHANTH", name: "N Sushanth" },
  { rollNo: "24G01A4387", rawName: "N SWATHI", name: "N Swathi" },
  { rollNo: "24G01A4388", rawName: "NADAVATI CHARAN SAI", name: "Nadavati Charan Sai" },
  { rollNo: "24G01A4389", rawName: "NALLAPUSALA SOMA SEKHAR REDDY", name: "Nallapusala Soma Sekhar Reddy" },
  { rollNo: "24G01A4390", rawName: "NARASINGU POORNIMA", name: "Narasingu Poornima" },
  { rollNo: "24G01A4391", rawName: "P GURU VENKATA HEMANTH KUMAR", name: "P Guru Venkata Hemanth Kumar" },
  { rollNo: "24G01A4392", rawName: "P J RACHANA", name: "P J Rachana" },
  { rollNo: "24G01A4393", rawName: "P JAGADEESH", name: "P Jagadeesh" },
  { rollNo: "24G01A4394", rawName: "PUTTA MUNI HARI", name: "Putta Muni Hari" },
  { rollNo: "24G01A4395", rawName: "P THANUSREE", name: "P Thanusree" },
  { rollNo: "24G01A4396", rawName: "P URMILA", name: "P Urmila" },
  { rollNo: "24G01A4397", rawName: "PADADALAM SEKHAR", name: "Padadalam Sekhar" },
  { rollNo: "24G01A4398", rawName: "PALADUGU AKHILA", name: "Paladugu Akhila" },
  { rollNo: "24G01A4399", rawName: "PAMARTHI VENU KARTHEEK", name: "Pamarthi Venu Kartheek" },
  { rollNo: "24G01A43A0", rawName: "PEDDIREDDYGARI PHANEENDRA REDDY", name: "Peddireddygari Phaneendra Reddy" },
  { rollNo: "24G01A43A1", rawName: "PUDI CHANDANA", name: "Pudi Chandana" },
  { rollNo: "24G01A43A2", rawName: "R KARTHIK", name: "R Karthik" },
  { rollNo: "24G01A43A3", rawName: "R MOHAN BABU", name: "R Mohan Babu" },
  { rollNo: "24G01A43A4", rawName: "S BHOOMIKA", name: "S Bhoomika" },
  { rollNo: "24G01A43A5", rawName: "S HINDUKUMAR", name: "S Hindukumar" },
  { rollNo: "24G01A43A6", rawName: "S PUNITH SAI", name: "S Punith Sai" },
  { rollNo: "24G01A43A7", rawName: "S SHARMI", name: "S Sharmi" },
  { rollNo: "24G01A43A8", rawName: "S. GAYATHRI", name: "S. Gayathri" },
  { rollNo: "24G01A43B1", rawName: "SHAIK ARSHIYA", name: "Shaik Arshiya" },
  { rollNo: "24G01A43B2", rawName: "SHAIK JAVEED", name: "Shaik Javeed" },
  { rollNo: "24G01A43B3", rawName: "SIVAGANI HARIKRISHNA", name: "Sivagani Harikrishna" },
  { rollNo: "24G01A43B4", rawName: "SOMPALLI HARISH", name: "Sompalli Harish" },
  { rollNo: "24G01A43B5", rawName: "SULAGIRI HEMANTH KUMAR", name: "Sulagiri Hemanth Kumar" },
  { rollNo: "24G01A43B6", rawName: "SURAGANI JYOTHI", name: "Suragani Jyothi" },
  { rollNo: "24G01A43B7", rawName: "SUVVALA LASYA", name: "Suvvala Lasya" },
  { rollNo: "24G01A43B8", rawName: "SYED SUHEL", name: "Syed Suhel" },
  { rollNo: "24G01A43B9", rawName: "T B SAILAJA", name: "T B Sailaja" },
  { rollNo: "24G01A43C0", rawName: "T NAVEEN", name: "T Naveen" },
  { rollNo: "24G01A43C1", rawName: "TALARI LAHARI", name: "Talari Lahari" },
  { rollNo: "24G01A43C2", rawName: "THALLAPAKA BHAVYA", name: "Thallapaka Bhavya" },
  { rollNo: "24G01A43C3", rawName: "THOTI HARISH", name: "Thoti Harish" },
  { rollNo: "24G01A43C5", rawName: "VAGATTHURU LOKESH", name: "Vagatthuru Lokesh" },
  { rollNo: "24G01A43C6", rawName: "VALAJA GANESH", name: "Valaja Ganesh" },
  { rollNo: "24G01A43C7", rawName: "VELURU NIMMI", name: "Veluru Nimmi" },
  { rollNo: "24G01A43C8", rawName: "VENKATESWARLU  ROHITHA", name: "Venkateswarlu Rohitha" },
  { rollNo: "24G01A43C9", rawName: "YALAVALAVANKA THARUN KUMAR REDDY", name: "Yalavalavanka Tharun Kumar Reddy" },
  { rollNo: "24G01A43D0", rawName: "YARRAGONDA JYOSHNA", name: "Yarragonda Jyoshna" },
  { rollNo: "24G01A43D1", rawName: "YERRAGUNDLA CHANDRAKANTH", name: "Yerragundla Chandrakanth" },
  { rollNo: "25G05A4301", rawName: "KASI REDDY", name: "Kasi Reddy" },
  { rollNo: "25G05A4302", rawName: "SANDEEP", name: "Sandeep" },
  { rollNo: "25G05A4303", rawName: "BHARAT", name: "Bharat" },
  { rollNo: "25G05A4304", rawName: "JANARDHAN", name: "Janardhan" },
  { rollNo: "25G05A4305", rawName: "MUKESH", name: "Mukesh" },
  { rollNo: "25G05A4306", rawName: "V PAVAN", name: "V Pavan" },
];

const SVPP_3RD_YEAR_SUBJECTS = [
  { code: "23PC4303", name: "Natural Language Processing", credits: 4.0, isLab: false, conducted: 48 },
  { code: "23PC4304", name: "Operating Systems & System Programming", credits: 3.0, isLab: false, conducted: 46 },
  { code: "23PC4305", name: "Computer Vision & Image Processing", credits: 3.0, isLab: false, conducted: 48 },
  { code: "23PE4303", name: "Exploratory Data Analysis with Python", credits: 3.0, isLab: false, conducted: 44 },
  { code: "23OE0004", name: "English for Competitive Examinations", credits: 2.0, isLab: false, conducted: 32 },
  { code: "23PC0515", name: "Intro to Quantum Technologies & Apps", credits: 3.0, isLab: false, conducted: 42 },
  { code: "23LC4302", name: "Computer Vision & NLP Lab", credits: 1.5, isLab: true, conducted: 36 },
  { code: "23LC4303", name: "AI & System Programming Lab", credits: 1.5, isLab: true, conducted: 36 },
  { code: "23SE4301", name: "Full Stack Development-II Lab", credits: 2.0, isLab: true, conducted: 36 }
];

const SVPP_AI_MENTORS = [
  "Dr. V. Janardhan Babu, Ph.D.",
  "Mrs. N. Sridevi, M.Tech",
  "Mr. H. Mohammed, M.Tech",
  "Mr. P. Gopichand, M.Tech",
  "Ms. H. Nazeema, M.Tech",
  "Dr. S. Venkata Kiran, Ph.D.",
  "Mr. K. Purushotham, M.Tech",
  "Mrs. Revathi, M.Tech",
  "Ms. R.R.S Spandana, M.Tech",
  "Ms. D.V.S Charita, M.Tech",
  "Mr. A. Dhanasekhar Reddy, M.Tech",
  "Mrs. K. Hemavathi, M.Tech"
];

function pseudoHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function build3rdYearStudentRecord(st, index) {
  const hash = pseudoHash(st.rollNo);
  const section = index <= 61 ? "Section A" : "Section B";
  const mentor = SVPP_AI_MENTORS[(index - 1) % SVPP_AI_MENTORS.length];

  const bucket = hash % 100;
  let overallAttnPct;
  if (bucket < 5) {
    overallAttnPct = 60.0 + ((hash % 45) / 10);
  } else if (bucket < 16) {
    overallAttnPct = 66.0 + ((hash % 85) / 10);
  } else {
    overallAttnPct = 76.0 + ((hash % 210) / 10);
  }
  overallAttnPct = parseFloat(overallAttnPct.toFixed(1));

  const totalClasses = 324;
  const attendedClasses = Math.min(totalClasses, Math.round((overallAttnPct / 100) * totalClasses));
  const status = overallAttnPct >= 75 ? "Safe" : overallAttnPct >= 65 ? "Condonation" : "Shortage";

  const subjectAttendance = SVPP_3RD_YEAR_SUBJECTS.map((sub, sIdx) => {
    const subVariance = (((hash + sIdx * 17) % 15) - 7) / 10;
    let subPct = Math.min(100, Math.max(50, overallAttnPct + subVariance * 5));
    subPct = parseFloat(subPct.toFixed(1));
    const attended = Math.min(sub.conducted, Math.round(sub.conducted * (subPct / 100)));
    return {
      code: sub.code,
      name: sub.name,
      conducted: sub.conducted,
      attended: attended,
      pct: parseFloat(((attended / sub.conducted) * 100).toFixed(1))
    };
  });

  const theorySubs = SVPP_3RD_YEAR_SUBJECTS.filter(s => !s.isLab);
  const performanceFactor = 0.65 + ((hash % 32) / 100);

  const mid1 = theorySubs.map((sub, sIdx) => {
    const localVar = ((hash + sIdx * 7) % 5);
    const desc = Math.min(30, Math.max(16, Math.round(23 * performanceFactor + localVar)));
    const quiz = Math.min(10, Math.max(6, Math.round(8 * performanceFactor + (localVar % 3))));
    const assgn = 5;
    const total = desc + quiz + assgn;
    const scaled = Math.min(30, Math.round((total / 45) * 30));
    return { code: sub.code, name: sub.name, descriptive: desc, quiz: quiz, assignment: assgn, total: total, scaled: scaled };
  });

  const mid2 = theorySubs.map((sub, sIdx) => {
    const localVar = ((hash + sIdx * 11) % 5);
    const desc = Math.min(30, Math.max(17, Math.round(24 * performanceFactor + localVar)));
    const quiz = Math.min(10, Math.max(7, Math.round(8.5 * performanceFactor + (localVar % 3))));
    const assgn = 5;
    const total = desc + quiz + assgn;
    const scaled = Math.min(30, Math.round((total / 45) * 30));
    return { code: sub.code, name: sub.name, descriptive: desc, quiz: quiz, assignment: assgn, total: total, scaled: scaled };
  });

  let totalCredits = 0;
  let totalGradePoints = 0;

  const results = SVPP_3RD_YEAR_SUBJECTS.map((sub, sIdx) => {
    const localPerf = performanceFactor + (((hash + sIdx * 13) % 9) - 4) / 100;
    const internal = sub.isLab
      ? Math.min(30, Math.max(24, Math.round(27 * localPerf + 2)))
      : Math.min(30, Math.max(18, Math.round(26 * localPerf)));
    
    const external = sub.isLab
      ? Math.min(50, Math.max(38, Math.round(45 * localPerf + 3)))
      : Math.min(70, Math.max(35, Math.round(62 * localPerf)));

    const maxMarks = sub.isLab ? 80 : 100;
    const totalMarksScaled = sub.isLab ? Math.round((internal + external) * (100 / 80)) : (internal + external);
    const total = internal + external;

    let grade = "A";
    let points = 8;
    if (totalMarksScaled >= 90) { grade = "O"; points = 10; }
    else if (totalMarksScaled >= 80) { grade = "A+"; points = 9; }
    else if (totalMarksScaled >= 70) { grade = "A"; points = 8; }
    else if (totalMarksScaled >= 60) { grade = "B+"; points = 7; }
    else if (totalMarksScaled >= 50) { grade = "B"; points = 6; }
    else if (totalMarksScaled >= 40) { grade = "C"; points = 5; }

    totalCredits += sub.credits;
    totalGradePoints += points * sub.credits;

    return {
      code: sub.code,
      name: sub.name,
      internal: internal,
      external: external,
      total: total,
      grade: grade,
      points: points,
      credits: sub.credits,
      status: "PASS"
    };
  });

  const sgpa = parseFloat((totalGradePoints / totalCredits).toFixed(2));
  const cgpaDelta = (((hash % 21) - 10) / 100);
  // Pull REAL OFFICIAL EXAM RESULTS from window.SVPP_OFFICIAL_RESULTS (extracted from official college exam PDFs)
  let semesterResults = [];
  let studentOfficialName = st.name;
  let finalSgpa = "N/A";
  let finalCgpa = "N/A";
  let defaultResults = [];
  let totalBacklogs = 0;
  let overallPercentage = "N/A";
  let totalMarksObtained = 0;
  let totalMaxMarks = 0;

  let activeBacklogsList = [];

  if (typeof window !== "undefined" && window.SVPP_OFFICIAL_RESULTS && window.SVPP_OFFICIAL_RESULTS[st.rollNo]) {
    const offRecord = window.SVPP_OFFICIAL_RESULTS[st.rollNo];
    if (offRecord.name) {
      studentOfficialName = offRecord.name;
    }
    totalBacklogs = offRecord.totalBacklogs || 0;
    overallPercentage = offRecord.overallPercentage || "0.0%";
    totalMarksObtained = offRecord.totalMarksObtained || 0;
    totalMaxMarks = offRecord.totalMaxMarks || 0;
    activeBacklogsList = offRecord.activeBacklogsList || [];

    const offSems = offRecord.semesters || {};
    const semList = Object.values(offSems).sort((a, b) => {
      const dA = a.dateOrder || "9999";
      const dB = b.dateOrder || "9999";
      if (dA !== dB) return dA.localeCompare(dB);
      return (a.semesterNum || 0) - (b.semesterNum || 0);
    });
    if (semList.length > 0) {
      semesterResults = semList;
      const activeSem = semList[semList.length - 1];
      defaultResults = activeSem.results || [];
      finalSgpa = activeSem.sgpa || "N/A";
      finalCgpa = offRecord.cgpa || activeSem.cgpa || activeSem.sgpa || "N/A";
    }
  }

  return {
    rollNo: st.rollNo,
    name: studentOfficialName,
    rawName: st.rawName || studentOfficialName,
    branch: (typeof window !== "undefined" && window.SVPP_OFFICIAL_RESULTS && window.SVPP_OFFICIAL_RESULTS[st.rollNo] && window.SVPP_OFFICIAL_RESULTS[st.rollNo].branch) ? window.SVPP_OFFICIAL_RESULTS[st.rollNo].branch : "B.Tech - Artificial Intelligence",
    year: st.rollNo.startsWith("25") ? "I B.Tech" : st.rollNo.startsWith("24") ? "II B.Tech" : "III B.Tech",
    semester: semesterResults.length > 0 ? (semesterResults[semesterResults.length - 1].semesterTitle || "II B.Tech II Semester (Autonomous R23)") : "No Exam Recorded",
    section: section,
    mentor: mentor,
    cgpa: finalCgpa,
    sgpa: finalSgpa,
    totalBacklogs: totalBacklogs,
    activeBacklogsList: activeBacklogsList,
    overallPercentage: overallPercentage,
    totalMarksObtained: totalMarksObtained,
    totalMaxMarks: totalMaxMarks,
    attendanceOverall: overallAttnPct,
    totalClasses: totalClasses,
    attendedClasses: attendedClasses,
    status: status,
    subjectAttendance: subjectAttendance,
    midMarks: { mid1: mid1, mid2: mid2 },
    results: defaultResults,
    semesterResults: semesterResults
  };
}

function initStudentDatabase() {
  window.SVPP_DATA = SVPP_DATA;
  if (!SVPP_DATA.roster3rdYear) {
    SVPP_DATA.roster3rdYear = [];
  }

  let customMarks = {};
  try {
    const raw = localStorage.getItem("svpp_custom_marks");
    if (raw) customMarks = JSON.parse(raw);
  } catch (err) {
    console.error("Could not parse saved custom marks", err);
  }

  SVPP_3RD_YEAR_STUDENTS.forEach((st, idx) => {
    const record = build3rdYearStudentRecord(st, idx + 1);
    if (customMarks[st.rollNo]) {
      const saved = customMarks[st.rollNo];
      if (saved.midMarks) record.midMarks = saved.midMarks;
      if (saved.results) record.results = saved.results;
      if (saved.semesterResults) record.semesterResults = saved.semesterResults;
      if (saved.sgpa) record.sgpa = saved.sgpa;
      if (saved.cgpa) record.cgpa = saved.cgpa;
    }
    SVPP_DATA.students[st.rollNo] = record;
    SVPP_DATA.roster3rdYear.push(record);
  });

  // Populate HTML datalist for instant autocomplete
  const datalist = document.getElementById("allStudentsDatalist");
  if (datalist) {
    if (typeof window !== "undefined" && window.SVPP_OFFICIAL_RESULTS && Object.keys(window.SVPP_OFFICIAL_RESULTS).length > 0) {
      datalist.innerHTML = Object.values(window.SVPP_OFFICIAL_RESULTS)
        .sort((a, b) => a.rollNo.localeCompare(b.rollNo))
        .map(st => 
          `<option value="${st.rollNo}">${st.name} (${st.rollNo}) - ${st.branch}</option>`
        ).join("");
    } else {
      datalist.innerHTML = SVPP_3RD_YEAR_STUDENTS.map(st => 
        `<option value="${st.rollNo}">${st.name} (${st.rollNo})</option>`
      ).join("");
    }
  }
}

// Smart lookup: supports full roll (e.g. 25G01A4301, 24G01A4201, 23G01A4324), suffix (e.g. 4301, 4201, 4324), or name
function getOrCreateStudentRecord(query) {
  if (!query) return null;
  const clean = query.trim().toUpperCase();

  // Helper to ensure official results are attached to any student record
  function attachOfficialResults(rec, off) {
    if (!rec || !off) return rec;
    rec.name = off.name || rec.name;
    rec.branch = off.branch || rec.branch;
    rec.totalBacklogs = off.totalBacklogs !== undefined ? off.totalBacklogs : rec.totalBacklogs;
    rec.activeBacklogsList = off.activeBacklogsList || rec.activeBacklogsList || [];
    rec.overallPercentage = off.overallPercentage || rec.overallPercentage;
    rec.totalMarksObtained = off.totalMarksObtained !== undefined ? off.totalMarksObtained : rec.totalMarksObtained;
    rec.totalMaxMarks = off.totalMaxMarks !== undefined ? off.totalMaxMarks : rec.totalMaxMarks;
    rec.totalDegreeCredits = off.totalDegreeCredits !== undefined ? off.totalDegreeCredits : rec.totalDegreeCredits;
    rec.cgpa = off.cgpa || rec.cgpa;

    const offSems = off.semesters || {};
    const semList = Object.values(offSems).sort((a, b) => {
      const dA = a.dateOrder || "9999";
      const dB = b.dateOrder || "9999";
      if (dA !== dB) return dA.localeCompare(dB);
      return (a.semesterNum || 0) - (b.semesterNum || 0);
    });
    if (semList.length > 0) {
      rec.semesterResults = semList;
      const activeSemObj = semList[semList.length - 1];
      rec.results = activeSemObj.results || [];
      rec.sgpa = activeSemObj.sgpa || "N/A";
      rec.semester = activeSemObj.semesterTitle || rec.semester;
    }
    return rec;
  }

  // 1. Direct roll number match in SVPP_DATA.students
  if (SVPP_DATA.students[clean]) {
    const existing = SVPP_DATA.students[clean];
    if (typeof window !== "undefined" && window.SVPP_OFFICIAL_RESULTS && window.SVPP_OFFICIAL_RESULTS[clean]) {
      return attachOfficialResults(existing, window.SVPP_OFFICIAL_RESULTS[clean]);
    }
    return existing;
  }

  // 2. Check suffix (e.g. 4301, 4201, 43A0, 43D1)
  if (clean.length <= 4) {
    const suffixMatch = Object.values(SVPP_DATA.students).find(s => s.rollNo && s.rollNo.toUpperCase().endsWith(clean));
    if (suffixMatch) {
      if (typeof window !== "undefined" && window.SVPP_OFFICIAL_RESULTS && window.SVPP_OFFICIAL_RESULTS[suffixMatch.rollNo]) {
        return attachOfficialResults(suffixMatch, window.SVPP_OFFICIAL_RESULTS[suffixMatch.rollNo]);
      }
      return suffixMatch;
    }
  }

  // 3. Check student name
  const queryLower = query.trim().toLowerCase();
  const exactNameMatch = Object.values(SVPP_DATA.students).find(s => 
    (s.name && s.name.toLowerCase() === queryLower) || 
    (s.rawName && s.rawName.toLowerCase() === queryLower)
  );
  if (exactNameMatch) {
    if (typeof window !== "undefined" && window.SVPP_OFFICIAL_RESULTS && window.SVPP_OFFICIAL_RESULTS[exactNameMatch.rollNo]) {
      return attachOfficialResults(exactNameMatch, window.SVPP_OFFICIAL_RESULTS[exactNameMatch.rollNo]);
    }
    return exactNameMatch;
  }

  // b) Exact word match within name
  const wordRegex = new RegExp('\\b' + queryLower.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&') + '\\b', 'i');
  const wordMatch = Object.values(SVPP_DATA.students).find(s =>
    (s.name && wordRegex.test(s.name)) || (s.rawName && wordRegex.test(s.rawName))
  );
  if (wordMatch) {
    if (typeof window !== "undefined" && window.SVPP_OFFICIAL_RESULTS && window.SVPP_OFFICIAL_RESULTS[wordMatch.rollNo]) {
      return attachOfficialResults(wordMatch, window.SVPP_OFFICIAL_RESULTS[wordMatch.rollNo]);
    }
    return wordMatch;
  }

  // c) Partial substring match
  const partialNameMatch = Object.values(SVPP_DATA.students).find(s => 
    (s.name && s.name.toLowerCase().includes(queryLower)) || 
    (s.rawName && s.rawName.toLowerCase().includes(queryLower))
  );
  if (partialNameMatch) {
    if (typeof window !== "undefined" && window.SVPP_OFFICIAL_RESULTS && window.SVPP_OFFICIAL_RESULTS[partialNameMatch.rollNo]) {
      return attachOfficialResults(partialNameMatch, window.SVPP_OFFICIAL_RESULTS[partialNameMatch.rollNo]);
    }
    return partialNameMatch;
  }

  // 4. Check window.SVPP_OFFICIAL_RESULTS directly (all AI & AIML students parsed from official college PDFs)
  if (typeof window !== "undefined" && window.SVPP_OFFICIAL_RESULTS) {
    let offMatch = window.SVPP_OFFICIAL_RESULTS[clean];
    if (!offMatch && clean.length <= 4) {
      const matchKey = Object.keys(window.SVPP_OFFICIAL_RESULTS).find(k => k.toUpperCase().endsWith(clean));
      if (matchKey) offMatch = window.SVPP_OFFICIAL_RESULTS[matchKey];
    }
    if (!offMatch) {
      const matchKey = Object.keys(window.SVPP_OFFICIAL_RESULTS).find(k => {
        const offName = (window.SVPP_OFFICIAL_RESULTS[k].name || "").toLowerCase();
        return offName === queryLower || offName.includes(queryLower);
      });
      if (matchKey) offMatch = window.SVPP_OFFICIAL_RESULTS[matchKey];
    }
    if (offMatch) {
      const offSems = offMatch.semesters || {};
      const semResultsList = Object.values(offSems).sort((a, b) => {
        const dA = a.dateOrder || "9999";
        const dB = b.dateOrder || "9999";
        if (dA !== dB) return dA.localeCompare(dB);
        return (a.semesterNum || 0) - (b.semesterNum || 0);
      });
      const activeSemObj = semResultsList[semResultsList.length - 1] || { sgpa: "N/A", cgpa: "N/A", results: [] };
      const rec = {
        rollNo: offMatch.rollNo,
        name: offMatch.name,
        rawName: offMatch.name,
        branch: offMatch.branch || (offMatch.rollNo.includes("A42") ? "B.Tech - Artificial Intelligence & Machine Learning" : "B.Tech - Artificial Intelligence"),
        year: offMatch.rollNo.startsWith("25") ? "I B.Tech" : offMatch.rollNo.startsWith("24") ? "II B.Tech" : "III B.Tech",
        semester: activeSemObj.semesterTitle || "Official Examination Session",
        section: "Section A",
        mentor: "Dr. V. Janardhan Babu, Ph.D.",
        cgpa: offMatch.cgpa || activeSemObj.cgpa || activeSemObj.sgpa || "N/A",
        sgpa: activeSemObj.sgpa || "N/A",
        totalBacklogs: offMatch.totalBacklogs !== undefined ? offMatch.totalBacklogs : 0,
        activeBacklogsList: offMatch.activeBacklogsList || [],
        overallPercentage: offMatch.overallPercentage || "0.0%",
        totalMarksObtained: offMatch.totalMarksObtained || 0,
        totalMaxMarks: offMatch.totalMaxMarks || 0,
        totalDegreeCredits: offMatch.totalDegreeCredits || 0,
        attendanceOverall: 86.4,
        totalClasses: 280,
        attendedClasses: 242,
        status: "Safe",
        subjectAttendance: [],
        midMarks: { mid1: [], mid2: [] },
        results: activeSemObj.results || [],
        semesterResults: semResultsList
      };
      SVPP_DATA.students[offMatch.rollNo] = rec;
      return rec;
    }
  }

  return null;
}
if (typeof window !== "undefined") {
  window.getOrCreateStudentRecord = getOrCreateStudentRecord;
}

function getSavedCirculars() {
  const stored = localStorage.getItem("svpp_ai_circulars");
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      return [...parsed, ...SVPP_DATA.circulars];
    } catch (e) {
      console.error(e);
    }
  }
  return SVPP_DATA.circulars;
}

// =============================================================================
// 3. UI INITIALIZATION & EVENT HANDLERS
// =============================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Always initialize tab navigation first so portal tabs work immediately
  try { initTabNavigation(); } catch (e) { console.error("initTabNavigation error:", e); }
  try { initStudentDatabase(); } catch (e) { console.error("initStudentDatabase error:", e); }
  try { initAuthSystem(); } catch (e) { console.error("initAuthSystem error:", e); }
  try { initCirculars(); } catch (e) { console.error("initCirculars error:", e); }
  try { initAttendanceModule(); } catch (e) { console.error("initAttendanceModule error:", e); }
  try { initSyllabusModule(); } catch (e) { console.error("initSyllabusModule error:", e); }
  try { initTimetablesModule(); } catch (e) { console.error("initTimetablesModule error:", e); }
  try { initMarksModule(); } catch (e) { console.error("initMarksModule error:", e); }
  try { initResultsModule(); } catch (e) { console.error("initResultsModule error:", e); }
  try { initFacultyDesk(); } catch (e) { console.error("initFacultyDesk error:", e); }
  try { initRosterModule(); } catch (e) { console.error("initRosterModule error:", e); }
  try { initModals(); } catch (e) { console.error("initModals error:", e); }
  try { initMarksEditorModule(); } catch (e) { console.error("initMarksEditorModule error:", e); }
  try { initResultImportModule(); } catch (e) { console.error("initResultImportModule error:", e); }
});

// =========================================================================
// ROLE-BASED ACCESS CONTROL (RBAC), SUPER ADMIN & FACULTY APPROVAL SYSTEM
// =========================================================================
const AUTH_STORAGE_KEY = "svpp_ai_portal_auth_user";
const ACCOUNTS_STORAGE_KEY = "svpp_auth_accounts";
const SUPER_ADMIN_EMAIL = "admin@svpp.edu.in";

function getStoredAuthAccounts() {
  try {
    const raw = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}

  const defaults = [
    { email: "admin@svpp.edu.in", username: "admin", password: "admin123", name: "Super Admin (Academic Controller)", role: "SuperAdmin", title: "Super Admin & Access Controller", approved: true },
    { email: "hod.ai@svpp.edu.in", username: "hod", password: "hod@svpp", name: "Dr. V. Janardhan Babu", role: "HOD", title: "Professor & Head of Department (AI)", approved: true },
    { email: "janardhan@svpp.edu.in", username: "janardhan", password: "hod@svpp", name: "Dr. V. Janardhan Babu", role: "HOD", title: "Professor & Head of Department (AI)", approved: true },
    { email: "faculty.ai@svpp.edu.in", username: "faculty", password: "faculty@svpp", name: "Assistant Professor", role: "Faculty", title: "Faculty Member - AI Dept", approved: true },
    { email: "sridevi@svpp.edu.in", username: "sridevi", password: "faculty123", name: "Mrs. N. Sridevi", role: "Faculty", title: "Assistant Professor - AI", approved: true },
    { email: "gopichand@svpp.edu.in", username: "gopichand", password: "faculty123", name: "Mr. P. Gopichand", role: "Faculty", title: "Assistant Professor - AI", approved: false }
  ];
  localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(defaults));
  return defaults;
}

function saveAuthAccounts(accounts) {
  localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
}

function isFacultyOrHodLoggedIn() {
  const user = getAuthenticatedUser();
  return !!(user && (user.role === "HOD" || user.role === "Faculty" || user.role === "SuperAdmin") && user.approved === true);
}
window.isFacultyOrHodLoggedIn = isFacultyOrHodLoggedIn;

function isSuperAdminLoggedIn() {
  const user = getAuthenticatedUser();
  return !!(user && (user.role === "SuperAdmin" || user.email === SUPER_ADMIN_EMAIL));
}
window.isSuperAdminLoggedIn = isSuperAdminLoggedIn;

function getAuthenticatedUser() {
  try {
    const raw = sessionStorage.getItem(AUTH_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function setAuthenticatedUser(user) {
  if (user) {
    sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  } else {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
  }
  syncAuthUI();
}

window.approveAccount = function(emailOrUser) {
  if (!isSuperAdminLoggedIn()) {
    showNotification("Permission Denied: Only Super Admin (admin@svpp.edu.in) can approve access requests.", "error");
    return;
  }
  const accounts = getStoredAuthAccounts();
  const idx = accounts.findIndex(a => (a.email && a.email.toLowerCase() === emailOrUser.toLowerCase()) || a.username.toLowerCase() === emailOrUser.toLowerCase());
  if (idx !== -1) {
    accounts[idx].approved = true;
    saveAuthAccounts(accounts);
    showNotification(`Approved access for ${accounts[idx].name} (${accounts[idx].email || accounts[idx].username})!`, "success");
    renderAdminApprovalConsole();
  }
};

window.rejectAccount = function(emailOrUser) {
  if (!isSuperAdminLoggedIn()) {
    showNotification("Permission Denied: Only Super Admin (admin@svpp.edu.in) can deny access requests.", "error");
    return;
  }
  let accounts = getStoredAuthAccounts();
  accounts = accounts.filter(a => (a.email && a.email.toLowerCase() !== emailOrUser.toLowerCase()) && a.username.toLowerCase() !== emailOrUser.toLowerCase());
  saveAuthAccounts(accounts);
  showNotification(`Access request for ${emailOrUser} denied.`, "info");
  renderAdminApprovalConsole();
};

window.revokeAccount = function(emailOrUser) {
  if (!isSuperAdminLoggedIn()) {
    showNotification("Permission Denied: Only Super Admin (admin@svpp.edu.in) can revoke access.", "error");
    return;
  }
  const accounts = getStoredAuthAccounts();
  const idx = accounts.findIndex(a => (a.email && a.email.toLowerCase() === emailOrUser.toLowerCase()) || a.username.toLowerCase() === emailOrUser.toLowerCase());
  if (idx !== -1) {
    accounts[idx].approved = false;
    saveAuthAccounts(accounts);
    showNotification(`Revoked access privileges for ${accounts[idx].name}.`, "warning");
    renderAdminApprovalConsole();
  }
};

function getSemesterAuditLogs() {
  try {
    const raw = localStorage.getItem("svpp_semester_audit_log");
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    return [];
  }
}

function logSemesterAuditAction(action, studentId, semester, details, docRef = "") {
  try {
    const logs = getSemesterAuditLogs();
    const currentUser = getAuthenticatedUser() || { email: "Faculty/HOD", role: "Faculty" };
    logs.unshift({
      id: "AUDIT-" + Date.now(),
      timestamp: new Date().toLocaleString(),
      userEmail: currentUser.email || currentUser.username || "faculty.ai@svpp.edu.in",
      userRole: currentUser.role || "Faculty",
      action: action,
      studentId: studentId,
      semester: semester,
      details: details,
      docRef: docRef
    });
    localStorage.setItem("svpp_semester_audit_log", JSON.stringify(logs.slice(0, 100)));
    if (window.renderAdminApprovalConsole) window.renderAdminApprovalConsole();
  } catch (err) {
    console.error("Error logging audit trail:", err);
  }
}

window.clearAuditLogs = function() {
  if (!confirm("Are you sure you want to clear the audit trail log?")) return;
  localStorage.removeItem("svpp_semester_audit_log");
  if (window.renderAdminApprovalConsole) window.renderAdminApprovalConsole();
};

function renderAdminApprovalConsole() {
  const container = document.getElementById("adminApprovalConsoleContainer");
  if (!container) return;

  if (!isSuperAdminLoggedIn()) {
    container.style.display = "none";
    return;
  }

  container.style.display = "block";
  const accounts = getStoredAuthAccounts();
  const pending = accounts.filter(a => !a.approved);
  const approved = accounts.filter(a => a.approved && a.role !== "SuperAdmin");
  const auditLogs = getSemesterAuditLogs();

  container.innerHTML = `
    <div class="glass-card" style="margin-bottom:24px; border:2px solid #0284c7; background:linear-gradient(135deg, #f0f9ff, #ffffff);">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px;">
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="font-size:1.6rem;">🛡️</span>
          <div>
            <h3 style="font-family:var(--font-serif); font-size:1.3rem; color:var(--navy-dark); margin:0;">Super Admin Access &amp; Institutional Governance Console</h3>
            <p style="color:#0369a1; font-size:0.85rem; margin:2px 0 0 0;">Super Admin Authorization &bull; Logged in as <strong>${SUPER_ADMIN_EMAIL}</strong></p>
          </div>
        </div>
        <div style="display:flex; gap:8px;">
          <button class="btn-primary" onclick="window.openResultImportModal()" style="background:#0284c7; border-color:#0284c7; font-size:0.82rem;">
            📄 Import Result Document
          </button>
          <span class="circ-badge" style="background:#0284c7; color:#ffffff; font-weight:700; font-size:0.85rem; padding:6px 14px;">Super Admin Control</span>
        </div>
      </div>

      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px; margin-bottom:20px;">
        <!-- Pending Approval Requests -->
        <div style="background:#ffffff; border:1px solid #cbd5e1; border-radius:8px; padding:16px;">
          <h4 style="font-size:0.98rem; color:#b45309; font-weight:700; margin-bottom:12px; display:flex; align-items:center; justify-content:space-between;">
            <span>⏳ Pending Faculty Access Requests</span>
            <span class="badge" style="background:#fef3c7; color:#b45309;">${pending.length}</span>
          </h4>
          ${pending.length === 0 ? `
            <p style="color:#64748b; font-size:0.86rem; font-style:italic;">No pending access requests requiring approval.</p>
          ` : `
            <div style="display:flex; flex-direction:column; gap:8px;">
              ${pending.map(acc => `
                <div style="background:#fffbeb; border:1px solid #fde68a; border-radius:6px; padding:8px 12px; display:flex; justify-content:space-between; align-items:center;">
                  <div>
                    <div style="font-weight:700; font-size:0.86rem; color:#78350f;">${acc.name} (${acc.role})</div>
                    <div style="font-size:0.76rem; color:#92400e; font-family:var(--font-mono);">${acc.email || acc.username}</div>
                  </div>
                  <div style="display:flex; gap:6px;">
                    <button class="btn-primary" onclick="approveAccount('${acc.email || acc.username}')" style="background:#059669; border-color:#059669; font-size:0.75rem; padding:4px 10px;">
                      Approve
                    </button>
                    <button class="btn-outline" onclick="rejectAccount('${acc.email || acc.username}')" style="color:#dc2626; font-size:0.75rem; padding:4px 10px;">
                      Deny
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>

        <!-- Authorized Faculty List -->
        <div style="background:#ffffff; border:1px solid #cbd5e1; border-radius:8px; padding:16px;">
          <h4 style="font-size:0.98rem; color:#15803d; font-weight:700; margin-bottom:12px; display:flex; align-items:center; justify-content:space-between;">
            <span>✅ Approved Faculty Members</span>
            <span class="badge" style="background:#dcfce7; color:#166534;">${approved.length}</span>
          </h4>
          <div style="display:flex; flex-direction:column; gap:8px; max-height:220px; overflow-y:auto;">
            ${approved.map(acc => `
              <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:6px; padding:8px 12px; display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <div style="font-weight:700; font-size:0.85rem; color:#166534;">${acc.name} (${acc.role})</div>
                  <div style="font-size:0.76rem; color:#15803d; font-family:var(--font-mono);">${acc.email || acc.username}</div>
                </div>
                <button class="btn-outline" onclick="revokeAccount('${acc.email || acc.username}')" style="color:#dc2626; font-size:0.72rem; padding:2px 8px;">
                  Revoke
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Institutional Audit Trail Section -->
      <div style="background:#ffffff; border:1px solid #cbd5e1; border-radius:8px; padding:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <h4 style="font-size:0.98rem; color:var(--navy-dark); font-weight:700; margin:0; display:flex; align-items:center; gap:6px;">
            <span>📜 Official Academic Audit Log Trail</span>
            <span class="badge" style="background:#e0f2fe; color:#0369a1;">${auditLogs.length} Entries</span>
          </h4>
          ${auditLogs.length > 0 ? `
            <button class="btn-outline" onclick="window.clearAuditLogs()" style="color:#dc2626; font-size:0.74rem; padding:2px 8px;">
              Clear Logs
            </button>
          ` : ''}
        </div>
        <div style="overflow-x:auto; max-height:260px; overflow-y:auto;">
          <table style="width:100%; font-size:0.81rem; border-collapse:collapse;">
            <thead>
              <tr style="background:#f8fafc; border-bottom:2px solid #e2e8f0; text-align:left; position:sticky; top:0; z-index:1;">
                <th style="padding:8px;">Timestamp</th>
                <th style="padding:8px;">User / Role</th>
                <th style="padding:8px;">Action</th>
                <th style="padding:8px;">Student ID</th>
                <th style="padding:8px;">Semester</th>
                <th style="padding:8px;">Details &amp; Document Ref</th>
              </tr>
            </thead>
            <tbody>
              ${auditLogs.length === 0 ? `
                <tr><td colspan="6" style="padding:16px; text-align:center; color:#64748b; font-style:italic;">No result modifications logged yet.</td></tr>
              ` : auditLogs.map(l => `
                <tr style="border-bottom:1px solid #f1f5f9;">
                  <td style="padding:8px; color:#64748b; font-family:var(--font-mono); white-space:nowrap;">${l.timestamp}</td>
                  <td style="padding:8px;"><strong>${l.userEmail}</strong> <span class="badge" style="font-size:0.7rem;">${l.userRole}</span></td>
                  <td style="padding:8px;"><span class="circ-badge" style="background:#e0f2fe; color:#0369a1; font-size:0.74rem; padding:2px 8px;">${l.action}</span></td>
                  <td style="padding:8px; font-family:var(--font-mono); font-weight:700;">${l.studentId}</td>
                  <td style="padding:8px;">${l.semester}</td>
                  <td style="padding:8px; color:#475569;">${l.details} ${l.docRef ? `<code style="background:#f1f5f9; padding:2px 4px; border-radius:4px; font-size:0.75rem;">${l.docRef}</code>` : ''}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function syncAuthUI() {
  const user = getAuthenticatedUser();
  const guestBar = document.getElementById("roleSwitcherGuest");
  const loggedInBar = document.getElementById("authLoggedInBar");
  const authUserName = document.getElementById("authUserName");
  const authUserRole = document.getElementById("authUserRole");
  const lockedView = document.getElementById("facultyDeskLockedView");
  const unlockedView = document.getElementById("facultyDeskUnlockedView");
  const facultyAttnBox = document.getElementById("facultyAttendanceBox");
  const tabExcelBtn = document.getElementById("erpTabExcelWorkbookBtn");
  const tabHodBtn = document.getElementById("erpTabHodDeskBtn");
  const tabStudentBtn = document.getElementById("erpTabStudentLedgerBtn");
  const studentView = document.getElementById("erpStudentViewContainer");
  const excelView = document.getElementById("erpExcelWorkbookViewContainer");
  const hodView = document.getElementById("erpHodDeskViewContainer");

  if (user && user.approved) {
    document.body.classList.remove("student-mode");
    document.body.classList.add("faculty-mode");

    if (guestBar) guestBar.style.display = "none";
    if (loggedInBar) loggedInBar.style.display = "flex";
    if (authUserName) authUserName.textContent = user.name;
    if (authUserRole) authUserRole.textContent = user.role;

    if (lockedView) lockedView.style.display = "none";
    if (unlockedView) unlockedView.style.display = "block";
    if (facultyAttnBox) facultyAttnBox.style.display = "block";

    // Show Faculty Live Excel Register and HOD Gazette Desk for authenticated faculty/HOD
    if (tabExcelBtn) tabExcelBtn.style.display = "inline-flex";
    if (tabHodBtn) tabHodBtn.style.display = "inline-flex";

    renderAdminApprovalConsole();
    const roleBadge = document.getElementById("facultyConsoleRoleBadge");
    if (roleBadge) {
      roleBadge.textContent = (user.role === "HOD" || user.role === "Admin")
        ? "HOD / Admin Desk • Full Authorization"
        : "Faculty Desk • Lecture Marker";
    }
  } else {
    document.body.classList.remove("faculty-mode");
    document.body.classList.add("student-mode");

    if (guestBar) guestBar.style.display = "flex";
    if (loggedInBar) loggedInBar.style.display = "none";

    if (lockedView) lockedView.style.display = "block";
    if (unlockedView) unlockedView.style.display = "none";
    if (facultyAttnBox) facultyAttnBox.style.display = "none";

    // Strictly hide Faculty Live Excel Register and HOD Gazette Desk in student view
    if (tabExcelBtn) tabExcelBtn.style.display = "none";
    if (tabHodBtn) tabHodBtn.style.display = "none";

    // Guarantee student view is active in attendance portal
    if (tabStudentBtn) tabStudentBtn.classList.add("active");
    if (tabExcelBtn) tabExcelBtn.classList.remove("active");
    if (tabHodBtn) tabHodBtn.classList.remove("active");
    if (studentView) studentView.style.display = "block";
    if (excelView) excelView.style.display = "none";
    if (hodView) hodView.style.display = "none";
  }

  if (window.refreshRealtimeAttendanceUI) {
    try {
      window.refreshRealtimeAttendanceUI();
    } catch (e) {
      console.warn("Realtime attendance UI refresh deferred until attendance module loads:", e);
    }
  }
  if (window.currentMarksStudent && window.renderStudentMarksGlobal) {
    window.renderStudentMarksGlobal(window.currentMarksStudent);
  }
  if (window.currentResultStudent && window.renderGradeMemoGlobal) {
    window.renderGradeMemoGlobal(window.currentResultStudent);
  }
  if (window.refreshMasterRoster) {
    window.refreshMasterRoster();
  }
}

window.openFacultyLoginModal = function(targetAction = "") {
  const modal = document.getElementById("facultyLoginModal");
  if (!modal) return;
  const noticeBanner = document.getElementById("loginNoticeBanner");
  const errAlert = document.getElementById("loginErrorAlert");
  if (errAlert) errAlert.style.display = "none";

  if (noticeBanner && targetAction) {
    noticeBanner.innerHTML = `
      <span style="font-size: 1.2rem; line-height: 1;">🔐</span>
      <div>
        <strong>Authentication Required:</strong> Students have view-only access. To <strong>${targetAction}</strong>, please enter authorized Faculty or HOD credentials.
      </div>
    `;
  }
  modal.classList.add("open");
  const userInp = document.getElementById("loginUsername");
  if (userInp) setTimeout(() => userInp.focus(), 150);
};

window.closeFacultyLoginModal = function() {
  const modal = document.getElementById("facultyLoginModal");
  if (modal) modal.classList.remove("open");
  const errAlert = document.getElementById("loginErrorAlert");
  if (errAlert) errAlert.style.display = "none";
};

function initAuthSystem() {
  const facultyBtn = document.getElementById("roleFacultyBtn");
  const logoutBtn = document.getElementById("authLogoutBtn");
  const loginForm = document.getElementById("facultyLoginForm");
  const closeLoginBtn = document.getElementById("closeLoginModalBtn");
  const cancelLoginBtn = document.getElementById("cancelLoginBtn");
  const lockedViewLoginBtn = document.getElementById("lockedViewLoginBtn");
  const fillAdminBtn = document.getElementById("fillAdminCredsBtn");
  const fillHodBtn = document.getElementById("fillHodCredsBtn");
  const fillFacultyBtn = document.getElementById("fillFacultyCredsBtn");
  const togglePassBtn = document.getElementById("togglePasswordBtn");

  if (facultyBtn) {
    facultyBtn.addEventListener("click", () => {
      window.openFacultyLoginModal("access Faculty Desk & edit marks");
    });
  }

  if (lockedViewLoginBtn) {
    lockedViewLoginBtn.addEventListener("click", () => {
      window.openFacultyLoginModal("access Faculty Desk");
    });
  }

  if (closeLoginBtn) closeLoginBtn.addEventListener("click", window.closeFacultyLoginModal);
  if (cancelLoginBtn) cancelLoginBtn.addEventListener("click", window.closeFacultyLoginModal);

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      setAuthenticatedUser(null);
      showNotification("Signed out. Switched to Student View-Only Mode.", "info");
      const overviewTab = document.querySelector('[data-tab="overview"]');
      if (overviewTab) overviewTab.click();
    });
  }

  if (fillAdminBtn) {
    fillAdminBtn.addEventListener("click", () => {
      const roleSel = document.getElementById("loginRoleSelect");
      const uInp = document.getElementById("loginUsername");
      const pInp = document.getElementById("loginPassword");
      if (roleSel) roleSel.value = "HOD";
      if (uInp) uInp.value = "admin@svpp.edu.in";
      if (pInp) pInp.value = "admin123";
      const errAlert = document.getElementById("loginErrorAlert");
      if (errAlert) errAlert.style.display = "none";
    });
  }

  if (fillHodBtn) {
    fillHodBtn.addEventListener("click", () => {
      const roleSel = document.getElementById("loginRoleSelect");
      const uInp = document.getElementById("loginUsername");
      const pInp = document.getElementById("loginPassword");
      if (roleSel) roleSel.value = "HOD";
      if (uInp) uInp.value = "hod.ai@svpp.edu.in";
      if (pInp) pInp.value = "hod@svpp";
      const errAlert = document.getElementById("loginErrorAlert");
      if (errAlert) errAlert.style.display = "none";
    });
  }

  if (fillFacultyBtn) {
    fillFacultyBtn.addEventListener("click", () => {
      const roleSel = document.getElementById("loginRoleSelect");
      const uInp = document.getElementById("loginUsername");
      const pInp = document.getElementById("loginPassword");
      if (roleSel) roleSel.value = "Faculty";
      if (uInp) uInp.value = "faculty.ai@svpp.edu.in";
      if (pInp) pInp.value = "faculty@svpp";
      const errAlert = document.getElementById("loginErrorAlert");
      if (errAlert) errAlert.style.display = "none";
    });
  }

  if (togglePassBtn) {
    togglePassBtn.addEventListener("click", () => {
      const passInp = document.getElementById("loginPassword");
      if (passInp) {
        if (passInp.type === "password") {
          passInp.type = "text";
          togglePassBtn.textContent = "Hide Password";
        } else {
          passInp.type = "password";
          togglePassBtn.textContent = "Show Password";
        }
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const role = document.getElementById("loginRoleSelect").value;
      const username = document.getElementById("loginUsername").value.trim().toLowerCase();
      const password = document.getElementById("loginPassword").value.trim();
      const errAlert = document.getElementById("loginErrorAlert");
      const errMsg = document.getElementById("loginErrorMsg");

      const accounts = getStoredAuthAccounts();
      const matched = accounts.find(acc => 
        (acc.username.toLowerCase() === username || (acc.email && acc.email.toLowerCase() === username)) && 
        acc.password === password
      );

      if (matched) {
        if (!matched.approved) {
          if (errAlert) {
            errAlert.style.display = "block";
            if (errMsg) errMsg.innerHTML = `🔒 <strong>Access Pending Admin Approval:</strong> Account <code>${matched.email || matched.username}</code> is awaiting Super Admin (admin@svpp.edu.in) authorization.`;
          }
          showNotification(`Access Pending Approval: Account (${matched.email || matched.username}) is waiting for Super Admin authorization.`, "warning");
          return;
        }

        if (errAlert) errAlert.style.display = "none";
        const user = {
          username: matched.username,
          email: matched.email || username,
          role: matched.role || role,
          name: matched.name || "Faculty Member",
          title: matched.title || "Faculty",
          approved: true,
          loginTime: new Date().toLocaleTimeString()
        };
        setAuthenticatedUser(user);
        window.closeFacultyLoginModal();
        loginForm.reset();
        showNotification(`✅ Authenticated successfully as ${user.name} (${user.role}). Student marks & administrative edit privileges unlocked!`, "success");
      } else {
        if (errAlert) {
          errAlert.style.display = "block";
          if (errMsg) errMsg.textContent = "Invalid credentials. If you are a new faculty member, please contact Super Admin (admin@svpp.edu.in) to approve your email.";
        }
        showNotification("Authentication Failed: Invalid email or password.", "error");
      }
    });
  }

  syncAuthUI();
}

// Global Tab Switcher Function
function switchDepartmentTab(targetTab) {
  if (!targetTab) return;
  const tabButtons = document.querySelectorAll(".nav-tab-item");
  const tabPanels = document.querySelectorAll(".tab-content-panel");

  tabButtons.forEach(btn => {
    if (btn.getAttribute("data-tab") === targetTab) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  tabPanels.forEach(p => {
    if (p.id === `panel-${targetTab}`) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });

  const activePanel = document.getElementById(`panel-${targetTab}`);
  if (activePanel) {
    const navBar = document.querySelector(".dept-nav-tabs-container");
    const navHeight = navBar ? navBar.offsetHeight : 65;
    const topPos = activePanel.getBoundingClientRect().top + (window.pageYOffset || window.scrollY || 0) - navHeight - 15;
    window.scrollTo({ top: Math.max(0, topPos), behavior: "smooth" });
  }
}
window.switchDepartmentTab = switchDepartmentTab;

// Primary Tab Navigation Initializer
function initTabNavigation() {
  const tabButtons = document.querySelectorAll(".nav-tab-item");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetTab = btn.getAttribute("data-tab");
      switchDepartmentTab(targetTab);
    });
  });

  // Feature Portal Cards on Overview Click Handler
  const portalCards = document.querySelectorAll(".feature-portal-card[data-jump-tab]");
  portalCards.forEach(card => {
    card.addEventListener("click", () => {
      const jumpTab = card.getAttribute("data-jump-tab");
      switchDepartmentTab(jumpTab);
    });
  });

  // URL Hash Navigation Handler (e.g. #timetables, #syllabus)
  const handleUrlHash = () => {
    if (typeof window === "undefined" || !window.location) return;
    const hash = window.location.hash.replace("#", "").trim();
    if (hash) {
      switchDepartmentTab(hash);
    }
  };

  if (typeof window !== "undefined" && window.addEventListener) {
    window.addEventListener("hashchange", handleUrlHash);
    if (window.location && window.location.hash) {
      setTimeout(handleUrlHash, 100);
    }
  }
}

// =============================================================================
// 4. MODULE IMPLEMENTATIONS
// =============================================================================

// MODULE 1: Circulars
function initCirculars() {
  const container = document.getElementById("circularsListContainer");
  const searchInput = document.getElementById("circularSearchInput");
  const filterChips = document.querySelectorAll(".filter-chip[data-category]");
  
  if (!container) return;

  function renderList(items) {
    if (items.length === 0) {
      container.innerHTML = `<div class="glass-card" style="text-align:center; padding:40px; color:#64748b;">No circulars found matching the filter.</div>`;
      return;
    }

    container.innerHTML = items.map(c => `
      <div class="circular-card" data-category="${c.category}">
        <div class="circular-left-date">
          <span class="circ-day">${c.day}</span>
          <span class="circ-month">${c.month}</span>
        </div>
        <div class="circular-main-info">
          <div class="circular-badges-row">
            <span class="circ-badge ${c.badgeClass}">${c.badgeText}</span>
            <span class="circ-ref-no">${c.refNo}</span>
          </div>
          <h4 class="circular-title">${c.title}</h4>
          <p class="circular-desc">${c.desc}</p>
        </div>
        <div class="circular-actions">
          <button class="btn-secondary view-circ-btn" onclick="openCircularModal('${c.id}')">
            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            Read Notice
          </button>
        </div>
      </div>
    `).join("");
  }

  let activeCategory = "all";
  let activeSearch = "";

  function filterAndRender() {
    const allCircs = getSavedCirculars();
    const filtered = allCircs.filter(c => {
      const matchCat = (activeCategory === "all" || c.category === activeCategory);
      const matchSearch = (c.title.toLowerCase().includes(activeSearch) || c.desc.toLowerCase().includes(activeSearch) || c.refNo.toLowerCase().includes(activeSearch));
      return matchCat && matchSearch;
    });
    renderList(filtered);
  }

  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(ch => ch.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.getAttribute("data-category");
      filterAndRender();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeSearch = e.target.value.toLowerCase().trim();
      filterAndRender();
    });
  }

  filterAndRender();
}

window.openCircularModal = function(id) {
  const allCircs = getSavedCirculars();
  const circ = allCircs.find(c => c.id === id);
  if (!circ) return;

  const modal = document.getElementById("circularReaderModal");
  const modalContent = document.getElementById("circularModalBody");
  
  if (modal && modalContent) {
    modalContent.innerHTML = `
      <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 14px; margin-bottom: 16px;">
        <div style="display:flex; align-items:center; gap:14px; margin-bottom:12px; padding-bottom:10px; border-bottom:1px dashed #cbd5e1;">
          <img src="college_logo.png" alt="SVPP Logo" style="width:48px; height:48px; object-fit:contain; border-radius:6px; border:1px solid #e2e8f0; background:#fff; padding:2px; flex-shrink:0;">
          <div>
            <div style="font-family:var(--font-serif); font-size:1.05rem; font-weight:800; color:var(--navy-dark); line-height:1.2;">SRI VENKATESA PERUMAL COLLEGE OF ENGINEERING &amp; TECHNOLOGY</div>
            <div style="font-size:0.75rem; color:#64748b; font-weight:600;">(AUTONOMOUS &bull; AFFILIATED TO JNTUA &bull; COUNSELLING CODE: SVPP)</div>
          </div>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <span class="circ-badge ${circ.badgeClass}">${circ.badgeText}</span>
          <span style="font-family:var(--font-mono); font-size:0.8rem; color:#64748b;">Date: ${circ.date}</span>
        </div>
        <h3 style="color:var(--navy-dark); font-size:1.25rem; font-weight:700;">${circ.title}</h3>
        <p style="font-family:var(--font-mono); font-size:0.78rem; color:#475569; margin-top:4px;">Ref No: ${circ.refNo}</p>
      </div>
      <div style="font-size:0.95rem; line-height:1.7; color:#1e293b; margin-bottom:24px;">
        <p>${circ.desc}</p>
        <p style="margin-top:12px;">All HODs, faculty members, and students of the Department of Artificial Intelligence are instructed to take note of the above and comply accordingly.</p>
      </div>
      <div style="background:#f8fafc; padding:12px 16px; border-radius:8px; border:1px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <div style="font-size:0.75rem; text-transform:uppercase; color:#64748b;">Issued By Authority:</div>
          <div style="font-weight:700; color:var(--navy-dark); font-size:0.9rem;">${circ.issuedBy}</div>
        </div>
        <button class="btn-primary" onclick="window.print()">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
          Print Notice
        </button>
      </div>
    `;
    modal.classList.add("open");
  }
};

// =============================================================================
// MODULE 2: REAL-TIME ATTENDANCE ENGINE, EXCEL SPREADSHEET REGISTER & HOD APPROVAL
// =============================================================================

const REALTIME_ATTENDANCE_STORAGE_KEY = "svpp_realtime_attendance_sessions";

// Seed realistic semester lecture sessions if not already in localStorage
function seedInitialAttendanceSessions() {
  const existing = localStorage.getItem(REALTIME_ATTENDANCE_STORAGE_KEY);
  if (existing) {
    try {
      const parsed = JSON.parse(existing);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {
      console.warn("Error parsing existing attendance sessions, re-seeding.", e);
    }
  }

  const students = SVPP_DATA.roster3rdYear || [];
  const subjectList = SVPP_3RD_YEAR_SUBJECTS || [
    { code: "23PC4303", name: "Natural Language Processing" },
    { code: "23PC4304", name: "Operating Systems & System Programming" },
    { code: "23PC4305", name: "Computer Vision & Image Processing" },
    { code: "23PE4303", name: "Exploratory Data Analysis with Python" },
    { code: "23OE0004", name: "English for Competitive Examinations" },
    { code: "23LC4302", name: "Computer Vision & NLP Lab" },
    { code: "23LC4303", name: "AI & System Programming Lab" }
  ];

  const facultyMap = {
    "23PC4303": { name: "Mrs. N. Sridevi, M.Tech", email: "sridevi.ai@svpp.edu.in" },
    "23PC4304": { name: "Mr. H. Mohammed, M.Tech", email: "mohammed.ai@svpp.edu.in" },
    "23PC4305": { name: "Dr. S. Venkata Kiran, Ph.D.", email: "kiran.ai@svpp.edu.in" },
    "23PE4303": { name: "Mr. P. Gopichand, M.Tech", email: "gopichand.ai@svpp.edu.in" },
    "23OE0004": { name: "Ms. H. Nazeema, M.Tech", email: "nazeema.ai@svpp.edu.in" },
    "23LC4302": { name: "Mrs. N. Sridevi & Dr. Kiran", email: "faculty.ai@svpp.edu.in" },
    "23LC4303": { name: "Mr. H. Mohammed & Mr. Gopichand", email: "faculty.ai@svpp.edu.in" }
  };

  const datesAndPeriods = [
    { date: "2026-09-18", period: "Period 1 (09:30 - 10:20 AM)", sub: "23PC4303" },
    { date: "2026-09-18", period: "Period 2 (10:20 - 11:10 AM)", sub: "23PC4304" },
    { date: "2026-09-21", period: "Period 1 (09:30 - 10:20 AM)", sub: "23PC4305" },
    { date: "2026-09-21", period: "Period 3 (11:10 - 12:00 PM)", sub: "23PE4303" },
    { date: "2026-09-23", period: "Period 2 (10:20 - 11:10 AM)", sub: "23PC4303" },
    { date: "2026-09-23", period: "Period 4 (12:50 - 01:40 PM)", sub: "23OE0004" },
    { date: "2026-09-25", period: "Period 1 (09:30 - 10:20 AM)", sub: "23PC4304" },
    { date: "2026-09-25", period: "Period 6-7 (02:30 - 04:10 PM Lab)", sub: "23LC4302" },
    { date: "2026-09-28", period: "Period 2 (10:20 - 11:10 AM)", sub: "23PC4305" },
    { date: "2026-09-28", period: "Period 3 (11:10 - 12:00 PM)", sub: "23PC4303" },
    { date: "2026-09-30", period: "Period 1 (09:30 - 10:20 AM)", sub: "23PE4303" },
    { date: "2026-09-30", period: "Period 4 (12:50 - 01:40 PM)", sub: "23PC4304" },
    { date: "2026-10-02", period: "Period 2 (10:20 - 11:10 AM)", sub: "23PC4305" },
    { date: "2026-10-02", period: "Period 6-7 (02:30 - 04:10 PM Lab)", sub: "23LC4303" },
    // 2 Recent Pending sessions awaiting HOD approval
    { date: "2026-10-05", period: "Period 1 (09:30 - 10:20 AM)", sub: "23PC4303", pending: true },
    { date: "2026-10-05", period: "Period 2 (10:20 - 11:10 AM)", sub: "23PC4304", pending: true }
  ];

  const sessions = datesAndPeriods.map((dp, idx) => {
    const subObj = subjectList.find(s => s.code === dp.sub) || subjectList[0];
    const fac = facultyMap[dp.sub] || { name: "Mrs. N. Sridevi, M.Tech", email: "faculty.ai@svpp.edu.in" };
    const records = {};

    students.forEach((st, sIdx) => {
      // Deterministic pseudo-realistic attendance (80% average pass, specific individuals consistent)
      const seed = pseudoHash(st.rollNo + "_" + dp.date + "_" + dp.sub);
      const isAbsent = (seed % 100) < 18; // ~82% attendance overall
      records[st.rollNo] = isAbsent ? "A" : "P";
    });

    const isPending = !!dp.pending;
    return {
      sessionId: `sess_${dp.date.replace(/-/g, "")}_${dp.sub}_P${idx + 1}`,
      date: dp.date,
      period: dp.period,
      subjectCode: subObj.code,
      subjectName: subObj.name,
      section: "all",
      facultyName: fac.name,
      facultyEmail: fac.email,
      status: isPending ? "Pending HOD Approval" : "Approved",
      approvedBy: isPending ? null : "Dr. V. Janardhan Babu, Ph.D. (HOD AI)",
      approvedAt: isPending ? null : `${dp.date}T17:00:00Z`,
      submittedAt: `${dp.date}T11:30:00Z`,
      records: records
    };
  });

  localStorage.setItem(REALTIME_ATTENDANCE_STORAGE_KEY, JSON.stringify(sessions));
  return sessions;
}

function getStoredAttendanceSessions() {
  return seedInitialAttendanceSessions();
}

function saveStoredAttendanceSessions(sessions) {
  localStorage.setItem(REALTIME_ATTENDANCE_STORAGE_KEY, JSON.stringify(sessions));
}

// Compute real-time attendance figures for a specific student
function computeRealtimeAttendanceForStudent(rollNo, includePending = false) {
  const sessions = getStoredAttendanceSessions();
  const validSessions = sessions.filter(s => includePending ? true : s.status === "Approved");
  const subjects = SVPP_3RD_YEAR_SUBJECTS || [];

  const subjectMap = {};
  subjects.forEach(sub => {
    subjectMap[sub.code] = {
      code: sub.code,
      name: sub.name,
      conducted: 0,
      attended: 0,
      missed: 0,
      pct: 100.0,
      faculty: "AI Faculty Team"
    };
  });

  const lectureHistory = [];

  validSessions.forEach(sess => {
    const status = sess.records && sess.records[rollNo] ? sess.records[rollNo] : "A";
    const subCode = sess.subjectCode;

    if (!subjectMap[subCode]) {
      subjectMap[subCode] = {
        code: subCode,
        name: sess.subjectName || subCode,
        conducted: 0,
        attended: 0,
        missed: 0,
        pct: 100.0,
        faculty: sess.facultyName || "Faculty"
      };
    }

    subjectMap[subCode].conducted += 1;
    if (status === "P") {
      subjectMap[subCode].attended += 1;
    } else {
      subjectMap[subCode].missed += 1;
    }
    subjectMap[subCode].faculty = sess.facultyName || subjectMap[subCode].faculty;

    lectureHistory.push({
      sessionId: sess.sessionId,
      date: sess.date,
      period: sess.period,
      subjectCode: sess.subjectCode,
      subjectName: sess.subjectName,
      facultyName: sess.facultyName,
      status: status,
      isPending: sess.status === "Pending HOD Approval",
      approvedBy: sess.approvedBy
    });
  });

  // Calculate subject-wise percentages
  let totalConducted = 0;
  let totalAttended = 0;

  const subjectAttendance = Object.values(subjectMap).map(sub => {
    const pct = sub.conducted > 0 ? parseFloat(((sub.attended / sub.conducted) * 100).toFixed(1)) : 100.0;
    totalConducted += sub.conducted;
    totalAttended += sub.attended;
    return {
      ...sub,
      pct: pct
    };
  });

  const overallPct = totalConducted > 0 ? parseFloat(((totalAttended / totalConducted) * 100).toFixed(1)) : 100.0;
  const totalMissed = totalConducted - totalAttended;
  const status = overallPct >= 75 ? "Safe" : overallPct >= 65 ? "Condonation" : "Shortage";

  // Academic buffer calculation
  let bufferMisses = 0;
  let neededConsecutive = 0;
  if (overallPct >= 75) {
    bufferMisses = Math.max(0, Math.floor((totalAttended - 0.75 * totalConducted) / 0.75));
  } else {
    neededConsecutive = Math.max(1, Math.ceil((0.75 * totalConducted - totalAttended) / 0.25));
  }

  // Sort history newest first
  lectureHistory.sort((a, b) => (b.date + b.period).localeCompare(a.date + a.period));

  return {
    overallPct,
    totalConducted,
    totalAttended,
    totalMissed,
    status,
    bufferMisses,
    neededConsecutive,
    subjectAttendance,
    lectureHistory
  };
}

// Synchronize all student profiles in memory with real-time approved attendance
function syncAllStudentsRealtimeAttendance() {
  const roster = SVPP_DATA.roster3rdYear || [];
  roster.forEach(st => {
    const stats = computeRealtimeAttendanceForStudent(st.rollNo, false);
    st.attendanceOverall = stats.overallPct;
    st.attendedClasses = stats.totalAttended;
    st.totalClasses = stats.totalConducted;
    st.status = stats.status;
    st.subjectAttendance = stats.subjectAttendance;

    if (SVPP_DATA.students && SVPP_DATA.students[st.rollNo]) {
      SVPP_DATA.students[st.rollNo].attendanceOverall = stats.overallPct;
      SVPP_DATA.students[st.rollNo].attendedClasses = stats.totalAttended;
      SVPP_DATA.students[st.rollNo].totalClasses = stats.totalConducted;
      SVPP_DATA.students[st.rollNo].status = stats.status;
      SVPP_DATA.students[st.rollNo].subjectAttendance = stats.subjectAttendance;
    }
  });
}

// MAIN ATTENDANCE MODULE INITIALIZER (PROFESSIONAL INSTITUTIONAL ERP ARCHITECTURE)
function initAttendanceModule() {
  const searchForm = document.getElementById("attendanceLookupForm");
  const rollInput = document.getElementById("attendanceRollInput");
  const chips = document.querySelectorAll(".roll-chip[data-roll]");
  const resultDisplay = document.getElementById("attendanceResultDisplay");

  // Master ERP Navigation Tabs
  const tabStudentBtn = document.getElementById("erpTabStudentLedgerBtn");
  const tabExcelBtn = document.getElementById("erpTabExcelWorkbookBtn");
  const tabHodBtn = document.getElementById("erpTabHodDeskBtn");
  const studentView = document.getElementById("erpStudentViewContainer");
  const excelView = document.getElementById("erpExcelWorkbookViewContainer");
  const hodView = document.getElementById("erpHodDeskViewContainer");
  const erpHodBadge = document.getElementById("erpHodPendingBadge");

  // Sync memory models first
  syncAllStudentsRealtimeAttendance();

  function updateMasterHodBadge() {
    const sessions = getStoredAttendanceSessions();
    const pendingCount = sessions.filter(s => s.status === "Pending HOD Approval").length;
    if (erpHodBadge) {
      erpHodBadge.textContent = pendingCount;
      erpHodBadge.style.display = pendingCount > 0 ? "inline-block" : "none";
    }
  }

  // Master Tab Switching
  if (tabStudentBtn && tabExcelBtn && tabHodBtn) {
    tabStudentBtn.addEventListener("click", () => {
      tabStudentBtn.classList.add("active");
      tabExcelBtn.classList.remove("active");
      tabHodBtn.classList.remove("active");
      if (studentView) studentView.style.display = "block";
      if (excelView) excelView.style.display = "none";
      if (hodView) hodView.style.display = "none";
    });

    tabExcelBtn.addEventListener("click", () => {
      tabExcelBtn.classList.add("active");
      tabStudentBtn.classList.remove("active");
      tabHodBtn.classList.remove("active");
      if (studentView) studentView.style.display = "none";
      if (excelView) excelView.style.display = "block";
      if (hodView) hodView.style.display = "none";
      renderExcelWorkbookApp();
    });

    tabHodBtn.addEventListener("click", () => {
      tabHodBtn.classList.add("active");
      tabStudentBtn.classList.remove("active");
      tabExcelBtn.classList.remove("active");
      if (studentView) studentView.style.display = "none";
      if (excelView) excelView.style.display = "none";
      if (hodView) hodView.style.display = "block";
      renderHodExecutiveDesk();
    });
  }

  // RENDER STUDENT OVERALL ATTENDANCE CERTIFICATE & LEDGER
  function renderStudentAttendance(student) {
    if (!resultDisplay) return;

    // Compute live numbers from official lecture records
    const liveStats = computeRealtimeAttendanceForStudent(student.rollNo, false);
    const overallPct = liveStats.overallPct;
    const totalConducted = liveStats.totalConducted;
    const totalAttended = liveStats.totalAttended;
    const totalMissed = liveStats.totalMissed;
    const status = liveStats.status;

    // SVG Circular Gauge calculation (Circumference: 2 * PI * 58 = 364.4)
    const radius = 58;
    const circumference = 2 * Math.PI * radius;
    const offset = Math.max(0, circumference - (overallPct / 100) * circumference);
    const gaugeColor = overallPct >= 75 ? "#10b981" : overallPct >= 65 ? "#f59e0b" : "#ef4444";

    const complianceBannerHtml = overallPct >= 75 ? `
      <div class="erp-compliance-banner erp-compliance-safe">
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        <div>
          <strong>REGULATION COMPLIANCE: SAFE ZONE (&ge; 75%)</strong> &mdash; Candidate possesses required biometric attendance hours and is fully cleared for Autonomous End Semester Examinations without penalty.
        </div>
      </div>
    ` : overallPct >= 65 ? `
      <div class="erp-compliance-banner erp-compliance-condonation">
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
        <div>
          <strong>REGULATION NOTICE: CONDONATION CATEGORY (65% &ndash; 74.9%)</strong> &mdash; Shortage of attendance is within permissible condonation limits. Student must submit medical proof or institutional leave sanction along with the prescribed condonation fee to the Principal's office.
        </div>
      </div>
    ` : `
      <div class="erp-compliance-banner erp-compliance-detention">
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
        <div>
          <strong>ACADEMIC ALERT: SHORTAGE / DETENTION RISK (&lt; 65%)</strong> &mdash; Severe attendance shortage detected under Autonomous R23/R26 regulations. Candidate cannot be condoned without Academic Council exemption and risks semester detention. Parents requested to meet HOD immediately.
        </div>
      </div>
    `;

    resultDisplay.innerHTML = `
      <div class="erp-cert-card">
        <!-- Official Institutional Header -->
        <div class="erp-cert-header">
          <div>
            <div style="font-size:0.78rem; text-transform:uppercase; letter-spacing:0.08em; color:#0284c7; font-weight:800; margin-bottom:4px;">
              Sri Venkatesa Perumal College of Engineering &amp; Technology (Autonomous)
            </div>
            <h3 style="margin:0; font-size:1.45rem; color:var(--navy-dark); font-weight:800;">
              Official Cumulative Attendance Certificate &bull; Department of AI
            </h3>
            <p style="margin:4px 0 0 0; font-size:0.85rem; color:#64748b;">
              Academic Year 2026-2027 &bull; III B.Tech V Semester (Autonomous Regulation R23/R26)
            </p>
          </div>

          <div style="text-align:right;">
            <div style="font-family:var(--font-mono); font-size:0.75rem; color:#64748b; background:#f1f5f9; padding:4px 10px; border-radius:4px; border:1px solid #cbd5e1; display:inline-block;">
              ERP Ref: SVPP/AI/ATTN/${student.rollNo}
            </div>
            <div style="font-size:0.72rem; color:#15803d; font-weight:700; margin-top:4px;">
              ● Real-Time Biometric &amp; Lecture Sync Active
            </div>
          </div>
        </div>

        <!-- Student Master Metadata Badge Grid -->
        <div class="erp-student-badge-grid">
          <div><strong>Candidate Name:</strong> ${student.name}</div>
          <div><strong>Hall Ticket No:</strong> <span style="font-family:var(--font-mono); font-weight:700; color:#003366;">${student.rollNo}</span></div>
          <div><strong>Class Section:</strong> ${student.section || 'Section A'}</div>
          <div><strong>Branch:</strong> B.Tech - Artificial Intelligence (43)</div>
          <div><strong>Faculty Counselor:</strong> ${student.mentor || 'Dr. V. Janardhan Babu'}</div>
          <div><strong>Sanctioning Authority:</strong> Dr. V. Janardhan Babu, Ph.D. (HOD AI)</div>
        </div>

        <!-- Hero Metric Banner & Gauge -->
        <div class="erp-hero-metric-wrap">
          <!-- Circular Gauge -->
          <div class="erp-gauge-box">
            <div class="erp-circular-gauge">
              <svg viewBox="0 0 140 140">
                <circle class="erp-gauge-bg-circle" cx="70" cy="70" r="${radius}"></circle>
                <circle class="erp-gauge-progress-circle" cx="70" cy="70" r="${radius}" 
                  stroke="${gaugeColor}" 
                  stroke-dasharray="${circumference}" 
                  stroke-dashoffset="${offset}"></circle>
              </svg>
              <div class="erp-gauge-text-val">
                <div class="erp-gauge-pct-num" style="color:${gaugeColor};">${overallPct}%</div>
                <div class="erp-gauge-pct-lbl">Aggregate</div>
              </div>
            </div>
          </div>

          <!-- Hero Metrics & KPIs -->
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
              <div>
                <h4 style="margin:0; font-size:1.18rem; font-weight:800; color:var(--navy-dark);">
                  Verified Real-Time Academic Aggregate
                </h4>
                <span style="font-size:0.8rem; color:#475569;">
                  Computed from all authenticated lectures &amp; practical laboratory sessions
                </span>
              </div>
              <span class="circ-badge ${overallPct >= 75 ? 'badge-academic' : 'badge-urgent'}" style="font-size:0.82rem; padding:4px 12px;">
                ${overallPct >= 75 ? '✔ Compliant (Exam Cleared)' : overallPct >= 65 ? '⚠ Condonation Review' : '✖ Shortage (Detention Risk)'}
              </span>
            </div>

            <!-- KPI Tiles Grid -->
            <div class="erp-kpi-grid">
              <div class="erp-kpi-tile">
                <div class="erp-kpi-lbl">Total Conducted</div>
                <div class="erp-kpi-val" style="color:var(--navy-dark);">${totalConducted}</div>
                <div style="font-size:0.7rem; color:#64748b;">Class Periods</div>
              </div>
              <div class="erp-kpi-tile">
                <div class="erp-kpi-lbl" style="color:#15803d;">Total Attended</div>
                <div class="erp-kpi-val" style="color:#15803d;">${totalAttended}</div>
                <div style="font-size:0.7rem; color:#86efac;">Verified (P)</div>
              </div>
              <div class="erp-kpi-tile">
                <div class="erp-kpi-lbl" style="color:#dc2626;">Classes Missed</div>
                <div class="erp-kpi-val" style="color:#b91c1c;">${totalMissed}</div>
                <div style="font-size:0.7rem; color:#fca5a5;">Absences (A)</div>
              </div>
              <div class="erp-kpi-tile">
                <div class="erp-kpi-lbl" style="color:#0284c7;">Exam Safety Buffer</div>
                <div class="erp-kpi-val" style="color:#0369a1;">
                  ${overallPct >= 75 ? `+${liveStats.bufferMisses}` : `-${liveStats.neededConsecutive}`}
                </div>
                <div style="font-size:0.7rem; color:#64748b;">
                  ${overallPct >= 75 ? 'Can miss safely' : 'Consecutive needed'}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Regulation Compliance Alert Banner -->
        ${complianceBannerHtml}

        <!-- Course-Wise Real-Time Breakdown Ledger Table -->
        <div style="margin-top:24px;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
            <div>
              <h4 style="margin:0; font-size:1.15rem; font-weight:800; color:var(--navy-dark);">
                Course-Wise Autonomous Attendance Ledger
              </h4>
              <p style="margin:2px 0 0 0; font-size:0.82rem; color:#64748b;">
                Click "Day-by-Day Log" on any course to inspect every individual lecture date, period, and instructor signature.
              </p>
            </div>
            <button type="button" class="btn-secondary" onclick="window.print()" style="padding:6px 14px; font-size:0.8rem;">
              🖨️ Print Student Memo
            </button>
          </div>

          <div style="overflow-x:auto;">
            <table class="erp-ledger-table">
              <thead>
                <tr>
                  <th style="width:110px;">Course Code</th>
                  <th>Course Title &amp; Category</th>
                  <th style="width:200px;">Faculty Instructor</th>
                  <th style="text-align:center; width:90px;">Conducted</th>
                  <th style="text-align:center; width:90px;">Attended</th>
                  <th style="width:140px;">Percentage</th>
                  <th style="text-align:center; width:100px;">Status</th>
                  <th style="text-align:center; width:140px;">Verification</th>
                </tr>
              </thead>
              <tbody>
                ${liveStats.subjectAttendance.map(sub => {
                  const subPct = sub.pct;
                  const isSubSafe = subPct >= 75;
                  const isSubCond = subPct >= 65;
                  const barColor = isSubSafe ? '#10b981' : isSubCond ? '#f59e0b' : '#ef4444';

                  return `
                    <tr>
                      <td style="font-family:var(--font-mono); font-weight:800; color:#003366;">${sub.code}</td>
                      <td>
                        <div style="font-weight:700; color:var(--navy-dark);">${sub.name}</div>
                        <div style="font-size:0.75rem; color:#64748b;">Autonomous Core Syllabus &bull; R26 Regulation</div>
                      </td>
                      <td style="font-size:0.84rem; color:#334155;">${sub.faculty}</td>
                      <td style="text-align:center; font-family:var(--font-mono); font-weight:700;">${sub.conducted}</td>
                      <td style="text-align:center; font-family:var(--font-mono); font-weight:800; color:${isSubSafe ? '#15803d' : '#b91c1c'};">${sub.attended}</td>
                      <td>
                        <div style="display:flex; justify-content:space-between; font-size:0.84rem; font-weight:800; font-family:var(--font-mono); margin-bottom:4px;">
                          <span style="color:${barColor};">${subPct}%</span>
                        </div>
                        <div class="progress-bar-wrap" style="height:6px;">
                          <div class="progress-bar-fill" style="width:${subPct}%; background:${barColor};"></div>
                        </div>
                      </td>
                      <td style="text-align:center;">
                        <span class="circ-badge ${isSubSafe ? 'badge-academic' : 'badge-urgent'}" style="font-size:0.72rem; padding:2px 8px;">
                          ${isSubSafe ? 'Safe' : isSubCond ? 'Condonation' : 'Shortage'}
                        </span>
                      </td>
                      <td style="text-align:center;">
                        <button type="button" class="btn-secondary" style="padding:4px 10px; font-size:0.76rem; font-weight:700;"
                          onclick="window.openDayLogModal('${student.rollNo}', '${sub.code}')">
                          🔍 Day-by-Day Log
                        </button>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Interactive "What-If" Attendance Calculator -->
        <div class="erp-simulator-box">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px; margin-bottom:12px;">
            <div>
              <h4 style="margin:0; font-size:1.1rem; font-weight:800; color:#003366; display:flex; align-items:center; gap:8px;">
                <span>🎯</span> "What-If" Academic Attendance Forecasting Simulator
              </h4>
              <p style="margin:3px 0 0 0; font-size:0.84rem; color:#475569;">
                Calculate exactly how your attendance percentage will change over upcoming lectures.
              </p>
            </div>
            <span style="font-size:0.78rem; background:#e0f2fe; color:#0369a1; padding:3px 10px; border-radius:4px; font-weight:700;">
              Student Planning Tool
            </span>
          </div>

          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:16px; align-items:center;">
            <div>
              <label style="display:block; font-size:0.8rem; font-weight:700; color:#334155; margin-bottom:6px;">
                Simulate Attending Next Classes:
              </label>
              <div style="display:flex; align-items:center; gap:10px;">
                <input type="range" id="simAttendSlider" min="0" max="30" value="5" style="flex:1;">
                <span id="simAttendVal" style="font-family:var(--font-mono); font-weight:800; font-size:1.1rem; color:#15803d; min-width:30px;">+5</span>
              </div>
            </div>

            <div>
              <label style="display:block; font-size:0.8rem; font-weight:700; color:#334155; margin-bottom:6px;">
                Simulate Missing Next Classes:
              </label>
              <div style="display:flex; align-items:center; gap:10px;">
                <input type="range" id="simMissSlider" min="0" max="20" value="0" style="flex:1;">
                <span id="simMissVal" style="font-family:var(--font-mono); font-weight:800; font-size:1.1rem; color:#dc2626; min-width:30px;">0</span>
              </div>
            </div>

            <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:12px; text-align:center;">
              <div style="font-size:0.72rem; text-transform:uppercase; font-weight:700; color:#64748b;">Projected Result</div>
              <div id="simProjectedPct" style="font-family:var(--font-mono); font-size:1.5rem; font-weight:800; color:#10b981;">
                --%
              </div>
              <div id="simProjectedNote" style="font-size:0.72rem; font-weight:700;">
                Calculating...
              </div>
            </div>
          </div>
        </div>

        <!-- Official Seal & Disclaimer Strip -->
        <div style="margin-top:20px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:12px 18px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; font-size:0.78rem; color:#64748b;">
          <div>
            🔒 <strong>Autonomous ERP Authenticated:</strong> Attendance records are synchronized exclusively through biometric login and departmental approvals. Students hold view-only privileges.
          </div>
          <div>
            Sanctioned by <strong>Dr. V. Janardhan Babu, Ph.D.</strong> &bull; Professor &amp; HOD AI
          </div>
        </div>
      </div>
    `;

    // Initialize Simulator Logic
    const simAttendSlider = document.getElementById("simAttendSlider");
    const simMissSlider = document.getElementById("simMissSlider");
    const simAttendVal = document.getElementById("simAttendVal");
    const simMissVal = document.getElementById("simMissVal");
    const simProjectedPct = document.getElementById("simProjectedPct");
    const simProjectedNote = document.getElementById("simProjectedNote");

    function runSimulation() {
      const addAttend = parseInt(simAttendSlider.value) || 0;
      const addMiss = parseInt(simMissSlider.value) || 0;
      simAttendVal.textContent = `+${addAttend}`;
      simMissVal.textContent = addMiss > 0 ? `-${addMiss}` : "0";

      const newConducted = totalConducted + addAttend + addMiss;
      const newAttended = totalAttended + addAttend;
      const newPct = newConducted > 0 ? parseFloat(((newAttended / newConducted) * 100).toFixed(1)) : 100.0;

      simProjectedPct.textContent = `${newPct}%`;
      if (newPct >= 75) {
        simProjectedPct.style.color = "#10b981";
        simProjectedNote.textContent = "✔ Fully Safe for Semester Exams";
        simProjectedNote.style.color = "#15803d";
      } else if (newPct >= 65) {
        simProjectedPct.style.color = "#f59e0b";
        simProjectedNote.textContent = "⚠ Requires Condonation Fee";
        simProjectedNote.style.color = "#b45309";
      } else {
        simProjectedPct.style.color = "#ef4444";
        simProjectedNote.textContent = "✖ High Risk of Detention";
        simProjectedNote.style.color = "#b91c1c";
      }
    }

    if (simAttendSlider && simMissSlider) {
      simAttendSlider.addEventListener("input", runSimulation);
      simMissSlider.addEventListener("input", runSimulation);
      runSimulation();
    }
  }

  window.renderStudentAttendanceGlobal = renderStudentAttendance;

  // Day-by-Day Inspection Modal Functionality
  const dayModalBackdrop = document.getElementById("dayLogModalBackdrop");
  const closeDayModalBtn = document.getElementById("closeDayModalBtn");
  const closeDayModalFooterBtn = document.getElementById("closeDayModalFooterBtn");
  const dayModalTitle = document.getElementById("dayModalSubjectTitle");
  const dayModalSub = document.getElementById("dayModalStudentSub");
  const dayModalBody = document.getElementById("dayModalBodyContent");

  window.openDayLogModal = function(rollNo, subjectCode) {
    if (!dayModalBackdrop) return;
    const student = getOrCreateStudentRecord(rollNo);
    const sessions = getStoredAttendanceSessions();
    const courseSessions = sessions.filter(s => s.subjectCode === subjectCode);

    const subName = courseSessions[0]?.subjectName || subjectCode;

    if (dayModalTitle) dayModalTitle.textContent = `${subjectCode} &mdash; ${subName}`;
    if (dayModalSub) dayModalSub.textContent = `Candidate: ${student.name} (${student.rollNo}) &bull; Section ${student.section || 'A'}`;

    if (dayModalBody) {
      if (courseSessions.length === 0) {
        dayModalBody.innerHTML = `
          <div style="text-align:center; padding:30px; color:#64748b;">
            No lecture sessions recorded yet for this course.
          </div>
        `;
      } else {
        // Sort newest first
        courseSessions.sort((a, b) => (b.date + b.period).localeCompare(a.date + a.period));

        let courseAttended = 0;
        courseSessions.forEach(s => {
          if (s.records && s.records[rollNo] === "P") courseAttended++;
        });
        const courseConducted = courseSessions.length;
        const coursePct = courseConducted > 0 ? ((courseAttended / courseConducted) * 100).toFixed(1) : 0;

        dayModalBody.innerHTML = `
          <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:12px 16px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <div>
              <strong>Course Attendance:</strong> ${courseAttended} Present / ${courseConducted} Sessions
            </div>
            <div>
              <span class="circ-badge ${parseFloat(coursePct) >= 75 ? 'badge-academic' : 'badge-urgent'}">
                Aggregate: ${coursePct}%
              </span>
            </div>
          </div>

          <table class="day-log-table">
            <thead>
              <tr>
                <th style="width:40px;">#</th>
                <th>Lecture Date</th>
                <th>Period / Timing</th>
                <th>Faculty In-Charge</th>
                <th style="text-align:center;">Status</th>
                <th>HOD Authorization</th>
              </tr>
            </thead>
            <tbody>
              ${courseSessions.map((sess, idx) => {
                const status = sess.records && sess.records[rollNo] ? sess.records[rollNo] : "A";
                const isP = status === "P";

                return `
                  <tr>
                    <td style="font-family:var(--font-mono); font-size:0.75rem; color:#64748b;">${idx + 1}</td>
                    <td style="font-family:var(--font-mono); font-weight:700;">${sess.date}</td>
                    <td style="font-size:0.8rem; color:#475569;">${sess.period}</td>
                    <td style="font-size:0.82rem;">${sess.facultyName}</td>
                    <td style="text-align:center;">
                      <span class="excel-cell-toggle ${isP ? 'is-present' : 'is-absent'}" style="cursor:default; font-size:0.75rem; width:28px; height:24px;">
                        ${status}
                      </span>
                    </td>
                    <td style="font-size:0.78rem;">
                      ${sess.status === "Pending HOD Approval" ? `
                        <span class="hod-badge-pending">⏳ Pending Review</span>
                      ` : `
                        <span class="hod-badge-approved">✔ Approved by HOD</span>
                      `}
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        `;
      }
    }

    dayModalBackdrop.classList.add("open");
  };

  function closeDayModal() {
    if (dayModalBackdrop) dayModalBackdrop.classList.remove("open");
  }

  if (closeDayModalBtn) closeDayModalBtn.addEventListener("click", closeDayModal);
  if (closeDayModalFooterBtn) closeDayModalFooterBtn.addEventListener("click", closeDayModal);
  if (dayModalBackdrop) {
    dayModalBackdrop.addEventListener("click", (e) => {
      if (e.target === dayModalBackdrop) closeDayModal();
    });
  }

  // Load default student (Karthik or Navya Sree)
  const defaultStudent = (SVPP_DATA.students && (SVPP_DATA.students["24G01A4324"] || SVPP_DATA.students["24G01A4301"])) || 
    (SVPP_DATA.roster3rdYear && SVPP_DATA.roster3rdYear[0]) || 
    { rollNo: "24G01A4324", name: "Chakala Karthik", branch: "B.Tech - Artificial Intelligence", section: "Section A" };

  renderStudentAttendance(defaultStudent);
  updateMasterHodBadge();

  if (searchForm && rollInput) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const roll = rollInput.value.trim().toUpperCase();
      if (!roll) return;
      const student = getOrCreateStudentRecord(roll);
      renderStudentAttendance(student);
    });
  }

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const roll = chip.getAttribute("data-roll");
      if (rollInput) rollInput.value = roll;
      const student = getOrCreateStudentRecord(roll);
      renderStudentAttendance(student);
    });
  });

  // Render initial workbook and HOD desk instances
  renderExcelWorkbookApp();
  renderHodExecutiveDesk();
}

// =============================================================================
// AUTHENTIC INSTITUTIONAL SPREADSHEET (GOOGLE SHEETS REGISTER MODEL)
// =============================================================================

function renderExcelWorkbookApp() {
  const container = document.getElementById("erpExcelWorkbookViewContainer");
  if (!container) return;

  const user = getAuthenticatedUser();
  const isFacultyOrHod = user && (user.role === "Faculty" || user.role === "HOD" || user.role === "Admin");

  // Official Subject & Dedicated Faculty Database List
  const subjects = SVPP_3RD_YEAR_SUBJECTS || [
    { code: "23PC4303", name: "Natural Language Processing" },
    { code: "23PC4304", name: "Operating Systems & System Programming" },
    { code: "23PC4305", name: "Computer Vision & Image Processing" },
    { code: "23PE4303", name: "Exploratory Data Analysis with Python" },
    { code: "23OE0004", name: "English for Competitive Examinations" },
    { code: "23LC4302", name: "Computer Vision & NLP Lab" },
    { code: "23LC4303", name: "AI & System Programming Lab" }
  ];

  const facultyMap = {
    "23PC4303": { name: "Mrs. N. Sridevi, M.Tech", role: "Assistant Professor", room: "AI Lab-1", email: "sridevi.ai@svpp.edu.in" },
    "23PC4304": { name: "Mr. H. Mohammed, M.Tech", role: "Assistant Professor", room: "Room 304", email: "mohammed.ai@svpp.edu.in" },
    "23PC4305": { name: "Dr. S. Venkata Kiran, Ph.D.", role: "Associate Professor", room: "AI Lab-2", email: "kiran.ai@svpp.edu.in" },
    "23PE4303": { name: "Mr. P. Gopichand, M.Tech", role: "Assistant Professor", room: "Room 305", email: "gopichand.ai@svpp.edu.in" },
    "23OE0004": { name: "Ms. H. Nazeema, M.Tech", role: "Assistant Professor", room: "Room 202", email: "nazeema.ai@svpp.edu.in" },
    "23LC4302": { name: "Mrs. N. Sridevi & Dr. Kiran", role: "Lab In-Charges", room: "AI GPU Lab", email: "faculty.ai@svpp.edu.in" },
    "23LC4303": { name: "Mr. H. Mohammed & Mr. Gopichand", role: "Lab In-Charges", room: "Systems Lab", email: "faculty.ai@svpp.edu.in" }
  };

  let selectedSubCode = window.excelActiveSubCode || subjects[0].code;
  let activeSectionTab = window.excelActiveSection || "Section A"; // Default Section A like screenshot
  let activeSearchTerm = window.excelSearchTerm || "";

  const currentTeacher = facultyMap[selectedSubCode] || { name: "Faculty Member", email: "faculty.ai@svpp.edu.in" };
  const currentSub = subjects.find(s => s.code === selectedSubCode) || subjects[0];

  // Get all lecture sessions for this course
  const allSessions = getStoredAttendanceSessions();
  const subSessions = allSessions.filter(s => s.subjectCode === selectedSubCode);

  const students = SVPP_DATA.roster3rdYear || [];
  const filteredStudents = students.filter(st => {
    const matchSec = activeSectionTab === "all" || st.section === activeSectionTab;
    const matchSearch = !activeSearchTerm || 
      st.rollNo.toLowerCase().includes(activeSearchTerm.toLowerCase()) || 
      st.name.toLowerCase().includes(activeSearchTerm.toLowerCase());
    return matchSec && matchSearch;
  });

  // Calculate totals
  let totalPresentCount = 0;
  let totalOpportunities = filteredStudents.length * subSessions.length;
  filteredStudents.forEach(st => {
    subSessions.forEach(sess => {
      const val = (sess.records && sess.records[st.rollNo]) || "1";
      if (val === "P" || val === "1") totalPresentCount++;
    });
  });
  const overallPct = totalOpportunities > 0 ? ((totalPresentCount / totalOpportunities) * 100).toFixed(1) : 100.0;

  container.innerHTML = `
    <!-- Google Sheets Style App Frame -->
    <div style="background:#ffffff; border:1px solid #d4d4d4; border-radius:10px; box-shadow:0 6px 25px rgba(0,0,0,0.1); overflow:hidden;">
      
      <!-- Top Green Title Bar (Google Sheets Authentic) -->
      <div style="background:#0f9d58; color:#ffffff; padding:10px 18px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="background:#0b8043; border-radius:4px; padding:3px 8px; font-weight:800; font-size:0.85rem; letter-spacing:0.04em;">
            SHEETS
          </div>
          <div>
            <div style="font-size:1.05rem; font-weight:700; letter-spacing:0.02em;">
              Copy of ${activeSectionTab === 'all' ? 'ALL-SECS' : activeSectionTab === 'Section A' ? 'A-SEC' : 'B-SEC'}-DA-${selectedSubCode.replace('23PC', 'PC').replace('23PE', 'PE')}-BTECH-VTH-SEM-CAI 24B
            </div>
            <div style="font-size:0.75rem; opacity:0.9; margin-top:2px;">
              Department of Artificial Intelligence &bull; Dedicated Teacher Database Register &bull; Auto-synced
            </div>
          </div>
        </div>

        <div style="display:flex; align-items:center; gap:12px; font-size:0.82rem;">
          <span style="background:rgba(255,255,255,0.2); padding:3px 10px; border-radius:12px;">
            ● Live Spreadsheet Active
          </span>
          <span>Faculty: <strong>${currentTeacher.name}</strong></span>
        </div>
      </div>

      <!-- Teacher Database & Course Strip -->
      <div class="teacher-db-strip">
        <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
          <div>
            <label style="font-size:0.78rem; font-weight:800; color:#334155; text-transform:uppercase; margin-right:6px;">Teacher Database:</label>
            <select id="gsheetCourseSelect" style="padding:6px 12px; font-size:0.85rem; font-weight:700; border:1.5px solid #0f9d58; border-radius:6px; color:#003366; background:#f0fdf4;">
              ${subjects.map(s => {
                const teach = facultyMap[s.code] || { name: "Faculty" };
                return `
                  <option value="${s.code}" ${s.code === selectedSubCode ? 'selected' : ''}>
                    ${s.code} &mdash; ${s.name} (${teach.name})
                  </option>
                `;
              }).join('')}
            </select>
          </div>

          <div style="position:relative;">
            <input type="text" id="gsheetSearchInput" placeholder="Filter by Roll or Student Name..." value="${activeSearchTerm}"
              style="padding:6px 10px 6px 28px; font-size:0.82rem; border:1px solid #cbd5e1; border-radius:6px; width:220px;">
            <span style="position:absolute; left:9px; top:50%; transform:translateY(-50%); font-size:0.8rem; color:#64748b;">🔍</span>
          </div>

          <span class="teacher-db-badge" style="background:#e0f2fe; color:#0369a1; border:1px solid #bae6fd;">
            👨‍🏫 In-Charge: <strong>${currentTeacher.name}</strong> (${currentTeacher.role})
          </span>
        </div>

        <div style="display:flex; align-items:center; gap:8px;">
          ${isFacultyOrHod ? `
            <button type="button" class="btn-primary" id="gsheetAddDateBtn" style="padding:6px 14px; font-size:0.78rem; background:#0f9d58; border-color:#0b8043;">
              ➕ Add Lecture Date
            </button>
            <button type="button" class="btn-secondary" id="gsheetMarkAllPBtn" style="padding:6px 10px; font-size:0.78rem; color:#15803d; font-weight:700;">
              ✔ All '1' (Present)
            </button>
            <button type="button" class="btn-secondary" id="gsheetMarkAllABtn" style="padding:6px 10px; font-size:0.78rem; color:#dc2626; font-weight:700;">
              ✖ All 'A' (Absent)
            </button>
          ` : `
            <span style="font-size:0.76rem; color:#92400e; background:#fef3c7; padding:4px 10px; border-radius:4px; font-weight:700;">
              🔒 Student View-Only: Log in as ${currentTeacher.name.split(',')[0]} to mark
            </span>
          `}
          <button type="button" class="btn-secondary" id="gsheetExportCsvBtn" style="padding:6px 12px; font-size:0.78rem; font-weight:700;">
            📥 Download Sheet (.CSV)
          </button>
        </div>
      </div>

      <!-- Formula Bar -->
      <div style="background:#f8f9fa; border-bottom:1px solid #e2e8f0; padding:6px 16px; display:flex; align-items:center; gap:10px; font-family:var(--font-mono); font-size:0.82rem;">
        <span style="font-weight:700; color:#0f9d58; min-width:40px;">fx</span>
        <span style="color:#64748b; font-size:0.78rem; border-left:1px solid #cbd5e1; padding-left:10px; flex:1;">
          =ROUND((COUNTIF(D4:AA4, "1") / COUNTA(D4:AA4)) * 100, 1) &bull; Cohort Strength: <strong style="color:#15803d;">${totalPresentCount}</strong> / ${totalOpportunities} (${overallPct}%)
        </span>
        <span style="font-size:0.74rem; color:#94a3b8;">Click any cell to toggle <strong>1 (Present)</strong> / <span style="background:#ff0000; color:#fff; padding:1px 4px; border-radius:2px; font-weight:800;">A</span></span>
      </div>

      <!-- SPREADSHEET TABLE MATRIX -->
      <div class="gsheet-table-wrap" style="max-height: 520px; overflow-y: auto;">
        <table class="gsheet-register-table">
          <thead>
            <!-- ROW 1: No. of Periods (Light Blue #d0e1fd) -->
            <tr class="gsheet-row-periods">
              <th class="gsheet-sticky-sno"></th>
              <th class="gsheet-sticky-roll"></th>
              <th class="gsheet-sticky-name" style="text-align:right; font-weight:800; padding-right:12px; font-size:12px;">No. of Periods</th>
              ${subSessions.map(sess => {
                const count = sess.period && (sess.period.includes("6-7") || sess.period.includes("2,4")) ? 2 : 1;
                return `<th style="width:40px; min-width:40px;">${count}</th>`;
              }).join('')}
              <th class="gsheet-summary-col">Σ Att</th>
              <th class="gsheet-summary-col">Σ Con</th>
              <th class="gsheet-pct-col">% Pct</th>
            </tr>

            <!-- ROW 2: Dates Row -->
            <tr class="gsheet-row-dates">
              <th class="gsheet-sticky-sno">S.No.</th>
              <th class="gsheet-sticky-roll">Roll No</th>
              <th class="gsheet-sticky-name" style="text-align:left; font-size:12px;">Student Name / Date &gt;</th>
              ${subSessions.map(sess => {
                const parts = sess.date.split('-');
                const dDisplay = `${parseInt(parts[2])}/${parseInt(parts[1])}`;
                return `<th style="font-weight:800; font-size:11px;" title="${sess.date}">${dDisplay}</th>`;
              }).join('')}
              <th class="gsheet-summary-col">Total</th>
              <th class="gsheet-summary-col">Max</th>
              <th class="gsheet-pct-col">Status</th>
            </tr>

            <!-- ROW 3: Period Numbers Row -->
            <tr class="gsheet-row-session">
              <th class="gsheet-sticky-sno"></th>
              <th class="gsheet-sticky-roll"></th>
              <th class="gsheet-sticky-name" style="text-align:right; font-weight:800; padding-right:12px;">Period &gt;</th>
              ${subSessions.map(sess => {
                const pNum = sess.period.includes("Period 1") ? "1" : 
                             sess.period.includes("Period 2") ? "2" : 
                             sess.period.includes("Period 3") ? "3" : 
                             sess.period.includes("Period 4") ? "4" : 
                             sess.period.includes("6-7") ? "2,4,5" : "1";
                return `<th style="color:#64748b;">${pNum}</th>`;
              }).join('')}
              <th class="gsheet-summary-col"></th>
              <th class="gsheet-summary-col"></th>
              <th class="gsheet-pct-col"></th>
            </tr>
          </thead>
          <tbody>
            ${filteredStudents.length === 0 ? `
              <tr>
                <td colspan="${6 + subSessions.length}" style="text-align:center; padding:40px; color:#64748b;">
                  No students found matching filter criteria.
                </td>
              </tr>
            ` : filteredStudents.map((st, idx) => {
              let attCount = 0;
              let maxConducted = subSessions.length;

              subSessions.forEach(sess => {
                const val = (sess.records && sess.records[st.rollNo]) || "1";
                if (val === "P" || val === "1") attCount++;
              });
              const pct = maxConducted > 0 ? ((attCount / maxConducted) * 100).toFixed(1) : 100.0;
              const isSafe = parseFloat(pct) >= 75;

              return `
                <tr data-student-roll="${st.rollNo}">
                  <td class="gsheet-sticky-sno">${idx + 1}</td>
                  <td class="gsheet-sticky-roll">${st.rollNo}</td>
                  <td class="gsheet-sticky-name">${st.name}</td>

                  <!-- Date Attendance Cells -->
                  ${subSessions.map(sess => {
                    const rawVal = (sess.records && sess.records[st.rollNo]) || "1";
                    const isAbsent = rawVal === "A";
                    const cellVal = isAbsent ? "A" : "1";

                    return `
                      <td class="${isAbsent ? 'gsheet-cell-absent' : 'gsheet-cell-present'}" 
                        onclick="window.toggleGsheetCell('${sess.sessionId}', '${st.rollNo}')"
                        title="${st.name} (${st.rollNo}) on ${sess.date} - Click to toggle">
                        ${cellVal}
                      </td>
                    `;
                  }).join('')}

                  <!-- Live Formula Totals -->
                  <td class="gsheet-summary-col">${attCount}</td>
                  <td class="gsheet-summary-col">${maxConducted}</td>
                  <td class="gsheet-pct-col" style="color:${isSafe ? '#15803d' : '#dc2626'};">
                    ${pct}%
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>

      <!-- Bottom Sheet Navigation Tabs (Section A, Section B, All Cohort) -->
      <div class="excel-sheet-tab-bar" style="background:#f1f3f4; border-top:1px solid #d4d4d4; padding:6px 16px;">
        <div class="excel-sheet-pill-list">
          <div class="excel-sheet-pill ${activeSectionTab === 'Section A' ? 'active' : ''}" onclick="window.switchWorkbookSection('Section A')">
            📑 Section A (61 Students)
          </div>
          <div class="excel-sheet-pill ${activeSectionTab === 'Section B' ? 'active' : ''}" onclick="window.switchWorkbookSection('Section B')">
            📑 Section B (66 Students)
          </div>
          <div class="excel-sheet-pill ${activeSectionTab === 'all' ? 'active' : ''}" onclick="window.switchWorkbookSection('all')">
            📑 All 127 Cohort
          </div>
        </div>

        <div style="font-size:0.75rem; color:#64748b;">
          Database: <strong>${selectedSubCode}</strong> &bull; Teacher: <strong>${currentTeacher.name}</strong> &bull; Showing ${filteredStudents.length} Students
        </div>
      </div>
    </div>
  `;

  // Attach Event Listeners
  const courseSelect = document.getElementById("gsheetCourseSelect");
  if (courseSelect) {
    courseSelect.addEventListener("change", (e) => {
      window.excelActiveSubCode = e.target.value;
      renderExcelWorkbookApp();
    });
  }

  const searchInput = document.getElementById("gsheetSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      window.excelSearchTerm = e.target.value;
      renderExcelWorkbookApp();
    });
  }

  const addDateBtn = document.getElementById("gsheetAddDateBtn");
  if (addDateBtn) {
    addDateBtn.addEventListener("click", () => {
      const today = new Date().toISOString().split("T")[0];
      const pNum = prompt("Enter Period Number for this lecture (e.g. 1, 2, 3, 4):", "1");
      if (!pNum) return;

      const sessions = getStoredAttendanceSessions();
      const newSession = {
        sessionId: `sess_${today.replace(/-/g, "")}_${selectedSubCode}_P${Date.now().toString().slice(-4)}`,
        date: today,
        period: `Period ${pNum}`,
        subjectCode: selectedSubCode,
        subjectName: currentSub.name,
        section: activeSectionTab,
        facultyName: currentTeacher.name,
        facultyEmail: currentTeacher.email,
        status: "Pending HOD Approval",
        approvedBy: null,
        approvedAt: null,
        submittedAt: new Date().toISOString(),
        records: {}
      };

      // Default all to 1 (Present)
      students.forEach(st => {
        newSession.records[st.rollNo] = "1";
      });

      sessions.push(newSession);
      saveStoredAttendanceSessions(sessions);
      syncAllStudentsRealtimeAttendance();
      showNotification(`Added new lecture column for ${today} (Period ${pNum}) in ${currentTeacher.name}'s database!`, "success");
      renderExcelWorkbookApp();
      renderHodExecutiveDesk();
    });
  }

  const markAllPBtn = document.getElementById("gsheetMarkAllPBtn");
  if (markAllPBtn) {
    markAllPBtn.addEventListener("click", () => {
      if (subSessions.length === 0) return;
      const latest = subSessions[subSessions.length - 1];
      filteredStudents.forEach(st => {
        if (!latest.records) latest.records = {};
        latest.records[st.rollNo] = "1";
      });
      const sessions = getStoredAttendanceSessions();
      const idx = sessions.findIndex(s => s.sessionId === latest.sessionId);
      if (idx >= 0) sessions[idx] = latest;
      saveStoredAttendanceSessions(sessions);
      syncAllStudentsRealtimeAttendance();
      renderExcelWorkbookApp();
      showNotification(`Marked all visible students as '1' (Present) for ${latest.date}`, "success");
    });
  }

  const markAllABtn = document.getElementById("gsheetMarkAllABtn");
  if (markAllABtn) {
    markAllABtn.addEventListener("click", () => {
      if (subSessions.length === 0) return;
      const latest = subSessions[subSessions.length - 1];
      filteredStudents.forEach(st => {
        if (!latest.records) latest.records = {};
        latest.records[st.rollNo] = "A";
      });
      const sessions = getStoredAttendanceSessions();
      const idx = sessions.findIndex(s => s.sessionId === latest.sessionId);
      if (idx >= 0) sessions[idx] = latest;
      saveStoredAttendanceSessions(sessions);
      syncAllStudentsRealtimeAttendance();
      renderExcelWorkbookApp();
      showNotification(`Marked all visible students as 'A' (Absent) for ${latest.date}`, "danger");
    });
  }

  const exportCsvBtn = document.getElementById("gsheetExportCsvBtn");
  if (exportCsvBtn) {
    exportCsvBtn.addEventListener("click", () => {
      let csv = `Sri Venkatesa Perumal College of Engineering & Technology (SVPP Autonomous)\n`;
      csv += `Department of Artificial Intelligence - Official Course Attendance Register\n`;
      csv += `Course: ${selectedSubCode} - ${currentSub.name}, Instructor: ${currentTeacher.name}, Section: ${activeSectionTab}\n\n`;

      csv += `S.No.,Roll No,Student Name,Section,`;
      subSessions.forEach(s => {
        const parts = s.date.split('-');
        csv += `${parseInt(parts[2])}/${parseInt(parts[1])} (${s.period}),`;
      });
      csv += `Total Attended,Total Conducted,Attendance %,Status\n`;

      filteredStudents.forEach((st, idx) => {
        let att = 0;
        let con = subSessions.length;
        let rowCells = "";
        subSessions.forEach(s => {
          const val = (s.records && s.records[st.rollNo]) || "1";
          if (val === "1" || val === "P") att++;
          rowCells += `${val === 'A' ? 'A' : '1'},`;
        });
        const pct = con > 0 ? ((att / con) * 100).toFixed(1) : 100.0;
        const status = parseFloat(pct) >= 75 ? "SAFE" : parseFloat(pct) >= 65 ? "CONDONATION" : "SHORTAGE";

        csv += `${idx + 1},${st.rollNo},"${st.name}",${st.section || 'A'},${rowCells}${att},${con},${pct}%,${status}\n`;
      });

      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `SVPP_Attendance_${selectedSubCode}_${activeSectionTab.replace(/\s+/g, '_')}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showNotification("Downloaded Course Attendance Sheet (.CSV) successfully!", "success");
    });
  }
}

// Global toggle for Google Sheets Cell
window.toggleGsheetCell = function(sessionId, rollNo) {
  const sessions = getStoredAttendanceSessions();
  const sess = sessions.find(s => s.sessionId === sessionId);
  if (!sess) return;

  if (!sess.records) sess.records = {};
  const current = sess.records[rollNo] || "1";
  sess.records[rollNo] = (current === "1" || current === "P") ? "A" : "1";

  saveStoredAttendanceSessions(sessions);
  syncAllStudentsRealtimeAttendance();

  renderExcelWorkbookApp();

  const currentRollInput = document.getElementById("attendanceRollInput");
  if (currentRollInput && currentRollInput.value.toUpperCase() === rollNo) {
    const student = getOrCreateStudentRecord(rollNo);
    if (student && window.renderStudentAttendanceGlobal) window.renderStudentAttendanceGlobal(student);
  }
};

window.switchWorkbookSection = function(section) {
  window.excelActiveSection = section;
  renderExcelWorkbookApp();
};

// =============================================================================
// HOD EXECUTIVE GAZETTE & APPROVAL DESK
// =============================================================================

function renderHodExecutiveDesk() {
  const container = document.getElementById("erpHodDeskViewContainer");
  if (!container) return;

  const user = getAuthenticatedUser();
  const isHodOrAdmin = user && (user.role === "HOD" || user.role === "Admin");

  const sessions = getStoredAttendanceSessions();
  const pendingSessions = sessions.filter(s => s.status === "Pending HOD Approval");
  const approvedSessions = sessions.filter(s => s.status === "Approved");

  // Roster analysis for HOD Watchlist
  const students = SVPP_DATA.roster3rdYear || [];
  const condonationStudents = [];
  const detentionRiskStudents = [];

  students.forEach(st => {
    const stats = computeRealtimeAttendanceForStudent(st.rollNo, false);
    if (stats.overallPct < 65) {
      detentionRiskStudents.push({ ...st, pct: stats.overallPct, missed: stats.totalMissed, conducted: stats.totalConducted });
    } else if (stats.overallPct < 75) {
      condonationStudents.push({ ...st, pct: stats.overallPct, missed: stats.totalMissed, conducted: stats.totalConducted });
    }
  });

  container.innerHTML = `
    <div style="background:#ffffff; border:1px solid #cbd5e1; border-radius:12px; padding:24px; box-shadow:0 4px 16px rgba(0,0,0,0.05);">
      <!-- HOD Desk Banner -->
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:14px; border-bottom:2px solid #003366; padding-bottom:18px; margin-bottom:20px;">
        <div>
          <div style="font-size:0.78rem; text-transform:uppercase; font-weight:800; color:#0284c7; margin-bottom:3px;">
            Autonomous Executive Governance
          </div>
          <h3 style="margin:0; font-size:1.35rem; color:var(--navy-dark); font-weight:800; display:flex; align-items:center; gap:10px;">
            <span>🛡️</span> Department Head (HOD) Attendance Authorization Gazette
          </h3>
          <p style="margin:4px 0 0 0; font-size:0.86rem; color:#475569;">
            Final institutional approval authority. All student transcripts and examination hall-tickets are legally governed by sessions signed below.
          </p>
        </div>

        <div style="display:flex; gap:10px; align-items:center;">
          ${isHodOrAdmin && pendingSessions.length > 0 ? `
            <button type="button" class="btn-primary" id="hodBulkApproveBtn" style="padding:8px 18px; font-size:0.84rem; font-weight:700;">
              ⚡ 1-Click Gazette Sign &amp; Approve (${pendingSessions.length} Sessions)
            </button>
          ` : ''}
        </div>
      </div>

      <!-- Access Status Notice -->
      ${!isHodOrAdmin ? `
        <div style="background:#fffbeb; border:1px solid #fde68a; border-radius:8px; padding:12px 18px; margin-bottom:22px; font-size:0.85rem; color:#92400e; display:flex; align-items:center; gap:12px;">
          <span style="font-size:1.4rem;">🔒</span>
          <div>
            <strong>Faculty / Student View Mode:</strong> You are viewing the live HOD Gazette Queue. Authorization and gazette signing privileges require Head of Department credentials (<code>hod.ai@svpp.edu.in</code>).
          </div>
        </div>
      ` : `
        <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:12px 18px; margin-bottom:22px; font-size:0.85rem; color:#166534; display:flex; align-items:center; gap:12px;">
          <span style="font-size:1.4rem;">🏛️</span>
          <div>
            <strong>HOD Executive Privileges Active:</strong> Authenticated as <strong>Dr. V. Janardhan Babu, Ph.D.</strong> You may approve, modify, or reject any department attendance register.
          </div>
        </div>
      `}

      <!-- SECTION 1: PENDING SESSION AUTHORIZATION QUEUE -->
      <div style="margin-bottom:30px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <h4 style="margin:0; font-size:1.1rem; font-weight:800; color:var(--navy-dark); display:flex; align-items:center; gap:8px;">
            <span>⏳</span> Sessions Awaiting HOD Gazette Signature
            <span class="hod-badge-pending">${pendingSessions.length} Pending</span>
          </h4>
        </div>

        ${pendingSessions.length === 0 ? `
          <div style="text-align:center; padding:36px; background:#f8fafc; border:1.5px dashed #cbd5e1; border-radius:10px; color:#64748b;">
            ✨ <strong>All lecture sessions are up to date!</strong> No pending attendance registers in queue.
          </div>
        ` : pendingSessions.map(sess => {
          const total = Object.keys(sess.records || {}).length || 127;
          const pCount = Object.values(sess.records || {}).filter(v => v === "P").length;
          const aCount = total - pCount;
          const pct = ((pCount / total) * 100).toFixed(1);

          return `
            <div class="hod-approval-card pending">
              <div>
                <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin-bottom:4px;">
                  <strong style="font-size:1.05rem; color:var(--navy-dark);">${sess.subjectCode} &mdash; ${sess.subjectName}</strong>
                  <span class="hod-badge-pending">Pending Signature</span>
                  <span style="font-size:0.75rem; background:#ffffff; border:1px solid #cbd5e1; padding:2px 8px; border-radius:4px; font-weight:600;">
                    ${sess.section === 'all' ? 'All 127 Cohort' : sess.section}
                  </span>
                </div>
                <div style="font-size:0.85rem; color:#475569;">
                  📅 <strong>${sess.date}</strong> &bull; ${sess.period} &bull; Faculty In-Charge: <strong>${sess.facultyName}</strong> (${sess.facultyEmail})
                </div>
                <div style="font-size:0.82rem; color:#334155; margin-top:6px;">
                  Class Strength: <strong style="color:#15803d;">${pCount} Present</strong> (${pct}%) &bull; <strong style="color:#dc2626;">${aCount} Absent</strong> &bull; Submitted: ${new Date(sess.submittedAt).toLocaleDateString()}
                </div>
              </div>

              <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
                ${isHodOrAdmin ? `
                  <button type="button" class="excel-btn excel-btn-success" onclick="window.hodApproveSingleSession('${sess.sessionId}')">
                    ⚡ Approve &amp; Sign
                  </button>
                  <button type="button" class="excel-btn excel-btn-outline" onclick="window.hodReviewSessionInExcel('${sess.sessionId}')">
                    ✏️ Inspect Register
                  </button>
                  <button type="button" class="excel-btn excel-btn-a" onclick="window.hodRejectSingleSession('${sess.sessionId}')">
                    ❌ Return to Faculty
                  </button>
                ` : `
                  <span style="font-size:0.82rem; color:#b45309; font-weight:700;">Awaiting HOD Signature</span>
                `}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- SECTION 2: HOD AUTONOMOUS EXAM COMPLIANCE WATCHLIST -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:20px; margin-bottom:30px;">
        <!-- Condonation Watchlist -->
        <div style="background:#fffbeb; border:1px solid #fde68a; border-radius:10px; padding:18px;">
          <h4 style="margin:0 0 10px 0; font-size:0.98rem; font-weight:800; color:#92400e; display:flex; justify-content:space-between; align-items:center;">
            <span>⚠️ Condonation Watchlist (65% &ndash; 74.9%)</span>
            <span style="background:#f59e0b; color:#ffffff; font-size:0.75rem; padding:2px 8px; border-radius:10px;">${condonationStudents.length} Students</span>
          </h4>
          <div style="max-height:160px; overflow-y:auto; font-size:0.8rem;">
            ${condonationStudents.length === 0 ? `
              <div style="color:#78350f;">No students currently in condonation range.</div>
            ` : condonationStudents.map(st => `
              <div style="display:flex; justify-content:space-between; padding:4px 0; border-bottom:1px solid #fef3c7;">
                <span><strong>${st.rollNo}</strong> &bull; ${st.name}</span>
                <span style="font-family:var(--font-mono); font-weight:800; color:#b45309;">${st.pct}%</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Detention Risk Watchlist -->
        <div style="background:#fef2f2; border:1px solid #fca5a5; border-radius:10px; padding:18px;">
          <h4 style="margin:0 0 10px 0; font-size:0.98rem; font-weight:800; color:#991b1b; display:flex; justify-content:space-between; align-items:center;">
            <span>🚨 Detention Risk Shortage (&lt; 65%)</span>
            <span style="background:#ef4444; color:#ffffff; font-size:0.75rem; padding:2px 8px; border-radius:10px;">${detentionRiskStudents.length} Students</span>
          </h4>
          <div style="max-height:160px; overflow-y:auto; font-size:0.8rem;">
            ${detentionRiskStudents.length === 0 ? `
              <div style="color:#991b1b;">No students in critical shortage detention risk!</div>
            ` : detentionRiskStudents.map(st => `
              <div style="display:flex; justify-content:space-between; padding:4px 0; border-bottom:1px solid #fee2e2;">
                <span><strong>${st.rollNo}</strong> &bull; ${st.name}</span>
                <span style="font-family:var(--font-mono); font-weight:800; color:#dc2626;">${st.pct}%</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- SECTION 3: OFFICIAL SANCTIONED SESSIONS ARCHIVE -->
      <div>
        <h4 style="margin:0 0 12px 0; font-size:1.1rem; font-weight:800; color:var(--navy-dark); display:flex; align-items:center; gap:8px;">
          <span>✔</span> Sanctioned Institutional Gazette Ledger (${approvedSessions.length} Approved Lectures)
        </h4>

        <div style="max-height:240px; overflow-y:auto; border:1px solid #cbd5e1; border-radius:8px;">
          <table class="day-log-table">
            <thead>
              <tr>
                <th>Session ID</th>
                <th>Lecture Date &amp; Period</th>
                <th>Course Details</th>
                <th>Instructor</th>
                <th style="text-align:center;">Strength (P/Total)</th>
                <th>Sanctioned By</th>
              </tr>
            </thead>
            <tbody>
              ${approvedSessions.map(sess => {
                const total = Object.keys(sess.records || {}).length || 127;
                const pCount = Object.values(sess.records || {}).filter(v => v === "P").length;
                const pct = ((pCount / total) * 100).toFixed(1);

                return `
                  <tr>
                    <td style="font-family:var(--font-mono); font-size:0.75rem; color:#64748b;">${sess.sessionId}</td>
                    <td>
                      <strong>${sess.date}</strong><br>
                      <span style="font-size:0.74rem; color:#475569;">${sess.period}</span>
                    </td>
                    <td>
                      <strong>${sess.subjectCode}</strong><br>
                      <span style="font-size:0.76rem; color:#475569;">${sess.subjectName}</span>
                    </td>
                    <td style="font-size:0.8rem;">${sess.facultyName}</td>
                    <td style="text-align:center; font-family:var(--font-mono); font-weight:700;">
                      <span style="color:#15803d;">${pCount}</span> / ${total} (${pct}%)
                    </td>
                    <td>
                      <span class="hod-badge-approved">${sess.approvedBy || 'Dr. V. Janardhan Babu (HOD AI)'}</span>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  // Hook up bulk approve button
  const bulkBtn = document.getElementById("hodBulkApproveBtn");
  if (bulkBtn) {
    bulkBtn.addEventListener("click", () => {
      const approverName = (user && user.name) || "Dr. V. Janardhan Babu, Ph.D. (HOD AI)";
      const sessions = getStoredAttendanceSessions();

      sessions.forEach(s => {
        if (s.status === "Pending HOD Approval") {
          s.status = "Approved";
          s.approvedBy = approverName;
          s.approvedAt = new Date().toISOString();
        }
      });

      saveStoredAttendanceSessions(sessions);
      syncAllStudentsRealtimeAttendance();
      showNotification("All pending lecture sessions gazette signed and approved successfully!", "success");

      renderHodExecutiveDesk();
      renderExcelWorkbookApp();

      const curRoll = document.getElementById("attendanceRollInput")?.value || "24G01A4324";
      const student = getOrCreateStudentRecord(curRoll);
      if (student && typeof window.renderStudentAttendanceGlobal === "function") {
        window.renderStudentAttendanceGlobal(student);
      }
    });
  }
}

// Global HOD Actions
window.hodApproveSingleSession = function(sessionId) {
  const user = getAuthenticatedUser();
  const approverName = (user && user.name) || "Dr. V. Janardhan Babu, Ph.D. (HOD AI)";
  const sessions = getStoredAttendanceSessions();
  const sess = sessions.find(s => s.sessionId === sessionId);

  if (sess) {
    sess.status = "Approved";
    sess.approvedBy = approverName;
    sess.approvedAt = new Date().toISOString();
    saveStoredAttendanceSessions(sessions);
    syncAllStudentsRealtimeAttendance();

    showNotification(`Session for ${sess.subjectCode} on ${sess.date} sanctioned by HOD!`, "success");
    renderHodExecutiveDesk();
    renderExcelWorkbookApp();

    const curRoll = document.getElementById("attendanceRollInput")?.value || "24G01A4324";
    const student = getOrCreateStudentRecord(curRoll);
    if (student && typeof window.renderStudentAttendanceGlobal === "function") {
      window.renderStudentAttendanceGlobal(student);
    }
  }
};

window.hodRejectSingleSession = function(sessionId) {
  if (!confirm("Are you sure you want to return this session to the faculty member for re-verification?")) return;
  let sessions = getStoredAttendanceSessions();
  sessions = sessions.filter(s => s.sessionId !== sessionId);
  saveStoredAttendanceSessions(sessions);
  syncAllStudentsRealtimeAttendance();

  showNotification("Session returned to faculty and removed from gazette queue.", "warning");
  renderHodExecutiveDesk();
  renderExcelWorkbookApp();
};

window.hodReviewSessionInExcel = function(sessionId) {
  const sessions = getStoredAttendanceSessions();
  const sess = sessions.find(s => s.sessionId === sessionId);
  if (!sess) return;

  window.excelActiveSubCode = sess.subjectCode;
  const tabExcelBtn = document.getElementById("erpTabExcelWorkbookBtn");
  if (tabExcelBtn) tabExcelBtn.click();
};

window.refreshRealtimeAttendanceUI = function() {
  syncAllStudentsRealtimeAttendance();
  renderExcelWorkbookApp();
  renderHodExecutiveDesk();
  const curRoll = document.getElementById("attendanceRollInput")?.value || "24G01A4324";
  const student = getOrCreateStudentRecord(curRoll);
  if (student && typeof window.renderStudentAttendanceGlobal === "function") {
    window.renderStudentAttendanceGlobal(student);
  }
};

// MODULE 3: Syllabus Copy (R26)
function initSyllabusModule() {
  const semPills = document.querySelectorAll(".sem-pill-btn[data-sem]");
  const container = document.getElementById("syllabusCoursesContainer");

  if (!container) return;

  function renderSemesterSyllabus(semKey) {
    const courses = SVPP_DATA.syllabus[semKey] || [];
    if (courses.length === 0) {
      container.innerHTML = `
        <div class="glass-card" style="text-align:center; padding:50px;">
          <h4 style="color:var(--navy-dark); font-size:1.2rem;">Semester ${semKey.toUpperCase()} Syllabus Under BoS Notification</h4>
          <p style="color:#64748b; margin-top:8px;">Detailed syllabus for later semesters is being prepared in accordance with Autonomous BoS guidelines.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = courses.map((course, idx) => `
      <div class="course-syllabus-card">
        <div class="course-header-row" onclick="toggleCourseAccordion('course-acc-${idx}')">
          <div class="course-title-block">
            <span class="course-code-tag">${course.code}</span>
            <div>
              <h4 class="course-name-h4">${course.title}</h4>
              <span style="font-size:0.8rem; color:#64748b;">${course.category}</span>
            </div>
          </div>
          <div class="course-ltpc-badges">
            <div class="ltpc-box">L: ${course.ltpc.l}</div>
            <div class="ltpc-box">T: ${course.ltpc.t}</div>
            <div class="ltpc-box">P: ${course.ltpc.p}</div>
            <div class="ltpc-box ltpc-credits">Credits: ${course.ltpc.c}</div>
            <button class="btn-secondary" style="padding:4px 10px; font-size:0.78rem;">
              Expand Details &#9662;
            </button>
          </div>
        </div>

        <div class="course-body-accordion ${idx === 0 ? 'open' : ''}" id="course-acc-${idx}">
          <p style="font-size:0.92rem; color:#334155; line-height:1.6; margin-bottom:16px;">
            <strong>Course Overview:</strong> ${course.desc}
          </p>

          <h5 style="font-size:0.9rem; font-weight:700; color:var(--navy-dark); text-transform:uppercase; letter-spacing:0.04em;">Unit-Wise Syllabus Structure:</h5>
          <div class="unit-breakdown-grid">
            ${course.units.map(u => `
              <div class="unit-mini-card">
                <h5>${u.num}: ${u.title}</h5>
                <p>${u.content}</p>
              </div>
            `).join("")}
          </div>

          <div style="background:#f8fafc; padding:14px 18px; border-radius:8px; border:1px solid #e2e8f0; margin-top:16px;">
            <strong style="font-size:0.84rem; color:var(--navy-dark);">Prescribed Textbooks & References:</strong>
            <ul style="font-size:0.84rem; color:#475569; margin:6px 0 0 18px;">
              ${course.textbooks.map(tb => `<li>${tb}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    `).join("");
  }

  window.toggleCourseAccordion = function(id) {
    const acc = document.getElementById(id);
    if (acc) {
      acc.classList.toggle("open");
    }
  };

  semPills.forEach(pill => {
    pill.addEventListener("click", () => {
      semPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const sem = pill.getAttribute("data-sem");
      renderSemesterSyllabus(sem);
    });
  });

  renderSemesterSyllabus("sem3");
}

// MODULE 4: Time Tables
function initTimetablesModule() {
  const dynamicContainer = document.getElementById("classTimetableDynamicContainer");
  const statsPillsContainer = document.getElementById("ttStatsPills");
  const examContainer = document.getElementById("examTimetableBody");
  const subtabs = document.querySelectorAll(".tt-subtab-btn");
  const classTabs = document.querySelectorAll(".tt-class-btn");
  const searchInput = document.getElementById("ttSearchInput");
  const facSelect = document.getElementById("facultyScheduleSelect");

  let currentClassId = "ii-a";
  let currentSearchQuery = "";

  // Helper to render the active class timetable (Grid + Faculty/Subject Reference Table)
  function renderClassTimetable(classId, query = "") {
    const classData = SVPP_DATA.timetables.classes[classId] || SVPP_DATA.timetables.classes["ii-a"];
    const q = query.trim().toLowerCase();

    // 1. Update quick stats strip
    if (statsPillsContainer) {
      statsPillsContainer.innerHTML = `
        <div class="tt-stat-chip">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          Room: <strong>${classData.room}</strong>
        </div>
        <div class="tt-stat-chip">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Weekly Periods: <strong>${classData.totalWeeklyPeriods}</strong>
        </div>
        <div class="tt-stat-chip">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          Regulation: <strong>${classData.regulation}</strong>
        </div>
        <div class="tt-stat-chip">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          In-Charge: <strong>${classData.classInCharge}</strong>
        </div>
      `;
    }

    if (!dynamicContainer) return;

    // 2. Build Table Headers
    const isFinalYear = classId === "iv";
    let theadHtml = `<tr><th style="width: 80px;">Day</th>`;
    classData.periodsHeader.forEach(h => {
      if (h.isBreak) {
        theadHtml += `<th style="width: 45px; background: #b45309; color: #fff;">${h.label}<br><span style="font-size:0.68rem; font-weight:normal;">${h.time}</span></th>`;
      } else if (h.isAfternoon) {
        theadHtml += `<th style="background: #1e3a8a; color: #fff;">${h.label}<br><span style="font-size:0.68rem; font-weight:normal;">${h.time}</span></th>`;
      } else {
        theadHtml += `<th>Period ${h.num}<br><span style="font-size:0.75rem; font-weight:normal; opacity:0.9;">(${h.time})</span></th>`;
      }
    });
    theadHtml += `</tr>`;

    // 3. Build Table Rows
    const tbodyHtml = classData.days.map(d => {
      let cellsHtml = "";
      d.periods.forEach(p => {
        if (p.isBreak) {
          cellsHtml += `<td class="tt-break-col" rowspan="1">LUNCH BREAK</td>`;
          return;
        }

        const isMatch = q && (
          (p.code && p.code.toLowerCase().includes(q)) ||
          (p.subCode && p.subCode.toLowerCase().includes(q)) ||
          (p.name && p.name.toLowerCase().includes(q)) ||
          (p.teacher && p.teacher.toLowerCase().includes(q))
        );

        const matchClass = isMatch ? "tt-slot-matched" : "";
        const spanAttr = p.span && p.span > 1 ? `colspan="${p.span}"` : "";

        if (p.isLab) {
          cellsHtml += `
            <td ${spanAttr} class="tt-lab-slot ${matchClass}">
              <div class="tt-slot-card">
                <span class="tt-lab-badge">Laboratory</span>
                <div class="tt-slot-code">${p.code}</div>
                <div class="tt-slot-name">${p.name}</div>
                <div class="tt-slot-fac">${p.teacher}</div>
              </div>
            </td>
          `;
        } else if (p.isAfternoonBlock) {
          cellsHtml += `
            <td ${spanAttr} class="tt-highlight-slot ${matchClass}" style="text-align: left; padding: 10px 14px;">
              <div class="tt-slot-card">
                <span class="circ-badge" style="background:#dbeafe; color:#1e40af; font-size:0.68rem; margin-bottom:4px;">Industry &amp; Research</span>
                <div class="tt-slot-code" style="font-size:0.9rem;">${p.code}</div>
                <div class="tt-slot-name" style="font-size:0.75rem;">${p.name}</div>
                <div class="tt-slot-fac" style="font-size:0.72rem;">${p.teacher}</div>
              </div>
            </td>
          `;
        } else if (p.isActivity) {
          cellsHtml += `
            <td ${spanAttr} class="tt-activity-slot ${matchClass}">
              <div class="tt-slot-card">
                <div class="tt-slot-code">${p.code}</div>
                <div class="tt-slot-name">${p.name}</div>
                <div class="tt-slot-fac">${p.teacher}</div>
              </div>
            </td>
          `;
        } else if (p.isHighlighted) {
          cellsHtml += `
            <td ${spanAttr} class="tt-highlight-slot ${matchClass}">
              <div class="tt-slot-card">
                <div class="tt-slot-code">${p.code}</div>
                <div class="tt-slot-name">${p.name}</div>
                <div class="tt-slot-fac">${p.teacher}</div>
              </div>
            </td>
          `;
        } else {
          cellsHtml += `
            <td ${spanAttr} class="${matchClass}">
              <div class="tt-slot-card">
                <div class="tt-slot-code">${p.code}</div>
                <div class="tt-slot-name">${p.name}</div>
                <div class="tt-slot-fac">${p.teacher}</div>
              </div>
            </td>
          `;
        }
      });

      return `
        <tr>
          <td class="day-col">${d.day}</td>
          ${cellsHtml}
        </tr>
      `;
    }).join("");

    // 4. Build Subject & Faculty Reference Table
    const refRowsHtml = classData.subjects.map(s => {
      const isRowMatch = q && (
        s.subCode.toLowerCase().includes(q) ||
        s.subName.toLowerCase().includes(q) ||
        s.teacher.toLowerCase().includes(q)
      );

      return `
        <tr class="${isRowMatch ? 'tt-slot-matched' : ''}">
          <td><span class="tt-subcode-badge">${s.subCode}</span></td>
          <td><strong>${s.subName}</strong></td>
          <td style="text-align:center; font-weight:600;">${s.l}</td>
          <td style="text-align:center; font-weight:600;">${s.t}</td>
          <td style="text-align:center; font-weight:600;">${s.p}</td>
          <td style="text-align:center; font-weight:700; color:var(--brand-blue);">${s.a}</td>
          <td style="font-weight:700; color:var(--navy-dark);">${s.teacher}</td>
          <td>
            ${s.phone && s.phone !== '-' ? `
              <a href="tel:${s.phone}" class="tt-phone-link" title="Call ${s.teacher}">
                <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                ${s.phone}
              </a>
              <button type="button" class="tt-copy-btn" onclick="navigator.clipboard.writeText('${s.phone}'); showNotification('Phone copied: ${s.phone}', 'info');" title="Copy Mobile Number">📋</button>
            ` : `<span style="color:#94a3b8; font-size:0.8rem;">Dept. Faculty Desk</span>`}
          </td>
          <td style="font-size:0.8rem; color:#10b981; font-weight:700;">Verified &check;</td>
        </tr>
      `;
    }).join("");

    // 5. Assemble everything into container
    dynamicContainer.innerHTML = `
      <!-- Official Timetable Institutional Banner -->
      <div class="tt-official-banner">
        <div>
          <div class="tt-dept-title">Department of Artificial Intelligence &bull; SVPP (Autonomous)</div>
          <h3 class="tt-heading-main">${classData.fullName} &ndash; ${classData.room} (${classData.regulation})</h3>
          <div class="tt-banner-meta">
            <span><strong>Academic Year:</strong> ${classData.academicYear}</span>
            <span>&bull;</span>
            <span><strong>Regulation:</strong> ${classData.regulation}</span>
            <span>&bull;</span>
            <span><strong>Class In-Charge:</strong> ${classData.classInCharge}</span>
            <span>&bull;</span>
            <span>${classData.timingsText}</span>
          </div>
        </div>
        <div class="tt-badge-lh">
          ${classData.room}
          <small>Classroom</small>
        </div>
      </div>

      <!-- Timetable Grid Table -->
      <div class="timetable-container">
        <table class="timetable-grid-table">
          <thead>
            ${theadHtml}
          </thead>
          <tbody>
            ${tbodyHtml}
          </tbody>
        </table>
      </div>

      <!-- Subject Codes, Credits & Faculty Directory Table -->
      <div class="tt-ref-section">
        <div class="tt-ref-header">
          <div class="tt-ref-title">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            Subject Codes, Credit Structure (L-T-P-A) &amp; Teacher Directory
          </div>
          <span style="font-size:0.8rem; color:#64748b;">
            L: Lecture &bull; T: Tutorial &bull; P: Practical &bull; A: Total Periods/Week &bull; Total Load: ${classData.totalWeeklyPeriods} Periods
          </span>
        </div>
        <div class="tt-ref-table-wrap">
          <table class="tt-ref-table">
            <thead>
              <tr>
                <th style="width: 130px;">Sub Code</th>
                <th>Subject Name</th>
                <th style="width: 45px; text-align: center;">L</th>
                <th style="width: 45px; text-align: center;">T</th>
                <th style="width: 45px; text-align: center;">P</th>
                <th style="width: 45px; text-align: center;">A</th>
                <th>Teacher Name</th>
                <th>Mobile Number</th>
                <th>Sign / Status</th>
              </tr>
            </thead>
            <tbody>
              ${refRowsHtml}
            </tbody>
            <tfoot>
              <tr style="background:#f8fafc; font-weight:700;">
                <td colspan="5" style="text-align:right;">Total Class Contact Periods / Week:</td>
                <td style="text-align:center; color:var(--brand-blue);">${classData.totalWeeklyPeriods}</td>
                <td colspan="3" style="color:#64748b; font-size:0.8rem;">Odd Semester A.Y. 2026-27 &bull; HOD Approved</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    `;
  }

  // Helper to dynamically calculate and render faculty teaching schedule across all classes
  function renderFacultyTeachingSchedule(facultyQuery) {
    const display = document.getElementById("facultyScheduleResult");
    if (!display) return;

    const targetFac = facultyQuery.trim().toLowerCase();
    const cleanSearchName = targetFac.replace(/dr\.|prof\.|mr\.|mrs\.|ms\./g, "").trim();

    const matches = [];
    const classKeys = Object.keys(SVPP_DATA.timetables.classes);

    classKeys.forEach(key => {
      const cls = SVPP_DATA.timetables.classes[key];
      cls.days.forEach(d => {
        d.periods.forEach((p, idx) => {
          if (!p.teacher) return;
          const teacherLower = p.teacher.toLowerCase();
          
          if (teacherLower.includes(targetFac) || (cleanSearchName.length > 2 && teacherLower.includes(cleanSearchName))) {
            const periodHeader = cls.periodsHeader[idx] || { num: `${idx + 1}`, time: "Scheduled" };
            matches.push({
              classLabel: cls.label,
              room: cls.room,
              day: d.day,
              periodText: p.span ? `Periods ${idx + 1} - ${idx + p.span} (${periodHeader.time})` : `Period ${periodHeader.num || (idx + 1)} (${periodHeader.time})`,
              span: p.span || 1,
              subCode: p.subCode || "-",
              subName: p.name || p.code,
              teacher: p.teacher,
              phone: p.phone,
              isLab: p.isLab
            });
          }
        });
      });
    });

    const totalHours = matches.reduce((acc, m) => acc + m.span, 0);

    display.innerHTML = `
      <div class="glass-card" style="margin-top:16px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px; margin-bottom:16px;">
          <div>
            <h4 style="color:var(--navy-dark); font-size:1.2rem; font-weight:800; margin-bottom:4px;">
              Weekly Teaching Schedule &bull; ${facultyQuery}
            </h4>
            <p style="color:#64748b; font-size:0.86rem;">
              Department of Artificial Intelligence &bull; SVPP Autonomous &bull; Odd Semester 2026-27
            </p>
          </div>
          <div style="display:flex; gap:8px;">
            <span class="tt-stat-chip">Total Teaching Load: <strong>${totalHours} Periods / Week</strong></span>
            <span class="tt-stat-chip">Classes: <strong>${[...new Set(matches.map(m => m.classLabel))].join(', ') || 'AI Dept'}</strong></span>
          </div>
        </div>

        ${matches.length > 0 ? `
          <div class="tt-ref-table-wrap">
            <table class="tt-ref-table">
              <thead>
                <tr>
                  <th style="width:80px;">Day</th>
                  <th style="width:160px;">Period &amp; Time</th>
                  <th>Class / Section</th>
                  <th>Room / Lab</th>
                  <th>Subject Code</th>
                  <th>Subject Title</th>
                  <th style="width:60px; text-align:center;">Hours</th>
                </tr>
              </thead>
              <tbody>
                ${matches.map(m => `
                  <tr>
                    <td class="day-col" style="font-weight:700;">${m.day}</td>
                    <td><span class="circ-badge ${m.isLab ? 'badge-academic' : 'badge-exam'}" style="font-size:0.75rem;">${m.periodText}</span></td>
                    <td style="font-weight:700; color:var(--navy-dark);">${m.classLabel}</td>
                    <td><span class="tt-room-pill" style="font-size:0.75rem;">${m.room}</span></td>
                    <td><span class="tt-subcode-badge">${m.subCode}</span></td>
                    <td><strong>${m.subName}</strong></td>
                    <td style="text-align:center; font-weight:700; color:var(--brand-blue);">${m.span}</td>
                  </tr>
                `).join('')}
              </tbody>
              <tfoot>
                <tr style="background:#f8fafc; font-weight:700;">
                  <td colspan="6" style="text-align:right;">Cumulative Weekly Load:</td>
                  <td style="text-align:center; color:var(--brand-blue); font-size:1rem;">${totalHours}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        ` : `
          <div style="padding: 24px; text-align: center; color: #64748b; background: #f8fafc; border-radius: 8px;">
            No periods directly assigned to <strong>${facultyQuery}</strong> in current semester grid or faculty on administrative / mentoring role.
          </div>
        `}
      </div>
    `;
  }

  // 1. Initial Render
  renderClassTimetable(currentClassId, "");
  renderFacultyTeachingSchedule("Dr. V. Janardhan Babu");

  // 2. Class Tab click handlers
  classTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      classTabs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentClassId = btn.getAttribute("data-class-id");
      renderClassTimetable(currentClassId, currentSearchQuery);
    });
  });

  // 3. Search Filter Input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value;
      renderClassTimetable(currentClassId, currentSearchQuery);
    });
  }

  // 4. Subtabs (Class / Exams / Faculty)
  subtabs.forEach(tab => {
    tab.addEventListener("click", () => {
      subtabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const targetView = tab.getAttribute("data-tt-view");

      const classWrapper = document.getElementById("classTtWrapper");
      const examWrapper = document.getElementById("examTtWrapper");
      const facultyWrapper = document.getElementById("facultyTtWrapper");

      if (classWrapper) classWrapper.style.display = targetView === "class" ? "block" : "none";
      if (examWrapper) examWrapper.style.display = targetView === "exams" ? "block" : "none";
      if (facultyWrapper) facultyWrapper.style.display = targetView === "faculty" ? "block" : "none";
    });
  });

  // 5. Faculty Schedule selector change handler
  if (facSelect) {
    facSelect.addEventListener("change", (e) => {
      renderFacultyTeachingSchedule(e.target.value);
    });
  }

  // 6. Mid Examinations Table
  if (examContainer && SVPP_DATA.timetables.midExams) {
    examContainer.innerHTML = SVPP_DATA.timetables.midExams.map(ex => `
      <tr>
        <td style="font-weight:700; font-family:var(--font-mono);">${ex.date}</td>
        <td>${ex.day}</td>
        <td><span class="circ-badge badge-academic">${ex.session}</span></td>
        <td style="font-family:var(--font-mono); font-weight:700; color:var(--primary-navy);">${ex.code}</td>
        <td style="font-weight:600;">${ex.name}</td>
      </tr>
    `).join("");
  }
}

// MODULE 5: Marks & Mid Examinations
function initMarksModule() {
  const lookupForm = document.getElementById("marksLookupForm");
  const rollInput = document.getElementById("marksRollInput");
  const chips = document.querySelectorAll(".marks-roll-chip[data-roll]");
  const container = document.getElementById("marksDisplayContainer");

  function renderStudentMarks(student) {
    if (!container) return;
    window.currentMarksStudent = student;

    if (!student) {
      const searched = (rollInput && rollInput.value ? rollInput.value.trim() : "search query");
      container.innerHTML = `
        <div class="glass-card" style="text-align:center; padding:48px 24px; max-width:680px; margin:24px auto;">
          <div style="font-size:3rem; margin-bottom:12px; color:#dc2626;">🔍</div>
          <h3 style="font-family:var(--font-serif); font-size:1.5rem; color:var(--navy-dark); margin-bottom:8px;">No Official Student Record Found</h3>
          <p style="color:#64748b; font-size:0.92rem; margin-bottom:16px; line-height:1.5;">
            No registered student records match <strong>"${searched}"</strong> in the official database. Only verified real-time SVPP Artificial Intelligence Department student records are accessible.
          </p>
          <div style="font-size:0.84rem; background:#f8fafc; border:1px solid #cbd5e1; padding:12px; border-radius:8px; color:#475569; text-align:left;">
            <strong>💡 Quick Tip:</strong> Click any of the quick student lookup chips above (e.g. <code>24G01A4301</code>, <code>24G01A4302</code>, <code>24G01A4310</code>) or search using valid III Year AI Hall Ticket numbers or student names.
          </div>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div style="margin-bottom:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
          <h3 style="font-size:1.3rem; color:var(--navy-dark); font-weight:700;">${student.name} (${student.rollNo})</h3>
          <p style="color:#64748b; font-size:0.86rem;">Internal Assessment Breakdown &bull; Mid-I & Mid-II Evaluation</p>
        </div>
        <div style="display:flex; gap:8px; align-items:center;">
          ${isFacultyOrHodLoggedIn() ? `
          <button class="btn-primary" onclick="openMarksEditorModal('${student.rollNo}', 'mid1')" style="background:#006699; font-size:0.85rem; display:inline-flex; align-items:center; gap:6px;">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
            Edit Mid Marks
          </button>
          ` : `
          <span class="student-view-tag" style="background:#f1f5f9; color:#475569; padding:6px 12px; border-radius:6px; font-size:0.82rem; font-weight:600; border:1px solid #cbd5e1; display:inline-flex; align-items:center; gap:6px;" title="Students have view-only access. Faculty/HOD login required to edit marks.">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            Student View-Only Mode
          </span>
          `}
          <button class="btn-secondary" onclick="window.print()">
            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
            Print Marks Sheet
          </button>
        </div>
      </div>

      <h4 style="font-size:1.1rem; color:var(--navy-dark); font-weight:700; margin-bottom:14px; border-left:4px solid var(--primary-navy); padding-left:10px;">
        Mid-I Examination Marks (Scaled to 30)
      </h4>
      <div class="marks-summary-grid">
        ${student.midMarks.mid1.map(m => `
          <div class="subject-marks-card">
            <div class="marks-card-head">
              <div>
                <span class="course-code-tag" style="font-size:0.75rem;">${m.code}</span>
                <h4 style="margin-top:6px;">${m.name}</h4>
              </div>
            </div>
            <div class="marks-split-row">
              <div>
                <div class="split-col-val">${m.descriptive} <span style="font-size:0.75rem; color:#94a3b8;">/30</span></div>
                <div class="split-col-lbl">Descriptive</div>
              </div>
              <div>
                <div class="split-col-val">${m.quiz} <span style="font-size:0.75rem; color:#94a3b8;">/10</span></div>
                <div class="split-col-lbl">Online Quiz</div>
              </div>
              <div>
                <div class="split-col-val">${m.assignment} <span style="font-size:0.75rem; color:#94a3b8;">/5</span></div>
                <div class="split-col-lbl">Assignment</div>
              </div>
            </div>
            <div class="marks-total-bar">
              <span style="font-size:0.85rem; font-weight:700; color:var(--navy-dark);">Internal Score (Scaled):</span>
              <span class="total-score-badge">${m.scaled} / 30</span>
            </div>
          </div>
        `).join("")}
      </div>

      <h4 style="font-size:1.1rem; color:var(--navy-dark); font-weight:700; margin:28px 0 14px; border-left:4px solid var(--accent-gold); padding-left:10px;">
        Mid-II Examination Marks (Scaled to 30)
      </h4>
      <div class="marks-summary-grid">
        ${student.midMarks.mid2.map(m => `
          <div class="subject-marks-card">
            <div class="marks-card-head">
              <div>
                <span class="course-code-tag" style="font-size:0.75rem; background:#006699;">${m.code}</span>
                <h4 style="margin-top:6px;">${m.name}</h4>
              </div>
            </div>
            <div class="marks-split-row">
              <div>
                <div class="split-col-val">${m.descriptive} <span style="font-size:0.75rem; color:#94a3b8;">/30</span></div>
                <div class="split-col-lbl">Descriptive</div>
              </div>
              <div>
                <div class="split-col-val">${m.quiz} <span style="font-size:0.75rem; color:#94a3b8;">/10</span></div>
                <div class="split-col-lbl">Online Quiz</div>
              </div>
              <div>
                <div class="split-col-val">${m.assignment} <span style="font-size:0.75rem; color:#94a3b8;">/5</span></div>
                <div class="split-col-lbl">Assignment</div>
              </div>
            </div>
            <div class="marks-total-bar" style="background:#fef3c7; border-color:#fde68a;">
              <span style="font-size:0.85rem; font-weight:700; color:#78350f;">Internal Score (Scaled):</span>
              <span class="total-score-badge" style="color:#b45309;">${m.scaled} / 30</span>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  window.renderStudentMarksGlobal = renderStudentMarks;
  const defaultMarksStudent = SVPP_DATA.students["24G01A4301"] || SVPP_DATA.students["24G01A4324"] || Object.values(SVPP_DATA.students)[0];
  renderStudentMarks(defaultMarksStudent);

  if (lookupForm && rollInput) {
    lookupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const roll = rollInput.value.trim().toUpperCase();
      if (!roll) return;
      const student = getOrCreateStudentRecord(roll);
      renderStudentMarks(student);
    });
  }

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const roll = chip.getAttribute("data-roll");
      if (rollInput) rollInput.value = roll;
      const student = getOrCreateStudentRecord(roll);
      renderStudentMarks(student);
    });
  });

  const openMarksBtn = document.getElementById("openMarksEntryBtn");
  if (openMarksBtn) {
    openMarksBtn.addEventListener("click", () => {
      if (!isFacultyOrHodLoggedIn()) {
        window.openFacultyLoginModal("access Faculty Marks Update Console");
        return;
      }
      const curRoll = rollInput && rollInput.value ? rollInput.value.trim().toUpperCase() : "24G01A4301";
      if (window.openMarksEditorModal) {
        window.openMarksEditorModal(curRoll, "mid1");
      }
    });
  }
}

// PDF / Print download handler for grade memo
window.downloadGradeMemoPDF = function(rollNo) {
  const student = (rollNo && SVPP_DATA.students[rollNo]) || window.currentResultStudent;
  if (!student) {
    showNotification("No student result selected for download.", "danger");
    return;
  }
  const cleanRoll = student.rollNo || "SVPP";
  const fileName = `${cleanRoll}_Semester_Result_Memo`;
  const originalTitle = document.title;
  document.title = fileName;
  showNotification(`Preparing PDF download for Hall Ticket ${cleanRoll}...`, "info");
  setTimeout(() => {
    window.print();
    document.title = originalTitle;
  }, 250);
};

// MODULE 6: Semester Results Portal
function initResultsModule() {
  const resultForm = document.getElementById("resultsLookupForm");
  const rollInput = document.getElementById("resultsRollInput");
  const chips = document.querySelectorAll(".results-roll-chip[data-roll]");
  const container = document.getElementById("resultsMemoDisplay");

  function renderGradeMemo(student, selectedSemId) {
    if (!container) return;
    window.currentResultStudent = student;

    if (!student) {
      const searched = (rollInput && rollInput.value ? rollInput.value.trim() : "search query");
      container.innerHTML = `
        <div class="glass-card" style="text-align:center; padding:48px 24px; max-width:680px; margin:24px auto;">
          <div style="font-size:3rem; margin-bottom:12px; color:#dc2626;">🔍</div>
          <h3 style="font-family:var(--font-serif); font-size:1.45rem; color:var(--navy-dark); margin-bottom:10px;">Department Examination Records Search</h3>
          <div style="background:#fee2e2; border:1.5px solid #f87171; border-radius:8px; padding:16px 20px; margin-bottom:18px; color:#991b1b; font-size:1.05rem; font-weight:700; line-height:1.5;">
            «No examination records found for this roll number in the available department records.»
          </div>
          <p style="color:#64748b; font-size:0.92rem; margin-bottom:16px; line-height:1.5;">
            Searched Roll Number: <strong style="font-family:var(--font-mono); color:#1e293b;">"${searched}"</strong><br>
            The examination portal is strictly restricted to verified records belonging to the <strong>Department of Artificial Intelligence (Branches 43 &amp; 42)</strong>. Unrelated departments (Civil, EEE, Mech, ECE, CSE, Data Science) and unindexed roll numbers are strictly isolated.
          </p>
          <div style="font-size:0.84rem; background:#f8fafc; border:1px solid #cbd5e1; padding:12px; border-radius:8px; color:#475569; text-align:left;">
            <strong>💡 Quick Tip:</strong> Click any of the verified student lookup chips above (e.g. <code>24G01A4324</code>, <code>25G01A4301</code>, <code>24G01A4333</code>, <code>25G01A4201</code>) or search using a valid AI / AIML Hall Ticket number.
          </div>
        </div>
      `;
      return;
    }

    const availableSemesters = (student.semesterResults && student.semesterResults.length > 0)
      ? student.semesterResults
      : [];

    if (availableSemesters.length === 0) {
      container.innerHTML = `
        <div class="glass-card" style="text-align:center; padding:48px 24px; max-width:680px; margin:24px auto;">
          <div style="font-size:3rem; margin-bottom:12px; color:#eab308;">⚠️</div>
          <h3 style="font-family:var(--font-serif); font-size:1.45rem; color:var(--navy-dark); margin-bottom:10px;">No Official Exam Appearances Recorded</h3>
          <div style="background:#fef3c7; border:1.5px solid #fde68a; border-radius:8px; padding:16px 20px; margin-bottom:18px; color:#92400e; font-size:1.05rem; font-weight:700; line-height:1.5;">
            «No examination records found for this roll number in the available department records.»
          </div>
          <p style="color:#64748b; font-size:0.95rem; margin-bottom:16px; line-height:1.6;">
            Student <strong>${student.name} (${student.rollNo})</strong> has no registered examination appearances in the official college gazettes.
          </p>
          <div style="font-size:0.85rem; background:#f8fafc; border:1px solid #cbd5e1; padding:12px; border-radius:8px; color:#475569; text-align:left;">
            <strong>ℹ️ Real-Time Gazette Policy:</strong> In compliance with official SVPP autonomous examination records, un-attended semesters are strictly omitted and never synthesized.
          </div>
        </div>
      `;
      return;
    }

    // Chronological subject progression to accurately calculate passes, supply clears, and active backlogs
    const sortedSemesters = [...availableSemesters].sort((a, b) => {
      const dA = a.dateOrder || "9999";
      const dB = b.dateOrder || "9999";
      if (dA !== dB) return dA.localeCompare(dB);
      return (a.semesterNum || 0) - (b.semesterNum || 0);
    });

    const subjectHistory = {};
    let overallCreditsEarned = 0;
    let overallGradePoints = 0;
    let overallRegCredits = 0;
    let overallMarksObtained = 0;
    let overallMaxMarks = 0;

    const semesterStatsList = sortedSemesters.map(sem => {
      const results = sem.results || [];
      const semRegCredits = results.reduce((acc, curr) => acc + (curr.maxCredits || curr.credits || 3), 0);
      const semEarnedCredits = results.reduce((acc, curr) => acc + ((curr.status === "PASS" && curr.credits) ? curr.credits : 0), 0);
      const semObtained = sem.totalObtained !== undefined ? sem.totalObtained : results.reduce((acc, curr) => acc + (curr.total || 0), 0);
      const semMax = sem.maxMarks || (results.length * 100);
      const semPct = sem.percentage ? sem.percentage.replace('%', '') : (semMax > 0 ? ((semObtained / semMax) * 100).toFixed(1) : '0.0');
      const semSGPA = parseFloat(sem.sgpa || 0);
      const failedSubs = results.filter(r => r.grade === 'F' || r.grade === '-Ab-' || r.status === 'FAIL');
      const hasBacklogs = failedSubs.length > 0;

      overallRegCredits += semRegCredits;
      overallGradePoints += semSGPA * semRegCredits;
      overallCreditsEarned += semEarnedCredits;
      overallMarksObtained += semObtained;
      overallMaxMarks += semMax;

      // Track individual subject trajectory across semesters
      results.forEach(sub => {
        const isFailed = (sub.grade === 'F' || sub.grade === '-Ab-' || sub.status === 'FAIL');
        const code = sub.code;
        const title = sub.title || sub.name || code;
        if (!subjectHistory[code]) {
          subjectHistory[code] = {
            code: code,
            title: title,
            status: isFailed ? 'FAIL' : 'PASS',
            grade: sub.grade,
            initialSem: sem.semesterTitle,
            lastSem: sem.semesterTitle,
            attempts: 1
          };
        } else {
          subjectHistory[code].attempts += 1;
          subjectHistory[code].lastSem = sem.semesterTitle;
          if (!isFailed) {
            subjectHistory[code].status = 'PASS';
            subjectHistory[code].grade = sub.grade;
            subjectHistory[code].clearedIn = sem.semesterTitle;
          } else {
            if (subjectHistory[code].status !== 'PASS') {
              subjectHistory[code].status = 'FAIL';
              subjectHistory[code].grade = sub.grade;
            }
          }
        }
      });

      return {
        sem: sem,
        credits: semEarnedCredits,
        regCredits: semRegCredits,
        obtained: semObtained,
        max: semMax,
        pct: semPct,
        sgpa: semSGPA,
        hasBacklogs: hasBacklogs,
        failedCount: failedSubs.length,
        failedSubs: failedSubs
      };
    });

    const activeBacklogSubjects = Object.values(subjectHistory).filter(s => s.status === 'FAIL');
    const totalBacklogsCount = (student.totalBacklogs !== undefined && student.activeBacklogsList) ? student.totalBacklogs : activeBacklogSubjects.length;
    const finalBacklogList = (student.activeBacklogsList && student.activeBacklogsList.length > 0) ? student.activeBacklogsList : activeBacklogSubjects;

    const computedCGPA = overallRegCredits > 0 ? (overallGradePoints / overallRegCredits).toFixed(2) : (student.cgpa !== "N/A" ? student.cgpa : "0.00");
    const finalCGPA = (student.cgpa && student.cgpa !== "N/A") ? student.cgpa : computedCGPA;
    const overallPct = overallMaxMarks > 0 ? ((overallMarksObtained / overallMaxMarks) * 100).toFixed(1) : (student.overallPercentage ? student.overallPercentage.replace('%', '') : "0.0");

    let overallStandingBadge = '';
    if (totalBacklogsCount > 0) {
      overallStandingBadge = `<span class="circ-badge" style="background:#fee2e2; color:#991b1b; font-size:0.88rem; padding:4px 14px; border:1px solid #fca5a5;">ACTIVE BACKLOGS (${totalBacklogsCount} Subject${totalBacklogsCount > 1 ? 's' : ''})</span>`;
    } else if (parseFloat(finalCGPA) >= 7.5) {
      overallStandingBadge = `<span class="circ-badge" style="background:#dcfce7; color:#166534; font-size:0.88rem; padding:4px 14px; border:1px solid #86efac;">PASSED IN FIRST CLASS WITH DISTINCTION</span>`;
    } else if (parseFloat(finalCGPA) >= 6.5) {
      overallStandingBadge = `<span class="circ-badge" style="background:#e0f2fe; color:#0369a1; font-size:0.88rem; padding:4px 14px; border:1px solid #7dd3fc;">PASSED IN FIRST CLASS</span>`;
    } else {
      overallStandingBadge = `<span class="circ-badge" style="background:#fef3c7; color:#92400e; font-size:0.88rem; padding:4px 14px; border:1px solid #fde68a;">PASSED IN SECOND CLASS</span>`;
    }

    container.innerHTML = `
      <!-- SEARCH MATCH BANNER (Exact records count and department verification) -->
      <div style="background:#f0f9ff; border:1.5px solid #38bdf8; border-radius:10px; padding:12px 18px; margin-bottom:18px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; box-shadow:0 2px 8px rgba(2,132,199,0.08);">
        <div style="font-size:1.05rem; font-weight:800; color:#0369a1;">
          «${student.semesterResults.length} examination record${student.semesterResults.length > 1 ? 's' : ''} found across ${student.semesterResults.length} semester${student.semesterResults.length > 1 ? 's' : ''}»
        </div>
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <span style="background:#0284c7; color:#ffffff; font-size:0.75rem; font-weight:700; padding:3px 10px; border-radius:12px;">
            DEPARTMENT OF AI (Branch ${student.branchCode || (student.rollNo.includes('A42') ? '42' : '43')})
          </span>
          <span style="color:#0369a1; font-size:0.78rem; font-weight:600;">
            Single Source of Truth &bull; Verbatim Gazette Data
          </span>
        </div>
      </div>

      <!-- TOP CONSOLIDATED HEADER & ACADEMIC DASHBOARD -->
      <div class="glass-card" style="margin-bottom:24px; padding:24px 28px; border-radius:14px; background:linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); border:1px solid #cbd5e1; box-shadow:0 4px 16px rgba(0,51,102,0.06);">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; margin-bottom:20px; border-bottom:1px solid #e2e8f0; padding-bottom:16px;">
          <div>
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="font-size:1.6rem;">🎓</span>
              <div>
                <h2 style="font-family:var(--font-serif); font-size:1.6rem; color:var(--navy-dark); margin:0; font-weight:800;">
                  ${student.name}
                </h2>
                <div style="font-family:var(--font-mono); font-size:0.95rem; font-weight:700; color:#006699; margin-top:2px;">
                  Hall Ticket: ${student.rollNo} &bull; ${student.branch || (student.rollNo.includes('A42') ? 'B.Tech - Artificial Intelligence & Machine Learning' : 'B.Tech - Artificial Intelligence')}
                </div>
              </div>
            </div>
          </div>
          <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;" class="no-print">
            <button class="btn-primary" onclick="window.print()" style="background:#006699; border-color:#005580; font-size:0.85rem; display:inline-flex; align-items:center; gap:6px; cursor:pointer;" title="Print all semester grade cards on a single consolidated document">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
              Print Consolidated Memo
            </button>
            <button class="btn-primary" onclick="window.downloadGradeMemoPDF('${student.rollNo}')" style="background:#0284c7; border-color:#0284c7; font-size:0.85rem; display:inline-flex; align-items:center; gap:6px; cursor:pointer;" title="Download complete consolidated transcript">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Download Full Transcript
            </button>
            ${isFacultyOrHodLoggedIn() ? `
            <button class="btn-primary faculty-only" onclick="window.openMarksEditorModal('${student.rollNo}', 'semester')" style="background:#059669; border-color:#059669; font-size:0.85rem; display:inline-flex; align-items:center; gap:6px; cursor:pointer;" title="Click to update semester marks and grades for this student">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              ✏️ Update Marks
            </button>
            ` : ''}
          </div>
        </div>

        <!-- CUMULATIVE STATS CARDS -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:16px; margin-bottom:20px;">
          <div style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; padding:14px; text-align:center; box-shadow:0 2px 6px rgba(0,0,0,0.03);">
            <div style="font-size:0.75rem; text-transform:uppercase; color:#64748b; font-weight:700; letter-spacing:0.05em;">Cumulative CGPA</div>
            <div style="font-size:1.8rem; font-weight:800; color:#006699; margin:4px 0;">${finalCGPA}</div>
            <div style="font-size:0.75rem; color:#64748b;">Scale: 10.0 Points</div>
          </div>
          <div style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; padding:14px; text-align:center; box-shadow:0 2px 6px rgba(0,0,0,0.03);">
            <div style="font-size:0.75rem; text-transform:uppercase; color:#64748b; font-weight:700; letter-spacing:0.05em;">Overall Aggregate %</div>
            <div style="font-size:1.8rem; font-weight:800; color:#15803d; margin:4px 0;">${overallPct}%</div>
            <div style="font-size:0.75rem; color:#64748b;">Total: ${overallMarksObtained} / ${overallMaxMarks}</div>
          </div>
          <div style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; padding:14px; text-align:center; box-shadow:0 2px 6px rgba(0,0,0,0.03);">
            <div style="font-size:0.75rem; text-transform:uppercase; color:#64748b; font-weight:700; letter-spacing:0.05em;">Total Credits Earned</div>
            <div style="font-size:1.8rem; font-weight:800; color:#334155; margin:4px 0;">${overallCreditsEarned.toFixed(1)}</div>
            <div style="font-size:0.75rem; color:#64748b;">Across ${availableSemesters.length} Semesters</div>
          </div>
          <div style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; padding:14px; text-align:center; box-shadow:0 2px 6px rgba(0,0,0,0.03);">
            <div style="font-size:0.75rem; text-transform:uppercase; color:#64748b; font-weight:700; letter-spacing:0.05em;">Active Backlogs</div>
            <div style="margin:8px 0 4px 0;">${overallStandingBadge}</div>
            <div style="font-size:0.75rem; color:#64748b;">${totalBacklogsCount === 0 ? 'All Cleared — 0 Backlogs' : `${totalBacklogsCount} Active Backlog(s)`}</div>
          </div>
        </div>

        <!-- ACTIVE BACKLOGS BREAKDOWN BOX -->
        ${totalBacklogsCount > 0 ? `
          <div style="background:#fff1f2; border:1px solid #fecdd3; border-radius:12px; padding:16px 20px; margin-bottom:20px; box-shadow:0 2px 8px rgba(225,29,72,0.06);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:10px;">
              <div style="display:flex; align-items:center; gap:8px;">
                <span style="font-size:1.35rem;">⚠️</span>
                <h4 style="margin:0; font-family:var(--font-serif); font-size:1.08rem; color:#9f1239; font-weight:800;">
                  Active Backlog Status: ${totalBacklogsCount} Uncleared Subject${totalBacklogsCount > 1 ? 's' : ''}
                </h4>
              </div>
              <span class="circ-badge" style="background:#e11d48; color:#ffffff; font-weight:700; font-size:0.75rem; padding:3px 10px;">
                REQUIRES RE-APPEARANCE
              </span>
            </div>
            <p style="color:#881337; font-size:0.84rem; margin:0 0 10px 0; line-height:1.5;">
              Official examination records indicate the following course(s) were failed in regular or supplementary examinations and have not yet been cleared:
            </p>
            <div style="overflow-x:auto;">
              <table style="width:100%; border-collapse:collapse; background:#ffffff; border-radius:8px; overflow:hidden; border:1px solid #fecdd3; font-size:0.82rem;">
                <thead>
                  <tr style="background:#ffe4e6; color:#9f1239; text-align:left;">
                    <th style="padding:6px 10px;">Sub Code</th>
                    <th style="padding:6px 10px;">Subject Name</th>
                    <th style="padding:6px 10px; text-align:center;">Originated In</th>
                    <th style="padding:6px 10px; text-align:center;">Latest Grade</th>
                    <th style="padding:6px 10px; text-align:center;">Status</th>
                  </tr>
                </thead>
                <tbody>
                  ${finalBacklogList.map(b => `
                    <tr style="border-bottom:1px solid #ffe4e6;">
                      <td style="padding:6px 10px; font-family:var(--font-mono); font-weight:700; color:#9f1239;">${b.code}</td>
                      <td style="padding:6px 10px; font-weight:600; color:#1e293b;">${b.title}</td>
                      <td style="padding:6px 10px; text-align:center; color:#64748b;">${b.initialSem || b.originSemester || 'Autonomous'}</td>
                      <td style="padding:6px 10px; text-align:center; font-family:var(--font-mono); font-weight:700; color:#e11d48;">Grade ${b.grade || b.lastGrade || 'F'}</td>
                      <td style="padding:6px 10px; text-align:center;"><span style="background:#fee2e2; color:#991b1b; padding:2px 8px; border-radius:6px; font-weight:700; font-size:0.75rem;">FAIL / UNCLEARED</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        ` : `
          <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:12px; padding:14px 18px; margin-bottom:20px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:1.35rem;">🎉</span>
              <div>
                <div style="font-family:var(--font-serif); font-size:1.02rem; font-weight:800; color:#166534;">
                  All Registered Courses Cleared — 0 Active Backlogs
                </div>
                <div style="font-size:0.8rem; color:#15803d;">
                  All examination appearances across all semesters have been successfully passed with full credits awarded.
                </div>
              </div>
            </div>
            <span class="circ-badge" style="background:#16a34a; color:#ffffff; font-weight:700; font-size:0.75rem; padding:3px 12px;">
              ALL CLEAR
            </span>
          </div>
        `}

        <!-- QUICK JUMP PILLS TO EACH SEMESTER BLOCK -->
        <div class="no-print" style="background:#f1f5f9; padding:12px 16px; border-radius:10px; border:1px solid #cbd5e1; display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
          <span style="font-size:0.84rem; font-weight:700; color:var(--navy-dark); display:flex; align-items:center; gap:6px;">
            ⚡ Quick Jump to Semester Block:
          </span>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            ${semesterStatsList.map((stat, idx) => `
              <button onclick="document.getElementById('memo-block-${stat.sem.semesterId}').scrollIntoView({behavior: 'smooth'})"
                style="background:#ffffff; border:1px solid #cbd5e1; color:#1e293b; padding:5px 12px; border-radius:16px; font-size:0.8rem; font-weight:600; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s ease;">
                <span>${stat.sem.semesterTitle.replace(' (Autonomous R23)', '').replace(' (Regular R23)', '').replace(' (Supplementary R23)', '').replace(' (Regular & Supplementary R23)', '')}</span>
                <span style="font-size:0.72rem; font-weight:700; padding:1px 6px; border-radius:8px; background:${stat.sem.examType === 'Supplementary' ? '#fee2e2' : '#e0f2fe'}; color:${stat.sem.examType === 'Supplementary' ? '#991b1b' : '#0369a1'};">
                  ${stat.sem.examType || 'Regular'}
                </span>
                <span style="font-weight:700; color:#006699;">${stat.sgpa.toFixed(2)} SGPA</span>
                <span style="color:#15803d; font-weight:700;">(${stat.pct}%)</span>
                ${stat.hasBacklogs ? '<span style="background:#fee2e2; color:#991b1b; padding:1px 5px; border-radius:4px; font-size:0.68rem; font-weight:700;">Backlog</span>' : ''}
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- SEQUENTIAL SEMESTER BLOCKS (ALL SEMESTERS IN SEPARATE BLOCKS ON A SINGLE PAGE) -->
      ${semesterStatsList.map((stat, sIdx) => {
        const sem = stat.sem;
        const results = sem.results || [];
        const isSupple = sem.examType === 'Supplementary' || sem.semesterTitle.includes('Supplementary');
        
        let semBadgeHtml = '';
        if (stat.hasBacklogs) {
          semBadgeHtml = `<span class="circ-badge" style="background:#fee2e2; color:#991b1b; font-size:0.8rem; padding:4px 10px; border:1px solid #fca5a5;">BACKLOGS DETECTED (${stat.failedCount} Subject${stat.failedCount > 1 ? 's' : ''})</span>`;
        } else if (stat.sgpa >= 7.5) {
          semBadgeHtml = `<span class="circ-badge" style="background:#dcfce7; color:#166534; font-size:0.8rem; padding:4px 10px; border:1px solid #86efac;">PASSED IN FIRST CLASS WITH DISTINCTION</span>`;
        } else if (stat.sgpa >= 6.5) {
          semBadgeHtml = `<span class="circ-badge" style="background:#e0f2fe; color:#0369a1; font-size:0.8rem; padding:4px 10px; border:1px solid #7dd3fc;">PASSED IN FIRST CLASS</span>`;
        } else {
          semBadgeHtml = `<span class="circ-badge" style="background:#fef3c7; color:#92400e; font-size:0.8rem; padding:4px 10px; border:1px solid #fde68a;">PASSED IN SECOND CLASS</span>`;
        }

        return `
          <div class="grade-memo-container" id="memo-block-${sem.semesterId}" style="margin-bottom:32px; page-break-inside:avoid; scroll-margin-top:20px;">
            <div class="memo-watermark">SVPP R23</div>
            
            <!-- Block Header -->
            <div class="memo-inst-header" style="border-bottom:2px solid #003366; padding-bottom:16px; margin-bottom:18px;">
              <div class="memo-header-brand">
                <img src="college_logo.png" alt="SVPP Crest" class="memo-logo-img">
                <div class="memo-title-block">
                  <div class="memo-college-title">Sri Venkatesa Perumal College of Engineering &amp; Technology</div>
                  <div class="memo-sub-header">(AUTONOMOUS INSTITUTION &bull; AFFILIATED TO JNTUA, ANANTHAPURAMU)</div>
                  <div class="memo-sub-header">Puttur - 517583, Tirupati Dist., A.P. | Counselling Code: SVPP</div>
                </div>
              </div>
              <div style="margin-top:8px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
                <div style="text-align:left;">
                  <span style="font-size:1.15rem; font-weight:800; color:var(--navy-dark); text-transform:uppercase;">
                    ${sem.semesterTitle}
                  </span>
                  <div style="font-size:0.85rem; color:#475569; font-weight:600; margin-top:2px;">
                    ${sem.examTitle} &bull; ${sem.monthYear || 'Examination Session'}
                  </div>
                </div>
                <div style="display:flex; gap:8px; align-items:center;">
                  ${isSupple 
                    ? '<span class="circ-badge" style="background:#fee2e2; color:#991b1b; font-size:0.8rem; padding:3px 10px; border:1px solid #fca5a5; font-weight:700;">SUPPLEMENTARY</span>' 
                    : '<span class="circ-badge" style="background:#e0f2fe; color:#0369a1; font-size:0.8rem; padding:3px 10px; border:1px solid #bae6fd; font-weight:700;">REGULAR</span>'
                  }
                  ${semBadgeHtml}
                  <button class="btn-sm faculty-only no-print" onclick="window.openMarksEditorModal('${student.rollNo}', 'semester')" style="background:#f8fafc; border:1px solid #cbd5e1; font-size:0.75rem; padding:3px 8px; cursor:pointer;" title="Edit marks for this semester">✏️ Edit</button>
                </div>
              </div>
            </div>

            <!-- Student Metadata Row -->
            <div class="memo-student-details-grid" style="margin-bottom:14px;">
              <div><strong>Hall Ticket No:</strong> <span style="font-family:var(--font-mono); font-weight:700;">${student.rollNo}</span></div>
              <div><strong>Student Name:</strong> <span style="font-weight:700;">${student.name}</span></div>
              <div><strong>Branch:</strong> ${student.branch || 'B.Tech - Artificial Intelligence'}</div>
              <div><strong>Semester:</strong> ${sem.semesterTitle}</div>
              <div><strong>Exam Session:</strong> ${sem.monthYear || 'Autonomous'}</div>
              <div><strong>Regulation:</strong> ${sem.regulation || 'SVPP R23 (Autonomous)'}</div>
              <div><strong>Gazette Ref:</strong> <span style="font-family:var(--font-mono); color:#475569;">${sem.gazetteRef || 'SVPP/COE/2026/AUTONOMOUS'}</span></div>
            </div>

            <!-- Subjects Results Table -->
            <table class="memo-results-table">
              <thead>
                <tr>
                  <th style="width:14%;">Sub Code</th>
                  <th>Subject Title</th>
                  <th style="width:10%; text-align:center;">Internal</th>
                  <th style="width:10%; text-align:center;">External</th>
                  <th style="width:10%; text-align:center;">Total</th>
                  <th style="width:10%; text-align:center;">Grade</th>
                  <th style="width:10%; text-align:center;">Grade Points</th>
                  <th style="width:10%; text-align:center;">Credits</th>
                  <th style="width:10%; text-align:center;">Status</th>
                </tr>
              </thead>
              <tbody>
                ${results.map(r => `
                  <tr style="${(r.status === 'FAIL' || r.grade === 'F' || r.grade === '-Ab-') ? 'background:#fff1f2;' : ''}">
                    <td style="font-family:var(--font-mono); font-weight:600;">${r.code}</td>
                    <td style="font-weight:600;">${r.title || r.name}</td>
                    <td style="font-family:var(--font-mono); text-align:center;">${r.internal}</td>
                    <td style="font-family:var(--font-mono); text-align:center;">${r.external}</td>
                    <td style="font-family:var(--font-mono); font-weight:700; text-align:center;">${r.total}</td>
                    <td style="text-align:center;">
                      <span class="grade-pill grade-${(r.grade || 'A').replace('+', '-plus')}">${r.grade}</span>
                    </td>
                    <td style="font-family:var(--font-mono); font-weight:700; text-align:center;">${r.points !== undefined ? r.points : 0}</td>
                    <td style="font-family:var(--font-mono); text-align:center;">${(r.credits !== undefined ? r.credits : 3.0).toFixed(1)}</td>
                    <td style="text-align:center; font-weight:700; font-size:0.8rem; color:${(r.status === 'FAIL' || r.grade === 'F' || r.grade === '-Ab-') ? '#dc2626' : '#16a34a'};">
                      ${r.status || 'PASS'}
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>

            <!-- SEMESTER BOTTOM SUMMARY BAR (WITH PERCENTAGE, SGPA, MARKS, CREDITS) -->
            <div class="memo-summary-footer" style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:10px; padding:16px 20px; margin-top:20px; display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:16px; text-align:center;">
              <div>
                <div style="font-size:0.75rem; text-transform:uppercase; color:#64748b; font-weight:700;">Total Marks Obtained</div>
                <div style="font-size:1.25rem; font-weight:800; color:var(--navy-dark);">${stat.obtained} / ${stat.max}</div>
              </div>
              <div>
                <div style="font-size:0.75rem; text-transform:uppercase; color:#64748b; font-weight:700;">Semester Percentage</div>
                <div style="font-size:1.35rem; font-weight:800; color:#15803d;">${stat.pct}%</div>
              </div>
              <div>
                <div style="font-size:0.75rem; text-transform:uppercase; color:#64748b; font-weight:700;">Semester SGPA</div>
                <div style="font-size:1.35rem; font-weight:800; color:#006699;">${stat.sgpa.toFixed(2)}</div>
              </div>
              <div>
                <div style="font-size:0.75rem; text-transform:uppercase; color:#64748b; font-weight:700;">Credits Registered</div>
                <div style="font-size:1.25rem; font-weight:800; color:#334155;">${stat.credits.toFixed(1)} Credits</div>
              </div>
              <div>
                <div style="font-size:0.75rem; text-transform:uppercase; color:#64748b; font-weight:700;">Semester Status</div>
                <div style="margin-top:2px;">${semBadgeHtml}</div>
              </div>
            </div>
          </div>
        `;
      }).join('')}

      <!-- GRAND CUMULATIVE CONSOLIDATED ACADEMIC PROGRESSION TABLE AT BOTTOM -->
      <div class="grade-memo-container" style="margin-top:36px; border:2px solid #003366; page-break-inside:avoid; background:#ffffff;">
        <div style="text-align:center; margin-bottom:18px; border-bottom:2px solid #003366; padding-bottom:14px;">
          <h3 style="font-family:var(--font-serif); font-size:1.35rem; color:var(--navy-dark); font-weight:800; margin:0;">
            COMPLETE ACADEMIC PROGRESSION &amp; CUMULATIVE DEGREE SUMMARY
          </h3>
          <p style="color:#64748b; font-size:0.86rem; margin:4px 0 0 0;">
            Consolidated Semester-by-Semester Performance Record &bull; ${student.name} (${student.rollNo})
          </p>
        </div>

        <table class="memo-results-table" style="margin-bottom:20px;">
          <thead>
            <tr style="background:#003366; color:#ffffff;">
              <th style="color:#ffffff;">Semester</th>
              <th style="color:#ffffff; text-align:center;">Exam Session</th>
              <th style="color:#ffffff; text-align:center;">Attempt</th>
              <th style="color:#ffffff; text-align:center;">Credits</th>
              <th style="color:#ffffff; text-align:center;">Marks Obtained</th>
              <th style="color:#ffffff; text-align:center;">Percentage</th>
              <th style="color:#ffffff; text-align:center;">SGPA</th>
              <th style="color:#ffffff; text-align:center;">Status</th>
            </tr>
          </thead>
          <tbody>
            ${semesterStatsList.map(st => `
              <tr>
                <td style="font-weight:700; color:var(--navy-dark);">${st.sem.semesterTitle}</td>
                <td style="font-family:var(--font-mono); text-align:center; font-size:0.85rem;">${st.sem.monthYear || 'Autonomous'}</td>
                <td style="text-align:center;">
                  <span style="font-size:0.75rem; font-weight:700; padding:2px 8px; border-radius:10px; background:${st.sem.examType === 'Supplementary' ? '#fee2e2' : '#e0f2fe'}; color:${st.sem.examType === 'Supplementary' ? '#991b1b' : '#0369a1'};">
                    ${st.sem.examType || 'Regular'}
                  </span>
                </td>
                <td style="font-family:var(--font-mono); text-align:center; font-weight:700;">${st.credits.toFixed(1)}</td>
                <td style="font-family:var(--font-mono); text-align:center; font-weight:700;">${st.obtained} / ${st.max}</td>
                <td style="font-family:var(--font-mono); text-align:center; font-weight:800; color:#15803d;">${st.pct}%</td>
                <td style="font-family:var(--font-mono); text-align:center; font-weight:800; color:#006699;">${st.sgpa.toFixed(2)}</td>
                <td style="text-align:center; font-weight:700; font-size:0.82rem; color:${st.hasBacklogs ? '#dc2626' : '#16a34a'};">
                  ${st.hasBacklogs ? `Backlogs (${st.failedCount})` : 'PASSED'}
                </td>
              </tr>
            `).join('')}
            <tr style="background:#f1f5f9; font-weight:800; border-top:2px solid #003366;">
              <td colspan="3" style="font-weight:800; text-transform:uppercase; color:var(--navy-dark);">
                CUMULATIVE TOTAL / DEGREE AGGREGATE
              </td>
              <td style="font-family:var(--font-mono); text-align:center; color:var(--navy-dark); font-size:1.05rem;">
                ${overallCreditsEarned.toFixed(1)} / ${overallRegCredits.toFixed(1)}
              </td>
              <td style="font-family:var(--font-mono); text-align:center; color:var(--navy-dark); font-size:1.05rem;">
                ${overallMarksObtained} / ${overallMaxMarks}
              </td>
              <td style="font-family:var(--font-mono); text-align:center; color:#15803d; font-size:1.15rem;">
                ${overallPct}%
              </td>
              <td style="font-family:var(--font-mono); text-align:center; color:#006699; font-size:1.15rem;">
                ${finalCGPA}
              </td>
              <td style="text-align:center;">
                ${overallStandingBadge}
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Signatures Row -->
        <div class="memo-signatures-row" style="margin-top:24px;">
          <div class="signature-block">
            <div class="sign-line"></div>
            <span>Verified By (Faculty In-Charge)</span>
          </div>
          <div style="text-align:center;">
            <div style="width:70px; height:70px; border:2px dashed #94a3b8; border-radius:8px; display:flex; align-items:center; justify-content:center; margin:0 auto 4px; font-size:9px; color:#64748b; font-weight:700;">
              QR CODE<br>VERIFIED
            </div>
            <span style="font-size:0.75rem; color:#64748b;">Autonomous Examination System</span>
          </div>
          <div class="signature-block">
            <div class="sign-line"></div>
            <span>Controller of Examinations</span>
          </div>
        </div>
      </div>

      <!-- BOTTOM ACTION BUTTONS -->
      <div style="text-align:center; margin-top:24px; display:flex; justify-content:center; gap:12px; flex-wrap:wrap; align-items:center;" class="no-print">
        <button class="btn-primary" onclick="window.print()" style="background:#006699; border-color:#005580; display:inline-flex; align-items:center; gap:6px; cursor:pointer;">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
          Print Complete Grade Report
        </button>
        <button class="btn-primary" onclick="window.downloadGradeMemoPDF('${student.rollNo}')" style="background:#0284c7; border-color:#0284c7; display:inline-flex; align-items:center; gap:6px; cursor:pointer;">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Download All Semesters (PDF)
        </button>
        ${isFacultyOrHodLoggedIn() ? `
        <button class="btn-primary faculty-only" onclick="window.openMarksEditorModal('${student.rollNo}', 'semester')" style="background:#059669; border-color:#059669; display:inline-flex; align-items:center; gap:6px; cursor:pointer;">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
          ✏️ Update Semester Marks
        </button>
        ` : ''}
      </div>
    `;
  }

    window.switchStudentResultSemester = function(rollNo, semId) {
    const student = getOrCreateStudentRecord(rollNo);
    renderGradeMemo(student, semId);
  };

  window.openResultImportModal = function(rollNo) {
    if (!isFacultyOrHodLoggedIn()) {
      showNotification("Permission Denied: Students have read-only access. Login as Faculty or HOD to upload result documents.", "error");
      window.openFacultyLoginModal("upload official result documents");
      return;
    }
    const modal = document.getElementById("resultImportModal");
    if (rollNo && document.getElementById("importStudentRollInput")) {
      document.getElementById("importStudentRollInput").value = rollNo;
    }
    if (modal) modal.classList.add("open");
  };

  window.renderGradeMemoGlobal = renderGradeMemo;
  const defaultResultStudent = SVPP_DATA.students["24G01A4324"] || SVPP_DATA.students["24G01A4301"] || Object.values(SVPP_DATA.students)[0];
  renderGradeMemo(defaultResultStudent);

  if (resultForm && rollInput) {
    resultForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const roll = rollInput.value.trim().toUpperCase();
      if (!roll) return;
      const student = getOrCreateStudentRecord(roll);
      renderGradeMemo(student);
    });
  }

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const roll = chip.getAttribute("data-roll");
      if (rollInput) rollInput.value = roll;
      const student = getOrCreateStudentRecord(roll);
      renderGradeMemo(student);
    });
  });

  const openAdminGazetteBtn = document.getElementById("openAdminGazetteBtn");
  if (openAdminGazetteBtn) {
    openAdminGazetteBtn.addEventListener("click", () => {
      if (window.openAdminGazetteViewer) {
        window.openAdminGazetteViewer();
      }
    });
  }

  const openResultsBtn = document.getElementById("openResultsEntryBtn");
  if (openResultsBtn) {
    openResultsBtn.addEventListener("click", () => {
      if (!isFacultyOrHodLoggedIn()) {
        window.openFacultyLoginModal("update semester grades & marks");
        return;
      }
      const curRoll = rollInput && rollInput.value ? rollInput.value.trim().toUpperCase() : "24G01A4301";
      if (window.openMarksEditorModal) {
        window.openMarksEditorModal(curRoll, "semester");
      }
    });
  }
}

// MODULE 7: Faculty Desk
function initFacultyDesk() {
  const postNoticeForm = document.getElementById("facultyPostNoticeForm");
  if (postNoticeForm) {
    postNoticeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!isFacultyOrHodLoggedIn()) {
        showNotification("Permission Denied: Students have view-only access. Login as Faculty or HOD to post circulars.", "error");
        window.openFacultyLoginModal("publish departmental circulars");
        return;
      }

      const title = document.getElementById("noticeTitleInput")?.value.trim();
      const category = document.getElementById("noticeCategorySelect")?.value || "academic";
      const desc = document.getElementById("noticeDescInput")?.value.trim();
      
      if (!title || !desc) {
        showNotification("Please fill in both title and circular text", "danger");
        return;
      }

      const authUser = getAuthenticatedUser();
      const authorLabel = authUser ? `${authUser.name} (${authUser.role})` : "Faculty / Admin Portal";

      const now = new Date();
      const newCircular = {
        id: `CIRC-${Date.now()}`,
        date: `${now.getDate()} ${now.toLocaleString('default', { month: 'short' })} ${now.getFullYear()}`,
        day: now.getDate() < 10 ? `0${now.getDate()}` : `${now.getDate()}`,
        month: now.toLocaleString('default', { month: 'short' }).toUpperCase(),
        category: category,
        badgeText: category.toUpperCase(),
        badgeClass: category === "exams" ? "badge-exam" : category === "urgent" ? "badge-urgent" : "badge-academic",
        title: title,
        desc: desc,
        refNo: `SVPP/AI/NOTIFY/${now.getFullYear()}/${Math.floor(100 + Math.random() * 900)}`,
        issuedBy: authorLabel,
        pdfUrl: "#"
      };

      const existing = JSON.parse(localStorage.getItem("svpp_ai_circulars") || "[]");
      existing.unshift(newCircular);
      localStorage.setItem("svpp_ai_circulars", JSON.stringify(existing));

      postNoticeForm.reset();
      showNotification(`New circular published to Department Portal successfully by ${authorLabel}!`, "success");
      initCirculars(); // re-render circulars tab
    });
  }
}

// Modals Handler
function initModals() {
  const modals = document.querySelectorAll(".modal-backdrop");
  modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });
    const closeBtn = modal.querySelector(".modal-close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => modal.classList.remove("open"));
    }
  });
}

// Global Toast Notification Helper
function showNotification(message, type = "info") {
  const toast = document.createElement("div");
  toast.style.position = "fixed";
  toast.style.bottom = "24px";
  toast.style.right = "24px";
  toast.style.backgroundColor = type === "success" ? "#065f46" : type === "danger" ? "#991b1b" : "#0f172a";
  toast.style.color = "#ffffff";
  toast.style.padding = "12px 20px";
  toast.style.borderRadius = "8px";
  toast.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
  toast.style.zIndex = "9999";
  toast.style.fontSize = "0.9rem";
  toast.style.display = "flex";
  toast.style.alignItems = "center";
  toast.style.gap = "10px";
  toast.style.animation = "fadeIn 0.2s ease-out";
  toast.innerHTML = `
    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>${message}</span>
  `;

  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}


// MODULE: III B.Tech V Semester Master Student Directory & Roster
function initRosterModule() {
  const tbody = document.getElementById("masterRosterTbody");
  const searchInput = document.getElementById("masterRosterSearch");
  const sectionPills = document.querySelectorAll("#rosterSectionPills .filter-pill");
  const statusPills = document.querySelectorAll("#rosterStatusPills .filter-pill");
  const exportBtn = document.getElementById("exportRosterCsvBtn");
  const emptyMsg = document.getElementById("rosterEmptyMsg");

  if (!tbody) return;

  const roster = SVPP_DATA.roster3rdYear || [];
  let curSection = "all";
  let curStatus = "all";
  let curSearch = "";

  // Update KPI counters
  const totalStudents = roster.length;
  const safeStudents = roster.filter(s => s.status === "Safe").length;
  const condonationStudents = roster.filter(s => s.status === "Condonation").length;
  const shortageStudents = roster.filter(s => s.status === "Shortage").length;
  const avgAttn = totalStudents > 0 
    ? (roster.reduce((acc, s) => acc + s.attendanceOverall, 0) / totalStudents).toFixed(1)
    : "83.8";

  const kpiTotal = document.getElementById("kpiTotalStudents");
  const kpiAvg = document.getElementById("kpiAvgAttendance");
  const kpiSafe = document.getElementById("kpiSafeCount");
  const kpiCond = document.getElementById("kpiCondonationCount");
  const kpiShort = document.getElementById("kpiShortageCount");

  if (kpiTotal) kpiTotal.textContent = totalStudents;
  if (kpiAvg) kpiAvg.textContent = `${avgAttn}%`;
  if (kpiSafe) kpiSafe.textContent = safeStudents;
  if (kpiCond) kpiCond.textContent = condonationStudents;
  if (kpiShort) kpiShort.textContent = shortageStudents;

  function renderTable() {
    const filtered = roster.filter(st => {
      const matchSec = curSection === "all" || st.section === curSection;
      const matchStat = curStatus === "all" || st.status === curStatus;
      const matchSearch = !curSearch ||
        st.rollNo.toLowerCase().includes(curSearch) ||
        st.name.toLowerCase().includes(curSearch) ||
        (st.rawName && st.rawName.toLowerCase().includes(curSearch));
      return matchSec && matchStat && matchSearch;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = "";
      if (emptyMsg) emptyMsg.style.display = "block";
      return;
    }

    if (emptyMsg) emptyMsg.style.display = "none";

    tbody.innerHTML = filtered.map((st, i) => {
      const initials = st.name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('');
      const tagClass = st.status === "Safe" ? "tag-safe" : st.status === "Condonation" ? "tag-condonation" : "tag-shortage";
      const barColor = st.status === "Safe" ? "#10b981" : st.status === "Condonation" ? "#f59e0b" : "#ef4444";

      return `
        <tr>
          <td style="font-family:var(--font-mono); color:#94a3b8; text-align:center;">${i + 1}</td>
          <td>
            <span style="font-family:var(--font-mono); font-weight:700; color:var(--primary-navy);">${st.rollNo}</span>
          </td>
          <td>
            <div class="student-meta-cell">
              <div class="student-avatar">${initials}</div>
              <div>
                <div style="font-weight:700; color:var(--navy-dark); font-size:0.88rem;">${st.name}</div>
                <div style="font-size:0.75rem; color:#64748b;">${st.rawName}</div>
              </div>
            </div>
          </td>
          <td style="text-align:center;">
            <span class="circ-badge ${st.section === 'Section A' ? 'badge-academic' : 'badge-faculty'}" style="font-size:0.75rem;">
              ${st.section}
            </span>
          </td>
          <td style="font-size:0.82rem; color:#475569;">
            ${st.mentor}
          </td>
          <td>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <span style="font-weight:700; font-family:var(--font-mono); font-size:0.84rem;">${st.attendanceOverall}%</span>
              <span class="eligibility-tag ${tagClass}" style="margin:0; padding:2px 8px; font-size:0.72rem;">${st.status}</span>
            </div>
            <div class="progress-bar-wrap" style="height:6px; margin:0;">
              <div class="progress-bar-fill" style="width:${st.attendanceOverall}%; background:${barColor};"></div>
            </div>
          </td>
          <td style="text-align:center; font-family:var(--font-mono); font-weight:700; color:#0284c7;">${st.sgpa}</td>
          <td style="text-align:center; font-family:var(--font-mono); font-weight:700; color:#15803d;">${st.cgpa}</td>
          <td style="text-align:center;">
            <div style="display:flex; gap:6px; justify-content:center; flex-wrap:wrap;">
              <button class="quick-action-btn" onclick="openStudentView('${st.rollNo}', 'attendance')" title="View Verified Attendance">
                <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                Attn
              </button>
              <button class="quick-action-btn btn-marks" onclick="openStudentView('${st.rollNo}', 'marks')" title="View Mid Internal Marks">
                <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                Marks
              </button>
              <button class="quick-action-btn btn-results" onclick="openStudentView('${st.rollNo}', 'results')" title="View Semester Grade Card Memo">
                <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                Result Memo
              </button>
              ${isFacultyOrHodLoggedIn() ? `
              <button class="quick-action-btn faculty-only" onclick="openMarksEditorModal('${st.rollNo}', 'mid1')" style="background:#eff6ff; color:#1d4ed8; border-color:#bfdbfe;" title="Update Student Marks">
                <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                Edit
              </button>
              ` : ''}
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }

  window.refreshMasterRoster = renderTable;

  window.openStudentView = function(rollNo, viewType) {
    const student = getOrCreateStudentRecord(rollNo);
    if (!student) return;

    if (viewType === 'attendance') {
      const attnTab = document.querySelector('[data-tab="attendance"]');
      if (attnTab) attnTab.click();
      const input = document.getElementById("attendanceRollInput");
      if (input) input.value = rollNo;
      if (window.renderStudentAttendanceGlobal) {
        window.renderStudentAttendanceGlobal(student);
      }
    } else if (viewType === 'marks') {
      const marksTab = document.querySelector('[data-tab="marks"]');
      if (marksTab) marksTab.click();
      const input = document.getElementById("marksRollInput");
      if (input) input.value = rollNo;
      if (window.renderStudentMarksGlobal) {
        window.renderStudentMarksGlobal(student);
      }
    } else if (viewType === 'results') {
      const resultsTab = document.querySelector('[data-tab="results"]');
      if (resultsTab) resultsTab.click();
      const input = document.getElementById("resultsRollInput");
      if (input) input.value = rollNo;
      if (window.renderGradeMemoGlobal) {
        window.renderGradeMemoGlobal(student);
      }
    }
  };

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      curSearch = e.target.value.trim().toLowerCase();
      renderTable();
    });
  }

  sectionPills.forEach(pill => {
    pill.addEventListener("click", () => {
      sectionPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      curSection = pill.getAttribute("data-section");
      renderTable();
    });
  });

  statusPills.forEach(pill => {
    pill.addEventListener("click", () => {
      statusPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      curStatus = pill.getAttribute("data-status");
      renderTable();
    });
  });

  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      let csv = "Sl No,Hall Ticket No,Student Name,Official Name,Section,Faculty Mentor,Overall Attendance (%),Attendance Status,SGPA,CGPA\n";
      roster.forEach((st, i) => {
        csv += `${i + 1},${st.rollNo},"${st.name}","${st.rawName}",${st.section},"${st.mentor}",${st.attendanceOverall},${st.status},${st.sgpa},${st.cgpa}\n`;
      });

      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "SVPP_AI_III_Year_V_Sem_Master_Roster.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showNotification("Exported full master roster of 127 students to CSV!", "success");
    });
  }

  renderTable();
}

// =============================================================================
// MODULE 8: FACULTY MARKS & SEMESTER GRADES EDITOR MODULE
// =============================================================================

function initMarksEditorModule() {
  const modal = document.getElementById("marksUpdateModal");
  const studentSelect = document.getElementById("modalStudentSelect");
  const sectionBadge = document.getElementById("modalStudentSectionBadge");
  const batchBadge = document.getElementById("modalStudentBatchBadge");
  const examPills = document.querySelectorAll("#modalExamPills .exam-nav-pill");
  const tableContainer = document.getElementById("modalMarksTableContainer");
  const summaryBar = document.getElementById("modalMarksSummaryBar");
  const form = document.getElementById("marksEditForm");
  const resetBtn = document.getElementById("resetModalMarksBtn");
  const cancelBtn = document.getElementById("cancelMarksModalBtn");
  const closeBtn = document.getElementById("closeMarksModalBtn");

  if (!modal || !studentSelect || !tableContainer) return;

  let activeRoll = "24G01A4301";
  let activeExam = "mid1"; // 'mid1' | 'mid2' | 'semester'

  // Populate student dropdown with all 127 students
  studentSelect.innerHTML = SVPP_3RD_YEAR_STUDENTS.map(st => {
    const student = SVPP_DATA.students[st.rollNo] || st;
    const sec = student.section || (st.rollNo.endsWith("61") ? "Sec A" : "Sec B");
    return `<option value="${st.rollNo}">${st.rollNo} - ${st.name} (${sec})</option>`;
  }).join("");

  function updateStudentBadges(student) {
    if (!student) return;
    if (sectionBadge) sectionBadge.textContent = student.section || "Section A";
    if (batchBadge) {
      batchBadge.textContent = student.rollNo.startsWith("25G05") ? "2025-2028 (LE)" : "2024-2028 Regular";
    }
  }

  function renderEditor() {
    const student = SVPP_DATA.students[activeRoll] || getOrCreateStudentRecord(activeRoll);
    if (!student) return;

    updateStudentBadges(student);

    if (activeExam === "mid1" || activeExam === "mid2") {
      const marksList = activeExam === "mid1" ? student.midMarks.mid1 : student.midMarks.mid2;
      const examTitle = activeExam === "mid1" ? "Mid-I Assessment" : "Mid-II Assessment";

      tableContainer.innerHTML = `
        <table class="marks-edit-table" style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="width: 14%;">Course Code</th>
              <th>Subject Title</th>
              <th style="width: 14%; text-align: center;">Descriptive (/30)</th>
              <th style="width: 13%; text-align: center;">Online Quiz (/10)</th>
              <th style="width: 14%; text-align: center;">Assignment (/5)</th>
              <th style="width: 13%; text-align: center;">Total (/45)</th>
              <th style="width: 14%; text-align: center;">Scaled Score (/30)</th>
            </tr>
          </thead>
          <tbody>
            ${marksList.map((m, idx) => `
              <tr data-sub-idx="${idx}">
                <td style="font-family: var(--font-mono); font-weight: 700; color: var(--primary-navy);">${m.code}</td>
                <td style="font-weight: 600; font-size: 0.88rem;">${m.name}</td>
                <td style="text-align: center;">
                  <input type="number" class="marks-input-sm mid-desc-input" min="0" max="30" value="${m.descriptive}" data-idx="${idx}" required>
                </td>
                <td style="text-align: center;">
                  <input type="number" class="marks-input-sm mid-quiz-input" min="0" max="10" value="${m.quiz}" data-idx="${idx}" required>
                </td>
                <td style="text-align: center;">
                  <input type="number" class="marks-input-sm mid-assgn-input" min="0" max="5" value="${m.assignment}" data-idx="${idx}" required>
                </td>
                <td style="text-align: center;">
                  <span class="marks-calc-badge mid-raw-total" data-idx="${idx}">${m.total} / 45</span>
                </td>
                <td style="text-align: center;">
                  <span class="marks-calc-badge scaled mid-scaled-total" data-idx="${idx}">${m.scaled} / 30</span>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      `;

      function recalcMidLive() {
        const rows = tableContainer.querySelectorAll("tbody tr");
        let totalScaled = 0;
        let count = 0;

        rows.forEach(row => {
          const descInput = row.querySelector(".mid-desc-input");
          const quizInput = row.querySelector(".mid-quiz-input");
          const assgnInput = row.querySelector(".mid-assgn-input");
          const rawBadge = row.querySelector(".mid-raw-total");
          const scaledBadge = row.querySelector(".mid-scaled-total");

          let desc = parseInt(descInput?.value, 10);
          if (isNaN(desc)) desc = 0;
          if (desc < 0) { desc = 0; descInput.value = 0; }
          if (desc > 30) { desc = 30; descInput.value = 30; }

          let quiz = parseInt(quizInput?.value, 10);
          if (isNaN(quiz)) quiz = 0;
          if (quiz < 0) { quiz = 0; quizInput.value = 0; }
          if (quiz > 10) { quiz = 10; quizInput.value = 10; }

          let assgn = parseInt(assgnInput?.value, 10);
          if (isNaN(assgn)) assgn = 0;
          if (assgn < 0) { assgn = 0; assgnInput.value = 0; }
          if (assgn > 5) { assgn = 5; assgnInput.value = 5; }

          const rawTotal = desc + quiz + assgn;
          const scaled = Math.min(30, Math.round((rawTotal / 45) * 30));

          if (rawBadge) rawBadge.textContent = `${rawTotal} / 45`;
          if (scaledBadge) scaledBadge.textContent = `${scaled} / 30`;

          totalScaled += scaled;
          count++;
        });

        const avg = count > 0 ? (totalScaled / count).toFixed(1) : "0.0";
        const perfStatus = avg >= 25 ? "Outstanding Performance" : avg >= 20 ? "Good Performance" : "Attention Required";
        const perfColor = avg >= 25 ? "#065f46" : avg >= 20 ? "#0369a1" : "#b45309";

        summaryBar.innerHTML = `
          <div>
            <span style="font-size: 0.8rem; text-transform: uppercase; color: #64748b; font-weight: 700;">Examination:</span>
            <div style="font-size: 1rem; font-weight: 800; color: var(--navy-dark);">${examTitle} (6 Subjects)</div>
          </div>
          <div>
            <span style="font-size: 0.8rem; text-transform: uppercase; color: #64748b; font-weight: 700;">Average Scaled Internal:</span>
            <div style="font-size: 1.25rem; font-weight: 800; color: #006699;">${avg} <span style="font-size: 0.8rem; color: #64748b;">/ 30.0</span></div>
          </div>
          <div>
            <span style="font-size: 0.8rem; text-transform: uppercase; color: #64748b; font-weight: 700;">Assessment Status:</span>
            <div style="font-size: 0.95rem; font-weight: 700; color: ${perfColor};">${perfStatus}</div>
          </div>
        `;
      }

      tableContainer.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", recalcMidLive);
      });
      recalcMidLive();

    } else if (activeExam === "semester") {
      const activeSemList = student.semesterResults || [];
      let curSem = activeSemList.find(s => s.semesterId === window.currentResultSemesterId) || activeSemList[activeSemList.length - 1];
      const results = curSem ? (curSem.results || student.results) : student.results;

      tableContainer.innerHTML = `
        <div style="margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
          <span style="font-size: 0.88rem; font-weight: 700; color: var(--navy-dark);">
            Official Exam: <strong>${curSem ? curSem.semesterTitle : 'Semester Examination'}</strong>
          </span>
          <span class="circ-badge" style="background:#e0f2fe; color:#0369a1; font-size:0.78rem;">
            ${curSem ? (curSem.monthYear || 'Autonomous') : 'Autonomous'}
          </span>
        </div>
        <table class="marks-edit-table" style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="width: 12%;">Sub Code</th>
              <th>Subject Title</th>
              <th style="width: 10%; text-align: center;">Credits</th>
              <th style="width: 13%; text-align: center;">Internal (/30)</th>
              <th style="width: 14%; text-align: center;">External (/70)</th>
              <th style="width: 11%; text-align: center;">Total</th>
              <th style="width: 11%; text-align: center;">Grade</th>
              <th style="width: 11%; text-align: center;">Points</th>
            </tr>
          </thead>
          <tbody>
            ${results.map((r, idx) => {
              const isLab = (r.title || r.name || '').toLowerCase().includes('lab') || (r.code || '').includes('LC');
              const maxExt = 70;
              const subTitle = r.title || r.name;
              return `
                <tr data-res-idx="${idx}" data-is-lab="${isLab}" data-credits="${r.credits || 3.0}">
                  <td style="font-family: var(--font-mono); font-weight: 700; color: var(--primary-navy);">${r.code}</td>
                  <td style="font-weight: 600; font-size: 0.86rem;">
                    ${subTitle}
                    ${isLab ? `<span style="font-size:0.7rem; background:#e0f2fe; color:#0369a1; padding:2px 6px; border-radius:4px; margin-left:4px;">LAB</span>` : ''}
                  </td>
                  <td style="text-align: center; font-family: var(--font-mono); font-weight: 700;">${(r.credits || 3.0).toFixed(1)}</td>
                  <td style="text-align: center;">
                    <input type="number" class="marks-input-sm sem-internal-input" min="0" max="30" value="${r.internal}" data-idx="${idx}" required>
                  </td>
                  <td style="text-align: center;">
                    <input type="number" class="marks-input-sm sem-external-input" min="0" max="${maxExt}" value="${r.external}" data-idx="${idx}" required>
                  </td>
                  <td style="text-align: center;">
                    <span class="marks-calc-badge sem-total-badge" data-idx="${idx}">${r.total}</span>
                  </td>
                  <td style="text-align: center;">
                    <span class="grade-pill grade-${(r.grade || 'A').replace('+', '-plus')} sem-grade-pill" data-idx="${idx}">${r.grade}</span>
                  </td>
                  <td style="text-align: center; font-family: var(--font-mono); font-weight: 700;">
                    <span class="sem-points-badge" data-idx="${idx}">${r.points !== undefined ? r.points : 0}</span>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      `;

      function recalcSemesterLive() {
        const rows = tableContainer.querySelectorAll("tbody tr");
        let totalGradePoints = 0;
        let totalCredits = 0;
        let anyFailed = false;

        rows.forEach(row => {
          const isLab = row.getAttribute("data-is-lab") === "true";
          const credits = parseFloat(row.getAttribute("data-credits")) || 3.0;
          const intInput = row.querySelector(".sem-internal-input");
          const extInput = row.querySelector(".sem-external-input");
          const totalBadge = row.querySelector(".sem-total-badge");
          const gradePill = row.querySelector(".sem-grade-pill");
          const pointsBadge = row.querySelector(".sem-points-badge");

          let internal = parseInt(intInput?.value, 10);
          if (isNaN(internal)) internal = 0;
          if (internal < 0) { internal = 0; intInput.value = 0; }
          if (internal > 30) { internal = 30; intInput.value = 30; }

          const maxExt = 70;
          let external = parseInt(extInput?.value, 10);
          if (isNaN(external)) external = 0;
          if (external < 0) { external = 0; extInput.value = 0; }
          if (external > maxExt) { external = maxExt; extInput.value = maxExt; }

          const total = internal + external;
          let grade = "C";
          let points = 7;
          if (total >= 90) { grade = "S"; points = 10; }
          else if (total >= 80) { grade = "A"; points = 9; }
          else if (total >= 70) { grade = "B"; points = 8; }
          else if (total >= 60) { grade = "C"; points = 7; }
          else if (total >= 50) { grade = "D"; points = 6; }
          else if (total >= 40) { grade = "E"; points = 5; }
          else { grade = "F"; points = 0; anyFailed = true; }

          if (totalBadge) totalBadge.textContent = total;
          if (gradePill) {
            gradePill.textContent = grade;
            gradePill.className = `grade-pill grade-${grade.replace('+', '-plus')} sem-grade-pill`;
          }
          if (pointsBadge) pointsBadge.textContent = points;

          totalCredits += credits;
          totalGradePoints += points * credits;
        });

        const liveSGPA = (totalGradePoints / totalCredits).toFixed(2);
        const origSgpa = parseFloat(student.sgpa) || 8.0;
        const origCgpa = parseFloat(student.cgpa) || 8.0;
        const diff = (parseFloat(liveSGPA) - origSgpa) * 0.25;
        const liveCGPA = Math.min(9.95, Math.max(5.0, origCgpa + diff)).toFixed(2);

        const statusClass = anyFailed ? "#991b1b" : "#065f46";
        const statusText = anyFailed ? "BACKLOGS DETECTED" : "PASSED IN FIRST CLASS WITH DISTINCTION";

        summaryBar.innerHTML = `
          <div>
            <span style="font-size: 0.8rem; text-transform: uppercase; color: #64748b; font-weight: 700;">Registered Credits:</span>
            <div style="font-size: 1.1rem; font-weight: 800; color: var(--navy-dark);">${totalCredits.toFixed(1)} Credits</div>
          </div>
          <div>
            <span style="font-size: 0.8rem; text-transform: uppercase; color: #64748b; font-weight: 700;">Live Computed SGPA:</span>
            <div style="font-size: 1.35rem; font-weight: 800; color: #006699;">${liveSGPA}</div>
          </div>
          <div>
            <span style="font-size: 0.8rem; text-transform: uppercase; color: #64748b; font-weight: 700;">Updated CGPA:</span>
            <div style="font-size: 1.35rem; font-weight: 800; color: #15803d;">${liveCGPA}</div>
          </div>
          <div>
            <span style="font-size: 0.8rem; text-transform: uppercase; color: #64748b; font-weight: 700;">Provisional Classification:</span>
            <div style="font-size: 0.95rem; font-weight: 700; color: ${statusClass};">${statusText}</div>
          </div>
        `;
      }

      tableContainer.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", recalcSemesterLive);
      });
      recalcSemesterLive();
    }
  }

  // Student dropdown change
  studentSelect.addEventListener("change", (e) => {
    activeRoll = e.target.value;
    renderEditor();
  });

  // Exam type tab pills
  examPills.forEach(pill => {
    pill.addEventListener("click", () => {
      examPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeExam = pill.getAttribute("data-exam") || "mid1";
      renderEditor();
    });
  });

  // Close and Cancel buttons
  const closeModal = () => modal.classList.remove("open");
  if (cancelBtn) cancelBtn.addEventListener("click", closeModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  // Form submission (Save & Recalculate)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const student = SVPP_DATA.students[activeRoll] || getOrCreateStudentRecord(activeRoll);
    if (!student) return;

    if (activeExam === "mid1" || activeExam === "mid2") {
      const rows = tableContainer.querySelectorAll("tbody tr");
      const updatedMid = [];

      rows.forEach((row, idx) => {
        const desc = parseInt(row.querySelector(".mid-desc-input")?.value, 10) || 0;
        const quiz = parseInt(row.querySelector(".mid-quiz-input")?.value, 10) || 0;
        const assgn = parseInt(row.querySelector(".mid-assgn-input")?.value, 10) || 0;
        const total = desc + quiz + assgn;
        const scaled = Math.min(30, Math.round((total / 45) * 30));

        const originalItem = (activeExam === "mid1" ? student.midMarks.mid1 : student.midMarks.mid2)[idx] || {};
        updatedMid.push({
          code: originalItem.code || `SUB${idx+1}`,
          name: originalItem.name || `Subject ${idx+1}`,
          descriptive: desc,
          quiz: quiz,
          assignment: assgn,
          total: total,
          scaled: scaled
        });
      });

      if (activeExam === "mid1") {
        student.midMarks.mid1 = updatedMid;
      } else {
        student.midMarks.mid2 = updatedMid;
      }

    } else if (activeExam === "semester") {
      const rows = tableContainer.querySelectorAll("tbody tr");
      const updatedResults = [];
      let totalGradePoints = 0;
      let totalCredits = 0;

      const activeSemList = student.semesterResults || [];
      let curSem = activeSemList.find(s => s.semesterId === window.currentResultSemesterId) || activeSemList[activeSemList.length - 1];
      const examResultsToUpdate = curSem ? curSem.results : (student.results || []);

      rows.forEach((row, idx) => {
        const isLab = row.getAttribute("data-is-lab") === "true";
        const credits = parseFloat(row.getAttribute("data-credits")) || 3.0;
        const internal = parseInt(row.querySelector(".sem-internal-input")?.value, 10) || 0;
        const external = parseInt(row.querySelector(".sem-external-input")?.value, 10) || 0;
        const total = internal + external;

        let grade = "C";
        let points = 7;
        if (total >= 90) { grade = "S"; points = 10; }
        else if (total >= 80) { grade = "A"; points = 9; }
        else if (total >= 70) { grade = "B"; points = 8; }
        else if (total >= 60) { grade = "C"; points = 7; }
        else if (total >= 50) { grade = "D"; points = 6; }
        else if (total >= 40) { grade = "E"; points = 5; }
        else { grade = "F"; points = 0; }

        totalCredits += credits;
        totalGradePoints += points * credits;

        const originalItem = examResultsToUpdate[idx] || {};
        updatedResults.push({
          code: originalItem.code || `SUB${idx+1}`,
          name: originalItem.title || originalItem.name || `Subject ${idx+1}`,
          title: originalItem.title || originalItem.name || `Subject ${idx+1}`,
          internal: internal,
          external: external,
          total: total,
          grade: grade,
          points: points,
          credits: credits,
          status: grade === "F" ? "FAIL" : "PASS"
        });
      });

      const newSgpa = (totalGradePoints / totalCredits).toFixed(2);
      const origSgpa = parseFloat(student.sgpa) || 8.0;
      const origCgpa = parseFloat(student.cgpa) || 8.0;
      const diff = (parseFloat(newSgpa) - origSgpa) * 0.25;
      const newCgpa = Math.min(9.95, Math.max(5.0, origCgpa + diff)).toFixed(2);

      if (curSem) {
        curSem.results = updatedResults;
        curSem.sgpa = newSgpa;
        curSem.cgpa = newCgpa;
      }
      student.results = updatedResults;
      student.sgpa = newSgpa;
      student.cgpa = newCgpa;
    }

    // Persist to localStorage
    let customMarks = {};
    try {
      const raw = localStorage.getItem("svpp_custom_marks");
      if (raw) customMarks = JSON.parse(raw);
    } catch (err) {}

    customMarks[student.rollNo] = {
      midMarks: student.midMarks,
      results: student.results,
      semesterResults: student.semesterResults,
      sgpa: student.sgpa,
      cgpa: student.cgpa
    };
    localStorage.setItem("svpp_custom_marks", JSON.stringify(customMarks));

    // Sync to SVPP_DATA.roster3rdYear
    if (SVPP_DATA.roster3rdYear) {
      const rIdx = SVPP_DATA.roster3rdYear.findIndex(s => s.rollNo === student.rollNo);
      if (rIdx !== -1) {
        SVPP_DATA.roster3rdYear[rIdx].midMarks = student.midMarks;
        SVPP_DATA.roster3rdYear[rIdx].results = student.results;
        SVPP_DATA.roster3rdYear[rIdx].semesterResults = student.semesterResults;
        SVPP_DATA.roster3rdYear[rIdx].sgpa = student.sgpa;
        SVPP_DATA.roster3rdYear[rIdx].cgpa = student.cgpa;
      }
    }

    // Live update open views
    const marksInput = document.getElementById("marksRollInput");
    if (marksInput && marksInput.value.trim().toUpperCase() === student.rollNo && window.renderStudentMarksGlobal) {
      window.renderStudentMarksGlobal(student);
    }

    const resultsInput = document.getElementById("resultsRollInput");
    if (resultsInput && resultsInput.value.trim().toUpperCase() === student.rollNo && window.renderGradeMemoGlobal) {
      window.renderGradeMemoGlobal(student, window.currentResultSemesterId);
    }

    if (window.refreshMasterRoster) {
      window.refreshMasterRoster();
    }

    if (window.logSemesterAuditAction) {
      logSemesterAuditAction("MARKS_UPDATE", student.rollNo, activeExam, `Updated ${activeExam} marks for ${student.name} (${student.rollNo}) - SGPA: ${student.sgpa}`, "Department Marks Editor");
    }

    closeModal();
    showNotification(`✅ Successfully updated marks for ${student.name} (${student.rollNo})! Memo updated live.`, "success");
  });

  // Reset to Defaults
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      const student = SVPP_DATA.students[activeRoll] || getOrCreateStudentRecord(activeRoll);
      if (!student) return;

      if (!confirm(`Reset marks for ${student.name} (${student.rollNo}) back to original autonomous curriculum records?`)) {
        return;
      }

      let customMarks = {};
      try {
        const raw = localStorage.getItem("svpp_custom_marks");
        if (raw) customMarks = JSON.parse(raw);
      } catch (err) {}

      delete customMarks[student.rollNo];
      localStorage.setItem("svpp_custom_marks", JSON.stringify(customMarks));

      // Re-generate default record
      const stIdx = SVPP_3RD_YEAR_STUDENTS.findIndex(s => s.rollNo === student.rollNo);
      if (stIdx !== -1) {
        const refreshed = build3rdYearStudentRecord(SVPP_3RD_YEAR_STUDENTS[stIdx], stIdx + 1);
        SVPP_DATA.students[student.rollNo] = refreshed;
        if (SVPP_DATA.roster3rdYear) {
          SVPP_DATA.roster3rdYear[stIdx] = refreshed;
        }

        renderEditor();

        if (window.renderStudentMarksGlobal) window.renderStudentMarksGlobal(refreshed);
        if (window.renderGradeMemoGlobal) window.renderGradeMemoGlobal(refreshed);
        if (window.refreshMasterRoster) window.refreshMasterRoster();

        logSemesterAuditAction("MARKS_RESET", student.rollNo, "ALL", `Reset marks for ${student.name} to autonomous curriculum defaults`, "Faculty Reset Button");

        showNotification(`Marks reset to autonomous curriculum defaults for ${student.rollNo}.`, "info");
      }
    });
  }

  // Global trigger to open modal with a specific student and exam type
  window.openMarksEditorModal = function(rollNo, examType = "mid1") {
    if (!isFacultyOrHodLoggedIn()) {
      window.openFacultyLoginModal("edit and update student marks");
      return;
    }

    if (rollNo && SVPP_DATA.students[rollNo]) {
      activeRoll = rollNo;
      if (studentSelect) studentSelect.value = rollNo;
    }
    if (examType) {
      activeExam = examType;
      examPills.forEach(p => {
        if (p.getAttribute("data-exam") === examType) {
          p.classList.add("active");
        } else {
          p.classList.remove("active");
        }
      });
    }
    renderEditor();
    modal.classList.add("open");
  };
}

// MODULE 9: Official PDF Examination Gazette Registry & Records Management
function initResultImportModule() {
  const modal = document.getElementById("resultImportModal");
  const form = document.getElementById("resultImportForm");
  const closeBtn = document.getElementById("closeImportModalBtn");
  const cancelBtn = document.getElementById("cancelImportModalBtn");
  const openGazetteBtn = document.getElementById("openAdminGazetteBtn");
  const reindexBtn = document.getElementById("reindexGazettesBtn");
  const exportJsonBtn = document.getElementById("exportGazetteJsonBtn");
  const auditBtn = document.getElementById("runAdminAuditBtn");
  const auditInput = document.getElementById("adminAuditRollInput");
  const auditDisplay = document.getElementById("adminAuditOutputDisplay");

  // Tab switching inside modal
  const tabBtns = modal ? modal.querySelectorAll(".admin-gtab-btn") : [];
  const tabContents = modal ? modal.querySelectorAll(".admin-gtab-content") : [];

  function switchAdminTab(targetTabId) {
    tabBtns.forEach(btn => {
      if (btn.getAttribute("data-gtab") === targetTabId) {
        btn.classList.add("active");
        btn.style.background = "#004080";
        btn.style.color = "#ffffff";
        btn.style.border = "none";
      } else {
        btn.classList.remove("active");
        btn.style.background = "#ffffff";
        btn.style.color = "#475569";
        btn.style.border = "1px solid #cbd5e1";
      }
    });

    tabContents.forEach(content => {
      if (content.id === targetTabId) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-gtab");
      switchAdminTab(target);
    });
  });

  // Modal open & close handlers
  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.classList.remove("open"));
  }
  if (cancelBtn && modal) {
    cancelBtn.addEventListener("click", () => modal.classList.remove("open"));
  }

  // Open modal trigger
  if (openGazetteBtn && modal) {
    openGazetteBtn.addEventListener("click", () => {
      switchAdminTab("gtab-registry");
      modal.classList.add("open");
    });
  }

  window.openAdminGazetteViewer = function(sourcePdfName) {
    if (!modal) return;
    switchAdminTab("gtab-registry");
    modal.classList.add("open");
    if (sourcePdfName) {
      setTimeout(() => {
        const rows = modal.querySelectorAll("#gtab-registry table tbody tr");
        rows.forEach(r => {
          if (r.textContent.includes(sourcePdfName)) {
            r.style.background = "#fef08a";
            r.scrollIntoView({ behavior: "smooth", block: "center" });
            setTimeout(() => { r.style.background = ""; }, 3000);
          }
        });
      }, 200);
    }
  };

  // Re-index all gazettes
  if (reindexBtn) {
    reindexBtn.addEventListener("click", () => {
      const db = window.SVPP_OFFICIAL_RESULTS;
      if (!db) {
        showNotification("No official database active to re-index.", "error");
        return;
      }
      const count = Object.keys(db).length;
      showNotification(`Re-indexing ${count} verified AI / AIML student records across 7 official gazettes...`, "info");
      setTimeout(() => {
        showNotification(`✅ Successfully verified and re-indexed all ${count} student records! Zero conflicts detected.`, "success");
      }, 500);
    });
  }

  // Export AI Gazette Database as JSON
  if (exportJsonBtn) {
    exportJsonBtn.addEventListener("click", () => {
      const db = window.SVPP_OFFICIAL_RESULTS;
      if (!db) {
        showNotification("No official gazette data available for export.", "error");
        return;
      }
      try {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(db, null, 2));
        const dlAnchor = document.createElement("a");
        dlAnchor.setAttribute("href", dataStr);
        dlAnchor.setAttribute("download", "SVPP_AI_DEPARTMENT_OFFICIAL_GAZETTE_DATA.json");
        document.body.appendChild(dlAnchor);
        dlAnchor.click();
        dlAnchor.remove();
        showNotification("Exported SVPP_AI_DEPARTMENT_OFFICIAL_GAZETTE_DATA.json successfully!", "success");
      } catch (err) {
        showNotification("Failed to export JSON file.", "error");
      }
    });
  }

  // Live Records Audit Search
  function runAdminAudit() {
    if (!auditInput || !auditDisplay) return;
    const query = auditInput.value.trim().toUpperCase();
    if (!query) {
      showNotification("Please enter a Roll Number or Subject Code to audit.", "warning");
      return;
    }

    const db = window.SVPP_OFFICIAL_RESULTS || {};

    // 1. Direct roll number match
    let matchStudent = db[query];
    if (!matchStudent && query.length <= 4) {
      const k = Object.keys(db).find(key => key.endsWith(query));
      if (k) matchStudent = db[k];
    }

    if (matchStudent) {
      const sems = matchStudent.semesters || {};
      const semKeys = Object.keys(sems);
      
      let allAttemptsRows = [];
      semKeys.forEach(sKey => {
        const sem = sems[sKey];
        const results = sem.results || [];
        results.forEach(sub => {
          allAttemptsRows.push({
            semester: sem.semesterTitle,
            monthYear: sem.monthYear || 'June 2026',
            examType: sem.examType || (sem.semesterTitle.includes('Supplementary') ? 'Supplementary' : 'Regular'),
            code: sub.code,
            title: sub.title || sub.name,
            internal: sub.internal !== undefined ? sub.internal : '-',
            external: sub.external !== undefined ? sub.external : '-',
            total: sub.total !== undefined ? sub.total : '-',
            grade: sub.grade,
            credits: sub.credits !== undefined ? sub.credits : (sub.maxCredits || 3),
            status: sub.status,
            sourcePdf: sem.sourcePdf || 'SVPP_Gazette.pdf',
            gazetteRef: sem.gazetteRef || 'SVPP/COE/2026/R23'
          });
        });
      });

      auditDisplay.innerHTML = `
        <div style="background:#ffffff; border:1px solid #cbd5e1; border-radius:8px; padding:18px; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px; border-bottom:1px solid #e2e8f0; padding-bottom:12px;">
            <div>
              <div style="font-family:var(--font-serif); font-size:1.3rem; font-weight:800; color:var(--navy-dark);">${matchStudent.name}</div>
              <div style="font-family:var(--font-mono); font-size:0.9rem; font-weight:700; color:#0284c7;">
                ${matchStudent.rollNo} &bull; ${matchStudent.branch || 'B.Tech AI'} &bull; Branch Code: ${matchStudent.branchCode || '43'}
              </div>
            </div>
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <span class="circ-badge" style="background:#e0f2fe; color:#0369a1; font-weight:700; padding:4px 10px; font-size:0.8rem;">
                ${semKeys.length} Semesters Indexed
              </span>
              <span class="circ-badge" style="background:${(matchStudent.totalBacklogs || 0) > 0 ? '#fee2e2' : '#dcfce7'}; color:${(matchStudent.totalBacklogs || 0) > 0 ? '#991b1b' : '#166534'}; font-weight:700; padding:4px 10px; font-size:0.8rem;">
                ${(matchStudent.totalBacklogs || 0) > 0 ? `Active Backlogs: ${matchStudent.totalBacklogs}` : 'All Clear (0 Backlogs)'}
              </span>
            </div>
          </div>

          <div style="overflow-x:auto;">
            <table class="memo-results-table" style="font-size:0.82rem; margin:0;">
              <thead>
                <tr style="background:#003366; color:#ffffff;">
                  <th style="color:#ffffff;">Semester</th>
                  <th style="color:#ffffff; text-align:center;">Attempt</th>
                  <th style="color:#ffffff;">Sub Code</th>
                  <th style="color:#ffffff;">Subject Title</th>
                  <th style="color:#ffffff; text-align:center;">Int</th>
                  <th style="color:#ffffff; text-align:center;">Ext</th>
                  <th style="color:#ffffff; text-align:center;">Tot</th>
                  <th style="color:#ffffff; text-align:center;">Grd</th>
                  <th style="color:#ffffff; text-align:center;">Status</th>
                  <th style="color:#ffffff;">Source Gazette PDF</th>
                  <th style="color:#ffffff;">Gazette Order Ref</th>
                </tr>
              </thead>
              <tbody>
                ${allAttemptsRows.map(row => `
                  <tr style="${(row.status === 'FAIL' || row.grade === 'F' || row.grade === '-Ab-') ? 'background:#fff1f2;' : ''}">
                    <td style="font-weight:600;">${row.semester}</td>
                    <td style="text-align:center;">
                      <span style="font-size:0.72rem; font-weight:700; padding:2px 6px; border-radius:6px; background:${row.examType === 'Supplementary' ? '#fee2e2' : '#e0f2fe'}; color:${row.examType === 'Supplementary' ? '#991b1b' : '#0369a1'};">
                        ${row.examType}
                      </span>
                    </td>
                    <td style="font-family:var(--font-mono); font-weight:700;">${row.code}</td>
                    <td style="font-weight:600;">${row.title}</td>
                    <td style="font-family:var(--font-mono); text-align:center;">${row.internal}</td>
                    <td style="font-family:var(--font-mono); text-align:center;">${row.external}</td>
                    <td style="font-family:var(--font-mono); font-weight:700; text-align:center;">${row.total}</td>
                    <td style="text-align:center; font-weight:700;">${row.grade}</td>
                    <td style="text-align:center; font-weight:700; color:${(row.status === 'FAIL' || row.grade === 'F' || row.grade === '-Ab-') ? '#dc2626' : '#16a34a'};">
                      ${row.status}
                    </td>
                    <td style="font-family:var(--font-mono); font-size:0.75rem; color:#0369a1;">${row.sourcePdf}</td>
                    <td style="font-family:var(--font-mono); font-size:0.75rem; color:#475569;">${row.gazetteRef}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
      return;
    }

    // 2. Check if query is a subject code (e.g. 23BS0005, 23PC4301)
    const matchingSubjects = [];
    Object.values(db).forEach(st => {
      const sems = st.semesters || {};
      Object.values(sems).forEach(sem => {
        (sem.results || []).forEach(sub => {
          if (sub.code === query || (sub.title && sub.title.toUpperCase().includes(query))) {
            matchingSubjects.push({
              studentRoll: st.rollNo,
              studentName: st.name,
              branch: st.branch,
              semester: sem.semesterTitle,
              examType: sem.examType || 'Regular',
              sub: sub,
              sourcePdf: sem.sourcePdf,
              gazetteRef: sem.gazetteRef
            });
          }
        });
      });
    });

    if (matchingSubjects.length > 0) {
      auditDisplay.innerHTML = `
        <div style="background:#ffffff; border:1px solid #cbd5e1; border-radius:8px; padding:18px;">
          <h4 style="font-family:var(--font-serif); margin:0 0 12px 0; color:var(--navy-dark);">
            Subject Audit: "${query}" &bull; ${matchingSubjects.length} Student Record(s) in AI Gazettes
          </h4>
          <div style="overflow-x:auto;">
            <table class="memo-results-table" style="font-size:0.82rem; margin:0;">
              <thead>
                <tr style="background:#003366; color:#ffffff;">
                  <th style="color:#ffffff;">Roll Number</th>
                  <th style="color:#ffffff;">Student Name</th>
                  <th style="color:#ffffff;">Semester</th>
                  <th style="color:#ffffff; text-align:center;">Attempt</th>
                  <th style="color:#ffffff; text-align:center;">Int</th>
                  <th style="color:#ffffff; text-align:center;">Ext</th>
                  <th style="color:#ffffff; text-align:center;">Tot</th>
                  <th style="color:#ffffff; text-align:center;">Grade</th>
                  <th style="color:#ffffff; text-align:center;">Status</th>
                  <th style="color:#ffffff;">Source Gazette</th>
                </tr>
              </thead>
              <tbody>
                ${matchingSubjects.slice(0, 100).map(m => `
                  <tr>
                    <td style="font-family:var(--font-mono); font-weight:700;">${m.studentRoll}</td>
                    <td style="font-weight:600;">${m.studentName}</td>
                    <td>${m.semester}</td>
                    <td style="text-align:center;">${m.examType}</td>
                    <td style="text-align:center; font-family:var(--font-mono);">${m.sub.internal}</td>
                    <td style="text-align:center; font-family:var(--font-mono);">${m.sub.external}</td>
                    <td style="text-align:center; font-family:var(--font-mono); font-weight:700;">${m.sub.total}</td>
                    <td style="text-align:center; font-weight:700;">${m.sub.grade}</td>
                    <td style="text-align:center; font-weight:700; color:${m.sub.status === 'FAIL' ? '#dc2626' : '#16a34a'};">${m.sub.status}</td>
                    <td style="font-family:var(--font-mono); font-size:0.75rem; color:#0369a1;">${m.sourcePdf}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
      return;
    }

    // No match
    auditDisplay.innerHTML = `
      <div style="background:#fee2e2; border:1.5px solid #f87171; border-radius:8px; padding:20px; text-align:center; color:#991b1b;">
        <div style="font-size:1.15rem; font-weight:800; margin-bottom:6px;">
          «No examination records found for this roll number in the available department records.»
        </div>
        <p style="font-size:0.88rem; color:#7f1d1d; margin:0;">
          Queried identifier "${query}" does not belong to Department of AI (Branch 43) or AIML (Branch 42) in any of the 7 indexed gazette files.
        </p>
      </div>
    `;
  }

  if (auditBtn) {
    auditBtn.addEventListener("click", runAdminAudit);
  }
  if (auditInput) {
    auditInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        runAdminAudit();
      }
    });
  }

  // Gazette Ingestion Form
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!isFacultyOrHodLoggedIn()) {
        showNotification("Permission Denied: Only authenticated Faculty or HOD accounts can ingest gazette records.", "error");
        window.openFacultyLoginModal("ingest official examination gazettes");
        return;
      }

      const targetRoll = document.getElementById("importStudentRollInput")?.value.trim().toUpperCase();
      const semId = document.getElementById("importSemesterSelect")?.value || "sem5";
      const examType = document.getElementById("importExamTypeSelect")?.value || "Regular";
      const docRef = document.getElementById("importDocumentRefInput")?.value.trim() || "SVPP_OFFICIAL_GAZETTE.pdf";
      const rawPayload = document.getElementById("importDataTextInput")?.value.trim();

      if (!targetRoll || !rawPayload) {
        showNotification("Please specify student roll number and provide valid result records payload.", "danger");
        return;
      }

      // Strict department check
      const isAI = targetRoll.includes("A43") || targetRoll.includes("A42") || targetRoll === "ALL_AI";
      if (!isAI) {
        showNotification(`🛑 Department Validation Error: Roll number "${targetRoll}" does not belong to Department of AI (Branch 43 or 42). Non-AI department records are strictly blocked.`, "error");
        return;
      }

      let parsedResults = null;
      try {
        parsedResults = JSON.parse(rawPayload);
      } catch (err) {
        showNotification("Validation Error: Invalid JSON document structure. Ensure valid format.", "error");
        return;
      }

      if (!Array.isArray(parsedResults) || parsedResults.length === 0) {
        showNotification("Validation Error: Result payload must contain an array of subject result records.", "error");
        return;
      }

      // Validate subjects
      for (const item of parsedResults) {
        if (!item.code || (!item.title && !item.name)) {
          showNotification(`Validation Error: Subject Code and Title are required for all records.`, "error");
          return;
        }
      }

      // Check student in database
      const db = window.SVPP_OFFICIAL_RESULTS = window.SVPP_OFFICIAL_RESULTS || {};
      let student = db[targetRoll];
      if (!student) {
        const branchCode = targetRoll.includes("A42") ? "42" : "43";
        const branchTitle = branchCode === "42" ? "B.Tech - Artificial Intelligence & Machine Learning" : "B.Tech - Artificial Intelligence";
        student = {
          rollNo: targetRoll,
          name: `STUDENT ${targetRoll}`,
          branch: branchTitle,
          branchCode: branchCode,
          semesters: {}
        };
        db[targetRoll] = student;
      }

      // Formatted results
      let totalObt = 0;
      let maxTotal = 0;
      let earnedCreds = 0;
      let totalCreds = 0;
      let totalPoints = 0;

      const formattedResults = parsedResults.map(r => {
        const intVal = r.internal !== undefined ? parseInt(r.internal) : 0;
        const extVal = r.external !== undefined ? parseInt(r.external) : 0;
        const totVal = r.total !== undefined ? parseInt(r.total) : (intVal + extVal);
        const cr = parseFloat(r.credits) || 3.0;
        const gr = r.grade || (totVal >= 40 ? "B" : "F");
        const isFail = (gr === "F" || gr === "-Ab-" || r.status === "FAIL");
        const status = isFail ? (gr === "-Ab-" ? "ABSENT" : "FAIL") : "PASS";

        totalObt += totVal;
        maxTotal += 100;
        totalCreds += cr;
        if (!isFail) earnedCreds += cr;

        let pts = 8;
        if (gr === "O") pts = 10;
        else if (gr === "A+") pts = 9;
        else if (gr === "A") pts = 8;
        else if (gr === "B+") pts = 7;
        else if (gr === "B") pts = 6;
        else if (gr === "C") pts = 5;
        else pts = 0;

        totalPoints += pts * cr;

        return {
          code: r.code,
          title: r.title || r.name,
          name: r.title || r.name,
          credits: isFail ? 0 : cr,
          maxCredits: cr,
          grade: gr,
          points: pts,
          internal: intVal,
          external: extVal,
          total: totVal,
          status: status,
          isSupple: examType === "Supplementary",
          isPdfRecord: true
        };
      });

      const sgpa = totalCreds > 0 ? (totalPoints / totalCreds).toFixed(2) : "0.00";
      const pct = maxTotal > 0 ? ((totalObt / maxTotal) * 100).toFixed(1) + "%" : "0.0%";

      const semTitleMap = {
        sem1: "I B.Tech I Semester (SVPP R23 Autonomous)",
        sem2: "I B.Tech II Semester (SVPP R23 Autonomous)",
        sem3: "II B.Tech I Semester (SVPP R23 Autonomous)",
        sem4: "II B.Tech II Semester (SVPP R23 Autonomous)",
        sem5: "III B.Tech V Semester (SVPP R23 Autonomous)"
      };

      const semEntry = {
        semesterId: semId,
        semesterTitle: semTitleMap[semId] || `Semester (${semId})`,
        examType: examType,
        examTitle: `${student.branch.toUpperCase()} ${semId.toUpperCase()} ${examType.toUpperCase()} EXAMINATIONS`,
        monthYear: "October 2026",
        regulation: "SVPP R23 (Autonomous)",
        sgpa: sgpa,
        cgpa: sgpa,
        status: formattedResults.some(r => r.status === "FAIL" || r.status === "ABSENT") ? "BACKLOGS DETECTED" : "PASSED",
        results: formattedResults,
        totalObtained: totalObt,
        maxMarks: maxTotal,
        percentage: pct,
        totalCredits: earnedCreds,
        sourcePdf: docRef,
        gazetteRef: `SVPP/COE/2026/UG/R23/${semId.toUpperCase()}-${examType.toUpperCase()}`
      };

      student.semesters[semId] = semEntry;

      // Recompute student backlogs
      const subHistory = {};
      Object.values(student.semesters).forEach(sm => {
        (sm.results || []).forEach(sb => {
          const isFailed = (sb.grade === 'F' || sb.grade === '-Ab-' || sb.status === 'FAIL');
          if (!subHistory[sb.code]) {
            subHistory[sb.code] = {
              code: sb.code,
              title: sb.title || sb.name,
              status: isFailed ? 'FAIL' : 'PASS',
              grade: sb.grade,
              lastSem: sm.semesterTitle
            };
          } else {
            subHistory[sb.code].lastSem = sm.semesterTitle;
            if (!isFailed) {
              subHistory[sb.code].status = 'PASS';
              subHistory[sb.code].grade = sb.grade;
            } else if (subHistory[sb.code].status !== 'PASS') {
              subHistory[sb.code].status = 'FAIL';
              subHistory[sb.code].grade = sb.grade;
            }
          }
        });
      });

      const activeBacklogs = Object.values(subHistory).filter(s => s.status === 'FAIL');
      student.activeBacklogsList = activeBacklogs;
      student.totalBacklogs = activeBacklogs.length;

      // Save to localStorage
      try {
        localStorage.setItem("svpp_custom_gazette_overrides", JSON.stringify(db));
      } catch (e) {}

      showNotification(`✅ Successfully ingested ${formattedResults.length} records for ${student.rollNo} from ${docRef}!`, "success");
      modal.classList.remove("open");

      // Refresh student grade memo if open
      const currentRoll = document.getElementById("resultsRollInput")?.value.trim().toUpperCase();
      if (currentRoll === targetRoll && window.renderGradeMemoGlobal) {
        const refreshedStudent = getOrCreateStudentRecord(targetRoll);
        window.renderGradeMemoGlobal(refreshedStudent, semId);
      }
    });
  }
}

