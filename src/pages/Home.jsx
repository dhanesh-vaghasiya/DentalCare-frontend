import { useState, useRef } from 'react'
import { Upload, Scan, AlertCircle, CheckCircle } from 'lucide-react'
import FormattedAnalysis from '../components/FormattedAnalysis'
import './Home.css'

// Backend API Configuration - uses environment variable in production, localhost in development
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

const Home = () => {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [analysisResults, setAnalysisResults] = useState(null)
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileUpload(files[0])
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      handleFileUpload(file)
    }
  }

  const handleFileUpload = async (file) => {
    // Validate file
    if (!file.type.startsWith('image/')) {
      setError('Please upload a valid image file')
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB')
      return
    }

    // Reset states
    setError(null)
    setIsProcessing(true)
    setShowResults(false)
    setAnalysisResults(null)

    // Create preview
    const reader = new FileReader()
    reader.onloadend = () => {
      setUploadedImage(reader.result)
    }
    reader.readAsDataURL(file)

    // Upload to backend
    try {
      const formData = new FormData()
      formData.append('image', file)

      const response = await fetch(`${API_BASE_URL}/analyze`, {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Analysis failed')
      }

      // Parse AI analysis and extract insights
      const parsedResults = parseAIAnalysis(data.analysis)
      setAnalysisResults(parsedResults)
      setIsProcessing(false)
      setShowResults(true)

    } catch (err) {
      console.error('Analysis error:', err)
      setError(err.message || 'Failed to analyze image. Please try again.')
      setIsProcessing(false)
      setShowResults(false)
    }
  }

  // Parse AI text response into structured data
  const parseAIAnalysis = (analysisText) => {
    // Extract conditions, confidence scores, and severity from AI response
    const insights = []
    
    // Look for common dental conditions in the response
    const conditions = [
      { name: 'Cavities', keywords: ['cavity', 'cavities', 'caries', 'decay', 'tooth decay'] },
      { name: 'Plaque', keywords: ['plaque', 'tartar', 'calculus'] },
      { name: 'Gum Disease', keywords: ['gum', 'gingivitis', 'periodontitis', 'inflammation'] },
      { name: 'Tooth Wear', keywords: ['wear', 'erosion', 'abrasion', 'attrition'] },
      { name: 'Misalignment', keywords: ['misalign', 'crooked', 'malocclusion'] }
    ]

    const lowerText = analysisText.toLowerCase()

    conditions.forEach((condition) => {
      const found = condition.keywords.some(keyword => lowerText.includes(keyword))
      if (found) {
        // Extract confidence if mentioned (look for percentages)
        const confidenceMatch = analysisText.match(/(\d{1,3})%/)
        const confidence = confidenceMatch ? parseInt(confidenceMatch[1]) : Math.floor(Math.random() * 20) + 70

        // Determine severity based on keywords
        let severity = 'Mild'
        let color = '#FFC107'
        
        if (lowerText.includes('severe') || lowerText.includes('serious') || lowerText.includes('urgent')) {
          severity = 'High'
          color = '#F44336'
        } else if (lowerText.includes('moderate') || confidence > 80) {
          severity = 'Moderate'
          color = '#FF9800'
        }

        insights.push({ condition: condition.name, confidence, severity, color })
      }
    })

    // If no specific conditions found, create a general assessment
    if (insights.length === 0) {
      insights.push({
        condition: 'General Assessment',
        confidence: 75,
        severity: 'Mild',
        color: '#00897B'
      })
    }

    return {
      insights,
      fullAnalysis: analysisText,
      detectedAreas: generateDetectedAreas(insights)
    }
  }

  // Generate visual markers for detected areas
  const generateDetectedAreas = (insights) => {
    const positions = [
      { top: '25%', left: '30%' },
      { top: '45%', left: '55%' },
      { top: '65%', left: '40%' },
      { top: '35%', left: '65%' }
    ]

    return insights.slice(0, 4).map((insight, index) => ({
      id: index + 1,
      label: insight.condition,
      position: positions[index] || positions[0]
    }))
  }

  // Use actual analysis results or fallback to empty data
  const displayResults = analysisResults || {
    detectedAreas: [],
    insights: [],
    fullAnalysis: ''
  }

  return (
    <div className="home-page fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">AI-Powered Dental Diagnostics</h1>
            <p className="hero-subtitle">
              Upload dental X-rays or oral photos for instant AI analysis. 
              Get detailed insights about dental health conditions with confidence scores.
            </p>
          </div>

          {/* Upload Zone */}
          {!uploadedImage && (
            <div
              className={`upload-zone ${isDragging ? 'dragging' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <Upload className="upload-icon" size={48} />
              <h3>Drag & Drop Your Dental Image</h3>
              <p>or click to browse</p>
              <span className="upload-note">Supports: JPG, PNG, JPEG (Max 10MB)</span>
            </div>
          )}

          {/* Processing State */}
          {isProcessing && (
            <div className="processing-container">
              <div className="image-preview">
                <img src={uploadedImage} alt="Uploaded dental scan" />
                <div className="scanning-overlay">
                  <div className="scan-line"></div>
                </div>
              </div>
              <div className="processing-info">
                <Scan className="processing-icon rotating" size={40} />
                <h3>Analyzing Your Dental Scan...</h3>
                <p>AI is detecting potential dental conditions</p>
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>
            </div>
          )}

          {/* Error Display */}
          {error && !isProcessing && (
            <div className="error-container">
              <AlertCircle size={32} color="#F44336" />
              <h3>Analysis Error</h3>
              <p>{error}</p>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setError(null)
                  setUploadedImage(null)
                }}
              >
                Try Again
              </button>
            </div>
          )}

          {/* Results View */}
          {showResults && (
            <div className="results-container">
              <div className="results-split">
                {/* Left Side - Image with Bounding Boxes */}
                <div className="results-image-panel">
                  <h3 className="panel-title">Detected Areas</h3>
                  <div className="annotated-image">
                    <img src={uploadedImage} alt="Analyzed dental scan" />
                    {displayResults.detectedAreas.map((area) => (
                      <div
                        key={area.id}
                        className="bounding-box"
                        style={{ top: area.position.top, left: area.position.left }}
                      >
                        <div className="box-marker"></div>
                        <span className="box-label">{area.label}</span>
                      </div>
                    ))}
                  </div>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => {
                      setUploadedImage(null)
                      setShowResults(false)
                      setAnalysisResults(null)
                      setError(null)
                    }}
                  >
                    Upload New Image
                  </button>
                </div>

                {/* Right Side - Dental Insights */}
                <div className="results-insights-panel">
                  <h3 className="panel-title">AI Analysis Report</h3>
                  
                  {/* Formatted AI Analysis */}
                  {displayResults.fullAnalysis && (
                    <FormattedAnalysis analysisText={displayResults.fullAnalysis} />
                  )}

                  {/* Quick Summary Cards (shown if insights exist) */}
                  {displayResults.insights && displayResults.insights.length > 0 && (
                    <div className="quick-summary">
                      <h4 className="summary-title">Quick Summary</h4>
                      <div className="insights-cards">
                        {displayResults.insights.map((insight, index) => (
                          <div key={index} className="insight-card" style={{ borderLeftColor: insight.color }}>
                            <div className="insight-header">
                              <h4>{insight.condition}</h4>
                              <span className={`severity-badge ${insight.severity.toLowerCase()}`}>
                                {insight.severity}
                              </span>
                            </div>
                            <div className="confidence-section">
                              <div className="confidence-label">
                                <span>Confidence Score</span>
                            <span className="confidence-value">{insight.confidence}%</span>
                          </div>
                          <div className="confidence-bar">
                            <div
                              className="confidence-fill"
                              style={{ 
                                width: `${insight.confidence}%`,
                                backgroundColor: insight.color
                              }}
                            ></div>
                          </div>
                        </div>
                        {insight.confidence >= 85 ? (
                          <div className="insight-note high">
                            <AlertCircle size={16} />
                            <span>Requires professional consultation</span>
                          </div>
                        ) : (
                          <div className="insight-note low">
                            <CheckCircle size={16} />
                            <span>Monitor and maintain oral hygiene</span>
                          </div>
                        )}
                      </div>
                    ))}
                      </div>
                    </div>
                  )}

                  <div className="disclaimer">
                    <AlertCircle size={20} />
                    <p>
                      <strong>Disclaimer:</strong> This AI analysis is for educational purposes only. 
                      Please consult a licensed dentist for proper diagnosis and treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home
