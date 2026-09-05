export const presentationData = {
  meta: {
    title: "Let's keep thinking.",
    subtitle: "Cultivating Natural Intelligence Across Education, Science & Living",
    author: "Ymas Navognale",
    durationMinutes: 10,
    version: "2.1.0"
  },

  // Central Constellation Hubs
  hubs: [
    {
      id: "hub-grounding",
      question: "What is natural intelligence in an automated era?",
      category: "The Human Center",
      thesis: "AI does not replace human intellect — it is a cognitive bicycle for natural human curiosity.",
      color: "#A51C30", // Crimson Red
      accentGlow: "rgba(165, 28, 48, 0.20)",
      x: 0,
      y: -50
    },
    {
      id: "hub-teaching",
      question: "How should we teach?",
      category: "Teaching & Pedagogy",
      thesis: "Moving past the adversarial detection trap to reclaim authentic 1-on-1 student mentorship.",
      color: "#A51C30",
      accentGlow: "rgba(165, 28, 48, 0.20)",
      x: -500,
      y: -330
    },
    {
      id: "hub-learning",
      question: "How do students learn?",
      category: "Learning & Equity",
      thesis: "A patient, 24/7 Socratic companion scaffolding neurodiverse and first-generation learners.",
      color: "#4A6B53", // Sage
      accentGlow: "rgba(74, 107, 83, 0.18)",
      x: 500,
      y: -330
    },
    {
      id: "hub-science",
      question: "Can AI accelerate discovery?",
      category: "Science & Robotics",
      thesis: "Augmenting physical lab hands and computational pattern recognition to solve planetary crises.",
      color: "#2C3E6B", // Deep Indigo
      accentGlow: "rgba(44, 62, 107, 0.18)",
      x: -520,
      y: 310
    },
    {
      id: "hub-ethics",
      question: "What is our ethical & ecological ledger?",
      category: "Ethics & Environment",
      thesis: "Confronting hallucinations, academic integrity, and compute energy with principled frugality.",
      color: "#B8860B", // Amber
      accentGlow: "rgba(184, 134, 11, 0.18)",
      x: 520,
      y: 310
    },
    {
      id: "hub-living",
      question: "How do we live and flourish?",
      category: "Everyday Living",
      thesis: "Reclaiming executive mental bandwidth so humans have room for wonder, rest, and connection.",
      color: "#8B5E3C", // Sienna
      accentGlow: "rgba(139, 94, 60, 0.18)",
      x: 0,
      y: 580
    }
  ],

  // Satellite Nodes (Orbiting Visual Vignettes)
  nodes: [
    // --- Teaching Hub ---
    {
      id: "node-detection-trap",
      hubId: "hub-teaching",
      title: "The Detection Fallacy",
      tag: "Integrity",
      x: -690,
      y: -450,
      summary: "Commercial AI detectors generate false positives, penalize non-native English speakers, and create adversarial classrooms.",
      caseStudy: "Vanderbilt and other leading institutions disabled Turnitin's AI detector after studies showed error rates exceeding 20% on ESL student writing.",
      facultyAction: "Shift syllabus language from 'AI is strictly forbidden' to 'Transparent Attribution Required: Document your prompts and critically critique the output.'",
      ethicsOrEco: "Surveillance tools harm student-teacher trust. Rigor is maintained through live discussion, not algorithmic policing.",
      keyQuote: "You cannot police thinking with an algorithm that cannot think."
    },
    {
      id: "node-authentic-assessment",
      hubId: "hub-teaching",
      title: "Authentic Assessment",
      tag: "Pedagogy",
      x: -330,
      y: -470,
      summary: "Replacing generic five-page essays with process-based evaluations, defense interviews, and real-world synthesis.",
      caseStudy: "Biology courses having students use AI to generate three competing hypotheses on cellular mutation, then defend in lab which one violates thermodynamic laws.",
      facultyAction: "Add a 2-minute audio reflection or 3-question viva voce (oral defense) where students explain *why* their final argument holds weight.",
      ethicsOrEco: "Focuses on the journey of understanding rather than a static paper easily manufactured overnight.",
      keyQuote: "Test what AI cannot experience: human judgment, local context, and oral conviction."
    },
    {
      id: "node-reclaim-time",
      hubId: "hub-teaching",
      title: "Reclaiming Office Hours",
      tag: "Mentorship",
      x: -630,
      y: -210,
      summary: "Offloading repetitive administrative drudgery (rubric formatting, routine email FAQs) to double 1-on-1 mentorship time.",
      caseStudy: "Faculty report spending up to 40% of their weekly schedule drafting repetitive syllabus clarifications. Custom course GPTs answered 600 basic scheduling FAQs.",
      facultyAction: "Prompt AI: 'Draft 5 differentiated examples of this economic principle ranging from beginner analogies to graduate-level mathematics.'",
      ethicsOrEco: "Efficiency is not about doing more work; it is about freeing time to care for human students.",
      keyQuote: "Automate the bureaucratic routine to preserve the human sacred."
    },

    // --- Learning Hub ---
    {
      id: "node-socratic-mentor",
      hubId: "hub-learning",
      title: "The 24/7 Socratic Partner",
      tag: "Personalized",
      x: 330,
      y: -470,
      summary: "A private, infinitely patient tutor that never rolls its eyes when a hesitant student asks the same question six times.",
      caseStudy: "Harvard's CS50 introduced the CS50 AI Bot, explicitly engineered to never give direct answers, but to ask guided questions that lead students to find their own bugs.",
      facultyAction: "Instruct students to prompt: 'Act as a Socratic philosopher. Do not give me the answer. Ask me one question at a time to test my assumptions on this topic.'",
      ethicsOrEco: "Prevents passive answer-copying by enforcing active cognitive retrieval.",
      keyQuote: "The greatest teacher is the one who helps you answer your own questions."
    },
    {
      id: "node-neurodiversity",
      hubId: "hub-learning",
      title: "Neurodiversity Scaffolding",
      tag: "Accessibility",
      x: 690,
      y: -450,
      summary: "Transforming dense academic texts into audio dialogues, mind maps, or sensory-friendly step-by-step breakdowns for ADHD and dyslexia.",
      caseStudy: "Students with executive dysfunction using voice-to-text brainstorming models to unblock thesis paralysis, turning scattered thoughts into structured outlines.",
      facultyAction: "Encourage students to upload complex journal PDFs and request: 'Explain the core methodology of this study using a visual flowchart and plain language summary.'",
      ethicsOrEco: "Universal Design for Learning (UDL) becomes instantly customizable for every brain wiring.",
      keyQuote: "Equal access does not mean identical materials; it means tailored bridges."
    },
    {
      id: "node-first-gen",
      hubId: "hub-learning",
      title: "First-Gen Equalizer",
      tag: "Equity",
      x: 630,
      y: -210,
      summary: "Demystifying the 'hidden curriculum' of higher education (navigating grant applications, professorial etiquette, office hour prep).",
      caseStudy: "First-generation university students using conversational AI to draft professional inquiries to lab directors without fear of sounding 'unacademic'.",
      facultyAction: "Provide an 'Office Hours Prep Prompt' encouraging students to summarize what confuses them before walking through the professor's door.",
      ethicsOrEco: "Bridges socio-economic mentorship gaps where students lack family networks in academia.",
      keyQuote: "Confidence begins when the unwritten rules are made legible to all."
    },

    // --- Science & Robotics Hub ---
    {
      id: "node-alphafold",
      hubId: "hub-science",
      title: "AlphaFold & Proteomics",
      tag: "Biotech",
      x: -710,
      y: 170,
      summary: "Predicting 200 million protein structures in months—a feat that would have taken human crystallographers billions of laboratory hours.",
      caseStudy: "Biochemists globally using predicted enzyme structures to design plastic-eating bacteria and targeted cancer treatments.",
      facultyAction: "Incorporate AlphaFold database visualizations into undergraduate biochemistry labs, shifting emphasis from rote structure memory to functional engineering.",
      ethicsOrEco: "Dual-use biosecurity oversight is essential; universities must pair AI biotech tools with bio-risk protocols.",
      keyQuote: "Compressing a century of empirical molecular biology into an afternoon of synthesis."
    },
    {
      id: "node-robotic-pipetting",
      hubId: "hub-science",
      title: "Autonomous Wet Labs",
      tag: "Robotics",
      x: -710,
      y: 440,
      summary: "Robotic arms executing thousands of continuous micro-fluidic assays while machine learning agents interpret spectral data in real time.",
      caseStudy: "Self-driving chemistry laboratories (e.g., University of Toronto's Acceleration Consortium) synthesizing and analyzing new solar-cell light absorbers 24/7.",
      facultyAction: "Train graduate researchers on robotic orchestration and telemetry rather than manual pipetting, shifting human labor from mechanical execution to hypothesis critique.",
      ethicsOrEco: "Augmentation, not obsolescence: robotics handles hazardous solvent transfers while human chemists govern safety and purpose.",
      keyQuote: "Robotics provides the hands; AI provides pattern recognition; humans supply scientific intuition."
    },
    {
      id: "node-materials-battery",
      hubId: "hub-science",
      title: "Clean Energy & Materials",
      tag: "CleanTech",
      x: -360,
      y: 420,
      summary: "Screening millions of crystal structures to discover non-toxic, solid-state battery electrolytes and carbon-capture catalysts.",
      caseStudy: "PNNL and Microsoft used AI to narrow 32 million inorganic materials to 18 viable battery candidates in 80 hours, synthesizing a working prototype that uses 70% less lithium.",
      facultyAction: "Create cross-departmental seminars linking computational data science with material chemistry to solve regional environmental bottlenecks.",
      ethicsOrEco: "Directing computational firepower toward existential planetary survival: energy storage, clean water, and decarbonization.",
      keyQuote: "AI can find the needle in the haystack of the periodic table."
    },

    // --- Ethics & Environmental Ledger Hub ---
    {
      id: "node-carbon-water",
      hubId: "hub-ethics",
      title: "Energy & Water Ledger",
      tag: "Ecology",
      x: 710,
      y: 170,
      summary: "Acknowledging hyperscale data centers' electricity and cooling water demands with complete institutional transparency.",
      caseStudy: "Training a single frontier model can consume thousands of megawatt-hours. Cooling servers in drought-prone regions raises ethical municipal questions.",
      facultyAction: "Adopt the 'Principle of Proportionality': don't deploy a 400-billion parameter cloud model when an open-source 3B local model does the job cleanly.",
      ethicsOrEco: "Ecological responsibility requires carbon-aware computing: schedule heavy batch training when regional renewable grids are peaking.",
      keyQuote: "We cannot use computational energy recklessly while teaching environmental ethics."
    },
    {
      id: "node-slm-frugality",
      hubId: "hub-ethics",
      title: "Small Language Models",
      tag: "Green Compute",
      x: 710,
      y: 440,
      summary: "Lightweight, specialized models running locally on campus laptops and edge devices with a fraction of the energy and zero external data tracking.",
      caseStudy: "Edge models (e.g., Phi-3, Gemma, Llama-3-8B) achieving 90% of frontier model accuracy on specialized medical and legal translation with 1/50th the energy footprint.",
      facultyAction: "Teach students how to run quantized local open-weights models offline on their own hardware, preserving complete student data privacy.",
      ethicsOrEco: "Democratizes AI without relying entirely on massive proprietary cloud monopolies.",
      keyQuote: "Frugality is not limitation; it is precision engineering."
    },
    {
      id: "node-bias-hallucination",
      hubId: "hub-ethics",
      title: "Auditing Hallucinations",
      tag: "Literacy",
      x: 360,
      y: 420,
      summary: "Treating AI outputs as first drafts created by a brilliant but confident intern who requires rigorous human peer review.",
      caseStudy: "History seminars having students fact-check generated timelines of civil rights movements, uncovering subtle historical erasures in the model's training data.",
      facultyAction: "Design exercises where students receive credit specifically for discovering, diagnosing, and correcting algorithmic hallucinations.",
      ethicsOrEco: "Instills epistemic humility: critical verification of automated knowledge becomes the hallmark of a college graduate.",
      keyQuote: "Never outsource verification. Human discernment is the ultimate filter."
    },

    // --- Living & Flourishing Hub ---
    {
      id: "node-mental-bandwidth",
      hubId: "hub-living",
      title: "Executive Function Ease",
      tag: "Well-being",
      x: -280,
      y: 680,
      summary: "Offloading the constant cognitive friction of logistical life: calendar conflict triage, grocery budgeting, medical paperwork translation.",
      caseStudy: "Working parents and caregivers using conversational agents to consolidate school communications, therapy appointments, and weekly meal prep in minutes.",
      facultyAction: "Model healthy boundaries: use AI to compress low-value communication tasks so your personal evenings are protected for family, nature, and sleep.",
      ethicsOrEco: "Technology should calm the nervous system, not accelerate hyper-productivity burn-out.",
      keyQuote: "Reclaiming attention is the ultimate act of rebellion in the distraction economy."
    },
    {
      id: "node-lifelong-curiosity",
      hubId: "hub-living",
      title: "Boundless Curiosity",
      tag: "Flourishing",
      x: 280,
      y: 680,
      summary: "Empowering non-specialists to explore astronomy, master new languages, restore vintage radios, or write poetry across all stages of life.",
      caseStudy: "Retired seniors using multimodal image-to-speech tools to identify garden pollinators, translate old family letters from Italian, and record oral memoirs.",
      facultyAction: "Encourage students to pursue 'unassigned curiosity'—using conversational AI to explore questions outside their declared major simply for the joy of learning.",
      ethicsOrEco: "Reminds us that education is not just job training; it is the lifelong cultivation of human curiosity.",
      keyQuote: "When asking questions costs nothing, curiosity becomes boundless."
    }
  ],

  // Keynote Stops starting with Prologue: "Let's keep thinking."
  keynoteStops: [
    {
      id: "stop-prologue",
      hubId: null,
      stepNumber: 0,
      totalSteps: 8,
      isPrologue: true,
      label: "Prologue • Introduction",
      title: "Let's keep thinking.",
      subtitle: "Augmenting Natural Intelligence in an Automated Era",
      targetTime: "00:00",
      targetSeconds: 30,
      camera: { x: 0, y: 0, zoom: 0.45 },
      activeNodeIds: [],
      keyMessage: "Begin with quiet contemplation. Open the floor: Let's keep thinking.",
      speakerCues: [
        "Silence for 3-5 seconds. Let the single sentence land on the auditorium screen.",
        "Acknowledge the anxiety in the room: faculty fatigue, cheating fears, technological vertigo.",
        "Invite the audience: 'Before we panic, and before we surrender to hype... let's keep thinking.'",
        "Press Space or roll the scrollwheel to zoom into the constellation."
      ]
    },
    {
      id: "stop-grounding",
      hubId: "hub-grounding",
      stepNumber: 1,
      totalSteps: 8,
      label: "01 / 07 • The Human Center",
      title: "Meeting Hesitation with Empathy",
      subtitle: "The Soul of Higher Education in an Automated Era",
      targetTime: "00:30 - 01:30",
      targetSeconds: 90,
      camera: { x: 0, y: -50, zoom: 1.2 },
      activeNodeIds: [],
      keyMessage: "If you worry about student critical thinking and ethics, you are defending the soul of education.",
      speakerCues: [
        "Acknowledge the fatigue: Faculty are tired of cheating panic and tech hype.",
        "Validate fear: Skepticism is healthy academic rigor, not obsolescence.",
        "The Core Metaphor: AI is not an artificial mind replacing yours; it is a cognitive bicycle for natural human curiosity."
      ]
    },
    {
      id: "stop-teaching",
      hubId: "hub-teaching",
      stepNumber: 2,
      totalSteps: 8,
      label: "02 / 07 • Teaching & Pedagogy",
      title: "Beyond the Detection Trap",
      subtitle: "Authentic Assessment & Reclaiming the Mentorship Bond",
      targetTime: "01:30 - 03:00",
      targetSeconds: 180,
      camera: { x: -500, y: -330, zoom: 1.05 },
      activeNodeIds: ["node-detection-trap", "node-authentic-assessment", "node-reclaim-time"],
      keyMessage: "Stop policing writing with broken detectors. Automate the admin drudgery to double human office hours.",
      speakerCues: [
        "Drop AI detectors: Explain false positive rates on ESL students and broken trust.",
        "Pivot to Authentic Assessment: Viva voce, oral defense, and AI-critique assignments.",
        "Time reclamation: Use AI to draft differentiated rubrics so you have time to mentor students 1-on-1."
      ]
    },
    {
      id: "stop-learning",
      hubId: "hub-learning",
      stepNumber: 3,
      totalSteps: 8,
      label: "03 / 07 • Learning & Equity",
      title: "The Socratic Companion",
      subtitle: "Personalized Scaffolding for Every Brain and Background",
      targetTime: "03:00 - 04:30",
      targetSeconds: 270,
      camera: { x: 500, y: -330, zoom: 1.05 },
      activeNodeIds: ["node-socratic-mentor", "node-neurodiversity", "node-first-gen"],
      keyMessage: "A 24/7 patient mentor that levels the playing field for neurodiverse and first-generation learners.",
      speakerCues: [
        "The shy student in a 300-person hall: The AI will answer without rolling its eyes.",
        "Highlight Harvard CS50 bot: Designed specifically to ask questions, not hand out answers.",
        "Equity: Leveling the hidden curriculum for first-gen students who don't have family academic networks."
      ]
    },
    {
      id: "stop-science",
      hubId: "hub-science",
      stepNumber: 4,
      totalSteps: 8,
      label: "04 / 07 • Science & Discovery",
      title: "Augmenting Hands & Minds in the Lab",
      subtitle: "From AlphaFold to Autonomous Wet-Lab Robotics",
      targetTime: "04:30 - 06:30",
      targetSeconds: 390,
      camera: { x: -520, y: 310, zoom: 1.05 },
      activeNodeIds: ["node-alphafold", "node-robotic-pipetting", "node-materials-battery"],
      keyMessage: "Robotics provides the tireless hands, AI finds the hidden patterns, but humans supply scientific wisdom.",
      speakerCues: [
        "AlphaFold: Solving 200 million protein structures, compressing centuries into days.",
        "Robotic Wet-Labs: Automated pipetting running 24/7 while students focus on high-level hypothesis design.",
        "Clean energy breakthroughs: Screening 32 million battery formulations down to non-toxic alternatives in 80 hours."
      ]
    },
    {
      id: "stop-ethics",
      hubId: "hub-ethics",
      stepNumber: 5,
      totalSteps: 8,
      label: "05 / 07 • Ethics & Environment",
      title: "The Ethical & Ecological Ledger",
      subtitle: "Compute Frugality, Local SLMs & Verifiable Integrity",
      targetTime: "06:30 - 08:00",
      targetSeconds: 480,
      camera: { x: 520, y: 310, zoom: 1.05 },
      activeNodeIds: ["node-carbon-water", "node-slm-frugality", "node-bias-hallucination"],
      keyMessage: "Address the carbon and water footprint head-on. Shift to Small Language Models and compute frugality.",
      speakerCues: [
        "Honest accounting: Acknowledge data center electricity and water use directly.",
        "Solution: The Principle of Proportionality + Small Language Models (SLMs) running locally on campus laptops.",
        "Epistemic humility: Teach students to treat AI like a brilliant intern whose facts must always be audited."
      ]
    },
    {
      id: "stop-living",
      hubId: "hub-living",
      stepNumber: 6,
      totalSteps: 8,
      label: "06 / 07 • Living & Well-being",
      title: "Everyday Human Flourishing",
      subtitle: "Reclaiming Attention in an Age of Cognitive Overload",
      targetTime: "08:00 - 09:00",
      targetSeconds: 540,
      camera: { x: 0, y: 580, zoom: 1.1 },
      activeNodeIds: ["node-mental-bandwidth", "node-lifelong-curiosity"],
      keyMessage: "AI relieves administrative burnout so we can invest in what actually matters: relationships and wonder.",
      speakerCues: [
        "Alleviating executive friction: Everyday scheduling, medical translations, family logistics.",
        "Lifelong curiosity: Grandparents learning languages, non-scientists stargazing, joy of unassigned learning.",
        "The goal of technology is peace of mind, not 24/7 hyper-production."
      ]
    },
    {
      id: "stop-synthesis",
      hubId: "hub-grounding",
      stepNumber: 7,
      totalSteps: 8,
      isPrologue: true,
      label: "07 / 07 • The Synthesis",
      title: "Cultivating Natural Intelligence",
      subtitle: "Wisdom Over Mere Computation",
      targetTime: "09:00 - 10:00",
      targetSeconds: 600,
      camera: { x: 0, y: 0, zoom: 0.45 },
      activeNodeIds: [],
      keyMessage: "AI can generate information, but only human teachers inspire wisdom. Natural intelligence remains the center.",
      speakerCues: [
        "Camera pulls back to show the complete constellation.",
        "Final thesis: Higher education is not being replaced; it is being invited to reclaim its highest human purpose.",
        "Closing call: AI won't replace educators, but educators who partner with AI will illuminate the future."
      ]
    }
  ]
};
