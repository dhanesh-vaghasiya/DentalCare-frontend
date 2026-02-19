import './Team.css'

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Vishv',
      role: 'AI Specialist & Project Lead',
      semester: 'B.Tech Semester 6',
      bio: 'Specialized in machine learning and computer vision. Led the development of the AI diagnostic engine for dental image analysis.',
      avatar: "/images/team/vishv.jpeg",
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'arjun.sharma@example.com'
    },
    {
      id: 2,
      name: 'Neer',
      role: 'Frontend Lead & UI/UX Designer',
      semester: 'B.Tech Semester 6',
      bio: 'Passionate about creating intuitive user experiences. Designed and implemented the complete frontend architecture and visual design.',
      avatar: "/images/team/neer.jpeg",
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'priya.patel@example.com'
    },
    {
      id: 3,
      name: 'Tirth',
      role: 'Backend Developer',
      semester: 'B.Tech Semester 6',
      bio: 'Expert in API development and database management. Built the robust backend infrastructure and RESTful API services.',
      avatar: "/images/team/tirth.jpeg",
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'rohan.kumar@example.com'
    },
    {
      id: 4,
      name: 'Sujal',
      role: 'Data Scientist',
      semester: 'B.Tech Semester 6',
      bio: 'Specialized in data preprocessing and model training. Curated the dental image dataset and optimized ML model accuracy.',
      avatar: "/images/team/sujal.jpeg",
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'ananya.singh@example.com'
    },
    {
      id: 5,
      name: 'Smit',
      role: 'DevOps Engineer',
      semester: 'B.Tech Semester 6',
      bio: 'Focused on deployment and system reliability. Set up CI/CD pipelines and cloud infrastructure for seamless application delivery.',
      avatar: "/images/team/smit.jpeg",
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'vikram.reddy@example.com'
    },
    {
      id: 6,
      name: 'Luv',
      role: 'Quality Assurance Lead',
      semester: 'B.Tech Semester 6',
      bio: 'Ensuring application reliability and performance. Conducted comprehensive testing and user acceptance validation.',
      avatar: "/images/team/luv.jpeg",
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'sneha.gupta@example.com'
    }
  ]

return (
    <div className="team-page fade-in">
        <div className="container">
            {/* Header Section */}
            <div className="team-header">
                <h1 className="team-title">Meet Our Student Research Team</h1>
             
            </div>

            {/* Team Grid */}
            <div className="team-grid">
                {teamMembers.map((member) => (
                    <div key={member.id} className="team-card card">
                        <div className="avatar-container">
                            <img src={member.avatar} alt={member.name} className="avatar" />
                            <div className="avatar-ring"></div>
                        </div>
                        
                        <div className="member-info">
                            <h3 className="member-name">{member.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
)
}

export default Team
