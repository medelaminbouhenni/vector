import React from 'react';
import StyledCheckIcon from './icons/StyledCheckIcon';

const services = [
    'Advertising Photography & Videography',
    'Professional Editing & Directing',
    'Social Media Page Management',
    'Digital Marketing & Advertising Campaigns',
    'Visual Identity & Brand Design',
];

const InfoPanel: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12">
        <div 
            aria-hidden="true" 
            className="hidden lg:block absolute top-[65%] -left-16 w-40 h-40 border-2 border-blue-500 rounded-xl -translate-y-1/2"
        ></div>
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-12 rounded-2xl shadow-lg">
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-12">
                About Vector Agency
            </h2>

            <div className="max-w-4xl mx-auto text-gray-300 space-y-8">
                <p className="text-lg md:text-xl text-white leading-relaxed">
                    Vector Agency is an institution specializing in audiovisual production and digital marketing, combining creativity and expertise to deliver integrated media solutions that enhance brand presence and support project success.
                </p>
                <p className="leading-relaxed">
                    Since 2018, we have accompanied numerous institutions both inside and outside Algeria. We work with state-affiliated bodies, Algerian government institutions, and private companies, providing professional services in design, photography, editing, content creation, and digital page management.
                </p>

                <div className="flex flex-col md:flex-row gap-8 items-start bg-black/20 p-8 rounded-lg border border-white/10">
                    <div className="flex-1">
                       <div className="inline-block bg-gradient-to-r from-[#F70670] to-[#c77dff] rounded-md px-4 py-2 mb-4 shadow-lg">
                           <h3 className="text-xl font-bold text-white">Our Vision & Mission</h3>
                       </div>
                       <div className="space-y-4">
                           <p>Our work is driven by a clear vision centered on quality, speed, and innovation, supported by a professional team that includes specialists in various creative and technical fields.</p>
                           <p>Our mission is to make every project a visually told success story, and to ensure every brand appears strong, impactful, and unforgettable.</p>
                       </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#3A0B3D]/50 to-[#F70670]/50 p-6 rounded-lg border border-[#F70670]/30 w-full md:w-auto text-center self-center">
                        <p className="text-4xl font-bold text-white">15+</p>
                        <p className="text-pink-300">Team Members</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-white mb-6">Our Services</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {services.map((service, index) => (
                            <li key={index} className="flex items-start">
                                <StyledCheckIcon className="w-6 h-6 mr-3 text-pink-400 flex-shrink-0 mt-1" />
                                <span>{service}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <blockquote className="text-center italic text-pink-300 text-xl pt-8 border-t border-white/10 !mt-16">
                    "Infinite clarity, infinite precision."
                </blockquote>
            </div>
        </div>
    </section>
  );
};

export default InfoPanel;