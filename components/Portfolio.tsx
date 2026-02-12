import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X, CheckCircle2 } from 'lucide-react';
import { PortfolioItem } from '../types';
import { Reveal } from './ui/Reveal';

const portfolio: PortfolioItem[] = [
  {
    id: 'asterisk-migration',
    title: 'Миграция с Cisco/Avaya на Asterisk',
    client: 'Производственный холдинг (500+ абонентов)',
    description: 'Полное импортозамещение телефонии. Отказ от дорогих лицензий зарубежных вендоров с сохранением функционала и телефонных аппаратов.',
    tags: ['Asterisk', 'Cisco', 'SIP', 'High Availability'],
    kpi: 'Экономия бюджета ИТ на 60%',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800', 
    challenge: 'Заказчик использовал устаревшую АТС Cisco CallManager. Стоимость продления лицензий и поддержки выросла в 3 раза. Необходимо было масштабировать сеть без капитальных затрат на новое оборудование.',
    solution: 'Развернут кластер IP-АТС на базе Asterisk (FreePBX). Выполнена перепрошивка существующих телефонов Cisco под протокол SIP, что позволило сохранить парк оборудования. Настроена интеграция с Active Directory для синхронизации пользователей.'
  },
  {
    id: 'call-center',
    title: 'Умный Колл-центр для службы доставки',
    client: 'Логистическая компания',
    description: 'Автоматизация обработки входящих вызовов. Интеграция с CRM, голосовые роботы, очередь звонков с приоритезацией VIP-клиентов.',
    tags: ['Call Center', 'CRM Integration', 'TTS/ASR', 'Reporting'],
    kpi: 'Рост пропускной способности на 40%',
    image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=800',
    challenge: 'В часы пик терялось до 25% звонков. Операторы тратили время на ручной поиск заказа. Отсутствовала прозрачная аналитика эффективности сотрудников.',
    solution: 'Внедрен Asterisk с модулем расширенной очереди. Настроена интеграция с 1С:Предприятие: при звонке у оператора открывается карточка заказа. Внедрен голосовой бот для автоматического информирования о статусе доставки, снявший 30% нагрузки с первой линии.'
  },
  {
    id: 'vpn-network',
    title: 'Безопасная сеть для распределенного офиса',
    client: 'Финтех стартап',
    description: 'Построение защищенной сетевой инфраструктуры для работы с банковскими данными. Объединение офисов и удаленных сотрудников.',
    tags: ['MikroTik', 'WireGuard', 'IPSec', 'DLP'],
    kpi: '0 инцидентов безопасности',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    challenge: 'Необходимо было обеспечить соответствие требованиям регулятора по защите данных при работе сотрудников из дома. Высокие требования к отказоустойчивости каналов связи.',
    solution: 'Построена VPN-сеть на базе протокола WireGuard (высокая производительность). На шлюзах MikroTik настроен Failover (резервирование) каналов связи. Внедрена двухфакторная аутентификация (2FA) для доступа к внутренним ресурсам. Настроен корпоративный Firewall.'
  }
];

export const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Реализованные <span className="text-electric">проекты</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Решаем сложные инженерные задачи для компаний, которые ценят надежность и контроль.
              </p>
            </div>
            <div className="hidden md:block mb-6">
                 {/* Decorative element or secondary link could go here */}
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item, index) => (
            <Reveal key={item.id} delay={index * 150}>
              <div 
                onClick={() => setSelectedItem(item)}
                className="group rounded-2xl overflow-hidden bg-charcoal border border-white/5 hover:border-electric/50 transition-all duration-500 relative cursor-pointer h-full flex flex-col shadow-lg hover:shadow-electric/10"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-bold text-white flex items-center">
                      Подробнее <ArrowUpRight className="ml-1 w-3 h-3 text-verdigris" />
                    </span>
                  </div>
                </div>
                
                <div className="p-6 relative z-20 bg-[#1d232c] flex-grow flex flex-col">
                  <div className="text-xs font-bold text-verdigris uppercase tracking-wider mb-2">{item.client}</div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3 flex-grow">
                    {item.description}
                  </p>

                  <div className="border-t border-white/5 pt-4 mb-4">
                     <div className="text-sm font-semibold text-white">KPI: <span className="text-verdigris">{item.kpi}</span></div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in">
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
              onClick={() => setSelectedItem(null)}
            ></div>
            
            <div className="relative bg-[#1d232c] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col animate-scale-in">
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-white/10 rounded-full transition-colors z-30 text-white"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="h-64 sm:h-80 w-full relative flex-shrink-0 group">
                  <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d232c] via-[#1d232c]/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-verdigris/20 text-verdigris text-xs font-bold uppercase tracking-wider mb-2 border border-verdigris/20">
                      {selectedItem.client}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white shadow-sm leading-tight">
                      {selectedItem.title}
                    </h3>
                  </div>
              </div>
              
              <div className="p-6 sm:p-8 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
                      Проблема
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {selectedItem.challenge}
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                      <span className="w-2 h-2 bg-verdigris rounded-full mr-3 shadow-[0_0_10px_rgba(67,181,160,0.5)]"></span>
                      Решение
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {selectedItem.solution}
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-electric/10 to-verdigris/10 rounded-xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Ключевой результат (KPI)</h4>
                    <div className="text-xl sm:text-2xl font-bold text-white">{selectedItem.kpi}</div>
                  </div>
                  <CheckCircle2 className="w-10 h-10 text-verdigris hidden sm:block" />
                </div>

                <div>
                   <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Технологический стек</h4>
                   <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 rounded-lg bg-[#1d232c] text-gray-300 border border-white/10 text-sm font-medium hover:border-electric/50 transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/5 flex justify-end">
                   <button 
                     onClick={() => {
                        setSelectedItem(null);
                        const contact = document.getElementById('contact');
                        if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                     }}
                     className="px-6 py-3 bg-electric hover:bg-[#6b3bc0] text-white rounded-lg font-bold transition-all shadow-lg shadow-electric/20 text-sm"
                   >
                     Хочу такой же результат
                   </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};