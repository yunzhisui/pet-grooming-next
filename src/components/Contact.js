'use client';
import { useState, useRef } from 'react';
import { MapPin, Phone, Calendar, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
 const pad = (n) => String(n).padStart(2, '0');
 const defaultDate = tomorrow.getFullYear() + '-' + pad(tomorrow.getMonth() + 1) + '-' + pad(tomorrow.getDate());
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setSubmitResult(null);

    const form = formRef.current;
    const data = {
      name: form.name.value,
      phone: form.phone.value,
      petName: form.petName.value,
      petType: form.pet.value,
      service: form.service.value,
      date: form.date.value,
      time: form.time.value,
      message: form.message.value,
    };

    fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || '提交失败');
        return json;
      })
      .then((json) => {
        setSubmitResult({ type: 'success', message: json.message });
        form.reset();
        form.date.value = defaultDate;
        form.time.value = '10:00';
      })
      .catch((err) => {
        setSubmitResult({ type: 'error', message: err.message });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const renderResult = () => {
    if (!submitResult) return null;
    const isSuccess = submitResult.type === 'success';
    return (
      <div className={'form-result form-result-' + submitResult.type}>
        {isSuccess ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
        <span>{submitResult.message}</span>
      </div>
    );
  };

  return (
    <section id="contact">
      <div className="container text-center">
        <span className="section-label">Contact</span>
        <h2 className="section-title">预约 & 联系我们</h2>
        <p className="section-desc">来店前建议提前预约，避免长时间等待。我们会在收到预约后 30 分钟内与您确认。</p>
      </div>
      <div className="container">
        <div className="contact-layout">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-item-icon"><MapPin size={22} /></div>
              <div><h4>门店地址</h4><p>吉林省汪清县天桥岭镇商业街道66号<br />宠沐轩宠物洗护专门店</p></div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon"><Phone size={22} /></div>
              <div><h4>联系电话</h4><p>0433-8856-789<br />139-4321-5678</p></div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon"><Calendar size={22} /></div>
              <div><h4>营业时间</h4><p>周一至周日 09:00 - 20:00</p></div>
            </div>
            <div className="contact-map">
              <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=129.65%2C43.35%2C129.85%2C43.50&amp;layer=mapnik&amp;marker=43.43%2C129.75" allowFullScreen loading="lazy" title="门店位置"></iframe>
              <div className="map-pin">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#F97316"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                宠沐轩 · 天桥岭镇商业街道66号
              </div>
            </div>
            <div className="contact-hours">
              <h4>详细营业时间</h4>
              {[['周一 ~ 周五', '09:00 - 20:00'], ['周六', '09:00 - 21:00'], ['周日', '10:00 - 19:00'], ['法定节假日', '10:00 - 18:00']].map(([d, t]) => (
                <div className="contact-hours-row" key={d}><span>{d}</span><span>{t}</span></div>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
            {renderResult()}
            <h3>📋 快速预约</h3>
            {[
              { id: 'name', label: '您的称呼', type: 'text', placeholder: '如：张女士' },
              { id: 'phone', label: '手机号码', type: 'tel', placeholder: '请输入手机号' },
            ].map((f) => (
              <div className="form-group" key={f.id}>
                <label htmlFor={f.id}>{f.label}</label>
                <input type={f.type} id={f.id} placeholder={f.placeholder} required />
              </div>
            ))}
                        <div className="form-group">
              <label htmlFor="petName">宠物名字</label>
              <input type="text" id="petName" placeholder="如：旺财（选填）" />
            </div>
            <div className="form-group">
              <label htmlFor="pet">宠物种类</label>
              <select id="pet">{['小型犬', '中型犬', '大型犬', '猫咪', '其他'].map((o) => <option key={o}>{o}</option>)}</select>
            </div>
            <div className="form-group">
              <label htmlFor="service">预约项目</label>
              <select id="service">{['精致洗护', '造型修剪', 'SPA 护理', '指甲护理', '宠物寄养', '健康检查'].map((o) => <option key={o}>{o}</option>)}</select>
            </div>
            <div className="form-group">
              <label htmlFor="datetime">期望日期与时间</label>
              <div style={{display:'flex',gap:10}}>
                <input type="date" id="date" defaultValue={defaultDate} style={{flex:1}} />
                <input type="time" id="time" defaultValue="10:00" style={{flex:1}} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">备注</label>
              <textarea id="message" placeholder="如有特殊需求请在此说明（如宠物性格、健康情况等）"></textarea>
            </div>
            <button type="submit" className="form-submit" disabled={submitting}>
              {submitting ? (
                <><Loader2 size={18} className="spin" /> 提交中...</>
              ) : (
                '提交预约'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
