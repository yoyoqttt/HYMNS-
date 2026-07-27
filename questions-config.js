// ============================================
// EVENT + QUESTIONS CONFIG
// ============================================
// Edit the EVENT section to change event name, date, venue,
// or tagline. The form and dashboard automatically read this file.

export const EVENT = {
  name: "HYMNS Activity Questionnaire",
  tagline: "Neuropathic Pain Clinical Insights",
  dates: "2026",
  venue: "HYMNS Activity",
};

// Each question requires:
// id: unique question ID
// label: question text
// allowMultiple: true for multiple selections
// allowMultiple: false for only one selection
// options: available answer choices

export const QUESTIONS = [
  {
    id: "q1",
    label: "In which indication do you prefer Gabapentin and its combinations?",
    allowMultiple: true,
    options: [
      "Diabetic neuropathy",
      "Radiculopathy",
      "Post-Herpetic Neuralgia",
      "Trigeminal neuralgia",
      "Other — Please specify",
    ],
  },

  {
    id: "q2",
    label:
      "Which attribute most strongly influences your confidence in long-term Gabapentin therapy?",
    allowMultiple: false,
    options: [
      "Established long-term clinical experience",
      "Flexible dose titration",
      "Predictable safety profile",
      "Works across different patient types",
      "Other — Please specify",
    ],
  },

  {
    id: "q3",
    label:
      "When initiating Gabapentin in elderly patients, which consideration most influences your prescribing approach?",
    allowMultiple: false,
    options: [
      "Fall risk",
      "Severity of pain",
      "Comorbidities",
      "Flexible dose titration",
      "Other — Please specify",
    ],
  },

  {
    id: "q4",
    label:
      "In which parameter do you consider Gabapentin better than other Gabapentinoids?",
    allowMultiple: true,
    options: [
      "Better dose titration",
      "Lower abuse potential",
      "Better cardiac safety",
      "Better efficacy",
      "Other — Please specify",
    ],
  },

  {
    id: "q5",
    label:
      "In which area can we collaborate with eminent neurologists like you to increase awareness of neuropathic pain?",
    allowMultiple: true,
    options: [
      "Collect real-world evidence on neuropathic pain",
      "Continuing Medical Education programs for physicians",
      "Screening initiatives for early detection of neuropathic pain",
      "Public and patient awareness programs on neuropathic pain",
      "Other — Please specify",
    ],
  },
];