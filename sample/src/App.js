
import './App.css';

function goHome() {
  window.location.href = '/';
}

function App() {
  return (
    <div className="App">
      <header>
        <a
          href="#"
          onClick={goHome}
          style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 200 }}
        >
          <img
            src="../images/house.fill.png"
            alt="Home"
            style={{ width: '30px', height: '30px' }}
          />
        </a>
        <h1 className="animated-title">Personal Chat</h1>
      </header>

      <section className="project-details">
        <div className="media-gallery">
          <img src="./chat.png" alt="Screenshot 1" />
          <img src="./chat1.png" alt="Screenshot 2" />
          <img src="./chat2.png" alt="Screenshot 3" />
          <img src="./chat3.png" alt="Screenshot 4" />
        </div>

        <div className="video-container">
          <video controls>
            <source src="../videos/rp.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="description">
          <h2>About the App</h2>
          <p>
            Welcome to Personal Chat – Your Private and Secure Chat Space. Whether you're connecting
            with friends or collaborating with your team, our chat app offers a seamless and secure
            way to stay in touch.
          </p>
          <ul>
            <li>✨ Simple Login & Registration: Fast, secure onboarding.</li>
            <li>💬 Real-Time Messaging: Instant conversations with people who matter.</li>
            <li>🔒 Private & Secure: Encrypted and protected chats.</li>
            <li>🧑‍💻 User-Friendly Interface: Clean and modern design.</li>
            <li>📱 Device Friendly: Optimized for mobile and desktop.</li>
          </ul>

          <h3>Technologies Used:</h3>
          <ul>
            <li>🔥 Firebase Authentication – Secure login and registration</li>
            <li>📨 Firebase Cloud Messaging (FCM) – Real-time push notifications</li>
            <li>💬 Firebase Firestore / Realtime Database – Real-time chat functionality</li>
            <li>
              <img
                width="30px"
                src="../images/slogo.png"
                alt="Shivappz logo"
                style={{ verticalAlign: 'middle', marginRight: '8px' }}
              />
              Part of the <strong>Shivappz</strong> suite of apps — showcasing my iOS development journey
            </li>
          </ul>

          <a href="https://github.com/shivakumarChirra/Personal-Chat.git" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
      </section>

      <footer>
        <p>© 2025 Shivappz. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
