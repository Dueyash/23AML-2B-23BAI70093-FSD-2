import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample data for cards
const cardData = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn to build modern websites and web applications using the latest technologies.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
    buttonText: "Start Course",
    buttonColor: "primary"
  },
  {
    id: 2,
    title: "Data Science",
    description: "Master data analysis, machine learning, and statistical modeling techniques.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    buttonText: "Enroll Now",
    buttonColor: "success"
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Create cross-platform mobile applications for iOS and Android devices.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
    buttonText: "View Details",
    buttonColor: "info"
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Design beautiful and user-friendly interfaces for digital products.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    buttonText: "Learn Design",
    buttonColor: "warning"
  },
  {
    id: 5,
    title: "Cyber Security",
    description: "Protect systems and networks from digital attacks and security breaches.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
    buttonText: "Secure Now",
    buttonColor: "danger"
  },
  {
    id: 6,
    title: "Cloud Computing",
    description: "Learn to deploy and manage applications on cloud platforms like AWS and Azure.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    buttonText: "Explore Cloud",
    buttonColor: "secondary"
  }
];

function App() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-primary">Our Courses</h1>
      <p className="text-center mb-5 text-muted">Explore our wide range of online courses designed for all skill levels</p>
      
      {/* Bootstrap Grid System */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {cardData.map((card) => (
          <div className="col" key={card.id}>
            {/* Bootstrap Card Component */}
            <div className="card h-100 shadow-sm border-0">
              {/* Card Image */}
              <img 
                src={card.image} 
                className="card-img-top img-fluid" 
                alt={card.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              
              {/* Card Body */}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text flex-grow-1">{card.description}</p>
                
                {/* Card Footer with Button */}
                <div className="mt-auto">
                  <button className={`btn btn-${card.buttonColor} w-100`}>
                    {card.buttonText}
                  </button>
                </div>
              </div>
              
              {/* Optional Badge */}
              <div className="position-absolute top-0 end-0 m-2">
                <span className="badge bg-light text-dark">New</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Additional Information Section */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card border-primary">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">About Our Card Layout</h4>
            </div>
            <div className="card-body">
              <p className="card-text">
                This layout demonstrates Bootstrap's responsive grid system. The cards automatically rearrange based on screen size:
              </p>
              <ul>
                <li><strong>Mobile (xs):</strong> 1 card per row</li>
                <li><strong>Tablet (md):</strong> 2 cards per row</li>
                <li><strong>Desktop (lg):</strong> 3 cards per row</li>
              </ul>
              <p className="card-text">
                Each card uses Bootstrap's <code>.card</code> component with consistent spacing provided by <code>.g-4</code> (gap).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;