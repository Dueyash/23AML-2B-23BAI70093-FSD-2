import './App.css';
import { useState } from 'react';

function App() {
  // Dynamic card data array
  const [cards] = useState([
    {
      id: 1,
      title: 'Web Development',
      description: 'Learn HTML, CSS, JavaScript, and modern frameworks like React and Vue for building dynamic web applications.',
      image: 'https://via.placeholder.com/400x250/3498db/ffffff?text=Web+Dev',
      category: 'Technology',
      date: 'Jan 15, 2026'
    },
    {
      id: 2,
      title: 'Mobile Development',
      description: 'Master iOS and Android development with Swift, Kotlin, and cross-platform frameworks like React Native.',
      image: 'https://via.placeholder.com/400x250/e74c3c/ffffff?text=Mobile+Dev',
      category: 'Technology',
      date: 'Jan 18, 2026'
    },
    {
      id: 3,
      title: 'Data Science',
      description: 'Explore data analysis, machine learning, and AI using Python, pandas, scikit-learn, and TensorFlow.',
      image: 'https://via.placeholder.com/400x250/2ecc71/ffffff?text=Data+Science',
      category: 'Analytics',
      date: 'Jan 20, 2026'
    },
    {
      id: 4,
      title: 'Cloud Computing',
      description: 'Understand cloud platforms like AWS, Azure, and GCP for scalable and reliable application deployment.',
      image: 'https://via.placeholder.com/400x250/f39c12/ffffff?text=Cloud',
      category: 'Infrastructure',
      date: 'Jan 22, 2026'
    },
    {
      id: 5,
      title: 'Cybersecurity',
      description: 'Learn about network security, ethical hacking, encryption, and protecting systems from cyber threats.',
      image: 'https://via.placeholder.com/400x250/9b59b6/ffffff?text=Security',
      category: 'Security',
      date: 'Jan 24, 2026'
    },
    {
      id: 6,
      title: 'DevOps',
      description: 'Master CI/CD pipelines, containerization with Docker, orchestration with Kubernetes, and automation tools.',
      image: 'https://via.placeholder.com/400x250/1abc9c/ffffff?text=DevOps',
      category: 'Operations',
      date: 'Jan 26, 2026'
    },
    {
      id: 7,
      title: 'UI/UX Design',
      description: 'Create beautiful and intuitive user interfaces with design principles, Figma, Adobe XD, and prototyping.',
      image: 'https://via.placeholder.com/400x250/e67e22/ffffff?text=UI+UX',
      category: 'Design',
      date: 'Jan 27, 2026'
    },
    {
      id: 8,
      title: 'Blockchain',
      description: 'Discover decentralized applications, smart contracts, Ethereum, and the future of blockchain technology.',
      image: 'https://via.placeholder.com/400x250/34495e/ffffff?text=Blockchain',
      category: 'Technology',
      date: 'Jan 28, 2026'
    },
    {
      id: 9,
      title: 'Game Development',
      description: 'Build engaging games using Unity, Unreal Engine, and game design principles for various platforms.',
      image: 'https://via.placeholder.com/400x250/c0392b/ffffff?text=Game+Dev',
      category: 'Gaming',
      date: 'Jan 29, 2026'
    }
  ]);

  return (
    <div className="App">
      {/* Header */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Card-Based Layout Demo</span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <div className="container">
          <h1 className="display-4 text-center">Bootstrap Card Layout</h1>
          <p className="lead text-center">Dynamically displaying multiple cards using Bootstrap grid system</p>
        </div>
      </div>

      {/* Cards Grid Section */}
      <div className="container my-5">
        <div className="row g-4">
          {cards.map((card) => (
            <div key={card.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <img src={card.image} className="card-img-top" alt={card.title} />
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-primary">{card.category}</span>
                    <small className="text-muted">{card.date}</small>
                  </div>
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text flex-grow-1">{card.description}</p>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary">Learn More</button>
                    <button className="btn btn-outline-secondary">Share</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <p className="mb-0">&copy; 2026 Card Layout Demo - Bootstrap Components</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
