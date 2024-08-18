// import Con from "../Component/Content";
import Footer from "./Footer";
export default function Card(props) {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${props.image})`,
        }}
        className="my-image"
      ></div>

      <div>
        <h1>{props.name}</h1>
        <p className="title">{props.title}</p>
        <p className="web">{props.web}</p>
        <div className="social">
          <button>
            <i class="fa-solid fa-envelope"></i> <span>Email</span>
          </button>
          <button>
            <i class="fa-brands fa-linkedin"></i> <span>Linkedin</span>
          </button>
        </div>
        <h2>About</h2>
        <p className="para">{props.about}</p>
        <h2>Interests</h2>
        <p className="para">{props.inter}</p>
      </div>
      <Footer />
    </div>
  );
}
