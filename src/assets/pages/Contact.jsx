import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaPaperPlane } from 'react-icons/fa'

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
}

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', text: 'Please fill in all required fields.' })
      return
    }
    setStatus({ type: 'success', text: 'Thank you, your message has been received. We will be in touch shortly.' })
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div style={{ paddingTop: 96, paddingBottom: 70, maxWidth: 1100, margin: '0 auto', padding: '96px clamp(16px,4vw,48px) 70px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40 }} className="contact-grid">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <h1 style={{ color: '#062f4f', fontSize: 'clamp(2.1rem, 4.5vw, 3rem)', fontWeight: 800 }}>Let's Build Together</h1>
          <p style={{ color: '#6b7280', fontSize: 18, marginBottom: 28, lineHeight: 1.7 }}>
            Reach out for consultations, quotes, partnerships, and project enquiries.
          </p>

          <form onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 10px 30px rgba(6,47,79,0.08)' }}>
            {status && (
              <div style={{
                padding: '12px 16px', borderRadius: 8, marginBottom: 20, fontSize: 15,
                background: status.type === 'success' ? '#ecfdf5' : '#fef2f2',
                color: status.type === 'success' ? '#065f46' : '#991b1b',
                border: `1px solid ${status.type === 'success' ? '#a7f3d0' : '#fecaca'}`,
              }}>
                {status.text}
              </div>
            )}

            <Field label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
            <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
            <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="0701 948 5607" />

            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Message</label>
              <textarea
                name="message" rows={5} value={form.message} onChange={handleChange}
                placeholder="Tell us how we can help..."
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </div>

            <button type="submit" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 30px', borderRadius: 30,
              background: '#062f4f', color: '#fff', border: 'none', fontWeight: 700, fontSize: 16, cursor: 'pointer',
            }}>
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}>
          <div style={{ background: '#fff', borderRadius: 16, padding: 30, boxShadow: '0 10px 30px rgba(6,47,79,0.08)' }}>
            <h5 style={{ color: '#062f4f', marginBottom: 20, fontSize: 20, fontWeight: 700 }}>Contact Info</h5>
            <InfoRow icon={<FaMapMarkerAlt />} text="No W08, Tokunbo Ojo Street, Opposite Ojoo Terminal, Ojoo Ibadan." />
            <InfoRow icon={<FaPhone />}>
              <a href="https://wa.me/2347019485607" style={linkStyle}>Contact Us</a>
            </InfoRow>
            <InfoRow icon={<FaEnvelope />}>
              <a href="mailto:moremiconstructionltd@gmail.com" style={linkStyle}>Send E-mail</a>
            </InfoRow>
            <InfoRow icon={<FaClock />} text="Monday - Friday, 8am - 6pm" last />

            <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '22px 0' }} />
            <h6 style={{ color: '#062f4f', marginBottom: 14, fontSize: 17, fontWeight: 700 }}>Follow</h6>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="https://web.facebook.com/profile.php?id=61582045630184" target="_blank" rel="noreferrer" style={socialBtnStyle('#062f4f')}>
                <FaFacebookF /> Facebook
              </a>
              <a href="https://www.instagram.com/moremicommunications" target="_blank" rel="noreferrer" style={socialBtnStyle('#be185d')}>
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

const Field = ({ label, name, value, onChange, placeholder, type = 'text' }) => (
  <div style={{ marginBottom: 20 }}>
    <label style={labelStyle}>{label}</label>
    <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} style={inputStyle} />
  </div>
)

const InfoRow = ({ icon, text, children, last }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: last ? 0 : 14, fontSize: 16, color: '#374151' }}>
    <span style={{ color: '#f6b21a', marginTop: 2 }}>{icon}</span>
    <span>{children || text}</span>
  </div>
)

const labelStyle = { display: 'block', fontSize: 15, fontWeight: 600, color: '#062f4f', marginBottom: 8 }
const inputStyle = { width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 16, outline: 'none', fontFamily: 'inherit' }
const linkStyle = { color: '#062f4f', textDecoration: 'none', fontWeight: 600 }
const socialBtnStyle = (color) => ({
  display: 'flex', alignItems: 'center', gap: 7, padding: '9px 16px', borderRadius: 8,
  border: `1px solid ${color}`, color, textDecoration: 'none', fontSize: 14.5, fontWeight: 600,
})

export default Contact