import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          🎓 Project Developed for Academic Research Purposes
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Dental Care. B.Tech Semester 6 Student Project.
        </p>
      </div>
    </footer>
  )
}

export default Footer
