import { useState } from 'react'
import { Calendar, Check, Sparkles } from 'lucide-react'
import './Services.css'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      id: 1,
      title: 'Routine Cleaning',
      price: '₹1,500',
      duration: '30-45 mins',
      icon: '🪥',
      description: 'Professional scaling and polishing to remove plaque and tartar',
      features: [
        'Complete oral examination',
        'Plaque and tartar removal',
        'Teeth polishing',
        'Fluoride treatment',
        'Oral hygiene guidance'
      ],
      popular: false
    },
    {
      id: 2,
      title: 'Dental Implants',
      price: 'From ₹25,000',
      duration: '3-6 months',
      icon: '🦷',
      description: 'Titanium root replacement for missing teeth with natural appearance',
      features: [
        '3D imaging and planning',
        'Surgical implant placement',
        'Osseointegration period',
        'Custom abutment fitting',
        'Permanent crown installation'
      ],
      popular: true
    },
    {
      id: 3,
      title: 'Root Canal Treatment',
      price: '₹4,000',
      duration: '90-120 mins',
      icon: '💉',
      description: 'Nerve repair and filling to save infected or damaged teeth',
      features: [
        'Digital X-ray diagnosis',
        'Complete anesthesia',
        'Infected pulp removal',
        'Canal cleaning and shaping',
        'Permanent filling and sealing'
      ],
      popular: false
    },
    {
      id: 4,
      title: 'Orthodontics',
      price: '₹35,000+',
      duration: '12-24 months',
      icon: '😁',
      description: 'Teeth alignment using traditional braces or clear aligners',
      features: [
        'Comprehensive smile analysis',
        'Custom treatment planning',
        'Metal or ceramic braces',
        'Clear aligner options',
        'Regular adjustments included'
      ],
      popular: true
    },
    {
      id: 5,
      title: 'Teeth Whitening',
      price: '₹8,000',
      duration: '60 mins',
      icon: '✨',
      description: 'Professional bleaching for a brighter, whiter smile',
      features: [
        'Shade assessment',
        'Gum protection application',
        'Medical-grade whitening gel',
        'LED light activation',
        'Post-treatment care kit'
      ],
      popular: false
    },
    {
      id: 6,
      title: 'Dental Crown & Bridge',
      price: '₹6,000 - ₹15,000',
      duration: '2-3 visits',
      icon: '👑',
      description: 'Restore damaged teeth or replace missing ones with custom prosthetics',
      features: [
        'Tooth preparation',
        'Digital impressions',
        'Temporary crown placement',
        'Custom ceramic/porcelain crown',
        'Permanent cementation'
      ],
      popular: false
    }
  ]

  const handleBooking = (service) => {
    setSelectedService(service)
    // In a real app, this would open a booking modal or redirect to booking page
    alert(`Booking consultation for ${service.title}. Our team will contact you shortly!`)
  }

  return (
    <div className="services-page fade-in">
      <div className="container">
        {/* Header Section */}
        <div className="services-header">
          <h1 className="services-title">Clinical Services & Pricing</h1>
          <p className="services-subtitle">
            Comprehensive dental care with transparent pricing. All treatments performed by experienced professionals using the latest technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className={`service-card card ${service.popular ? 'popular' : ''}`}>
              {service.popular && (
                <div className="popular-badge">
                  <Sparkles size={16} />
                  <span>Most Popular</span>
                </div>
              )}
              
              <div className="service-icon">{service.icon}</div>
              
              <div className="service-header">
                <h3 className="service-title">{service.title}</h3>
                <div className="service-pricing">
                  <span className="price">{service.price}</span>
                  <span className="duration">{service.duration}</span>
                </div>
              </div>

              <p className="service-description">{service.description}</p>

              <div className="service-features">
                <h4>What's Included:</h4>
                <ul className="features-list">
                  {service.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <Check size={18} className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`btn ${service.popular ? 'btn-primary' : 'btn-secondary'} book-btn`}
                onClick={() => handleBooking(service)}
              >
                <Calendar size={18} />
                Book Consultation
              </button>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="services-info">
          <div className="info-card">
            <div className="info-icon">🏥</div>
            <h3>State-of-the-Art Facility</h3>
            <p>Modern equipment and sterilization protocols ensuring the highest standards of care</p>
          </div>
          <div className="info-card">
            <div className="info-icon">👨‍⚕️</div>
            <h3>Experienced Professionals</h3>
            <p>Our team includes qualified dentists with 10+ years of clinical experience</p>
          </div>
          <div className="info-card">
            <div className="info-icon">💳</div>
            <h3>Flexible Payment Options</h3>
            <p>EMI plans available for all major treatments. Insurance accepted</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <h2>Need Help Choosing?</h2>
          <p>Our dental care specialists are here to guide you to the best treatment option</p>
          <button className="btn btn-primary cta-btn">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </div>
  )
}

export default Services
