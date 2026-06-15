const reviews = [
  { name: '张女士', pet: '金毛 · 豆包', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&q=80', text: '我家金毛豆包第一次来洗澡特别紧张，美容师小姐姐特别耐心，一边安抚一边操作。洗完出来简直变了一只狗！毛发光亮，还系了个小领结，太可爱了！已经办了年卡。' },
  { name: '李先生', pet: '布偶猫 · 团子', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80', text: '从开业就在这家洗猫了。胆子很小的猫咪在这里很放松，美容师会先让猫咪适应环境再开始，不像别家直接上手的。推荐给很多朋友了，品质一直在线。' },
  { name: '王女士', pet: '柯基 · 小短腿', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80', text: '柯基夏天掉毛太严重了，选了去底绒护理套餐。做完之后家里飞毛明显少了，狗狗也很舒服的样子。店里环境很好，没有异味，等待区有零食和水。推荐！' },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container text-center">
        <span className="section-label">Testimonials</span>
        <h2 className="section-title">来自毛孩子家长的好评</h2>
        <p className="section-desc">每一位顾客的认可都是我们前进的动力。</p>
      </div>
      <div className="container">
        <div className="testimonial-grid">
          {reviews.map((r, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} viewBox="0 0 24 24" width="18" height="18"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#FBBF24" stroke="none" /></svg>
                ))}
              </div>
              <blockquote>"{r.text}"</blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar"><img src={r.avatar} alt={r.name} loading="lazy" /></div>
                <div><div className="testimonial-name">{r.name}</div><div className="testimonial-pet">{r.pet}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
