import React from 'react';
import { Server, ShieldCheck, Clock, Users } from 'lucide-react';
import { MetricItem } from '../types';
import { Reveal } from './ui/Reveal';

const metrics: MetricItem[] = [
  { value: "500+", label: "Настроено серверов", icon: Server },
  { value: "99.98%", label: "Uptime проектов", icon: Clock },
  { value: "-40%", label: "Снижение затрат", icon: ShieldCheck },
  { value: "10k+", label: "Пользователей в сети", icon: Users },
];

const technologies = ["Asterisk", "MikroTik", "Linux", "WireGuard", "Postfix", "Zabbix", "Docker", "OpenVPN"];

export const Trust: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {metrics.map((item, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="text-center">
                <div className="inline-flex p-3 rounded-full bg-electric/10 mb-4">
                  <item.icon className="w-6 h-6 text-electric" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{item.value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">{item.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tech Marquee / Logos */}
        <Reveal>
          <div className="text-center mb-8">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Технологический стек</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale transition-all duration-500 hover:grayscale-0">
            {technologies.map((tech) => (
              <span key={tech} className="text-xl md:text-2xl font-display font-bold text-gray-400 hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
};