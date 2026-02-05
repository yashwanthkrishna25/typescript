export interface UserInfo {
  name: string;
  age: number;
  location: string;
  email: string;
  skills: string[];
  education: string;
  experience: string;
  hobbies: string[];
}

export const myInfo: UserInfo = {
  name: "Yashwanth",
  age: 25,
  location: "Bangalore, India",
  email: "yashwanth@example.com",
  skills: ["TypeScript", "React", "Node.js", "Vite", "CSS"],
  education: "Bachelor's in Computer Science",
  experience: "3+ years of web development experience",
  hobbies: ["Coding", "Reading", "Photography", "Gaming"]
};

export function getAboutPageHTML(info: UserInfo): string {
  return `
    <div class="about-container">
      <button id="back-button" class="back-button">← Back to Home</button>
      
      <div class="profile-header">
        <div class="avatar">${info.name.charAt(0)}</div>
        <h1>${info.name}</h1>
        <p class="tagline">Full Stack Developer</p>
      </div>
      
      <div class="info-grid">
        <div class="info-card">
          <h2>👤 Personal Info</h2>
          <p><strong>Age:</strong> ${info.age}</p>
          <p><strong>Location:</strong> ${info.location}</p>
          <p><strong>Email:</strong> ${info.email}</p>
        </div>
        
        <div class="info-card">
          <h2>🎓 Education</h2>
          <p>${info.education}</p>
        </div>
        
        <div class="info-card">
          <h2>💼 Experience</h2>
          <p>${info.experience}</p>
        </div>
        
        <div class="info-card">
          <h2>🛠️ Skills</h2>
          <div class="skills">
            ${info.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
          </div>
        </div>
        
        <div class="info-card">
          <h2>🎮 Hobbies</h2>
          <div class="hobbies">
            ${info.hobbies.map(hobby => `<span class="hobby-tag">${hobby}</span>`).join('')}
          </div>
        </div>
        
        <div class="info-card">
          <h2>📞 Contact</h2>
          <p>Feel free to reach out!</p>
          <button id="contact-btn" class="contact-btn">Send Message</button>
        </div>
      </div>
    </div>
  `;
}