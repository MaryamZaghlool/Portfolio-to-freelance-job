import React from 'react';
import { PenLine,Headphones,Clapperboard ,FileText,Globe,FileSignature } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <PenLine className="w-8 h-8" />,
      title: 'תרגום מעברית לערבית ולהפך',
      description: 'תרגום מדויק של מסמכים, טקסטים, מאמרים ותוכן שיווקי בין עברית לערבית ולהפך.'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'תמלול קבצי אודיו',
      description: 'תמלול מקצועי של ראיונות, הרצאות, פגישות והקלטות קוליות בעברית ובערבית.'
    },
    {
      icon: <Clapperboard  className="w-8 h-8" />,
      title: 'תרגום וכתוביות לווידאו',
      description: 'תרגום סרטונים ותוספת כתוביות בהתאמה לשפה ולתרבות, לצורכי תוכן שיווקי, חינוכי או מדיה חברתית.'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: ' הגהה ועריכה לשונית',
      description: 'בדיקת תרגומים קיימים, תיקון שגיאות לשוניות ושיפור סגנון הכתיבה.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'תרגום אתרי אינטרנט',
      description: 'תרגום אתרי אינטרנט, דפי נחיתה ותוכן דיגיטלי להרחבת קהל היעד הדובר ערבית או עברית.'
    },
       {
      icon: <FileSignature className="w-8 h-8" />,
      title: 'תרגום מסמכים משפטיים',
      description: 'תרגום מקצועי ומדויק של מסמכים משפטיים כגון חוזים, תקנונים, תצהירים וכתבי בית דין, תוך שמירה על ניסוח משפטי תקני והתאמה תרבותית ולשונית.'
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">השירותים שלי</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            השירותים שלי
            מגוון שירותי תרגום מקצועיים המותאמים לצרכים האישיים והעסקיים שלכם:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;