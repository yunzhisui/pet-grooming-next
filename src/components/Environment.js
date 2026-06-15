'use client';
import { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=1200&q=85',
    title: '专业洗护区',
    desc: '独立洗护操作间，配备进口升降式洗护浴缸、恒温出水系统。每位宠物使用专属毛巾与工具，一客一消毒，确保卫生安全。',
  },
  {
    img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200&q=85',
    title: '美容造型区',
    desc: '宽敞明亮的造型操作台，采用低噪音电剪和进口美容工具，减少宠物紧张感。每位顾客可通过玻璃观察窗全程观看护理过程。',
  },
  {
    img: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=1200&q=85',
    title: '休息等候区',
    desc: '温馨舒适的等候空间，提供免费饮品、Wi-Fi 和宠物主题杂志。透过落地玻璃窗可以看到宠物在洗护区的实时动态，让您安心等待。',
  },
];

export default function Environment() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((i) => {
    setIdx((i + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(idx + 1), 4000);
    return () => clearInterval(t);
  }, [idx, paused, go]);

  return (
    <section id="environment">
      <div className="container text-center">
        <span className="section-label">Tour</span>
        <h2 className="section-title">店内环境一览</h2>
        <p className="section-desc">雅致温馨的空间设计，每一个细节都为宠物和主人精心打造。</p>
      </div>
      <div className="container">
        <div className="env-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="env-track" style={{ transform: 'translateX(-' + (idx * 100) + '%)' }}>
            {slides.map((s, i) => (
              <div className="env-slide" key={i}>
                <img src={s.img} alt={s.title} loading="lazy" />
                <div className="env-slide-overlay"></div>
                <div className="env-slide-caption">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="env-btn prev" onClick={() => go(idx - 1)} aria-label="上一张">‹</button>
          <button className="env-btn next" onClick={() => go(idx + 1)} aria-label="下一张">›</button>
        </div>
        <div className="env-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={'env-dot' + (i === idx ? ' active' : '')}
              onClick={() => go(i)}
              aria-label={'第 ' + (i + 1) + ' 张'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
