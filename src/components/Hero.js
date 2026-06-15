import { Star, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <img
        src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1600&q=80"
        alt="宠物洗护"
        className="hero-bg"
      />
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <Star size={16} />
            已服务超过 5000+ 只宠物
          </div>
          <h1>
            专业的<br /><span>宠物洗护</span>体验
          </h1>
          <p>用心呵护每一只毛孩子。我们提供温和配方洗护、专业造型修剪、SPA 护理等全方位服务，让您的爱宠容光焕发。</p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              预约体验
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn-secondary">查看服务</a>
          </div>
          <div className="hero-stats">
            {[
              { num: '5000+', label: '服务宠物' },
              { num: '98%', label: '好评率' },
              { num: '8年', label: '专业经验' },
              { num: '15+', label: '专业技师' },
            ].map((s) => (
              <div className="hero-stat" key={s.label}>
                <div className="hero-stat-number">{s.num}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
