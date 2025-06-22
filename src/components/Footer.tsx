import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">

          {/* تعريف تسنيم */}
          <div>
            <h3 className="text-2xl font-bold mb-4">תסנים מוחמד</h3>
            <p className="text-gray-300 leading-relaxed">
              מתרגמת מקצועית מעברית לערבית ולהפך. מציעה שירותי תרגום, תמלול, כתוביות, הגהה ותרגום אתרי אינטרנט – באיכות גבוהה, באמינות ובזמן.
            </p>
          </div>

          {/* كيشורים מהירים */}
          <div>
            <h4 className="text-lg font-semibold mb-4">קישורים מהירים</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">בית</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">אודות</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">שירותים</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">צור קשר</a></li>
            </ul>
          </div>


          {/* פרטי התקשרות */}
          <div>
            <h4 className="text-lg font-semibold mb-4">פרטי התקשרות</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 ml-3" />
                <span className="text-gray-300">+201098728921</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 ml-3" />
                <span className="text-gray-300">tasniemmohamed9@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 ml-3" />
                <a
                  href="https://wa.me/+201098728921"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  שלחו הודעה בוואטסאפ
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
