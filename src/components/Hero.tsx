import React from 'react';

const Hero: React.FC = () => {
    return (
        <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://i.pinimg.com/736x/8e/0f/5e/8e0f5e6850c2c8026c4de41949a4d325.jpg")`,
                    backgroundPosition:'center'
                }}
            />


            <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                    תסנים מוחמד
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                    מתרגם לעברית
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    צור קשר עכשיו
                </button>
            </div>
        </div>
    );
};

export default Hero;