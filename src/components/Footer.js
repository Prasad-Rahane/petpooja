// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a href="https://www.linkedin.com/in/prasad-rahane-58b4271a3/?originalSubdomain=in" target="_blank" rel="noreferrer">
        Prasad Rahane
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        PetPooja
      </strong>
    </div>
  );
};

export default Footer;