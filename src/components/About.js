import { Check, PawPrint } from 'lucide-react';

export default function About() {
  const features = [
    '进口温和洗护产品',
    '持证专业美容师团队',
    '一客一消毒严格卫生',
    '独立舒适洗护空间',
  ];
  return (
    <section id="about">
      <div className="container">
        <div className="about-layout">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=700&q=80" alt="宠物洗护师在工作" loading="lazy" />
            <div className="about-image-badge">
              <PawPrint size={24} />
              <span>8年用心服务</span>
            </div>
          </div>
          <div className="about-content">
            <span className="section-label">About Us</span>
            <h2>让每一只宠物<br />都享受五星级洗护体验</h2>
            <p>宠沐轩创立于 2018 年，是本地最早引入日式宠物洗护理念的专业店铺之一。我们深知每一只毛孩子都是家人，因此始终坚持使用最温和的产品、最细致的服务，让每次洗护都成为宠物期待的美妙时光。</p>
            <p>我们的美容师团队均持有国家认证宠物美容师资格，定期赴日本、韩国进修最新技术，只为给您的爱宠提供最专业的服务。</p>
            <div className="about-features">
              {features.map((f, i) => (
                <div className="about-feature" key={i}>
                  <Check size={18} /> {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
