import { useState } from 'react'
import { ChevronDown, Info } from 'lucide-react'
import './Learn.css'

const Learn = () => {
  const [activeCategory, setActiveCategory] = useState('anatomy')
  const [activeAccordion, setActiveAccordion] = useState(null)

  const categories = [
    { id: 'anatomy', label: 'Anatomy', icon: '🦷' },
    { id: 'pathologies', label: 'Common Pathologies', icon: '⚕️' },
    { id: 'procedures', label: 'Surgical Procedures', icon: '🔬' }
  ]

  const anatomyContent = [
    {
      id: 1,
      title: 'Tooth Structure',
      icon: '🦷',
      description: 'Understanding the layers and components of a tooth',
      details: [
        { name: 'Enamel', info: 'The hardest substance in the human body, protecting the tooth from decay' },
        { name: 'Dentin', info: 'The layer beneath enamel, sensitive and porous, making up most of tooth structure' },
        { name: 'Pulp', info: 'Contains nerves and blood vessels, the living part of the tooth' },
        { name: 'Cementum', info: 'Covers the tooth root and helps anchor it to the jawbone' }
      ]
    },
    {
      id: 2,
      title: 'Gum Anatomy',
      icon: '🫦',
      description: 'The soft tissue surrounding and protecting teeth',
      details: [
        { name: 'Gingiva', info: 'The visible part of gums surrounding teeth, protecting underlying structures' },
        { name: 'Periodontal Ligament', info: 'Connects tooth root to the jawbone, acting as a shock absorber' },
        { name: 'Alveolar Bone', info: 'The bone that holds tooth sockets and supports teeth' }
      ]
    },
    {
      id: 3,
      title: 'Types of Teeth',
      icon: '😁',
      description: 'Different teeth serve different functions',
      details: [
        { name: 'Incisors', info: '8 front teeth used for cutting and biting food' },
        { name: 'Canines', info: '4 pointed teeth used for tearing food' },
        { name: 'Premolars', info: '8 teeth used for crushing and grinding food' },
        { name: 'Molars', info: '12 large teeth including wisdom teeth, used for grinding food' }
      ]
    }
  ]

  const pathologiesContent = [
    {
      id: 1,
      title: 'Dental Caries (Cavities)',
      icon: '🪥',
      description: 'Tooth decay caused by bacteria producing acid that erodes enamel',
      severity: 'Common',
      symptoms: ['Toothache', 'Tooth sensitivity', 'Visible holes or pits', 'Pain when eating'],
      prevention: ['Regular brushing', 'Flossing daily', 'Reduce sugar intake', 'Regular dental checkups']
    },
    {
      id: 2,
      title: 'Gingivitis',
      icon: '🩸',
      description: 'Inflammation of gums caused by plaque buildup',
      severity: 'Preventable',
      symptoms: ['Red, swollen gums', 'Bleeding when brushing', 'Bad breath', 'Tender gums'],
      prevention: ['Proper oral hygiene', 'Regular cleaning', 'Antibacterial mouthwash', 'Quit smoking']
    },
    {
      id: 3,
      title: 'Periodontitis',
      icon: '⚠️',
      description: 'Advanced gum disease affecting bone and tissue',
      severity: 'Serious',
      symptoms: ['Receding gums', 'Loose teeth', 'Pus between teeth', 'Persistent bad breath'],
      prevention: ['Early gingivitis treatment', 'Professional cleaning', 'Good oral hygiene', 'Healthy diet']
    },
    {
      id: 4,
      title: 'Tooth Sensitivity',
      icon: '❄️',
      description: 'Discomfort when consuming hot, cold, sweet, or acidic items',
      severity: 'Common',
      symptoms: ['Sharp pain', 'Temporary discomfort', 'Pain when brushing', 'Sensitivity to temperature'],
      prevention: ['Soft-bristled toothbrush', 'Desensitizing toothpaste', 'Avoid acidic foods', 'Proper brushing technique']
    }
  ]

  const proceduresContent = [
    {
      id: 1,
      title: 'Root Canal Treatment',
      icon: '💉',
      description: 'Procedure to save an infected or damaged tooth',
      steps: ['Anesthesia application', 'Access opening created', 'Cleaning infected pulp', 'Canal shaping and disinfection', 'Filling and sealing', 'Crown placement if needed']
    },
    {
      id: 2,
      title: 'Tooth Extraction',
      icon: '🔧',
      description: 'Removal of a tooth that cannot be saved',
      steps: ['Local anesthesia', 'Tooth loosening', 'Careful extraction', 'Socket cleaning', 'Gauze placement', 'Healing instructions']
    },
    {
      id: 3,
      title: 'Dental Implant',
      icon: '⚙️',
      description: 'Artificial tooth root placed in jawbone',
      steps: ['Initial consultation', 'Implant placement surgery', 'Healing period (3-6 months)', 'Abutment placement', 'Custom crown fitting', 'Final adjustments']
    },
    {
      id: 4,
      title: 'Teeth Scaling & Cleaning',
      icon: '🪥',
      description: 'Professional cleaning to remove plaque and tartar',
      steps: ['Oral examination', 'Plaque removal with scaler', 'Tartar removal', 'Teeth polishing', 'Fluoride treatment', 'Oral hygiene guidance']
    }
  ]

  const dictionary = [
    {
      term: 'Enamel',
      definition: 'The outermost layer of the tooth, composed primarily of hydroxyapatite crystals. It is the hardest substance in the human body, protecting teeth from decay and mechanical stress.'
    },
    {
      term: 'Dentin',
      definition: 'The layer beneath the enamel, making up the bulk of the tooth. Contains microscopic tubules that connect to the pulp, making it sensitive to temperature and pressure changes.'
    },
    {
      term: 'Pulp',
      definition: 'The soft tissue center of the tooth containing blood vessels, nerves, and connective tissue. Provides nutrients and sensory function to the tooth.'
    },
    {
      term: 'Gingivitis',
      definition: 'Inflammation of the gums (gingiva) typically caused by bacterial plaque buildup. Characterized by redness, swelling, and bleeding during brushing.'
    },
    {
      term: 'Periodontitis',
      definition: 'Advanced gum disease where inflammation extends to the bone and supporting structures. Can lead to tooth loss if untreated.'
    },
    {
      term: 'Occlusion',
      definition: 'The alignment and contact between upper and lower teeth when the jaw closes. Proper occlusion is essential for efficient chewing and jaw health.'
    },
    {
      term: 'Orthodontics',
      definition: 'The branch of dentistry focused on diagnosing and correcting misaligned teeth and jaws using braces, aligners, or other appliances.'
    },
    {
      term: 'Prophylaxis',
      definition: 'Professional teeth cleaning procedure to remove plaque, calculus, and stains. Preventive treatment to maintain oral health.'
    },
    {
      term: 'Calculus',
      definition: 'Hardened plaque (tartar) that forms on teeth and can only be removed by a dental professional. Forms when plaque is not removed regularly.'
    },
    {
      term: 'Malocclusion',
      definition: 'Misalignment of teeth or incorrect relation between the upper and lower dental arches. Can affect chewing, speech, and appearance.'
    }
  ]

  const renderContent = () => {
    if (activeCategory === 'anatomy') {
      return (
        <div className="content-grid">
          {anatomyContent.map((item) => (
            <div key={item.id} className="content-card card">
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p className="card-description">{item.description}</p>
              <div className="details-list">
                {item.details.map((detail, index) => (
                  <div key={index} className="detail-item">
                    <strong>{detail.name}:</strong> {detail.info}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    }

    if (activeCategory === 'pathologies') {
      return (
        <div className="content-grid">
          {pathologiesContent.map((item) => (
            <div key={item.id} className="content-card card">
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p className="card-description">{item.description}</p>
              <span className={`badge badge-${item.severity.toLowerCase()}`}>
                {item.severity}
              </span>
              
              <div className="info-section">
                <h4>Symptoms:</h4>
                <ul className="info-list">
                  {item.symptoms.map((symptom, index) => (
                    <li key={index}>{symptom}</li>
                  ))}
                </ul>
              </div>

              <div className="info-section">
                <h4>Prevention:</h4>
                <ul className="info-list">
                  {item.prevention.map((prev, index) => (
                    <li key={index}>{prev}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )
    }

    if (activeCategory === 'procedures') {
      return (
        <div className="content-grid">
          {proceduresContent.map((item) => (
            <div key={item.id} className="content-card card">
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p className="card-description">{item.description}</p>
              <div className="procedure-steps">
                <h4>Procedure Steps:</h4>
                {item.steps.map((step, index) => (
                  <div key={index} className="step-item">
                    <span className="step-number">{index + 1}</span>
                    <span className="step-text">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    }
  }

  return (
    <div className="learn-page fade-in">
      <div className="learn-container">
        {/* Sidebar Navigation */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <h2>📚 Educational Atlas</h2>
            <p>Explore dental anatomy, conditions, and procedures</p>
          </div>
          <nav className="sidebar-nav">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`sidebar-button ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="sidebar-icon">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="main-content">
          <div className="content-header">
            <h1>
              {categories.find((c) => c.id === activeCategory)?.label}
            </h1>
            <p className="content-subtitle">
              {activeCategory === 'anatomy' && 'Learn about tooth structures and oral anatomy'}
              {activeCategory === 'pathologies' && 'Understanding common dental conditions and prevention'}
              {activeCategory === 'procedures' && 'Step-by-step breakdown of dental procedures'}
            </p>
          </div>

          {renderContent()}

          {/* Dictionary Section */}
          <section className="dictionary-section">
            <div className="section-header">
              <Info size={24} />
              <h2>Dental Dictionary</h2>
            </div>
            <p className="section-description">
              Simplified explanations of complex dental terminology
            </p>
            <div className="accordion-container">
              {dictionary.map((item, index) => (
                <div key={index} className="accordion-item">
                  <button
                    className={`accordion-header ${activeAccordion === index ? 'active' : ''}`}
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  >
                    <span className="accordion-term">{item.term}</span>
                    <ChevronDown 
                      className={`accordion-icon ${activeAccordion === index ? 'rotated' : ''}`} 
                      size={20} 
                    />
                  </button>
                  {activeAccordion === index && (
                    <div className="accordion-content">
                      <p>{item.definition}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Learn
