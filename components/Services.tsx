import React from 'react';
import { Phone, Network, Shield, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { Reveal } from './ui/Reveal';

const services: ServiceItem[] = [
  {
    id: 'telephony',
    title: 'IP-Телефония',
    description: 'Внедрение Asterisk под ключ. Запись разговоров, IVR, интеграция с CRM (Bitrix24, AmoCRM). Отказ от дорогих облачных АТС.',
    icon: Phone,
    features: ['Экономия до 70% на связи', 'Собственный сервер', 'Без абонентской платы за расширение'],
  },
  {
    id: 'networks',
    title: 'Сетевая инфраструктура',
    description: 'Проектирование и настройка сетей на оборудовании MikroTik. Бесшовный Wi-Fi, VLAN, балансировка нагрузки.',
    icon: Network,
    features: ['Стабильный Wi-Fi (CAPsMAN)', 'Защита от сбоев', 'Приоритизация трафика'],
  },
  {
    id: 'security',
    title: 'Информационная безопасность',
    description: 'Организация защищенных каналов связи (VPN) для удаленной работы. Аудит безопасности, настройка FireWall.',
    icon: Shield,
    features: ['VPN (WireGuard/OpenVPN)', 'Защита периметра', 'Контроль доступа'],
  },
];

export const Services: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Инженерные решения <br />
              <span className="text-verdigris">для реального бизнеса</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Мы не продаем лицензии, мы строим системы, которые работают на вас, а не на вендора.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 150} className="h-full">
              <div 
                onClick={handleScrollToContact}
                className="glass-card rounded-2xl p-8 h-full hover:border-electric/30 transition-all duration-300 group flex flex-col cursor-pointer"
              >
                <div className="w-14 h-14 bg-charcoal rounded-xl flex items-center justify-center mb-6 group-hover:bg-electric/20 transition-colors">
                  <service.icon className="w-7 h-7 text-white group-hover:text-electric transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-verdigris rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center text-electric font-bold group-hover:text-white transition-colors">
                  Обсудить задачу <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};