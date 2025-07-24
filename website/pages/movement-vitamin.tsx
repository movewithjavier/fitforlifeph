import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  PlayIcon,
  CheckCircleIcon,
  ClockIcon,
  HeartIcon,
  ShieldCheckIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import StructuredData from '../components/SEO/StructuredData';

interface Movement {
  id: string;
  name: string;
  videoUrl: string;
  videoId: string;
  description: string;
  benefits: string[];
  duration: string;
}

const MOVEMENT_VITAMIN_EXERCISES: Movement[] = [
  {
    id: 'ankle-alphabets',
    name: 'Ankle Alphabets',
    videoUrl: 'https://youtu.be/ro0eWSYbSuY?si=Er7V3GYsInH16nQQ',
    videoId: 'ro0eWSYbSuY',
    description: 'Draw the alphabet with your toes to improve ankle mobility and prevent stiffness.',
    benefits: ['Improves ankle mobility', 'Prevents ankle stiffness', 'Enhances circulation'],
    duration: '1-2 minutes'
  },
  {
    id: 'front-scale',
    name: 'The Front Scale',
    videoUrl: 'https://youtu.be/WgXaf7g0Pyo?si=k8rSuoEwq_zNqQ5P',
    videoId: 'WgXaf7g0Pyo',
    description: 'Single-leg balance movement that strengthens your posterior chain and improves stability.',
    benefits: ['Improves balance', 'Strengthens glutes', 'Enhances proprioception'],
    duration: '30 seconds each leg'
  },
  {
    id: 'mini-band-hip-rotations',
    name: 'Mini Band Hip Rotations',
    videoUrl: 'https://youtu.be/FAqOea6gGwU?si=41UNbu9T0pS3y8yC',
    videoId: 'FAqOea6gGwU',
    description: 'Activate your hip muscles with controlled rotational movements using a resistance band.',
    benefits: ['Activates hip muscles', 'Improves hip stability', 'Prevents hip impingement'],
    duration: '10-15 reps each direction'
  },
  {
    id: 'mini-band-diagonal-step-outs',
    name: 'Mini Band Diagonal Step Outs',
    videoUrl: 'https://youtu.be/FjDErT_9mgQ?si=6FeqMY20ToaBhijn',
    videoId: 'FjDErT_9mgQ',
    description: 'Multi-directional hip strengthening that prepares your body for complex movements.',
    benefits: ['Strengthens hip abductors', 'Improves lateral stability', 'Prevents knee injuries'],
    duration: '8-10 reps each direction'
  },
  {
    id: 'band-pull-apart',
    name: 'Band Pull Apart',
    videoUrl: 'https://youtu.be/MnDpmNYUjbc?si=6caXBHM0HpnwfQ3K',
    videoId: 'MnDpmNYUjbc',
    description: 'Strengthen your rear deltoids and improve shoulder posture with this simple movement.',
    benefits: ['Strengthens rear deltoids', 'Improves posture', 'Counteracts desk work'],
    duration: '10-15 reps'
  },
  {
    id: 'glute-bridge',
    name: 'Glute Bridge',
    videoUrl: 'https://youtu.be/Xp33YgPZgns?si=6FeqMY20ToaBhijn',
    videoId: 'Xp33YgPZgns',
    description: 'Activate your glutes and strengthen your posterior chain with this foundational movement.',
    benefits: ['Activates glutes', 'Strengthens core', 'Improves hip extension'],
    duration: '10-15 reps'
  },
  {
    id: 'bear-plank',
    name: 'Bear Plank',
    videoUrl: 'https://youtu.be/VaoNT0BLTqw?si=GIEo96HhzfzFObpy',
    videoId: 'VaoNT0BLTqw',
    description: 'Full-body stability exercise that challenges your core and shoulder strength.',
    benefits: ['Strengthens core', 'Improves shoulder stability', 'Enhances coordination'],
    duration: '20-30 seconds hold'
  }
];

const ASSESSMENT_MOVEMENTS: Movement[] = [
  {
    id: 'one-leg-balance',
    name: 'One Leg Balance',
    videoUrl: 'https://youtu.be/zApChixB2MQ?si=sIAorzqGixRtRbA8',
    videoId: 'zApChixB2MQ',
    description: 'Test your balance and proprioception. Poor balance can lead to injuries.',
    benefits: ['Tests balance', 'Assesses proprioception', 'Identifies fall risk'],
    duration: 'Hold as long as possible'
  },
  {
    id: 'single-leg-stance-chair',
    name: 'Single Leg Stance from Chair',
    videoUrl: 'https://www.youtube.com/watch?v=LgFwAg_bkIA',
    videoId: 'LgFwAg_bkIA',
    description: 'Assess hip strength and stability by standing up from a chair on one leg.',
    benefits: ['Tests hip strength', 'Assesses stability', 'Functional movement screen'],
    duration: '3-5 attempts each leg'
  },
  {
    id: 'woodpecker-rotation',
    name: 'Woodpecker with Rotation',
    videoUrl: 'https://youtu.be/WsLoqvaUhNA?si=Htr_Ts9-dUbyGuGi',
    videoId: 'WsLoqvaUhNA',
    description: 'Checks core stability and identifies lower back tightness through rotational movement.',
    benefits: ['Tests core stability', 'Assesses spinal mobility', 'Identifies tightness'],
    duration: '5-8 reps each side'
  },
  {
    id: 'shoulder-tracing',
    name: 'Shoulder Tracing',
    videoUrl: 'https://youtu.be/32ddj5Oe9WE?si=KEmKPEBFJLv_FTr_',
    videoId: '32ddj5Oe9WE',
    description: 'Test shoulder mobility and range of motion with this tracing movement.',
    benefits: ['Tests shoulder mobility', 'Assesses range of motion', 'Identifies restrictions'],
    duration: '3-5 circles each direction'
  },
  {
    id: 'opposite-hand-knee',
    name: 'Opposite Hand to Knee',
    videoUrl: 'https://youtu.be/cdH98tVeoFY?si=h88HIXS_g9CgnZyX',
    videoId: 'cdH98tVeoFY',
    description: 'Test coordination and ability to cross the midline of your body.',
    benefits: ['Tests coordination', 'Assesses cross-pattern movement', 'Brain-body connection'],
    duration: '10-12 touches each side'
  }
];

