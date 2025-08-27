import React, { useState } from 'react';

/**
 * BootstrapExamplePage.jsx
 * Single-file React page using Bootstrap 5 CSS classes.
 *
 * Usage:
 *  - Ensure Bootstrap CSS is loaded (CDN or import 'bootstrap/dist/css/bootstrap.min.css')
 *  - Import and render <BootstrapExamplePage /> in your app
 */

export default function BootstrapExamplePage() {
  const [cards, setCards] = useState([
    { id: 1, title: 'Fast Start', text: 'Bootstrapped layout and components ready to go.' },
    { id: 2, title: 'Responsive', text: 'Works across mobile, tablet and desktop.' },
    { id: 3, title: 'Accessible', text: 'Semantic markup and good contrast.' },
  ]);

  function addCard() {
    const next = cards.length + 1;
    setCards([...cards, { id: next, title: `Feature ${next}`, text: 'New feature added.' }]);
  }

  return (
    <div className="bg-light min-vh-100">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">MyBootstrapApp</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu"
                  aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
            </ul>
            <form className="d-flex ms-lg-3" role="search" onSubmit={(e)=>e.preventDefault()}>
              <input className="form-control form-control-sm me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-sm btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="home" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold">Beautiful UI, built with Bootstrap</h1>
              <p className="lead text-muted">
                Quick example page showing a hero, responsive cards, pricing, and footer — all using Bootstrap 5 classes.
              </p>
              <div className="d-flex gap-2">
                <a className="btn btn-primary btn-lg" href="#features">Get Started</a>
                <a className="btn btn-outline-primary btn-lg" href="#pricing">See Pricing</a>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="card shadow-sm border-0">
                <img src="https://picsum.photos/800/470?random=1" className="card-img-top" alt="decorative" />
                <div className="card-body">
                  <h5 className="card-title">Blend of content + imagery</h5>
                  <p className="card-text text-muted mb-0">Use real images or placeholders while designing your layout.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* FEATURES */}
      <section id="features" className="py-5 bg-white">
        <div className="container">
          <h2 className="h3 mb-4">Key features</h2>
          <div className="row g-3">
            {cards.map(card => (
              <div className="col-sm-6 col-lg-4" key={card.id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text text-muted flex-grow-1">{card.text}</p>
                    <div className="mt-3">
                      <button className="btn btn-sm btn-outline-primary me-2">Learn</button>
                      <button className="btn btn-sm btn-primary">Use</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-12 text-center mt-3">
              <button className="btn btn-outline-secondary" onClick={addCard}>Add feature</button>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-5">
        <div className="container">
          <h2 className="h3 mb-4 text-center">Pricing</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Starter</h5>
                  <h3 className="fw-bold">$0<span className="text-muted fs-6">/mo</span></h3>
                  <p className="text-muted">Basic features for personal projects.</p>
                  <ul className="list-unstyled mb-4">
                    <li>1 project</li>
                    <li>Email support</li>
                  </ul>
                  <button className="btn btn-outline-primary w-100">Get Started</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-primary shadow-sm" style={{ borderWidth: 1.5 }}>
                <div className="card-body text-center">
                  <h5 className="card-title">Pro</h5>
                  <h3 className="fw-bold">$19<span className="text-muted fs-6">/mo</span></h3>
                  <p className="text-muted">For indie makers and small teams.</p>
                  <ul className="list-unstyled mb-4">
                    <li>Unlimited projects</li>
                    <li>Priority support</li>
                    <li>Team seats</li>
                  </ul>
                  <button className="btn btn-primary w-100">Choose Pro</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Enterprise</h5>
                  <h3 className="fw-bold">Custom</h3>
                  <p className="text-muted">Scale with dedicated support and SSO.</p>
                  <ul className="list-unstyled mb-4">
                    <li>Custom contracts</li>
                    <li>Priority onboarding</li>
                  </ul>
                  <button className="btn btn-outline-primary w-100">Contact Sales</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-4 bg-dark text-light">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="mb-3 mb-md-0">
            <strong>MyBootstrapApp</strong> &copy; {new Date().getFullYear()}
          </div>
          <div>
            <a className="text-light me-3" href="#privacy">Privacy</a>
            <a className="text-light" href="#terms">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
