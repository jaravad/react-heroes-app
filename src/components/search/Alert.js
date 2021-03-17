import { memo } from 'react';
import { motion } from 'framer-motion';

export const Alert = memo(function Alert({ type, message }) {
  return (
    <motion.div
      key={type}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
      className={`alert alert-${type} d-inline-block mt-3`}
      role="alert"
    >
      {message}
    </motion.div>
  );
});
