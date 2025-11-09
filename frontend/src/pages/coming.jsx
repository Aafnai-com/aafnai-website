import { useEffect } from "react";
import "./coming.css"; // we'll extract your CSS below

export default function ComingSoon() {
  useEffect(() => {
    // Progress animation
    const fill = document.getElementById("progressFill");
    if (!fill) return;

    let current = 8;
    const target = 37;
    const stepInterval = 650;

    function step() {
      if (current < target) {
        current += Math.ceil((target - current) * 0.18) || 1;
        if (current > target) current = target;
        fill.style.width = current + "%";
        fill.textContent = current + "%";
        const parent = fill.parentElement;
        if (parent) parent.setAttribute("aria-valuenow", String(current));
      }
    }

    fill.style.width = current + "%";
    fill.textContent = current + "%";

    const t = setInterval(() => {
      step();
      if (current >= target) clearInterval(t);
    }, stepInterval);

    document.getElementById("year").textContent = new Date().getFullYear();
  }, []);

  const subscribe = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    if (!email) return alert("Please enter your email address.");
    const subject = encodeURIComponent("Notify me when site launches");
    const body = encodeURIComponent("Please add me to the updates list: " + email);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="wrap" role="main" aria-labelledby="title">
      <section>
        <div className="brand" aria-hidden="false">
          <div className="logo" aria-hidden="true" title="Aafnai.com logo">
            <img
              src="/assets/svg/logo-white.svg"
              alt="Aafnai Ads Logo"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div>
            <h1 id="title">We're Building - Coming Soon</h1>
            <p className="lead">
              Thanks for visiting. We're crafting something special using our brand. Join the
              list to get notified when we are live.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "18px" }}>
          <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
            <div id="progressFill" className="progress-fill">
              0%
            </div>
          </div>
          <div className="meta" style={{ marginTop: "10px" }}>
            <small>
              Company Details - Location: <strong>Kathmandu, Nepal</strong>, Registration:{" "}
              <strong>OCR, Nepal</strong>, Services: <strong>Digital Ads & IT services</strong>
            </small>
            <div style={{ flex: 1 }}></div>
          </div>
        </div>
      </section>

      <aside className="card" aria-label="Subscribe">
        <form id="subscribeForm" onSubmit={subscribe}>
          <label htmlFor="email">Join the waitlist</label>
          <input id="email" type="email" placeholder="hello@example.com" required />
          <button className="btn" type="submit">
            Notify me
          </button>
        </form>

        <div style={{ marginTop: "12px", color: "var(--muted)" }}>
          <small>
            Prefer to email?{" "}
            <a
              className="ghost"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=admin@aafnai.com&su=Inquiry&body=Can%20I%20know%20about..."
            >
              admin@aafnai.com
            </a>
          </small>
        </div>

        <footer className="small" aria-hidden="true">
          © <span id="year"></span> Aafnai Ad Pvt. Ltd. All rights reserved
        </footer>
      </aside>
    </main>
  );
}
