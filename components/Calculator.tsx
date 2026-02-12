import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';

export const Calculator: React.FC = () => {
  const [employees, setEmployees] = useState(50);
  
  // Logic: Employees * 500 rub/month savings * 12 months
  const monthlySavingPerEmployee = 500;
  const annualSaving = employees * monthlySavingPerEmployee * 12;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="calculator" className="py-24 bg-gradient-to-b from-[#1d232c] to-[#151921]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-electric/10 to-verdigris/10 rounded-3xl p-1 border border-white/5">
          <div className="bg-[#1d232c] rounded-[22px] p-8 md:p-16 relative overflow-hidden">
            {/* Background decorative blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/5 rounded-full filter blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
              <Reveal>
                <div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                    Посчитайте вашу <br />
                    <span className="text-verdigris">реальную выгоду</span>
                  </h2>
                  <p className="text-gray-400 text-lg mb-8">
                    Переход на Open-Source решения позволяет отказаться от лицензионных платежей. 
                    В среднем, экономия составляет 500 ₽ на сотрудника в месяц по сравнению с облачными решениями.
                  </p>
                  
                  <div className="mb-10">
                    <label className="block text-sm font-medium text-gray-300 mb-4">
                      Количество сотрудников: <span className="text-white font-bold text-lg ml-2">{employees}</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="500"
                      step="10"
                      value={employees}
                      onChange={(e) => setEmployees(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-electric hover:accent-verdigris transition-colors"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>10</span>
                      <span>500+</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-md">
                  <div className="text-gray-400 font-medium mb-2">Прогнозируемая экономия в год</div>
                  <div className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric to-verdigris mb-6">
                    {formatCurrency(annualSaving)}
                  </div>
                  <div className="space-y-4 text-left border-t border-white/10 pt-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Экономия в месяц</span>
                      <span className="text-white font-semibold">{formatCurrency(annualSaving / 12)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">ROI (Окупаемость)</span>
                      <span className="text-verdigris font-semibold">2-4 месяца</span>
                    </div>
                  </div>
                  <Button fullWidth className="mt-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Получить детальный расчет
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};