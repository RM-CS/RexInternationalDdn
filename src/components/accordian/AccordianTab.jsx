import { ArrowBigDown, ArrowBigUp } from 'lucide-react';
import React, { useState } from 'react';

const AccordionTab = ({ title, children, isOpen, onClick }) => {
    const maxHeight = isOpen ? '1000px' : '0';
    const transitionDuration = isOpen ? '2s' : '0.6s';
    
    return (
        <div className="border my-5 border-blue-300 hover:border-red-500 rounded-t-xl font-philosopher">
            <div className={`flex justify-between items-center px-4 py-5 rounded-t-xl hover:text-red-500 hover:bg-red-200 font-semibold cursor-pointer ${isOpen ? 'hover:text-red-500 bg-red-200 font-semibold text-red-500' : ''}`} onClick={onClick}>
                <span className="font-semibold">{title}</span>
                <span className="text-xl">{isOpen ? <b><ArrowBigUp /></b> : <b><ArrowBigDown /></b>}</span>
            </div>
            <div style={{ maxHeight, overflow: 'hidden', transition: `max-height ${transitionDuration} ease-out` }}>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleAccordionClick = (index) => {
        setOpenIndex(index === openIndex ? -1 : index);
    };

    return (
        <div className="w-[40%] mx-auto text-blue-900 text-justify">
            
            <AccordionTab
                title="Customer Satisfaction"
                isOpen={openIndex === 0}
                onClick={() => handleAccordionClick(0)}
            >
                <p>It is our utmost priority and serves as the cornerstone of our business philosophy. We are dedicated to ensuring that every interaction with our products or services exceeds our customers' expectations, fostering loyalty and trust. Through continuous feedback, personalized support, and unwavering commitment to excellence, we strive to consistently deliver unparalleled satisfaction to all our valued customers.</p>
            </AccordionTab>
            <AccordionTab
                title="Our Shipment"
                isOpen={openIndex === 1}
                onClick={() => handleAccordionClick(1)}
            >
                <p>The crucial process of delivering goods from the company to customers or designated destinations. It involves meticulous planning, efficient logistics, and timely delivery to meet customer expectations. Companies prioritize smooth operations, often relying on partnerships with shipping carriers to ensure reliable transportation. Implementing tracking systems and quality control measures helps maintain transparency and address any issues promptly, ultimately aiming to provide a seamless experience for customers.</p>
            </AccordionTab>
            <AccordionTab
                title="Alliance with Partners"
                isOpen={openIndex === 2}
                onClick={() => handleAccordionClick(2)}
            >
                <p>cornerstone of our success. By strategically aligning with industry-leading partners, we leverage their expertise, resources, and networks to amplify our impact and deliver exceptional value to our customers. Together, we create synergistic relationships that drive innovation, unlock new opportunities, and foster mutual growth. Through trust, transparency, and shared goals, our alliances empower us to achieve collective success and thrive in a rapidly evolving business landscape.</p>
            </AccordionTab>
            <AccordionTab
                title="Our Workforce and Workplace"
                isOpen={openIndex === 3}
                onClick={() => handleAccordionClick(3)}
            >
                <p>Epitomize our commitment to fostering a dynamic, inclusive, and collaborative environment where every individual is empowered to thrive and contribute their best. We prioritize diversity, equity, and inclusion, recognizing that our strength lies in the unique talents and perspectives of each team member. Our workplace culture is built on mutual respect, transparency, and continuous learning, fostering innovation and creativity. We prioritize employee well-being, offering opportunities for growth, development, and work-life balance. Together, our diverse workforce forms the cornerstone of our success, driving excellence and achieving our collective goals.</p>
            </AccordionTab>
                      
        </div>
    )
}

export default Accordion;
