import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import moremii from '../moremii.jpg'

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px clamp(16px, 4vw, 48px)',
        background: scrolled ? '#ffffff' : 'rgba(255,255,255,0.92)',
        boxShadow: scrolled ? '0 6px 24px rgba(6,47,79,0.1)' : 'none',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#062f4f' }}>
        <div style={{
          width: 44, height: 44, borderRadius: 10, background: 'linear-gradient(135deg, #062f4f, #0a4570)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 10,
          overflow: 'hidden'
        }}>
          <img 
            src={moremii} 
            alt="Moremi Group Logo" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
        <div>
          <div style={{ fontWeight: 800, fontSize: 16 }}>Moremi <span style={{ color: '#f6b21a' }}>Group</span></div>
          <div style={{ fontSize: 11, color: '#6b7280' }}>Building the Future. Connecting the World.</div>
        </div>
      </Link>

      <div style={{ display: window.innerWidth > 860 ? 'flex' : 'none', gap: 28, alignItems: 'center' }} className="desktop-links">
        {links.map((l) => (
          <Link
            key={l.path}
            to={l.path}
            style={{
              textDecoration: 'none',
              fontWeight: location.pathname === l.path ? 700 : 500,
              color: location.pathname === l.path ? '#f6b21a' : '#062f4f',
              fontSize: 15, position: 'relative',
            }}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setOpen(!open)}
        style={{
          display: window.innerWidth > 860 ? 'none' : 'flex', background: 'transparent', border: 'none',
          fontSize: 22, color: '#062f4f', cursor: 'pointer', alignItems: 'center',
        }}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute', top: '100%', right: 16, background: '#fff',
            borderRadius: 10, boxShadow: '0 12px 30px rgba(6,47,79,0.18)', padding: 10, width: 200,
          }}
        >
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              style={{
                display: 'block', padding: '10px 14px', textDecoration: 'none',
                color: location.pathname === l.path ? '#f6b21a' : '#062f4f',
                fontWeight: 600, borderRadius: 6,
              }}
            >
              {l.label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar