import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const projects = [
    {
        title: 'Corporate Office Complex, Ibadan',
        desc: 'Full construction and fit-out completed within 12 months.',
        img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1400&auto=format&fit=crop',
    },
    {
        title: 'Telecom Tower Rollout, Oyo State',
        desc: 'Network infrastructure deployment across 14 sites.',
        img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1400&auto=format&fit=crop',
    },
    {
        title: 'Residential Estate, Lagos',
        desc: 'Design-to-delivery of a 40-unit housing development.',
        img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop',
    },
]

const ProjectCarousel = () => {
    const [index, setIndex] = useState(0)

    // Auto-advances every 5 seconds
    useEffect(() => {
        const t = setInterval(() => setIndex((p) => (p + 1) % projects.length), 5000)
        return () => clearInterval(t)
    }, [])

    const next = () => setIndex((p) => (p + 1) % projects.length)
    const prev = () => setIndex((p) => (p - 1 + projects.length) % projects.length)

    return (
        <div style={{ position: 'relative', width: '100%', maxWidth: 1000, margin: '0 auto' }}>
            <div style={{ position: 'relative', height: 'clamp(300px, 50vw, 460px)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 50px rgba(6,47,79,0.15)' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        style={{ position: 'absolute', inset: 0 }}
                    >
                        <img src={projects[index].img} alt={projects[index].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{
                            position: 'absolute', bottom: 0, left: 0, right: 0, padding: '44px 30px 24px',
                            background: 'linear-gradient(to top, rgba(6,47,79,0.92), transparent)', color: '#fff',
                        }}>
                            <h3 style={{ margin: 0, fontSize: 'clamp(1.3rem, 2.8vw, 1.8rem)', fontWeight: 700 }}>{projects[index].title}</h3>
                            <p style={{ margin: '8px 0 0', fontSize: 16, color: 'rgba(255,255,255,0.88)' }}>{projects[index].desc}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <button onClick={prev} style={navBtnStyle('left')}><FaChevronLeft /></button>
                <button onClick={next} style={navBtnStyle('right')}><FaChevronRight /></button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 18 }}>
                {projects.map((_, i) => (
                    <span
                        key={i}
                        onClick={() => setIndex(i)}
                        style={{
                            width: i === index ? 26 : 9, height: 9, borderRadius: 6, cursor: 'pointer',
                            background: i === index ? '#f6b21a' : '#d1d5db', transition: 'all 0.3s ease',
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

const navBtnStyle = (side) => ({
    position: 'absolute', top: '50%', [side]: 16, transform: 'translateY(-50%)',
    width: 44, height: 44, borderRadius: '50%', border: 'none',
    background: 'rgba(255,255,255,0.9)', color: '#062f4f', display: 'flex',
    alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 15,
    boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
})

export default ProjectCarousel