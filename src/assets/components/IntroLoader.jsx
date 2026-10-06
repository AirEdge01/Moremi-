import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const IntroLoader = () => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1600)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.1 } }}
          style={{
            position: 'fixed', inset: 0, zIndex: 2000,
            background: 'linear-gradient(135deg, #062f4f, #0a4570)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 800, color: '#fff', letterSpacing: 1 }}>
              MOREMI <span style={{ color: '#f6b21a' }}>GROUP</span>
            </div>
            <div style={{ fontSize: '0.8rem', letterSpacing: 4, color: 'rgba(255,255,255,0.65)', marginTop: 10, textTransform: 'uppercase' }}>
              Building the Future
            </div>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 1.1, delay: 0.3, ease: 'easeInOut' }}
            style={{ height: 2, background: '#f6b21a', marginTop: 28, borderRadius: 4 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default IntroLoader