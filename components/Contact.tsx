import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'consultation'
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate phone simple check
    if (formData.phone.length < 10) {
      alert("Пожалуйста, введите корректный номер телефона");
      return;
    }
    
    // Simulate submission
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', phone: '', service: 'consultation' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-[#151921]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal>
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
                Готовы <span className="text-electric">оптимизировать</span> вашу инфраструктуру?
              </h2>
              <p className="text-gray-400 text-lg mb-12">
                Оставьте заявку на бесплатный аудит. Мы свяжемся с вами в течение 30 минут, чтобы обсудить детали вашего проекта.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <Phone className="w-6 h-6 text-verdigris" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Телефон</div>
                    <a href="tel:+74950000000" className="text-gray-400 hover:text-white transition-colors">+7 (495) 000-00-00</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <Mail className="w-6 h-6 text-verdigris" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Email</div>
                    <a href="mailto:info@telecom-project.ru" className="text-gray-400 hover:text-white transition-colors">info@telecom-project.ru</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <MapPin className="w-6 h-6 text-verdigris" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Офис</div>
                    <p className="text-gray-400">Москва, Технопарк "Орбита", оф. 404</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="glass-card p-8 md:p-10 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6">Заявка на консультацию</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Ваше имя</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-all"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Телефон</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-all"
                    placeholder="+7 (999) 000-00-00"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Интересующая услуга</label>
                  <select
                    className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-all appearance-none"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="consultation">Общая консультация</option>
                    <option value="telephony">IP-Телефония (Asterisk)</option>
                    <option value="network">Сетевая инфраструктура</option>
                    <option value="security">Безопасность / VPN</option>
                  </select>
                </div>
                
                <Button type="submit" fullWidth disabled={status === 'success'}>
                  {status === 'success' ? (
                    <span className="flex items-center">
                      Отправлено успешно
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Отправить заявку <Send className="ml-2 w-4 h-4" />
                    </span>
                  )}
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};