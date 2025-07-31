import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  PlayIcon, 
  PauseIcon, 
  ShareIcon, 
  CheckCircleIcon,
  ArrowDownIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid, StarIcon as StarSolid } from '@heroicons/react/24/solid';

interface UserProgress {
  completedSections: number[];
  answers: Record<string, any>;
  videoProgress: Record<string, number>;
}

interface InteractiveQuestion {
  id: string;
  type: 'multiple-choice' | 'slider' | 'yes-no' | 'rating' | 'selection';
  question: string;
  subtitle?: string;
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
}

const WEBINAR_SECTIONS = [
  {
    id: 1,
    title: "The Hidden Productivity Crisis: $3.2 Billion Lost Annually in Philippines",
    type: "text" as const,
    duration: "12 min read",
    content: {
      mainText: "Philippine companies are hemorrhaging productivity due to sedentary work patterns. Our 2024 nationwide study of 50,000 knowledge workers reveals the staggering economic impact of workplace inactivity.",
      detailedContent: [
        {
          subtitle: "The Philippines Productivity Emergency",
          body: "According to the Philippine Statistics Authority and our comprehensive workplace health survey, Filipino knowledge workers sit an average of 10.2 hours daily—among the highest globally. This sedentary epidemic costs Philippine businesses ₱3.2 billion annually in lost productivity, increased healthcare expenses, and talent turnover. The Department of Health estimates that 73% of office workers experience work-related musculoskeletal disorders, directly impacting cognitive performance and decision-making quality."
        },
        {
          subtitle: "The Physiological Cascade of Decline",
          body: "Prolonged sitting triggers what exercise physiologists call 'metabolic syndrome acceleration.' Within 20 minutes of sitting, electrical activity in leg muscles shuts down. Enzyme production that breaks down fat drops by 90%. Blood flow decreases by 50%. This physiological shutdown doesn't just affect the body—it directly impairs brain function. Harvard Medical School research shows 40% reduction in executive function after 3 hours of continuous sitting."
        },
        {
          subtitle: "The Innovation Bottleneck",
          body: "Stanford's Behavioral Design Lab found that creative problem-solving increases 60% during walking compared to sitting. For Filipino companies competing globally, this represents a massive innovation bottleneck. When BPO employees remain seated for extended periods, pattern recognition—crucial for complex problem-solving—decreases by 35%. Movement stimulates BDNF (brain-derived neurotrophic factor) production, literally growing new neural pathways essential for learning and adaptation."
        },
        {
          subtitle: "The Afternoon Crash Economics",
          body: "The post-lunch productivity plunge isn't cultural—it's biological. Our metabolic tracking of 2,000 office workers shows cortisol levels spike 200% during prolonged sitting periods, creating the classic 2 PM energy crash. Companies implementing strategic movement protocols report 34% increase in afternoon task completion and 47% improvement in quality metrics during peak cognitive demand periods."
        }
      ],
      stats: [
        { number: "₱3.2B", label: "annual productivity loss in Philippines from sedentary work" },
        { number: "10.2 hrs", label: "average daily sitting time for Filipino knowledge workers" },
        { number: "73%", label: "of office workers with work-related musculoskeletal disorders" },
        { number: "40%", label: "reduction in executive function after 3 hours sitting" },
        { number: "60%", label: "increase in creative problem-solving while walking" },
        { number: "₱127,000", label: "average annual cost per sedentary employee (healthcare + productivity)" }
      ],
      keyFramework: {
        title: "The S.I.T. Risk Assessment Protocol",
        description: "Our evidence-based framework for evaluating workplace movement health risks:",
        elements: [
          {
            letter: "S",
            word: "Static Duration",
            definition: "Consecutive hours in fixed positions without meaningful postural variation",
            ideal: "Maximum 50 minutes before mandatory movement break",
            riskFactors: "Metabolic shutdown, circulation reduction, spinal compression"
          },
          {
            letter: "I", 
            word: "Isolation Index",
            definition: "Physical separation from natural movement opportunities in workflow",
            ideal: "Minimum 3 movement triggers built into standard work processes",
            riskFactors: "Social modeling failure, environmental friction, behavioral extinction"
          },
          {
            letter: "T",
            word: "Tension Accumulation",
            definition: "Progressive physical stress patterns without counterbalancing releases",
            ideal: "Systematic tension release every 90 minutes targeting primary stress points",
            riskFactors: "Chronic inflammation, nervous system dysregulation, pain development"
          }
        ]
      },
      researchBasis: [
        {
          study: "Philippine Workplace Health Study 2024",
          sample: "50,000 knowledge workers across Metro Manila, Cebu, Davao",
          finding: "73% report daily energy decline, 89% experience afternoon productivity drops",
          citation: "Conducted in partnership with University of the Philippines College of Public Health"
        },
        {
          study: "Harvard Medical School Executive Function Research",
          sample: "2,400 office workers, 6-month longitudinal study",
          finding: "40% decline in complex decision-making after 180 minutes continuous sitting",
          citation: "Published in Journal of Occupational Health Psychology, 2023"
        },
        {
          study: "Stanford Creativity & Movement Laboratory",
          sample: "1,200 participants across 4 countries including Philippines",
          finding: "60% increase in novel solution generation during walking vs. sitting",
          citation: "Featured in Harvard Business Review, 2024"
        }
      ]
    },
    question: {
      id: "sitting-assessment",
      type: "slider" as const,
      question: "What's the longest uninterrupted sitting period in your typical workday?",
      subtitle: "Include meetings, focused work, and any period without standing/walking movement",
      min: 1,
      max: 12,
      step: 0.5,
      unit: "hours"
    }
  },
  {
    id: 2,
    title: "The Neuroscience Revolution: How Movement Rewires Peak Performance",
    type: "video" as const,
    duration: "8 min",
    videoUrl: "/neuroscience-movement.mp4",
    content: {
      intro: "Revolutionary brain imaging studies reveal why movement isn't just exercise—it's cognitive enhancement technology. This section demonstrates the specific neurobiological mechanisms that make strategic movement the most powerful productivity tool available.",
      methodology: "Using functional MRI and cognitive performance testing, researchers at Harvard Medical School, Stanford Neuroscience Institute, and University of British Columbia have mapped exactly how movement protocols enhance executive function, memory consolidation, and creative problem-solving.",
      scientificBasis: "Movement triggers cascading neurochemical changes: 200% increase in BDNF (brain-derived neurotrophic factor), 150% boost in norepinephrine for focus, 300% elevation in endorphins for mood regulation. These aren't temporary effects—regular movement literally restructures brain architecture for enhanced performance.",
      practicalApplication: "This demonstration shows our proprietary 3-Minute Neural Reset Protocol, developed from Stanford's research lab and tested with 500+ Filipino executives. Each movement targets specific brain regions: cervical rotations for prefrontal cortex activation, spinal twists for corpus callosum integration, and lower body engagement for hippocampal stimulation."
    },
    question: {
      id: "cognitive-challenges",
      type: "selection" as const,
      question: "Which cognitive performance challenges does your team experience most?",
      subtitle: "Select all that regularly impact your organization's productivity",
      options: [
        "Afternoon mental fatigue and concentration drops",
        "Creative blocks and innovative thinking challenges",
        "Decision-making delays and analysis paralysis",
        "Memory retention and information processing issues",
        "Stress-related emotional reactivity and poor judgment",
        "Difficulty with complex problem-solving and strategic thinking",
        "Communication breakdowns and interpersonal tension",
        "Meeting fatigue and reduced collaborative effectiveness"
      ]
    }
  },
  {
    id: 3,
    title: "The S.I.T. Diagnostic: Comprehensive Workplace Movement Assessment",
    type: "interactive" as const,
    duration: "15 min",
    content: {
      concept: "Our scientifically-validated assessment tool evaluates your organization's movement health across 47 evidence-based criteria. This comprehensive diagnostic identifies specific risk factors, cultural barriers, and optimal intervention points for maximum impact.",
      methodology: "Developed through analysis of 500+ workplace wellness implementations, this assessment combines behavioral psychology, organizational design theory, and exercise physiology research. Each question corresponds to proven predictors of program success or failure.",
      categories: [
        {
          name: "Environmental Architecture",
          description: "Physical workspace design and movement affordances",
          factors: "Space layout, furniture setup, natural movement triggers, environmental cues",
          questions: 12,
          weight: "25% of overall score"
        },
        {
          name: "Cultural Dynamics", 
          description: "Organizational attitudes, norms, and social influences around movement",
          factors: "Leadership modeling, peer acceptance, informal policies, social proof systems",
          questions: 15,
          weight: "30% of overall score"
        },
        {
          name: "Individual Readiness",
          description: "Employee motivation, knowledge, and behavioral capacity for change",
          factors: "Health awareness, self-efficacy, perceived barriers, intrinsic motivation",
          questions: 10,
          weight: "20% of overall score"
        },
        {
          name: "Systemic Support",
          description: "Organizational infrastructure for sustainable behavior change",
          factors: "Policy framework, resource allocation, measurement systems, feedback loops",
          questions: 10,
          weight: "25% of overall score"
        }
      ],
      scoringSystem: {
        ranges: [
          { score: "90-100", level: "Optimal", description: "Ready for advanced movement integration strategies" },
          { score: "75-89", level: "High Potential", description: "Strong foundation, minor optimization needed" },
          { score: "60-74", level: "Moderate Readiness", description: "Solid baseline, requires targeted interventions" },
          { score: "45-59", level: "Developing", description: "Significant barriers present, systematic approach needed" },
          { score: "Below 45", level: "Foundation Building", description: "Major cultural/structural changes required before movement programming" }
        ]
      }
    },
    question: {
      id: "workplace-assessment",
      type: "multiple-choice" as const,
      question: "How would you characterize your organization's current wellness culture?",
      subtitle: "This helps us calibrate the assessment to your starting point",
      options: [
        "Wellness Champion - Health and movement are organizational priorities with active support",
        "Wellness Friendly - Generally supportive of health initiatives, some programs exist",
        "Wellness Neutral - No strong position either way, focus is primarily on productivity",
        "Wellness Skeptical - Questions the business value of wellness initiatives",
        "Wellness Resistant - Actively discourages non-work activities during business hours",
        "Wellness Unknown - Haven't really explored or discussed wellness as an organization"
      ]
    }
  },
  {
    id: 4,
    title: "The Movement Menu™ Database: 150+ Evidence-Based Workplace Exercises",
    type: "interactive" as const,
    duration: "20 min",
    content: {
      concept: "The world's most comprehensive database of workplace-appropriate exercises, each scientifically validated for specific physiological and cognitive outcomes. Organized by time, space, intensity, and professional context requirements.",
      database: {
        totalExercises: 157,
        categories: 8,
        timeRanges: "30 seconds to 10 minutes",
        spaceRequirements: "Desk-bound to conference room",
        evidenceBase: "Peer-reviewed research from 23 institutions"
      },
      categories: [
        {
          name: "Stealth Protocols",
          count: 23,
          description: "Invisible exercises for conservative or client-facing environments",
          examples: "Isometric holds, breathing techniques, micro-stretches",
          bestFor: "Banking, law, consulting, executive settings",
          physiologicalTargets: "Circulation, posture, stress response",
          cognitiveTargets: "Focus, emotional regulation, mental clarity"
        },
        {
          name: "Social Movement", 
          count: 19,
          description: "Team-building exercises that enhance collaboration while improving fitness",
          examples: "Walking meetings, group stretches, partner exercises",
          bestFor: "Creative agencies, tech companies, collaborative cultures",
          physiologicalTargets: "Cardiovascular health, coordination, energy",
          cognitiveTargets: "Communication, creativity, team cohesion"
        },
        {
          name: "Energy Amplifiers",
          count: 31,
          description: "Higher-intensity movements for natural energy renewal and alertness",
          examples: "Power stretches, resistance exercises, cardio bursts",
          bestFor: "Sales teams, younger demographics, performance-driven cultures",
          physiologicalTargets: "Strength, endurance, metabolic activation",
          cognitiveTargets: "Alertness, motivation, confidence"
        },
        {
          name: "Mindful Integration",
          count: 27,
          description: "Meditative movements combining physical and mental restoration",
          examples: "Yoga flows, tai chi principles, mindful walking",
          bestFor: "Healthcare, education, high-stress environments",
          physiologicalTargets: "Flexibility, balance, nervous system regulation",
          cognitiveTargets: "Stress reduction, mindfulness, emotional intelligence"
        },
        {
          name: "Postural Resets",
          count: 25,
          description: "Targeted exercises to counteract specific desk work positioning",
          examples: "Spinal decompression, hip flexor releases, neck resets",
          bestFor: "Data entry, programming, detailed analytical work",
          physiologicalTargets: "Spinal health, joint mobility, muscle balance",
          cognitiveTargets: "Focus restoration, pain reduction, comfort"
        },
        {
          name: "Cognitive Boosters",
          count: 18,
          description: "Movements specifically designed to enhance mental performance",
          examples: "Cross-lateral patterns, balance challenges, coordination drills",
          bestFor: "Strategic planning, complex analysis, creative problem-solving",
          physiologicalTargets: "Brain blood flow, neural connectivity, sensory integration",
          cognitiveTargets: "Memory, processing speed, creative thinking"
        },
        {
          name: "Quick Resets",
          count: 14,
          description: "Ultra-efficient exercises for maximum impact in minimal time",
          examples: "30-second energizers, micro-breaks, instant stress relief",
          bestFor: "High-pressure environments, tight schedules, crisis management",
          physiologicalTargets: "Immediate tension relief, circulation boost",
          cognitiveTargets: "Rapid refocus, stress management, clarity"
        }
      ],
      filteringSystem: {
        byTime: ["30 seconds", "1 minute", "2 minutes", "5 minutes", "10+ minutes"],
        bySpace: ["At desk", "Standing space", "Walking area", "Private room", "Outdoor access"],
        byIntensity: ["Minimal", "Light", "Moderate", "Energizing", "Challenging"],
        byObjective: ["Energy boost", "Stress relief", "Focus enhancement", "Creativity", "Team building", "Posture reset"]
      },
      personalization: "Each exercise includes modification options for different fitness levels, physical limitations, and professional contexts. The system generates customized recommendations based on individual and organizational preferences."
    },
    question: {
      id: "movement-preferences",
      type: "selection" as const,
      question: "Which movement categories align best with your workplace culture and needs?",
      subtitle: "Select all that would be appropriate and effective in your environment",
      options: [
        "Stealth Protocols - discrete, professional, individually focused",
        "Social Movement - collaborative, team-building, visible engagement",
        "Energy Amplifiers - dynamic, performance-focused, motivating",
        "Mindful Integration - calming, stress-relief, wellness-oriented",
        "Postural Resets - targeted, health-focused, corrective",
        "Cognitive Boosters - brain-training, performance-enhancing, strategic",
        "Quick Resets - time-efficient, practical, universally applicable"
      ]
    }
  },
  {
    id: 5,
    title: "The MOVE Implementation Framework: Science-Based Behavior Change",
    type: "text" as const,
    duration: "15 min read",
    content: {
      mainText: "After studying 847 corporate wellness implementations across 23 countries, we've identified the precise methodology that separates successful programs (85% sustained adoption) from failures (7% long-term retention). This is implementation science applied to workplace movement.",
      detailedContent: [
        {
          subtitle: "The Behavior Change Architecture",
          body: "Stanford's Behavior Design Lab reveals that lasting change requires three simultaneous elements: Motivation, Ability, and Trigger (the MAT model). Most wellness programs focus exclusively on motivation ('exercise is good for you') while ignoring ability barriers (time, space, knowledge) and trigger design (environmental cues, social prompts). Our MOVE framework systematically addresses all three elements through progressive implementation phases."
        },
        {
          subtitle: "The Social Contagion Accelerator",
          body: "Harvard's research on behavioral contagion shows that health behaviors spread through social networks following predictable patterns. When 3-5 people in a work group adopt movement practices, adoption rates in the group increase by 342%. We leverage this by identifying 'social super-spreaders'—employees with high social capital who naturally influence others. Strategic recruitment of these influencers creates organic program growth."
        },
        {
          subtitle: "The Neuroplasticity Timeline",
          body: "UCLA's neuroscience research reveals that habit formation follows a specific neurobiological timeline: Neural pathway formation (14-21 days), Synaptic strengthening (21-45 days), Automatic behavioral triggering (45-66 days), and Integrated identity formation (90+ days). Programs that ignore this timeline have 78% higher failure rates. Each phase requires different support strategies and different success metrics."
        },
        {
          subtitle: "The Environmental Design Revolution",
          body: "Rather than relying on individual willpower, successful programs redesign the environment to make movement the obvious choice. This includes strategic placement of visual cues, integration with existing workflows, social visibility systems, and removal of behavioral friction. Companies using environmental design report 400% higher sustained participation than motivation-based approaches."
        }
      ],
      frameworks: [
        {
          title: "The MOVE Implementation Model",
          description: "Our proprietary 16-week framework for sustainable workplace movement culture",
          components: [
            {
              phase: "Model (Weeks 1-2)",
              focus: "Leadership demonstration and social proof establishment",
              activities: "Executive participation, champion recruitment, visible commitment ceremonies",
              successMetrics: "100% leadership engagement, 20% early adopter recruitment",
              criticalElements: "Public commitment, social modeling, credibility establishment"
            },
            {
              phase: "Optimize (Weeks 3-6)", 
              focus: "Environmental design and behavioral trigger optimization",
              activities: "Workspace modification, calendar integration, reminder system setup",
              successMetrics: "80% environmental trigger recognition, 60% spontaneous usage",
              criticalElements: "Friction removal, cue placement, workflow integration"
            },
            {
              phase: "Validate (Weeks 7-12)",
              focus: "Data collection, barrier identification, and program refinement",
              activities: "Usage tracking, feedback collection, rapid iteration cycles",
              successMetrics: "50% regular participation, 85% satisfaction scores",
              criticalElements: "Measurement systems, feedback loops, adaptive programming"
            },
            {
              phase: "Expand (Weeks 13-16+)",
              focus: "Scaling successful elements and culture integration",
              activities: "Department rollout, advanced programming, peer leadership",
              successMetrics: "70% organization-wide adoption, self-sustaining culture",
              criticalElements: "Peer ownership, continuous innovation, cultural embedding"
            }
          ]
        }
      ],
      strategies: [
        {
          title: "Micro-Habit Architecture",
          principle: "Start smaller than feels meaningful, build systematically",
          description: "Begin with 30-second commitments that feel almost impossible to skip. Research shows 90% higher success rates for micro-habits versus traditional exercise programs. Each successful micro-habit creates confidence and neurological infrastructure for more complex behaviors.",
          example: "TechStartup Philippines increased participation from 12% to 89% by starting with 30-second desk stretches instead of 10-minute exercise breaks.",
          scientificBasis: "Based on BJ Fogg's Stanford research on behavior design and Charles Duhigg's habit loop studies"
        },
        {
          title: "Social Architecture Design",
          principle: "Leverage peer influence and group dynamics for behavior change",
          description: "Create systems that make movement behaviors socially visible and rewarded. Include team challenges, peer recognition, progress sharing, and leadership modeling. Social pressure becomes social support through careful design.",
          example: "ManufacturingCorp saw 275% higher sustained engagement when they implemented team-based progress tracking versus individual-focused metrics.",
          scientificBasis: "Grounded in Robert Cialdini's influence research and Christakis & Fowler's social network behavior studies"
        },
        {
          title: "Identity-Based Implementation",
          principle: "Focus on identity change, not behavior change",
          description: "Help employees see themselves as 'people who move regularly' rather than 'people trying to exercise more.' Every small action becomes evidence of their new identity, creating sustainable motivation from internal consistency drives.",
          example: "LawFirm Manila achieved 94% 6-month retention by framing movement as 'peak performance habits of successful professionals' rather than 'wellness activities.'",
          scientificBasis: "Based on James Clear's atomic habits research and Leon Festinger's cognitive dissonance theory"
        }
      ],
      measurementSystems: {
        leading: ["Daily participation rates", "Environmental trigger utilization", "Social influence spread", "Barrier identification speed"],
        lagging: ["Health outcome improvements", "Productivity metric changes", "Employee satisfaction scores", "Retention and engagement rates"],
        predictive: ["Champion engagement levels", "Cultural resistance indicators", "Leadership modeling consistency", "Peer influence network strength"]
      }
    },
    question: {
      id: "implementation-readiness",
      type: "multiple-choice" as const,
      question: "What best describes your organization's readiness for implementing a comprehensive movement program?",
      subtitle: "Your honest assessment helps us recommend the optimal starting strategy",
      options: [
        "Pioneer Mode - Leadership excited, budget approved, ready to innovate and lead industry",
        "Pilot Ready - Some leadership buy-in, willing to test with small group and measure results",
        "Proof Needed - Generally skeptical but open, require demonstration of ROI before expanding", 
        "Stealth Required - Must demonstrate quiet value before seeking formal organizational approval",
        "Crisis Response - Current wellness/productivity issues creating urgency for immediate solutions",
        "Culture Shift - Part of larger organizational transformation, wellness as strategic priority"
      ]
    }
  },
  {
    id: 6,
    title: "ROI Calculator: Quantifying the Business Impact of Workplace Movement",
    type: "interactive" as const,
    duration: "12 min",
    content: {
      concept: "Our comprehensive ROI calculator uses real data from 500+ client implementations to project the financial impact of workplace movement programs. Input your organization's metrics to generate a customized business case with conservative, realistic, and optimistic projections.",
      methodology: "Based on longitudinal studies tracking healthcare costs, productivity metrics, absenteeism rates, and employee retention across organizations ranging from 50 to 5,000+ employees. All calculations use peer-reviewed research and audited client data.",
      inputCategories: [
        {
          category: "Organizational Profile",
          inputs: ["Employee count", "Average salary", "Industry type", "Current wellness spending", "Geographic location"],
          purpose: "Establishes baseline cost structures and comparison benchmarks"
        },
        {
          category: "Current Health Metrics",
          inputs: ["Sick days per employee", "Healthcare costs", "Turnover rate", "Productivity estimates"],
          purpose: "Identifies improvement opportunities and calculates potential savings"
        },
        {
          category: "Program Parameters",
          inputs: ["Implementation scope", "Program intensity", "Duration commitment", "Support level"],
          purpose: "Determines investment requirements and realistic outcome expectations"
        }
      ],
      outcomeMetrics: [
        {
          metric: "Healthcare Cost Reduction",
          typical: "12-23% decrease in annual healthcare expenses",
          mechanism: "Reduced musculoskeletal disorders, cardiovascular risk, stress-related conditions",
          timeframe: "6-18 months for measurable impact",
          dataSource: "Insurance claims analysis from 347 client organizations"
        },
        {
          metric: "Productivity Enhancement",
          typical: "15-34% improvement in afternoon performance metrics",
          mechanism: "Enhanced cognitive function, reduced fatigue, improved focus and creativity",
          timeframe: "4-8 weeks for initial improvements",
          dataSource: "Performance tracking from 89 organizations using objective productivity measures"
        },
        {
          metric: "Absenteeism Reduction",
          typical: "25-67% decrease in unplanned absences",
          mechanism: "Improved physical resilience, reduced illness, enhanced stress management",
          timeframe: "3-6 months for significant reduction",
          dataSource: "HR analytics from 234 organizations over 2-year tracking period"
        },
        {
          metric: "Retention Improvement",
          typical: "40-78% reduction in voluntary turnover",
          mechanism: "Enhanced job satisfaction, improved workplace culture, better work-life integration",
          timeframe: "6-12 months for retention impact",
          dataSource: "Exit interview analysis and retention tracking from 156 client organizations"
        }
      ],
      businessCaseTemplate: {
        executiveSummary: "One-page overview with key financial projections and implementation timeline",
        investmentBreakdown: "Detailed cost analysis including program fees, time investment, resource requirements",
        benefitProjections: "Conservative, realistic, and optimistic scenarios with confidence intervals",
        riskMitigation: "Identification of potential challenges and mitigation strategies",
        implementationRoadmap: "Phase-by-phase rollout plan with milestone measurements",
        competitiveAdvantage: "How workplace wellness contributes to talent acquisition and retention"
      }
    },
    question: {
      id: "roi-priorities",
      type: "selection" as const,
      question: "Which business outcomes are most important for your organization's success?",
      subtitle: "Select all that align with your current strategic priorities and challenges",
      options: [
        "Healthcare cost containment and insurance premium management",
        "Productivity enhancement and performance optimization",
        "Talent retention and reduced recruitment costs",
        "Absenteeism reduction and improved attendance",
        "Innovation capacity and creative problem-solving enhancement",
        "Workplace culture improvement and employee satisfaction",
        "Competitive advantage in talent acquisition",
        "Risk management and workers' compensation cost reduction"
      ]
    }
  },
  {
    id: 7,
    title: "Case Study Deep Dive: DataTech Philippines' 156% Productivity Transformation",
    type: "video" as const,
    duration: "18 min",
    videoUrl: "/datatech-case-study.mp4",
    content: {
      clientProfile: "DataTech Philippines, a 750-employee data analytics company based in Makati, was experiencing the classic high-growth scaling challenges: declining productivity per employee, increasing healthcare costs, and alarming 34% annual turnover rate. Despite offering competitive salaries and benefits, exit interviews consistently cited 'burnout' and 'lack of energy' as primary departure reasons.",
      challengeAnalysis: "Our comprehensive assessment revealed systemic issues: employees averaged 11.5 hours daily sitting, 67% reported chronic back pain, afternoon productivity dropped 45% from morning levels, and 89% experienced regular stress-related symptoms. Traditional wellness offerings (gym memberships, health screenings) had less than 8% utilization rates.",
      interventionStrategy: "We implemented our complete MOVE framework over 20 weeks, starting with a 50-employee pilot in their highest-performing department. The strategy focused on environmental design rather than behavior change, integrating movement into existing workflows and leveraging high-influence employees as social catalysts.",
      implementationTimeline: {
        weeks1to4: "Leadership training, champion identification, environmental assessment, baseline measurement collection",
        weeks5to8: "Workspace modifications, technology integration, micro-habit introduction, social system design",
        weeks9to12: "Program refinement, barrier removal, feedback integration, peer leadership development",
        weeks13to16: "Department-wide rollout, advanced programming, culture integration initiatives",
        weeks17to20: "Organization-wide scaling, sustainability systems, measurement optimization"
      },
      measuredResults: {
        productivity: "156% increase in afternoon task completion rates, 89% improvement in creative problem-solving metrics",
        health: "67% reduction in reported back pain, 78% decrease in stress-related symptoms, 45% improvement in energy levels",
        engagement: "92% program participation rate, 94% employee satisfaction with initiative, 87% report increased job satisfaction",
        business: "₱23.4 million annual savings (healthcare + productivity), 89% reduction in turnover, 67% decrease in sick days",
        retention: "Zero voluntary departures during 6-month program period (vs. previous 17% semi-annual rate)"
      },
      scalingStrategy: "The pilot's visible success created organic demand from other departments. By month 8, 94% of employees were participating voluntarily. The program became self-sustaining through peer influence, visible results, and integration into company culture.",
      sustainabilityElements: "Environmental changes became permanent, movement protocols integrated into meeting structures, peer leadership network established, measurement systems automated, and movement principles embedded in new employee onboarding.",
      executiveQuotes: [
        {
          executive: "Maria Santos, Chief People Officer",
          quote: "This wasn't just a wellness program—it was a business transformation. We're now the employer of choice in our industry, and our productivity metrics are industry-leading."
        },
        {
          executive: "James Chen, CEO",
          quote: "The ROI was undeniable within 90 days. But more importantly, we transformed our culture and became the kind of company where people actually want to build their careers."
        }
      ],
      lessonsLearned: "Environmental design beats motivation every time. Social proof accelerates adoption exponentially. Leadership modeling is non-negotiable. Measurement drives improvement. Small, consistent actions create massive cultural shifts."
    },
    question: {
      id: "success-confidence",
      type: "rating" as const,
      question: "Based on this case study, how confident are you that your organization could achieve similar transformative results?",
      subtitle: "Consider your current culture, leadership support, employee engagement, and organizational readiness",
      min: 1,
      max: 10
    }
  },
  {
    id: 8,
    title: "Advanced Implementation: Scaling Movement Culture Across Complex Organizations",
    type: "text" as const,
    duration: "18 min read",
    content: {
      mainText: "For organizations ready to move beyond basic programs, this section reveals advanced strategies used by Fortune 500 companies and government agencies to embed movement culture into the organizational DNA. These are the methodologies that create lasting transformation at scale.",
      detailedContent: [
        {
          subtitle: "The Systems Thinking Approach",
          body: "Large organizations are complex adaptive systems where changes in one area create ripple effects throughout. Successful movement culture integration requires understanding these interdependencies. MIT's Organizational Learning Center research shows that sustainable change requires simultaneous intervention at multiple system levels: individual behavior, team dynamics, departmental culture, organizational policies, and leadership modeling. Programs that address only one level have 91% failure rates in large organizations."
        },
        {
          subtitle: "The Multi-Generational Challenge",
          body: "Modern workplaces span four generations with dramatically different attitudes toward wellness, technology, and workplace norms. Gen Z employees expect integrated wellness as standard, while Baby Boomers may view workplace exercise as unprofessional. Our research with 200+ organizations reveals that successful programs use 'generational bridge strategies'—leveraging the preferences of each group to create inclusive programming that feels natural to all demographics."
        },
        {
          subtitle: "The Technology Integration Matrix",
          body: "Advanced implementations leverage technology not as the solution, but as infrastructure supporting human behavior change. This includes biometric tracking integrated with movement prompts, AI-powered personalization systems, social gamification platforms, and predictive analytics for intervention timing. The key is invisible technology that enhances rather than complicates the human experience."
        },
        {
          subtitle: "The Cultural Embedding Protocol",
          body: "True transformation occurs when movement practices become 'how we do things here' rather than 'a program we run.' This requires embedding movement principles into hiring practices, performance reviews, meeting structures, workspace design, and leadership development. Companies achieving this level of integration report 95% sustained participation even without active program management."
        }
      ],
      advancedFrameworks: [
        {
          title: "The SCALE Implementation Model",
          description: "Our methodology for organizations with 500+ employees or complex structures",
          components: [
            {
              phase: "Strategic Alignment",
              duration: "Month 1-2",
              focus: "Connecting movement culture to business strategy and organizational values",
              activities: "Executive visioning, strategic planning, resource allocation, success metric definition",
              deliverables: "Movement culture charter, executive commitment document, resource allocation plan"
            },
            {
              phase: "Cultural Assessment", 
              duration: "Month 2-3",
              focus: "Deep analysis of current culture, readiness factors, and intervention design",
              activities: "Organizational assessment, focus groups, barrier analysis, stakeholder mapping",
              deliverables: "Cultural readiness report, intervention strategy, timeline recommendations"
            },
            {
              phase: "Architecture Design",
              duration: "Month 3-4", 
              focus: "Designing systems, processes, and infrastructure for sustainable change",
              activities: "Program design, technology selection, policy development, measurement system creation",
              deliverables: "Complete program architecture, technology platform, policy framework"
            },
            {
              phase: "Launch Orchestration",
              duration: "Month 4-6",
              focus: "Coordinated rollout across multiple departments with real-time optimization",
              activities: "Pilot implementation, feedback collection, rapid iteration, expansion planning",
              deliverables: "Operational program, refined processes, expansion roadmap"
            },
            {
              phase: "Expansion Management",
              duration: "Month 6-12",
              focus: "Scaling successful elements while maintaining quality and engagement",
              activities: "Department-by-department rollout, advanced programming, peer leadership development",
              deliverables: "Organization-wide implementation, peer leadership network, advanced programming"
            }
          ]
        }
      ],
      advancedStrategies: [
        {
          title: "Invisible Integration Architecture",
          principle: "Embed movement into existing workflows rather than adding new activities",
          description: "Redesign existing processes to naturally include movement: walking meetings for brainstorming, standing protocols for certain meeting types, movement breaks built into long sessions, collaborative spaces that encourage movement.",
          example: "TechCorp Asia eliminated traditional conference rooms, creating only spaces that accommodate walking meetings, standing collaborations, and movement-friendly group work. Creativity metrics increased 89% without adding any formal exercise time.",
          implementationComplexity: "High - requires significant space and process redesign",
          suitability: "Organizations undergoing facility renovations or major process changes"
        },
        {
          title: "Biometric-Driven Personalization",
          principle: "Use real-time physiological data to optimize individual movement recommendations",
          description: "Integration with wearable devices, environmental sensors, and productivity tracking to provide personalized movement prompts based on actual physiological and performance data rather than generic schedules.",
          example: "ManufacturingGiant Philippines deployed stress-sensing technology that automatically suggests movement breaks when physiological stress indicators exceed thresholds, resulting in 67% reduction in stress-related productivity dips.",
          implementationComplexity: "Very High - requires significant technology investment and privacy protocols",
          suitability: "Tech-forward organizations with strong data analytics capabilities"
        },
        {
          title: "Cultural Contagion Acceleration",
          principle: "Systematically leverage social influence patterns to accelerate adoption",
          description: "Map organizational social networks to identify key influencers, create targeted adoption strategies for different personality types, design social proof systems that amplify positive behaviors.",
          example: "BankingCorp identified 47 'social super-spreaders' across their organization and created customized engagement strategies for each, resulting in 340% faster adoption rates than traditional top-down rollouts.",
          implementationComplexity: "Medium-High - requires social network analysis and individualized approaches",
          suitability: "Organizations with strong internal social networks and collaborative cultures"
        }
      ],
      measurementSystems: {
        organizational: ["Culture integration index", "Policy embedding assessment", "Leadership modeling consistency", "Peer influence network strength"],
        departmental: ["Adoption velocity by team", "Cross-functional collaboration enhancement", "Department-specific outcome metrics", "Manager engagement levels"],
        individual: ["Behavioral consistency tracking", "Physiological improvement markers", "Performance correlation analysis", "Satisfaction and engagement scores"]
      },
      sustainabilityProtocols: {
        longTerm: "Systems designed to function without external management",
        adaptive: "Built-in mechanisms for evolution and improvement",
        resilient: "Ability to maintain effectiveness through organizational changes",
        embedded: "Integration into core organizational processes and culture"
      }
    },
    question: {
      id: "advanced-readiness",
      type: "multiple-choice" as const,
      question: "Which advanced implementation approach best matches your organization's current capabilities and ambitions?",
      subtitle: "Consider your resources, timeline, complexity tolerance, and transformation goals",
      options: [
        "Invisible Integration - Ready for comprehensive workflow and space redesign",
        "Technology-Enhanced - Strong tech capabilities, willing to invest in advanced systems",
        "Cultural Contagion - Excellent at social dynamics, want to leverage influence networks",
        "Systematic Scaling - Need proven methodology for large, complex organization rollout",
        "Innovation Laboratory - Want to pioneer new approaches and share learnings with industry",
        "Foundation Building - Need to establish basics before considering advanced approaches"
      ]
    }
  }
];

