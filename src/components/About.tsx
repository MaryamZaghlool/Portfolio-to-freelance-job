import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">אודותי</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="prose prose-lg text-right max-w-none">
               <p className="text-gray-700 mb-6 leading-relaxed"> בוגרת הפקולטה לאמנויות, המחלקה ללשון העברית. אני דוברת עברית שוטפת ובעלת תשוקה לתרגום בין עברית לערבית ולהיפך. יש לי ניסיון רב ב:</p>
              <ul className="text-gray-700 mb-6 leading-relaxed">
                <li> תרגום כתוב של טקסטים ומאמרים.</li>
                <li>תמלול קבצי שמע והמרתם לטקסטים מדויקים.</li>
                <li> תרגום סרטונים תוך התחשבות בהקשר התרבותי ובדיוק הלשוני.</li>
                <li> אני שואפת לעבוד בתחום התרגום ולספק שירותים מקצועיים המבטיחים איכות ועמידה בלוחות זמנים.</li>
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="./img.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;