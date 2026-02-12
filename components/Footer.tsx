import React from 'react';
import { Cpu, Linkedin, Twitter, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 text-white mb-6">
              <div className="p-1.5 bg-electric/20 rounded-lg">
                <Cpu className="w-5 h-5 text-electric" />
              </div>
              <span className="text-lg font-display font-bold">
                Телеком<span className="text-electric">Проект</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Системный интегратор, специализирующийся на Open-Source решениях для бизнеса. Эффективность, безопасность, независимость.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Решения</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-electric transition-colors">IP-Телефония</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">VPN сети</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">MikroTik конфигурация</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Серверная инфраструктура</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Компания</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-electric transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Кейсы</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Вакансии</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Документы</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-electric transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Пользовательское соглашение</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Реквизиты</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} Телеком-Проект. Все права защищены.
          </p>
          <div className="text-gray-600 text-xs">
            Разработано в рамках стратегии импортозамещения
          </div>
        </div>
      </div>
    </footer>
  );
};