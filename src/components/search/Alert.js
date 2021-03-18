import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Alert = memo(function Alert({ type, message }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`alert alert-${type} d-inline-block mt-3`}
        role="alert"
      >
        {message}
      </motion.div>
    </AnimatePresence>
  );
});
