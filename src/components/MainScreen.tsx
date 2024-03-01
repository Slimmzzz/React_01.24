import { QuizOptions } from './QuizOptions'
import { motion } from 'framer-motion'

export const MainScreen = () => {
  return (
    <motion.div
      className="container main_screen"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}>
      <h1 className="h1">Quiz Machine</h1>
      <QuizOptions />
    </motion.div>
  )
}
