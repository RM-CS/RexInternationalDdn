import React from 'react'

const CardTwo = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 flex justify-end items-center order-last md:order-first" data-aos="fade-up">
                    <img className="rounded-full pl-6 " src={Image3} alt="img" />
                </div>
                <div className="p-12 flex justify-start items-center md:order-last" data-aos="fade-up">
                    <div className="pl-12 pr-12 md:pl-12">
                        <h2 className="text-2xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-red-900 via-red-600 to-red-500 text-left">
                            Why to choose Rex International brand?
                        </h2>
                        <div class="w-24 h-1 bg-gradient-to-l from-red-900 via-red-600 to-red-500 mt-2 mb-8 "></div>
                        <p className="mt-2 text-justify lg:text-justify">
                            Choosing Rex International means choosing sustainability, innovation, and excellence. Here are several reasons why our brand stands out: </p>
                        <ul className="text-justify lg:text-justify">
                            <li><strong>Environmentally Friendly Solutions:</strong> We prioritize sustainability by offering a range of green chemicals and eco-friendly products that minimize harm to the environment while delivering effective results.</li>
                            <li><strong>Comprehensive Services:</strong> From housekeeping and sanitization to paper product dispensing systems, we provide comprehensive solutions to meet all your cleaning and hygiene needs under one roof.</li>
                            <li><strong>Quality and Performance:</strong> Our products and services are of the highest quality, ensuring superior performance and results that exceed expectations.</li>
                            <li><strong>Customer Satisfaction:</strong> We prioritize customer satisfaction by offering personalized solutions, responsive support, and a commitment to exceeding customer expectations.</li>
                            <li><strong>Innovation:</strong> We stay at the forefront of industry trends and advancements, offering innovative solutions that enhance efficiency, convenience, and sustainability.</li>
                            <li>Community Engagement: As a socially responsible company, we actively engage with our community and support initiatives that promote environmental conservation and community well-being.</li>
                            <li><strong>Trusted Partner:</strong> With years of experience and a proven track record of success, Rex International is a trusted partner you can rely on to deliver exceptional results and unparalleled service.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardTwo