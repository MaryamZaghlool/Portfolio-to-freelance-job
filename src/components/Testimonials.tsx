import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'אמיר חדד',
      role:'סוחר בינלאומי',
      content: 'שירות תרגום מקצועי, מהיר ומדויק. תרגמה עבורי מסמכים חשובים מעברית לערבית בצורה חלקה וברורה. ממליץ בחום!',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150'
    },
    {
      name: 'נועה בן יוסף',
      role: 'יועצת תקשורת',
      content: 'עבודה יוצאת מן הכלל! תמללה עבורי הקלטות בעברית ברמה גבוהה מאוד, כולל סימון זמנים ותוכן ברור.',
      avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150'
    },
    {
      name: 'רוני שחר',
      role: 'מנהלת מדיה דיגיטלית',
      content: 'תודה רבה לתסנים על שירות תרגום הווידאו. הסרטון תורגם לערבית והותאם לקהל היעד בצורה מושלמת.',
      avatar: 'https://i.pinimg.com/736x/e3/3f/77/e33f7727565efbd95b3cebaa8baf899a.jpg'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">מה לקוחותיי אומרים</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            המלצות מלקוחותיי המרוצים שמספרות על הניסיון המקצועי שלהם
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 text-center leading-relaxed italic">
                {testimonial.content}
              </p>
              
              <div className="flex items-center justify-center">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ml-4"
                />
                <div className="text-right">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;