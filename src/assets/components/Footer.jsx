import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer style={{ background: '#062f4f', color: '#fff', padding: '40px clamp(16px,4vw,48px) 28px', textAlign: 'center' }}>
      <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 6 }}>
        Moremi <span style={{ color: '#f6b21a' }}>Group</span>
      </div>
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 16 }}>
        Engineering | Construction | Communication | Excellence
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginBottom: 20 }}>
        <a href="https://web.facebook.com/profile.php?id=61582045630184" target="_blank" rel="noreferrer" style={{
          width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none',
        }}>
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/moremicommunications" target="_blank" rel="noreferrer" style={{
          width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none',
        }}>
          <FaInstagram />
        </a>
      </div>
      <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.5)', borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 16 }}>
        © 2026 Moremi Group. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer