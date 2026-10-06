import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHandshake, FaStar, FaLightbulb, FaLeaf, FaUsers } from 'react-icons/fa'

const values = [
  { icon: <FaHandshake />, title: 'Integrity', desc: 'We deliver what we promise.' },
  { icon: <FaStar />, title: 'Excellence', desc: 'Quality in every detail.' },
  { icon: <FaLightbulb />, title: 'Innovation', desc: 'Building smarter, faster, and better.' },
  { icon: <FaLeaf />, title: 'Sustainability', desc: 'Committed to eco-friendly and lasting solutions.' },
  { icon: <FaUsers />, title: 'Partnership', desc: 'We grow together with our clients.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

const About = () => {
  return (
    <div style={{ paddingTop: 96, paddingBottom: 60 }}>
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(16px,4vw,48px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40, alignItems: 'start' }} className="about-grid">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <h1 style={{ color: '#062f4f', fontSize: 'clamp(2.1rem, 4.5vw, 3rem)', fontWeight: 800 }}>Who We Are</h1>
            <p style={{ color: '#374151', lineHeight: 1.85, fontSize: 18 }}>
              Founded on a vision of excellence and innovation, Moremi Group combines decades of professional
              experience in engineering, construction, and communications. Our team is made up of skilled engineers,
              project managers, and technical experts committed to delivering world-class solutions on every site.
            </p>

            <h3 style={{ color: '#062f4f', marginTop: 28, fontSize: 23, fontWeight: 700 }}>Our Mission</h3>
            <p style={{ color: '#374151', fontSize: 17, lineHeight: 1.75 }}>
              To deliver high-quality, cost-effective projects on schedule by employing and supporting motivated,
              flexible, and focused teams.
            </p>

            <h3 style={{ color: '#062f4f', marginTop: 22, fontSize: 23, fontWeight: 700 }}>Our Vision</h3>
            <p style={{ color: '#374151', fontSize: 17, lineHeight: 1.75 }}>
              To be Africa's most trusted name in construction and communication infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
            style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 16px 40px rgba(6,47,79,0.12)' }}
          >
            <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1200&auto=format&fit=crop" alt="Professional team" style={{ width: '100%', display: 'block' }} />
            <div style={{ padding: 24, background: '#fff' }}>
              <h5 style={{ color: '#062f4f', margin: '0 0 8px', fontSize: 19, fontWeight: 700 }}>Professional Team</h5>
              <p style={{ color: '#6b7280', fontSize: 16, margin: 0, lineHeight: 1.65 }}>
                Our experienced professionals ensure projects are completed on time, on budget, and to the highest standards.
              </p>
            </div>
          </motion.div>
        </div>

        <h3 style={{ color: '#062f4f', marginTop: 64, textAlign: 'center', fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', fontWeight: 800 }}>
          Core Values
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 20, marginTop: 28 }}>
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              whileHover={{ y: -6 }}
              style={{ background: '#fff', borderRadius: 14, padding: 26, textAlign: 'center', boxShadow: '0 8px 24px rgba(6,47,79,0.07)' }}
            >
              <div style={{ color: '#f6b21a', fontSize: 28, marginBottom: 12 }}>{v.icon}</div>
              <h6 style={{ color: '#062f4f', margin: '0 0 8px', fontSize: 18, fontWeight: 700 }}>{v.title}</h6>
              <p style={{ color: '#6b7280', fontSize: 15, margin: 0, lineHeight: 1.6 }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        style={{ marginTop: 68, padding: '56px clamp(16px,4vw,48px)', background: 'linear-gradient(180deg, #fff, #f0f6fc)' }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '220px 1fr', gap: 36, alignItems: 'center' }} className="ceo-grid">
          <div style={{
            width: 200, height: 200, borderRadius: '50%', overflow: 'hidden', margin: '0 auto',
            border: '6px solid #fff', boxShadow: '0 10px 30px rgba(6,47,79,0.15)',
          }}>
            <img src="src/assets/moremiii.jpg" alt="CEO" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h2 style={{ color: '#062f4f', margin: '0 0 6px', fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', fontWeight: 800 }}>Mr Kayode Ejidiran</h2>
            <p style={{ color: '#6b7280', margin: '0 0 16px', fontSize: 17 }}>Chief Executive Officer, Moremi Group</p>
            <blockquote style={{ borderLeft: '4px solid #f6b21a', paddingLeft: 18, fontStyle: 'italic', color: '#062f4f', fontSize: 18.5, lineHeight: 1.6 }}>
              We build with care, plan with purpose, and deliver with integrity, creating lasting value for our
              clients and communities across Africa.
            </blockquote>
            <p style={{ color: '#374151', fontSize: 16.5, marginTop: 16, lineHeight: 1.85 }}>
              With decades of leadership in engineering, construction, and communications, Mr. Kayode Ejidiran leads
              Moremi Group with a focus on sustainable growth, technical excellence, and strong partnerships.
            </p>
            <Link to="/contact" style={{
              display: 'inline-block', marginTop: 12, padding: '12px 28px', borderRadius: 30,
              background: '#062f4f', color: '#fff', textDecoration: 'none', fontSize: 16, fontWeight: 700,
            }}>
              Contact Office
            </Link>
          </div>
        </div>
      </motion.section>

      <style>{`
        @media (max-width: 760px) {
          .about-grid, .ceo-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

export default About