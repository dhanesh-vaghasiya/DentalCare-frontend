import { AlertCircle, CheckCircle2, MapPin, Stethoscope, Lightbulb } from 'lucide-react'
import './FormattedAnalysis.css'

const FormattedAnalysis = ({ analysisText }) => {
  // Parse the analysis text into sections
  const parseAnalysis = (text) => {
    const sections = {
      conditions: [],
      areas: [],
      findings: [],
      recommendations: []
    }

    // Split text by markdown headers
    const lines = text.split('\n')
    let currentSection = null

    lines.forEach(line => {
      const trimmed = line.trim()
      
      // Detect section headers
      if (trimmed.includes('DETECTED CONDITIONS') || trimmed.includes('Detected Conditions')) {
        currentSection = 'conditions'
      } else if (trimmed.includes('AFFECTED AREAS') || trimmed.includes('Affected Areas')) {
        currentSection = 'areas'
      } else if (trimmed.includes('DETAILED FINDINGS') || trimmed.includes('Findings')) {
        currentSection = 'findings'
      } else if (trimmed.includes('RECOMMENDATIONS') || trimmed.includes('Recommendation')) {
        currentSection = 'recommendations'
      } else if (trimmed && !trimmed.startsWith('#')) {
        // Add content to current section
        if (currentSection && trimmed.length > 2) {
          // Clean up bullet points
          const cleaned = trimmed.replace(/^[•\-*]\s*/, '').replace(/^\d+\.\s*/, '')
          if (cleaned) {
            sections[currentSection].push(cleaned)
          }
        }
      }
    })

    return sections
  }

  const sections = parseAnalysis(analysisText)

  // Extract severity from condition text
  const getSeverity = (text) => {
    if (text.toLowerCase().includes('high') || text.toLowerCase().includes('severe')) return 'high'
    if (text.toLowerCase().includes('moderate')) return 'moderate'
    return 'mild'
  }

  // Extract confidence from condition text
  const getConfidence = (text) => {
    const match = text.match(/(\d{1,3})%/)
    return match ? parseInt(match[1]) : null
  }

  return (
    <div className="formatted-analysis">
      {/* Detected Conditions */}
      {sections.conditions.length > 0 && (
        <div className="analysis-section conditions-section">
          <div className="section-header">
            <AlertCircle size={24} />
            <h3>Detected Conditions</h3>
          </div>
          <div className="conditions-list">
            {sections.conditions.map((condition, index) => {
              const severity = getSeverity(condition)
              const confidence = getConfidence(condition)
              
              return (
                <div key={index} className={`condition-item severity-${severity}`}>
                  <div className="condition-content">
                    <span className="condition-text">{condition}</span>
                    {confidence && (
                      <div className="confidence-badge">
                        {confidence}% confidence
                      </div>
                    )}
                  </div>
                  <span className={`severity-pill ${severity}`}>
                    {severity.charAt(0).toUpperCase() + severity.slice(1)}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Affected Areas */}
      {sections.areas.length > 0 && (
        <div className="analysis-section areas-section">
          <div className="section-header">
            <MapPin size={24} />
            <h3>Affected Areas</h3>
          </div>
          <div className="areas-list">
            {sections.areas.map((area, index) => (
              <div key={index} className="area-item">
                <span className="area-marker">📍</span>
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detailed Findings */}
      {sections.findings.length > 0 && (
        <div className="analysis-section findings-section">
          <div className="section-header">
            <Stethoscope size={24} />
            <h3>Detailed Findings</h3>
          </div>
          <div className="findings-list">
            {sections.findings.map((finding, index) => (
              <div key={index} className="finding-item">
                <CheckCircle2 size={16} />
                <p>{finding}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations */}
      {sections.recommendations.length > 0 && (
        <div className="analysis-section recommendations-section">
          <div className="section-header">
            <Lightbulb size={24} />
            <h3>Professional Recommendations</h3>
          </div>
          <div className="recommendations-list">
            {sections.recommendations.map((rec, index) => (
              <div key={index} className="recommendation-item">
                <span className="rec-number">{index + 1}</span>
                <p>{rec}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fallback if no sections found */}
      {sections.conditions.length === 0 && 
       sections.areas.length === 0 && 
       sections.findings.length === 0 && 
       sections.recommendations.length === 0 && (
        <div className="analysis-section raw-section">
          <div className="section-header">
            <Stethoscope size={24} />
            <h3>Analysis Report</h3>
          </div>
          <div className="raw-content">
            {analysisText.split('\n').map((line, index) => (
              line.trim() && <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default FormattedAnalysis
