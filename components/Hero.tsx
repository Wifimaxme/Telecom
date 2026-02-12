import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-hero-glow bg-no-repeat bg-center bg-cover">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1 mb-8 backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-verdigris opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-verdigris"></span>
              </span>
              <span className="text-sm font-medium text-gray-300">Инженерное бюро нового типа</span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-tight mb-6">
              ИТ-инфраструктура с <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-verdigris">нулевыми затратами</span> на лицензии
            </h1>
          </Reveal>

          <Reveal delay={400}>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Сокращаем TCO на 40% за счет внедрения Open-Source решений. 
              Корпоративная телефония на <span className="text-white font-semibold">Asterisk</span>, 
              сети на <span className="text-white font-semibold">MikroTik</span>, 
              безопасные <span className="text-white font-semibold">VPN</span> туннели.
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}>
                Рассчитать экономию
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                Посмотреть кейсы
              </Button>
            </div>
          </Reveal>

          <Reveal delay={800} className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center">
              <CheckCircle2 className="w-5 h-5 text-verdigris mr-2" />
              <span>Без Vendor Lock-in</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-5 h-5 text-verdigris mr-2" />
              <span>SLA 99.9%</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-5 h-5 text-verdigris mr-2" />
              <span>Импортозамещение</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};