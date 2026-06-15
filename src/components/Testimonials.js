'use client';
import { useState, useEffect, useCallback } from 'react';

const reviews = [
  { name: '张女士', pet: '金毛 · 豆包', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&q=80', text: '我家金毛豆包第一次来洗澡特别紧张，美容师小姐姐特别耐心，一边安抚一边操作。洗完出来简直变了一只狗！毛发光亮，还系了个小领结，太可爱了！已经办了年卡。' },
  { name: '李先生', pet: '布偶猫 · 团子', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80', text: '从开业就在这家洗猫了。胆子很小的猫咪在这里很放松，美容师会先让猫咪适应环境再开始，不像别家直接上手的。推荐给很多朋友了，品质一直在线。' },
  { name: '王女士', pet: '柯基 · 小短腿', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80', text: '柯基夏天掉毛太严重了，选了去底绒护理套餐。做完之后家里飞毛明显少了，狗狗也很舒服的样子。店里环境很好，没有异味，等待区有零食和水。推荐！' },
  { name: '陈先生', pet: '泰迪 · 可乐', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&q=80', text: '我家泰迪可乐之前在其他店剪毛总是很抗拒，来到宠沐轩后美容师先陪它玩了十分钟建立信任感，再开始操作。剪完的造型特别精神，可乐也开心得直摇尾巴。' },
  { name: '刘女士', pet: '英短 · 奶糖', avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=60&q=80', text: '英短掉毛季真是崩溃，选了深层去毛护理加SPA，效果超出预期。奶糖做完SPA后整个猫都软乎乎的，毛也顺滑了很多。美容师还教了我日常护理技巧，太贴心了。' },
  { name: '赵女士', pet: '哈士奇 · 馒头', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=60&q=80', text: '哈士奇拆家后被我抓来洗澡，这家伙力气大又爱闹腾，两个美容师小姐姐配合默契，一边哄一边洗，居然老老实实完成了全套护理！洗白白后颜值飙升，终于像个正经狗了。' },
  { name: '周先生', pet: '边牧 · 闪电', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80', text: '边牧运动量大，每次洗澡都是体力活。宠沐轩有大空间洗护区，还能在等候区看狗狗全程，很安心。闪电每次洗完都特别兴奋，回家还要在院子里跑三圈炫耀新造型。' },
];

function Star() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#FBBF24" stroke="none" />
    </svg>
  );
}

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const check = () => setPerPage(window.innerWidth < 868 ? 1 : 3);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const totalPages = Math.ceil(reviews.length / perPage);
  const maxIdx = Math.max(0, reviews.length - perPage);

  const go = useCallback((i) => {
    setIdx(Math.min(Math.max(0, i), maxIdx));
  }, [maxIdx]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(idx + perPage >= reviews.length ? 0 : idx + perPage), 5000);
    return () => clearInterval(t);
  }, [idx, paused, perPage, go]);

  return (
    <section id="testimonials">
      <div className="container text-center">
        <span className="section-label">Testimonials</span>
        <h2 className="section-title">来自毛孩子家长的好评</h2>
        <p className="section-desc">每一位顾客的认可都是我们前进的动力，已累计超过 3000 条真实好评。</p>
      </div>
      <div className="container">
        <div className="testimonial-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="testimonial-track" style={{ transform: 'translateX(-' + (idx * (100 / perPage)) + '%)' }}>
            {reviews.map((r, i) => (
              <div className="testimonial-slide" key={i}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    <Star /><Star /><Star /><Star /><Star />
                  </div>
                  <blockquote>"{r.text}"</blockquote>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar"><img src={r.avatar} alt={r.name} loading="lazy" /></div>
                    <div><div className="testimonial-name">{r.name}</div><div className="testimonial-pet">{r.pet}</div></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="testimonial-btn prev" onClick={() => go(idx - perPage)} aria-label="上一页">‹</button>
          <button className="testimonial-btn next" onClick={() => go(idx + perPage)} aria-label="下一页">›</button>
        </div>
        <div className="testimonial-dots">
          {[...Array(totalPages)].map((_, i) => (
            <button key={i} className={'testimonial-dot' + (i === Math.floor(idx / perPage) ? ' active' : '')} onClick={() => go(i * perPage)} aria-label={'第 ' + (i + 1) + ' 页'} />
          ))}
        </div>
      </div>
    </section>
  );
}
