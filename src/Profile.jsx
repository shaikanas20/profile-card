import "./Profile.css";

const openLink = (url) => {
  window.open(url, "_blank");
};

export default function Profile() {
  return (
    <div className="card">

      {/* Profile Image */}
      <div className="image-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8C5Jg1MQfnMwjHJdmuVG2PEgWzFZSlk-z1PT9dx1RKA&s"
          alt="Profile Photo"
        />
      </div>

      {/* Content */}
      <div className="content">
        <h2>
          SHAIK ANAS
          <i className="fa-solid fa-circle-check verify"></i>
        </h2>

        <p className="subtitle">
          Computer Science Engineer (AI & ML)
        </p>

        <div className="details">
          <p><b>College:</b> Chandigarh University</p>
          <p><b>Branch:</b> CSE (AI & ML)</p>
          <p><b>ID:</b> 23bai70641</p>
          <p><b>Gmail:</b> anas@gmail.com</p>
          <p><b>Contact:</b> +91 98765 43210</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="social">
        <i className="fab fa-linkedin" onClick={() => openLink("https://www.linkedin.com/in/yourprofile")}></i>
        <i className="fab fa-facebook" onClick={() => openLink("https://www.facebook.com/yourprofile")}></i>
        <i className="fab fa-x-twitter" onClick={() => openLink("https://x.com/yourprofile")}></i>
      </div>

    </div>
  );
}
