import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaRoad, FaBuilding, FaSatelliteDish, FaClipboardList, FaTruck, FaArrowRight } from 'react-icons/fa'

const services = [
  {
    icon: <FaRoad />,
    title: 'Construction & Civil Engineering',
    desc: 'Design, planning, and execution of roads, bridges, public infrastructure, and commercial facilities delivered with precision and safety compliance.',
    color: '#062f4f',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: <FaBuilding />,
    title: 'Building & Property Development',
    desc: 'Residential, corporate and industrial building projects from concept design to interior finishing, built to last and built to impress.',
    color: '#1a7a4c',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: <FaSatelliteDish />,
    title: 'Communication & Network Infrastructure',
    desc: 'Installation and maintenance of communication towers, data cabling, and broadband systems to keep businesses connected across Africa.',
    color: '#0e7490',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: <FaClipboardList />,
    title: 'Project Management & Consultancy',
    desc: 'End-to-end project supervision, quality control, and cost optimization to help clients achieve successful outcomes on every project.',
    color: '#b45309',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: <FaTruck />,
    title: 'Supply & Logistics',
    desc: 'Procurement and delivery of construction materials, telecom equipment, and industrial supplies, on time and on budget, every time.',
    color: '#4b5563',
    img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop',
  },
]

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '12+', label: 'Years of Experience' },
  { value: '40+', label: 'Expert Personnel' },
  { value: '98%', label: 'Client Satisfaction' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

const fadeSide = (fromRight) => ({
  hidden: { opacity: 0, x: fromRight ? 40 : -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
})

const Services = () => {
  return (
    <div style={{ paddingTop: 96 }}>
      <section style={{
        padding: '20px clamp(16px,4vw,48px) 50px', textAlign: 'center',
        background: 'linear-gradient(180deg, #f0f6fc, #ffffff)',
      }}>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: 2, color: '#f6b21a', textTransform: 'uppercase' }}>
            What We Do
          </span>
          <h1 style={{ color: '#062f4f', fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', margin: '14px 0', fontWeight: 800 }}>
            Services Built on Precision
          </h1>
          <p style={{ color: '#4b5563', fontSize: 19, maxWidth: 680, margin: '0 auto', lineHeight: 1.75 }}>
            We deliver engineering, construction, communications and project services across Africa, backed by
            decades of hands-on expertise and an uncompromising standard of quality.
          </p>
        </motion.div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(30px,5vh,60px) clamp(16px,4vw,48px)' }}>
        {services.map((s, i) => {
          const reversed = i % 2 === 1
          return (
            <motion.div
              key={s.title}
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
              style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px,5vw,56px)',
                alignItems: 'center', marginBottom: 'clamp(50px,8vh,90px)',
              }}
              className={`service-row ${reversed ? 'reversed' : ''}`}
            >
              <motion.div
                variants={fadeSide(reversed)}
                style={{
                  order: reversed ? 2 : 1, borderRadius: 18, overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(6,47,79,0.15)', position: 'relative',
                }}
              >
                <img src={s.img} alt={s.title} style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }} />
                <div style={{
                  position: 'absolute', top: 18, left: 18, width: 56, height: 56, borderRadius: 14,
                  background: s.color, color: '#fff', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 22, boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                }}>
                  {s.icon}
                </div>
              </motion.div>

              <motion.div variants={fadeSide(!reversed)} style={{ order: reversed ? 1 : 2 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: s.color, letterSpacing: 1.5, textTransform: 'uppercase' }}>
                  0{i + 1}
                </span>
                <h3 style={{ color: '#062f4f', fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', margin: '10px 0 16px', fontWeight: 800 }}>
                  {s.title}
                </h3>
                <p style={{ color: '#4b5563', fontSize: 17, lineHeight: 1.8, marginBottom: 20 }}>
                  {s.desc}
                </p>
                <Link to="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8, color: s.color,
                  fontWeight: 700, fontSize: 16, textDecoration: 'none',
                }}>
                  Enquire About This Service <FaArrowRight size={13} />
                </Link>
              </motion.div>
            </motion.div>
          )
        })}
      </section>

      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        style={{
          background: 'linear-gradient(120deg, #062f4f, #0a4570)', padding: 'clamp(40px,6vh,64px) clamp(16px,4vw,48px)',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24, textAlign: 'center',
        }}
      >
        {stats.map((st) => (
          <div key={st.label}>
            <div style={{ color: '#f6b21a', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800 }}>{st.value}</div>
            <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginTop: 6 }}>{st.label}</div>
          </div>
        ))}
      </motion.section>

      <section style={{ padding: 'clamp(50px,8vh,80px) clamp(16px,4vw,48px)', textAlign: 'center' }}>
        <h2 style={{ color: '#062f4f', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: 16, fontWeight: 800 }}>
          Have a project in mind?
        </h2>
        <p style={{ color: '#4b5563', fontSize: 17, maxWidth: 560, margin: '0 auto 24px' }}>
          Our team is ready to walk through your requirements and deliver a tailored proposal.
        </p>
        <Link to="/contact" style={{
          display: 'inline-block', padding: '14px 34px', borderRadius: 30, background: '#062f4f',
          color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 16,
        }}>
          Get in Touch
        </Link>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .service-row { grid-template-columns: 1fr !important; }
          .service-row > div { order: 1 !important; }
        }
      `}</style>
    </div>
  )
}

export default Services