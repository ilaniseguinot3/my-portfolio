const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Ilani. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-purple-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
