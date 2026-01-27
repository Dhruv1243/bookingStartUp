import "./index.css";

export const Index = () => {
  return (
    <div className="landing">
      <header className="nav">
        <div className="brand">
          <span className="brand-mark">Logo</span>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <h1>Welcome to AppointIt</h1>
          <p className="subtext">
            The easiest way to manage bookings, clients, and schedules — all in
            one place.
          </p>
        </div>
      </section>

      <section className="button-section">
        <div className="buttons">
          <button>Join</button>
          <button>Sign In</button>
        </div>
      </section>

      <section className="features" id="features">
        <div className="feature-card">
          <h3>Find more clients</h3>
          <p>
            Get discovered online and let clients book your services anytime,
            anywhere — hassle free.
          </p>
        </div>
        <div className="feature-card">
          <h3>Smart Booking</h3>
          <p>
            Seamlessly sync with Google Calendar and avoid double bookings
            automatically.
          </p>
        </div>
        <div className="feature-card">
          <h3>Find nearest services</h3>
          <p>
            Discover trusted services near you and book instantly based on your
            location..
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