export default function MovementVitamin() {
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const toggleExerciseComplete = (exerciseId: string) => {
    setCompletedExercises(prev => 
      prev.includes(exerciseId) 
        ? prev.filter(id => id !== exerciseId)
        : [...prev, exerciseId]
    );
  };

  const completionPercentage = Math.round((completedExercises.length / MOVEMENT_VITAMIN_EXERCISES.length) * 100);

  return (
    <>
      <Head>
        <title>Movement Vitamin: Daily 7-Exercise Injury Prevention Routine | FitForLife.ph</title>
        <meta name="description" content="Your daily Movement Vitamin - 7 essential exercises to prevent injuries and improve mobility. Perfect morning routine for busy professionals in the Philippines. Mobile-friendly video guides included." />
        <meta name="keywords" content="movement vitamin, injury prevention exercises, daily mobility routine, morning exercises Philippines, workplace injury prevention, movement assessment, functional movement screen" />
        
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://fitforlife.ph/movement-vitamin" />
        
        <meta property="og:title" content="Movement Vitamin: Daily 7-Exercise Injury Prevention Routine" />
        <meta property="og:description" content="Your daily Movement Vitamin - 7 essential exercises to prevent injuries and improve mobility. Perfect morning routine for busy professionals." />
        <meta property="og:url" content="https://fitforlife.ph/movement-vitamin" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="Movement Vitamin: Daily Injury Prevention Routine" />
        <meta name="twitter:description" content="7 essential exercises to prevent injuries and improve mobility. Perfect morning routine for busy professionals." />
      </Head>
      
      <StructuredData type="service" />
      
      <div className="min-h-screen bg-white">
        <NavBar />
        
        {/* Hero Section - Mobile First */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white pt-20 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Your Daily
                <span className="block text-yellow-300 italic">
                  Movement Vitamin
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                7 essential exercises to prevent injuries and keep your body moving well. 
                The perfect morning routine for busy professionals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto">
                <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 rounded-lg p-3">
                  <ClockIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">5-8 minutes</span>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 rounded-lg p-3">
                  <ShieldCheckIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">Injury Prevention</span>
                </div>
              </div>

              {/* Progress Indicator */}
              {completedExercises.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white bg-opacity-10 rounded-lg p-4 mb-6 max-w-sm mx-auto"
                >
                  <div className="text-2xl font-bold mb-2">{completionPercentage}%</div>
                  <div className="text-sm">Today's Progress</div>
                  <div className="w-full bg-white bg-opacity-20 rounded-full h-2 mt-2">
                    <div 
                      className="bg-yellow-300 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${completionPercentage}%` }}
                    ></div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Movement Vitamin Exercises */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                The 7 Movement Vitamin Exercises
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Your daily dose of movement medicine. These 7 exercises target the most commonly overlooked areas 
                that lead to injury and movement dysfunction.
              </p>
            </div>

            <div className="space-y-8">
              {MOVEMENT_VITAMIN_EXERCISES.map((exercise, index) => (
                <motion.div
                  key={exercise.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-6">
                    {/* Exercise Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {exercise.name}
                          </h3>
                          <p className="text-gray-600 mb-3">
                            {exercise.description}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                            <span className="flex items-center">
                              <ClockIcon className="w-4 h-4 mr-1" />
                              {exercise.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Complete Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleExerciseComplete(exercise.id)}
                        className={`p-2 rounded-full transition-colors ${
                          completedExercises.includes(exercise.id)
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}
                      >
                        <CheckCircleIcon className="w-6 h-6" />
                      </motion.button>
                    </div>

                    {/* Video Embed */}
                    <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gray-900">
                      <iframe
                        src={`https://www.youtube.com/embed/${exercise.videoId}?rel=0&modestbranding=1`}
                        title={exercise.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>

                    {/* Benefits */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {exercise.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Assessment Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Movement Assessments
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Use these simple tests to check yourself and identify areas that need attention. 
                Perform these weekly to track your progress.
              </p>
            </div>

            <div className="space-y-6">
              {ASSESSMENT_MOVEMENTS.map((assessment, index) => (
                <motion.div
                  key={assessment.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-blue-50 border-l-4 border-blue-600 rounded-lg overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
                      {/* Content */}
                      <div className="flex-1 mb-4 lg:mb-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {assessment.name}
                        </h3>
                        <p className="text-gray-700 mb-3">
                          {assessment.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center">
                            <ClockIcon className="w-4 h-4 mr-1" />
                            {assessment.duration}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {assessment.benefits.map((benefit, idx) => (
                            <span key={idx} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Video */}
                      <div className="w-full lg:w-80 aspect-video rounded-lg overflow-hidden bg-gray-900">
                        <iframe
                          src={`https://www.youtube.com/embed/${assessment.videoId}?rel=0&modestbranding=1`}
                          title={assessment.name}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Need a Specific Routine?
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Get a personalized movement routine designed for your specific needs and goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://tidycal.com/movewithjavier/personal-health-systems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors duration-200"
                >
                  Book Free Consultation
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:javierpgomez@fitforlife.ph"
                  className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  Email Us
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}