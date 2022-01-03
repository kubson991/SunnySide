import react from "react";
import React from "react";
import "./MenuMovile.css";
function index(props) {
  react.useEffect(() => {
    function popupMenu(event) {
      return event.target.className === "popupMenu" ? null : props.close();
    }
    document.addEventListener("click", popupMenu);
    return () =>document.removeEventListener("click", popupMenu);
  });
  return (
    <div className="popupMenu">
      <button>About</button>
      <button>Services</button>
      <button>Projects</button>
      <button>Contact</button>
    </div>
  );
}

export default index;
