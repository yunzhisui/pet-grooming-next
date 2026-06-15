import { Search, Heart, Crosshair, Scissors, Shield, Dog } from 'lucide-react';

const items = [
  { icon: Search, color: 'orange', title: '精致洗护', desc: '采用进口温和宠物专用洗护产品，深层清洁同时保护毛发和皮肤健康。', price: '¥88', unit: '起' },
  { icon: Heart, color: 'teal', title: '造型修剪', desc: '资深美容师根据宠物品种和主人偏好设计专属造型，让爱宠更出众。', price: '¥168', unit: '起' },
  { icon: Crosshair, color: 'pink', title: 'SPA 护理', desc: '精油SPA、深层滋润、毛发修护，让紧绷的宠物彻底放松身心。', price: '¥228', unit: '起' },
  { icon: Scissors, color: 'blue', title: '指甲护理', desc: '专业安全修剪指甲、清洁耳道、挤压肛门腺，细节呵护面面俱到。', price: '¥38', unit: '起' },
  { icon: Shield, color: 'purple', title: '宠物寄养', desc: '温馨舒适的寄养环境，定时遛放、科学喂养、实时反馈，让您出差无忧。', price: '¥68', unit: '/天' },
  { icon: Dog, color: 'green', title: '健康检查', desc: '基础体检、皮肤检测、耳道检查，及时发现健康隐患，为您提供专业建议。', price: '¥58', unit: '起' },
];

export default function Services() {
  const IconComponent = ({ icon: Icon, color }) => (
    <div className={'service-icon ' + color}>
      <Icon size={30} />
    </div>
  );

  return (
    <section id="services">
      <div className="container text-center">
        <span className="section-label">Our Services</span>
        <h2 className="section-title">专业洗护 · 用心服务</h2>
        <p className="section-desc">从基础清洁到高端护理，我们为不同品种、不同需求的宠物提供定制化洗护方案。</p>
      </div>
      <div className="container">
        <div className="services-grid">
          {items.map((item, i) => (
            <div className="service-card" key={i}>
              <IconComponent icon={item.icon} color={item.color} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="price">{item.price} <small>{item.unit}</small></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
