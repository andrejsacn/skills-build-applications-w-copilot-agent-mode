import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              <h1 className="display-6 fw-bold text-primary">OctoFit Tracker</h1>
              <p className="lead text-muted">
                A modern multi-tier fitness platform for tracking activities, teams, and progress.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <span className="badge bg-primary-subtle text-primary-emphasis">React 19</span>
                <span className="badge bg-success-subtle text-success-emphasis">Vite</span>
                <span className="badge bg-info-subtle text-info-emphasis">Express + TypeScript</span>
                <span className="badge bg-warning-subtle text-warning-emphasis">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
