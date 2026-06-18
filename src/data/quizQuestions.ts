import { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    topic: 'Fundamentals of Nursing',
    difficulty: 'Medium',
    question: 'A nurse is preparing to administer an intramuscular (IM) injection to an adult client. Which of the following sites is considered the safest and most preferred for administering large volume IM medications in adults?',
    options: [
      'Dorsogluteal site',
      'Ventrogluteal site',
      'Deltoid muscle',
      'Vastus lateralis site'
    ],
    correctIndex: 1,
    explanation: 'The ventrogluteal site is the preferred and safest site for deep intramuscular injections in adults. It lacks major nerves and blood vessels, has a thick muscle mass, and has a sealed boundary of fat. The dorsogluteal site is no longer recommended due to proximity to the sciatic nerve.'
  },
  {
    id: 2,
    topic: 'Anatomy and Physiology',
    difficulty: 'Easy',
    question: 'Which heart chamber receives oxygenated blood directly from the pulmonary veins, signaling the transition of blood flow from pulmonary to systemic circulation?',
    options: [
      'Right Atrium',
      'Left Atrium',
      'Right Ventricle',
      'Left Ventricle'
    ],
    correctIndex: 1,
    explanation: 'The Left Atrium receives oxygen-rich blood returning from the lungs via the four pulmonary veins. This blood is then pumped through the bicuspid (mitral) valve into the left ventricle, which eventually distributes it to the entire body.'
  },
  {
    id: 3,
    topic: 'Pharmacology',
    difficulty: 'Hard',
    question: 'A client with a history of deep vein thrombosis is prescribed Warfarin (Coumadin). Which blood laboratory indicator should the nurse check to monitor and adjust the therapeutic level of this medication?',
    options: [
      'Activated Partial Thromboplastin Time (aPTT)',
      'Prothrombin Time and International Normalized Ratio (PT/INR)',
      'Platelet Count',
      'Serum Potassium range'
    ],
    correctIndex: 1,
    explanation: 'PT/INR is the gold standard used to establish and monitor the therapeutic range of oral Warfarin therapy. Intravenous/Subcutaneous Heparin therapy is instead monitored using aPTT (Activated Partial Thromboplastin Time).'
  },
  {
    id: 4,
    topic: 'Medical-Surgical Nursing',
    difficulty: 'Medium',
    question: 'A patient is scheduled for an abdominal paracentesis. In which position should the nurse place the patient prior to and during the procedure to ensure safe drainage and minimize potential visceral damage?',
    options: [
      'High-Fowler\'s position or sitting upright on the edge of the bed',
      'Prone position with a pillow under the pelvis',
      'Trendelenburg position at a 15-degree angle',
      'Left lateral Sim\'s position with the right knee flexed'
    ],
    correctIndex: 0,
    explanation: 'Placing the patient in High-Fowler\'s position or sitting upright on the edge of the bed allows gravity to pool fluids in the lower peritoneal cavity while visceral organs float upward, providing safe needle access for draining ascites.'
  },
  {
    id: 5,
    topic: 'Mental Health Nursing',
    difficulty: 'Medium',
    question: 'A client diagnosed with major depressive disorder has been started on a Selective Serotonin Reuptake Inhibitor (SSRI). Which of the following is the most critical safety symptom for the nurse to monitor closely during the first two weeks of antidepressant therapy?',
    options: [
      'Severe dry mouth and blurred vision',
      'Increased energy accompanied by suicidal ideation or intent',
      'Hypertensive crisis triggered by foods containing tyramine',
      'Fine hand tremors and increased urine output'
    ],
    correctIndex: 1,
    explanation: 'During the first 1 to 2 weeks of taking SSRIs, the client\'s energy level may improve before their depressive thoughts subside. This increase in physical energy gives them the capacity to carry out suicidal plans, requiring close supervision and protective monitoring.'
  },
  {
    id: 6,
    topic: 'Midwifery',
    difficulty: 'Hard',
    question: 'A pregnant client at 34 weeks gestation presents to the maternity unit with sudden-onset, painless, bright red vaginal bleeding. Based on these clinical indicators, which obstetric condition does the nurse suspect?',
    options: [
      'Abruptio Placentae',
      'Placenta Previa',
      'Uterine Rupture',
      'Ectopic Pregnancy'
    ],
    correctIndex: 1,
    explanation: 'Painless, bright red vaginal bleeding in the second or third trimester is the hallmark symptom of Placenta Previa, where the placenta covers part or all of the cervix. Abruptio Placentae, on the other hand, presents with painful, dark red bleeding with uterine rigidity.'
  },
  {
    id: 7,
    topic: 'Community Health Nursing',
    difficulty: 'Easy',
    question: 'A community nurse is organizing a primary prevention campaign. Which of the following initiatives falls under the category of primary prevention?',
    options: [
      'Providing blood pressure screening booths at a local shopping center',
      'Administering influenza and tetanus immunizations at a community health clinic',
      'Conducting cardiac rehabilitation exercises for post-infarction patients',
      'Performing sputum microscopy for individuals with chronic cough'
    ],
    correctIndex: 1,
    explanation: 'Primary prevention focuses on preventing disease or injury before it occurs (e.g., immunizations, health education, sanitation). Secondary prevention involves early screening/diagnosis (e.g., blood pressure checks, TB screening). Tertiary prevention is rehabilitation and management (e.g., physical therapy).'
  },
  {
    id: 8,
    topic: 'Medical-Surgical Nursing',
    difficulty: 'Hard',
    question: 'A nurse is caring for a patient returning from surgery following a total thyroidectomy. Which clinical assessment is most critical to check for hypocalcemia resulting from accidental parathyroid gland removal?',
    options: [
      'Observe for painful calf contractions upon dorsiflexion (Homan\'s sign)',
      'Assess for facial muscle twitching when tapping the facial nerve (Chvostek\'s sign)',
      'Check for pupil response to light and accommodation (PERRLA)',
      'Assess for positive rebound tenderness in the right lower abdomen'
    ],
    correctIndex: 1,
    explanation: 'Hypocalcemia causes neuromuscular irritability. Chvostek\'s sign (facial muscle spasm when tapping facial nerve) and Trousseau\'s sign (carpal spasm with BP cuff inflation) are classic clinical indicators of hypocalcemia, common after thyroid surgery due to close proximity to parathyroid gland structures.'
  }
];
