function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="box">
          <h3>Medical</h3>
          <ul className="social">
            <li>
              <a className="text-white m-2" href="https://www.facebook.com">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a className="text-white m-2" href="https://www.linkedin.com">
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <a className="text-white m-2" href="https://www.youtube.com">
                <i className="bi bi-youtube"></i>
              </a>
            </li>
          </ul>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum
              dolor sit amet consectetur adipisicing elit. Unde, hic!
            </p>
          </div>
        </div>

        <div className="box">
          <div className="line">
            <i className="bi bi-geo-alt"></i>
            <div className="info">
              Egypt, Gaza, Inside The Sphinx, Room Number 220
            </div>
          </div>
          <div className="line">
            <i className="bi bi-clock"></i>
            <div className="info">Business Hours : Form 10:00 To 18:00</div>
          </div>
          <div className="line">
            <i className="bi bi-telephone-forward"></i>
            <div className="info">
              <span>+20123456789</span>
              <span>+20153454783</span>
            </div>
          </div>
        </div>

     
      </div>

      <p className="copyright">Made With &copy; By Asmaa</p>
    </div>
  );
}

export default Footer;
