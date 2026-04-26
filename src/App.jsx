import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Nav from './components/Nav';
import SlideCover from './slides/SlideCover';
import SlideMarket from './slides/SlideMarket';
import SlideAI from './slides/SlideAI';
import SlideFullstack from './slides/SlideFullstack';
import SlideSelf from './slides/SlideSelf';

const SLIDES = [SlideCover, SlideMarket, SlideAI, SlideFullstack, SlideSelf];

const variants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0 },
  exit:  (dir) => ({ opacity: 0, x: dir > 0 ? -48 : 48 }),
};

export default function App() {
  const [[current, dir], setPage] = useState([0, 0]);

  const goTo = useCallback((n) => {
    const bounded = Math.max(0, Math.min(n, SLIDES.length - 1));
    setPage(prev => [bounded, bounded > prev[0] ? 1 : -1]);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')  prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  const Slide = SLIDES[current];
  const progress = (current / (SLIDES.length - 1)) * 100;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav current={current} total={SLIDES.length} onPrev={prev} onNext={next} onGoTo={goTo} />

      <div style={{ flex: 1, maxWidth: 900, width: '100%', margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ padding: '48px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 'calc(100vh - 57px)' }}
          >
            <Slide onGoTo={goTo} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: 3, background: 'rgba(0,0,0,0.06)', zIndex: 200 }}>
        <motion.div
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          style={{ height: '100%', background: 'var(--accent)', borderRadius: 2 }}
        />
      </div>
    </div>
  );
}
