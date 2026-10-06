import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaLandmark, FaWarehouse, FaSatelliteDish } from 'react-icons/fa'
import IntroLoader from '../components/IntroLoader'
import Marquee from '../components/Marquee'
import ProjectCarousel from '../components/ProjectCarousel'

const services = [
    { icon: <FaLandmark size={30} />, title: 'Construction & Civil Works', desc: 'From design to delivery, we build structures that stand the test of time.', color: '#062f4f' },
    { icon: <FaWarehouse size={30} />, title: 'Building Solutions', desc: 'Residential, commercial, and industrial building projects tailored to your needs.', color: '#1a7a4c' },
    { icon: <FaSatelliteDish size={30} />, title: 'Communication Infrastructure', desc: 'Connecting people and businesses through smart, modern technology.', color: '#0e7490' },
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15 } }),
}

const Home = () => {
    return (
        <div style={{ paddingTop: 72 }}>
            <IntroLoader />

            <header style={{
                position: 'relative', minHeight: '68vh', display: 'flex', alignItems: 'center',
                background: 'linear-gradient(180deg, rgba(6,47,79,0.84), rgba(6,47,79,0.62)), url(https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1600&auto=format&fit=crop) center/cover no-repeat',
                color: '#fff', textAlign: 'center', padding: '60px 20px',
            }}>
                <div style={{ maxWidth: 880, margin: '0 auto' }}>
                    <motion.h1
                        initial="hidden" animate="visible" variants={fadeUp} custom={0}
                        style={{ fontSize: 'clamp(2.4rem, 6vw, 3.8rem)', fontWeight: 800, margin: 0, lineHeight: 1.15 }}
                    >
                        Engineering Excellence. Building with Integrity.
                    </motion.h1>
                    <motion.p
                        initial="hidden" animate="visible" variants={fadeUp} custom={1}
                        style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.4rem)', color: 'rgba(255,255,255,0.92)', marginTop: 20, lineHeight: 1.8 }}
                    >
                        Moremi Group is a leading multi-sector company specializing in construction, building, and communication
                        infrastructure across Africa, bringing innovation, precision, and reliability to every project.
                    </motion.p>
                    <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2}>
                        <Link to="/contact" style={{
                            display: 'inline-block', marginTop: 28, padding: '16px 36px', borderRadius: 30,
                            background: '#f6b21a', color: '#062f4f', fontWeight: 700, textDecoration: 'none', fontSize: 17,
                        }}>
                            Request a Free Consultation
                        </Link>
                    </motion.div>
                </div>
            </header>

            <Marquee />

            <section style={{ padding: 'clamp(50px,8vh,80px) clamp(16px,4vw,48px)', maxWidth: 1200, margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 28 }}>
                    {services.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                            whileHover={{ y: -8 }}
                            style={{
                                background: '#fff', borderRadius: 16, padding: 32, textAlign: 'center',
                                boxShadow: '0 10px 30px rgba(6,47,79,0.07)', transition: 'all 0.3s ease',
                            }}
                        >
                            <div style={{
                                width: 70, height: 70, borderRadius: 16, background: s.color, color: '#fff',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px',
                            }}>
                                {s.icon}
                            </div>
                            <h5 style={{ color: '#062f4f', margin: '0 0 10px', fontSize: 20, fontWeight: 700 }}>{s.title}</h5>
                            <p style={{ color: '#6b7280', fontSize: 16, margin: 0, lineHeight: 1.7 }}>{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section style={{ padding: 'clamp(50px,8vh,80px) clamp(16px,4vw,48px)', background: '#f0f6fc' }}>
                <motion.h2
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    style={{ textAlign: 'center', color: '#062f4f', marginBottom: 40, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800 }}
                >
                    Featured Projects
                </motion.h2>
                <ProjectCarousel />
            </section>

            <section style={{
                padding: '56px clamp(16px,4vw,48px)', textAlign: 'center', color: '#fff',
                background: 'linear-gradient(90deg, #062f4f, #f6b21a)',
            }}>
                <h4 style={{ margin: '0 0 18px', fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 700 }}>Ready to start your next project?</h4>
                <Link to="/contact" style={{
                    display: 'inline-block', padding: '14px 34px', borderRadius: 30, border: '2px solid #fff',
                    color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 16,
                }}>
                    Request a Quote
                </Link>
            </section>
        </div>
    )
}

export default Home