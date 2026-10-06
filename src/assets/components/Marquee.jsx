import React from 'react'

const items = [
  'ENGINEERING EXCELLENCE', 'CIVIL INFRASTRUCTURE', 'BUILDING SOLUTIONS',
  'COMMUNICATION NETWORKS', 'PROJECT MANAGEMENT', 'TRUSTED ACROSS AFRICA',
]

const Marquee = () => {
  return (
    <div style={{ width: '100%', overflow: 'hidden', background: '#062f4f', padding: '14px 0' }}>
      <style>{`
        @keyframes moremiMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .moremi-marquee-track { display: inline-flex; animation: moremiMarquee 22s linear infinite; white-space: nowrap; }
      `}</style>
      <div className="moremi-marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{ color: '#f6b21a', fontWeight: 700, fontSize: 13, letterSpacing: 3, margin: '0 36px' }}>
            {item} <span style={{ color: 'rgba(255,255,255,0.3)', marginLeft: 36 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee