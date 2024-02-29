import { motion } from 'framer-motion'

export const Button = ({ onPush, children }) => (
  <motion.button
    className="button"
    onClick={onPush}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
    {children}
  </motion.button>
)
