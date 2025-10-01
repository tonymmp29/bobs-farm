import './App.css'
import CornPurchaseComponent from './components/CornPurchaseComponent'

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">🌽 Bob's Corn Farm 🌽</h1>
          <p className="header-subtitle">The finest corn farm in the valley</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="grid-two-cols">
          {/* Info Section */}
          <div className="info-section">
            <h2 className="info-title">
              Welcome to our farm
            </h2>
            <p className="info-text">
              At Bob's farm we grow the freshest and most delicious corn. 
              Our fields are full of golden ears ready to harvest.
            </p>
            <div className="emoji-row">
              <span>🚜</span>
              <span>🌾</span>
              <span>🚜</span>
              <span>🌽</span>
            </div>
          </div>

          {/* Corn Field Section */}
          <div className="corn-field">
            <div className="corn-grid">
              <span>🌽</span><span>🌽</span><span>🌽</span>
              <span>🌽</span><span>🚜</span><span>🌽</span>
              <span>🌽</span><span>🌽</span><span>🌽</span>
            </div>
            <h3 className="corn-field-title">
              Fresh Corn Fields
            </h3>
            <p className="corn-field-text">
              Harvested daily with our tractors
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌱</div>
            <h3 className="feature-title">Organic</h3>
            <p className="feature-text">No pesticides or chemicals</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3 className="feature-title">Quality</h3>
            <p className="feature-text">Best quality guaranteed</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3 className="feature-title">Delivery</h3>
            <p className="feature-text">Fresh daily delivery</p>
          </div>
        </div>

        {/* Tractor and Field Visual */}
        <div className="farm-action">
          <div className="farm-action-content">
            <h3 className="farm-action-title">Our Farm in Action</h3>
            <div className="farm-visual">
              🚜 🌽🌽🌽🌽🌽🌽🌽 🚜
            </div>
            <p className="farm-action-text">Our tractors work the fields every day</p>
          </div>
        </div>

        {/* Corn Purchase Section */}
        <CornPurchaseComponent />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Bob's Corn Farm. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
