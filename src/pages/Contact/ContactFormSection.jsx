import React, { useState } from 'react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="w-full bg-[#f9fafb] py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[24px]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#374151] text-3xl font-bold mb-4">
              How can we help?
            </h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#374151] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#019248] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#374151] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#019248] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#374151] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#019248] focus:border-transparent outline-none transition-all resize-vertical"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#fb0100] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#e00000] transition-colors focus:ring-2 focus:ring-[#fb0100] focus:ring-offset-2 outline-none"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map and WhatsApp */}
        <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="w-full h-[300px] rounded-lg overflow-hidden shadow">
            <iframe
              title="Office location map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.160649122408!2d103.697!3d1.327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPioneer%20Centre!5e0!3m2!1sen!2ssg!4v1690000000000"
            ></iframe>
          </div>
          <div className="flex items-center">
            <a
              href="https://wa.me/6581195016"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[var(--brand-dark-green)] text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent-yellow)]"
              aria-label="Chat on WhatsApp"
            >
              <span>WhatsApp us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