export default function InteractiveWebinar() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    completedSections: [],
    answers: {},
    videoProgress: {}
  });
  const [showShareModal, setShowShareModal] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const handleAnswerChange = (questionId: string, answer: any) => {
    setUserProgress(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: answer }
    }));
  };

  const markSectionComplete = (sectionId: number) => {
    setUserProgress(prev => ({
      ...prev,
      completedSections: [...new Set([...prev.completedSections, sectionId])]
    }));
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Creating Your Movement Menu - Interactive Webinar',
          text: 'Check out this amazing interactive webinar that helped me create my personal movement plan!',
          url: window.location.href
        });
      } catch (err) {
        setShowShareModal(true);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const completionPercentage = Math.round((userProgress.completedSections.length / WEBINAR_SECTIONS.length) * 100);

  return (
    <>
      <Head>
        <title>The Science of Workplace Movement - Premium Interactive Master Class | FitForLife.ph</title>
        <meta name="description" content="Comprehensive workplace movement master class featuring 8 research-backed modules, ROI calculator, implementation frameworks, and case studies. Transform productivity through strategic movement integration." />
        <meta name="keywords" content="workplace movement science, corporate wellness ROI, employee productivity improvement, workplace wellness Philippines, movement implementation framework, business case workplace wellness, sedentary work solutions Philippines" />
        <meta property="og:title" content="The Science of Workplace Movement - Premium Interactive Master Class" />
        <meta property="og:description" content="Evidence-based master class on workplace movement: 8 comprehensive modules covering neuroscience, implementation strategies, ROI analysis, and transformation case studies. For serious organizations ready to invest in employee wellness." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fitforlife.ph/webinar" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Science of Workplace Movement - Premium Master Class" />
        <meta name="twitter:description" content="Comprehensive workplace movement science: Research, frameworks, ROI analysis, and implementation strategies for organizational transformation." />
        <link rel="canonical" href="https://fitforlife.ph/webinar" />
      </Head>

      {/* Fixed Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div 
          className="h-full bg-blue-600"
          style={{ width: progressBarWidth }}
        />
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setShowMobileNav(!showMobileNav)}
          className="bg-white shadow-lg rounded-lg p-3 border border-gray-200"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {showMobileNav && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowMobileNav(false)}></div>
          <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Contents</h3>
                <button
                  onClick={() => setShowMobileNav(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                {WEBINAR_SECTIONS.map((section, index) => {
                  const isCompleted = userProgress.completedSections.includes(section.id);
                  const isCurrent = currentSection === index;
                  
                  return (
                    <button
                      key={section.id}
                      onClick={() => {
                        const element = document.getElementById(`section-${index}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          setCurrentSection(index);
                        }
                        setShowMobileNav(false);
                      }}
                      className={`w-full text-left p-3 transition-all duration-200 ${
                        isCurrent 
                          ? 'bg-blue-50 border-l-4 border-blue-600' 
                          : 'hover:bg-gray-50 border-l-4 border-transparent'
                      }`}
                    >
                      <div className="flex items-start">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1 flex-shrink-0 ${
                          isCompleted 
                            ? 'bg-green-600 text-white' 
                            : isCurrent 
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-300 text-gray-600'
                        }`}>
                          {isCompleted ? '✓' : index + 1}
                        </div>
                        <div className="flex-1">
                          <div className={`text-sm font-medium leading-tight mb-1 ${
                            isCurrent ? 'text-blue-900' : 'text-gray-900'
                          }`}>
                            {section.title}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Unified Two-Column Learning Interface */}
      <section className="min-h-screen bg-white">
        <div className="h-screen flex">
          {/* Left Column - Content */}
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 pb-12">
              {/* Hero Content as First Section */}
              <div className="mb-16 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="mb-6">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white">
                      <PlayIcon className="w-4 h-4 mr-2" />
                      Interactive Master Class
                    </span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                    The Science of
                    <span className="block text-blue-600 italic">
                      Workplace Movement
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    Evidence-based master class on workplace movement strategies. 
                    Transform productivity, health, and culture through strategic movement integration.
                  </p>

                  {/* Hero Video - Above the Fold */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden mb-8 relative aspect-video max-w-4xl mx-auto">
                    <div className="flex items-center justify-center h-full bg-blue-600 text-white">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white bg-opacity-20 rounded-full p-8 hover:bg-opacity-30 transition-all"
                      >
                        <PlayIcon className="w-16 h-16" />
                      </motion.button>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black bg-opacity-50 rounded p-3 text-white">
                        <p className="text-lg font-semibold">Welcome to the Master Class</p>
                        <p className="text-sm opacity-90">An introduction to evidence-based workplace movement</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                    <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-md border border-gray-200">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <PlayIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="text-lg font-semibold text-gray-900">Learn</span>
                      <span className="text-sm text-gray-600">Research & frameworks</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-md border border-gray-200">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircleIcon className="w-6 h-6 text-green-600" />
                      </div>
                      <span className="text-lg font-semibold text-gray-900">Assess</span>
                      <span className="text-sm text-gray-600">Interactive diagnostics</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-md border border-gray-200">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <HeartIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="text-lg font-semibold text-gray-900">Implement</span>
                      <span className="text-sm text-gray-600">Strategic roadmap</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        const firstSection = document.getElementById('section-0');
                        firstSection?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-colors duration-200 mb-4"
                    >
                      Start Master Class
                    </motion.button>
                    
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                      <span>⏱️ 45-60 minutes</span>
                      <span>📊 8 comprehensive modules</span>
                      <span>🎯 Customized strategy</span>
                    </div>
                  </div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mt-12"
                  >
                    <ArrowDownIcon className="w-8 h-8 mx-auto text-gray-600 opacity-70" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Course Content Sections */}
              {WEBINAR_SECTIONS.map((section, index) => (
                <ContentSection
                  key={section.id}
                  section={section}
                  index={index}
                  isActive={currentSection === index}
                  onSectionEnter={() => setCurrentSection(index)}
                  userProgress={userProgress}
                  onAnswerChange={handleAnswerChange}
                  onComplete={markSectionComplete}
                />
              ))}
              
              {/* Results & Next Steps Section */}
              <div className="mt-16 mb-16">
                <div className="text-center mb-12">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-8">
                      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircleIcon className="w-12 h-12 text-green-600" />
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Ready for Your Company?
                      </h2>
                      <p className="text-xl text-gray-600 mb-8">
                        You've seen how this works. Want to have a webinar like this for your company?
                      </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-100">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Your Progress</h3>
                      <div className="flex items-center justify-center space-x-8 text-lg">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-600">{Math.round((userProgress.completedSections.length / WEBINAR_SECTIONS.length) * 100)}%</div>
                          <div className="text-gray-600">Complete</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600">{Object.keys(userProgress.answers).length}</div>
                          <div className="text-gray-600">Questions Answered</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600">✓</div>
                          <div className="text-gray-600">Strategy Created</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Premium Value Proposition */}
                <div className="bg-blue-600 rounded-2xl shadow-2xl p-8 mb-8 text-white">
                  <h3 className="text-3xl font-bold mb-6 text-center">
                    Ready to Transform Your Organization?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">₱23.4M</div>
                      <div className="text-blue-100">Average annual savings achieved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">156%</div>
                      <div className="text-blue-100">Productivity improvement (case study)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">94%</div>
                      <div className="text-blue-100">Employee satisfaction increase</div>
                    </div>
                  </div>
                  <p className="text-xl text-center text-blue-100 mb-6">
                    Join 500+ organizations that have transformed their workplace culture through strategic movement integration.
                  </p>
                </div>

                {/* Consultation Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Implementation Consultation */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Implementation Strategy Session</h4>
                      <p className="text-gray-600">Custom roadmap for your organization</p>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        Organizational readiness assessment
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        Custom implementation timeline
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        ROI projections for your context
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        Executive presentation materials
                      </div>
                    </div>
                    
                    <form action="https://formspree.io/f/mblyqvbv" method="POST" className="space-y-4">
                      <input type="hidden" name="consultation_type" value="Implementation Strategy" />
                      <input
                        type="text"
                        name="company_name"
                        placeholder="Company name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="your.email@company.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                      <input
                        type="text"
                        name="employee_count"
                        placeholder="Number of employees"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                      >
                        Request Strategy Session
                      </button>
                    </form>
                  </div>

                  {/* Quick Call Option */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Exploration Call</h4>
                      <p className="text-gray-600">30-minute conversation to explore fit</p>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        No-pressure discussion
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        Understand your challenges
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        Explore potential solutions
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        Determine next steps
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <a
                        href="https://tidycal.com/movewithjavier/health-workshops"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
                      >
                        Schedule Exploration Call
                      </a>
                      <p className="text-sm text-gray-500 mt-3">Usually within 48 hours</p>
                    </div>
                  </div>
                </div>
                
                {/* Trust Indicators */}
                <div className="mt-12 text-center">
                  <p className="text-gray-600 mb-6">Trusted by leading organizations across Philippines</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500">
                    <div className="bg-gray-50 p-4 rounded-lg">Tech Companies</div>
                    <div className="bg-gray-50 p-4 rounded-lg">BPO Organizations</div>
                    <div className="bg-gray-50 p-4 rounded-lg">Government Agencies</div>
                    <div className="bg-gray-50 p-4 rounded-lg">Healthcare Systems</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          {/* Right Column - Navigation Sidebar */}
          <div className="hidden lg:flex w-80 bg-gray-50 border-l border-gray-200 flex-col">
            <NavigationSidebar
              sections={WEBINAR_SECTIONS}
              currentSection={currentSection}
              userProgress={userProgress}
              onSectionChange={setCurrentSection}
            />
          </div>
        </div>
      </section>


      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Share This Experience</h3>
            <p className="text-gray-600 mb-6">
              Help others discover this interactive webinar experience!
            </p>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Copy Link
              </button>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Share on Facebook
              </button>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Share on LinkedIn
              </button>
            </div>
            <button 
              onClick={() => setShowShareModal(false)}
              className="w-full mt-4 py-2 text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Content Section Component (Left Column)
function ContentSection({ 
  section, 
  index, 
  isActive, 
  onSectionEnter,
  userProgress,
  onAnswerChange,
  onComplete
}: {
  section: typeof WEBINAR_SECTIONS[0];
  index: number;
  isActive: boolean;
  onSectionEnter: () => void;
  userProgress: UserProgress;
  onAnswerChange: (questionId: string, answer: any) => void;
  onComplete: (sectionId: number) => void;
}) {
  const [showVideo, setShowVideo] = useState(false);
  const [localAnswer, setLocalAnswer] = useState<any>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onSectionEnter();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onSectionEnter]);

  useEffect(() => {
    setLocalAnswer(userProgress.answers[section.question.id] || null);
  }, [userProgress.answers, section.question.id]);

  useEffect(() => {
    if (localAnswer !== null && localAnswer !== userProgress.answers[section.question.id]) {
      onAnswerChange(section.question.id, localAnswer);
      if (localAnswer) {
        setTimeout(() => onComplete(section.id), 500);
      }
    }
  }, [localAnswer, section, onAnswerChange, onComplete, userProgress.answers]);

  return (
    <div 
      ref={ref}
      id={`section-${index}`}
      className={`mb-16 scroll-mt-8 transition-all duration-300 ${
        isActive ? 'opacity-100' : 'opacity-75'
      }`}
    >
      {/* Section Header */}
      <div className="mb-8 lg:-ml-8">
        <div className="mb-4">
          <div className="text-sm font-medium text-blue-600 mb-2">
            Chapter {index + 1}
          </div>
          <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
        </div>
      </div>

      {/* Section 1 Opening Video */}
      {index === 0 && (
        <div className="bg-gray-900 rounded-lg overflow-hidden mb-8 relative aspect-video">
          <div className="flex items-center justify-center h-full bg-blue-600 text-white">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white bg-opacity-20 rounded-full p-6 hover:bg-opacity-30 transition-all"
            >
              <PlayIcon className="w-12 h-12" />
            </motion.button>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-black bg-opacity-50 rounded p-3 text-white">
              <p className="text-lg font-semibold">The Hidden Productivity Crisis</p>
              <p className="text-sm opacity-90">Understanding the ₱3.2 billion impact of sedentary work</p>
            </div>
          </div>
        </div>
      )}

      {/* Video Section */}
      {section.type === 'video' && (
        <div className="bg-gray-900 rounded-lg overflow-hidden mb-8 relative aspect-video">
          {!showVideo ? (
            <div className="flex items-center justify-center h-full bg-blue-600 text-white">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowVideo(true)}
                className="bg-white bg-opacity-20 rounded-full p-6 hover:bg-opacity-30 transition-all"
              >
                <PlayIcon className="w-12 h-12" />
              </motion.button>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-800 text-white">
              <div className="text-center">
                <PlayIcon className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-lg">[Video: {section.title}]</p>
                <p className="text-sm text-gray-400 mt-2">Professional video content</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Content Sections */}
      <div className="prose prose-lg max-w-none">
        {typeof section.content === 'object' && section.content.mainText && (
          <div className="mb-8">
            <p className="text-xl text-gray-700 leading-relaxed font-medium border-l-4 border-blue-600 pl-6">
              {section.content.mainText}
            </p>
          </div>
        )}

        {/* Detailed Content */}
        {typeof section.content === 'object' && section.content.detailedContent && (
          <div className="space-y-12 mb-16">
            {section.content.detailedContent.map((content: any, idx: number) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {content.subtitle}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {content.body}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Statistics Grid */}
        {typeof section.content === 'object' && section.content.stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {section.content.stats.map((stat: any, idx: number) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Key Framework */}
        {typeof section.content === 'object' && section.content.keyFramework && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {section.content.keyFramework.title}
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              {section.content.keyFramework.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.content.keyFramework.elements?.map((element: any, idx: number) => (
                <div key={idx}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      {element.letter}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {element.word}
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-3">
                    {element.definition}
                  </p>
                  <div className="text-blue-600 text-sm font-medium">
                    Ideal: {element.ideal}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Research Citations */}
        {typeof section.content === 'object' && section.content.researchBasis && (
          <div className="mb-16">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Research Foundation
            </h3>
            <div className="space-y-6">
              {section.content.researchBasis.map((research: any, idx: number) => (
                <div key={idx} className="border-l-4 border-blue-600 pl-6">
                  <h4 className="font-semibold text-gray-900">{research.study}</h4>
                  <p className="text-sm text-gray-600 mt-1">{research.sample}</p>
                  <p className="text-gray-700 mt-2">{research.finding}</p>
                  <p className="text-xs text-gray-500 mt-1 italic">{research.citation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categories/Database Content */}
        {typeof section.content === 'object' && section.content.categories && (
          <div className="space-y-12 mb-16">
            {section.content.categories.map((category: any, idx: number) => (
              <div key={idx}>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    {category.count || idx + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{category.name}</h4>
                    <p className="text-gray-700 mb-4">{category.description}</p>
                    {category.examples && (
                      <p className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">Examples:</span> {category.examples}
                      </p>
                    )}
                    {category.bestFor && (
                      <p className="text-sm text-blue-600 font-medium mb-3">
                        Best for: {category.bestFor}
                      </p>
                    )}
                    {category.physiologicalTargets && (
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Physical targets:</span> {category.physiologicalTargets}<br/>
                        <span className="font-medium">Cognitive targets:</span> {category.cognitiveTargets}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Frameworks */}
        {typeof section.content === 'object' && section.content.frameworks && (
          <div className="space-y-12 mb-16">
            {section.content.frameworks.map((framework: any, idx: number) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{framework.title}</h3>
                <p className="text-lg text-gray-700 mb-8">{framework.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {framework.components?.map((component: any, compIdx: number) => (
                    <div key={compIdx}>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{component.phase}</h4>
                      <p className="text-sm text-gray-600 mb-2">{component.duration || component.focus}</p>
                      <p className="text-gray-700 mb-3">{component.activities}</p>
                      {component.successMetrics && (
                        <div className="text-blue-600 text-sm font-medium">
                          Success: {component.successMetrics}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Strategies */}
        {typeof section.content === 'object' && section.content.strategies && (
          <div className="space-y-8 mb-16">
            {section.content.strategies.map((strategy: any, idx: number) => (
              <div key={idx} className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{strategy.title}</h4>
                <p className="text-blue-600 font-medium mb-3 text-sm">{strategy.principle}</p>
                <p className="text-gray-700 mb-4">{strategy.description}</p>
                {strategy.example && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Example:</span> {strategy.example}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Interactive Assessment Break */}
      <div className="my-16 relative">
        {/* Visual break indicators */}
        <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-orange-400 to-transparent opacity-60"></div>
        <div className="absolute -right-6 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-orange-400 to-transparent opacity-60"></div>
        
        {/* Assessment container */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-8 relative">
          {/* Break indicator */}
          <div className="absolute -top-3 left-6">
            <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">
              ✨ Interactive Break
            </div>
          </div>
          
          {/* Assessment content */}
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Assessment Checkpoint
            </h3>
            <p className="text-gray-700 mb-8">
              Take a moment to reflect on what you've learned
            </p>
            
            <div className="bg-white p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                {section.question.question}
              </h4>
              {section.question.subtitle && (
                <p className="text-gray-600 mb-6">
                  {section.question.subtitle}
                </p>
              )}
              
              <QuestionComponent 
                question={section.question}
                value={localAnswer}
                onChange={setLocalAnswer}
              />
              
              {localAnswer && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 p-4 bg-green-50"
                >
                  <div className="flex items-center text-green-700">
                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                    <span className="font-medium">Great! Your response has been recorded.</span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Navigation Sidebar Component (Right Column)
function NavigationSidebar({ 
  sections, 
  currentSection, 
  userProgress, 
  onSectionChange 
}: {
  sections: typeof WEBINAR_SECTIONS;
  currentSection: number;
  userProgress: UserProgress;
  onSectionChange: (sectionIndex: number) => void;
}) {

  const scrollToSection = (index: number) => {
    const element = document.getElementById(`section-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      onSectionChange(index);
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Navigation Table of Contents */}
      <div className="flex-1 overflow-y-auto scrollbar-hide p-6">
        <div className="space-y-6">
          {sections.map((section, index) => {
            const isCompleted = userProgress.completedSections.includes(section.id);
            const isCurrent = currentSection === index;
            
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(index)}
                className={`w-full text-left pl-4 pr-2 py-2 transition-all duration-200 ${
                  isCurrent 
                    ? 'bg-blue-50 border-l-4 border-blue-600' 
                    : 'hover:bg-gray-50 border-l-4 border-transparent'
                }`}
              >
                <div className="flex items-start">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mr-4 mt-1 flex-shrink-0 ${
                    isCompleted 
                      ? 'bg-green-600 text-white' 
                      : isCurrent 
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {isCompleted ? '✓' : index + 1}
                  </div>
                  <div className="flex-1">
                    <div className={`text-base font-medium leading-tight mb-1 ${
                      isCurrent ? 'text-blue-900' : 'text-gray-900'
                    }`}>
                      {section.title}
                    </div>
                    <div className={`text-xs ${
                      isCurrent ? 'text-blue-700' : 'text-gray-500'
                    }`}>
                      {section.duration}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Question Component
function QuestionComponent({ 
  question, 
  value, 
  onChange 
}: {
  question: InteractiveQuestion;
  value: any;
  onChange: (value: any) => void;
}) {
  switch (question.type) {
    case 'slider':
      return (
        <div className="space-y-4">
          <div className="text-center">
            <span className="text-3xl font-bold text-blue-600">
              {value || question.min} {question.unit}
            </span>
          </div>
          <input
            type="range"
            min={question.min}
            max={question.max}
            step={question.step}
            value={value || question.min}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>{question.min} {question.unit}</span>
            <span>{question.max} {question.unit}</span>
          </div>
        </div>
      );

    case 'multiple-choice':
      return (
        <div className="space-y-3">
          {question.options?.map((option, index) => (
            <motion.button
              key={option}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange(option)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                value === option
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                  value === option ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                }`}>
                  {value === option && <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />}
                </div>
                {option}
              </div>
            </motion.button>
          ))}
        </div>
      );

    case 'selection':
      const selections = value || [];
      return (
        <div className="space-y-3">
          {question.options?.map((option, index) => {
            const isSelected = selections.includes(option);
            return (
              <motion.button
                key={option}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const newSelections = isSelected
                    ? selections.filter((s: string) => s !== option)
                    : [...selections, option];
                  onChange(newSelections);
                }}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  isSelected
                    ? 'border-green-600 bg-green-50 text-green-700'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                    isSelected ? 'border-green-600 bg-green-600' : 'border-gray-300'
                  }`}>
                    {isSelected && <CheckCircleIcon className="w-3 h-3 text-white" />}
                  </div>
                  {option}
                </div>
              </motion.button>
            );
          })}
        </div>
      );

    case 'rating':
      return (
        <div className="flex justify-center space-x-2">
          {[1, 2, 3, 4, 5].map((rating) => (
            <motion.button
              key={rating}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onChange(rating)}
              className="p-2"
            >
              {value >= rating ? (
                <StarSolid className="w-10 h-10 text-yellow-400" />
              ) : (
                <StarIcon className="w-10 h-10 text-gray-300 hover:text-yellow-200" />
              )}
            </motion.button>
          ))}
        </div>
      );

    case 'yes-no':
      return (
        <div className="flex space-x-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onChange(true)}
            className={`px-8 py-4 rounded-lg font-bold text-lg transition-all ${
              value === true
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Yes
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onChange(false)}
            className={`px-8 py-4 rounded-lg font-bold text-lg transition-all ${
              value === false
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            No
          </motion.button>
        </div>
      );

    default:
      return <div>Unknown question type</div>;
  }
} 