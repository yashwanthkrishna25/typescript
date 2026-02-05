interface FooterProps {
  company: string;
}

const Footer: React.FC<FooterProps> = ({ company }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {year} {company}</p>
      <div className="footer-links">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <span>|</span>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        <span>|</span>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        <span>|</span>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
        <span>|</span>
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
