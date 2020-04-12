import React from 'react';
const Footer = () => {
  return (
    <footer>
      <div className="about">
        <div className="container">
          <div className="row">
            <hr className="offset-md" />

            <div className="col-xs-6 col-sm-3">
              <div className="item">
                <i className="ion-ios-telephone-outline"></i>
                <h1>
                  24/7 <br /> <span>Suporte</span>
                </h1>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3">
              <div className="item">
                <i className="ion-ios-star-outline"></i>
                <h1>
                  Garantia <br /> <span> de uma boa troca</span>
                </h1>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3">
              <div className="item">
                <i className="ion-ios-gear-outline"></i>
                <h1>
                  {' '}
                  novos e usados <br /> <span>garantia</span>
                </h1>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3">
              <div className="item">
                <i className="ion-ios-loop"></i>
                <h1>
                  {' '}
                  Disputas <br /> <span>Disputas</span>{' '}
                </h1>
              </div>
            </div>

            <hr className="offset-md" />
          </div>
        </div>
      </div>

      <div className="subscribe">
        <div className="container align-center">
          <hr className="offset-md" />

          <h1 className="h3 upp">Entre em nossa newsletter</h1>
          <p>Receba as melhores ofertas</p>
          <hr className="offset-sm" />

          <form>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="form-control"
              />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-primary">
                  {' '}
                  Subscribe <i className="ion-android-send"></i>{' '}
                </button>
              </span>
            </div>
          </form>
          <hr className="offset-lg" />
          <hr className="offset-md" />

          <div className="social">
            <a href="http://localhost:3000">
              <i className="ion-social-facebook"></i>
            </a>
            <a href="http://localhost:3000">
              <i className="ion-social-twitter"></i>
            </a>
            <a href="http://localhost:3000">
              <i className="ion-social-googleplus-outline"></i>
            </a>
            <a href="http://localhost:3000">
              <i className="ion-social-instagram-outline"></i>
            </a>
            <a href="http://localhost:3000">
              <i className="ion-social-linkedin-outline"></i>
            </a>
            <a href="http://localhost:3000">
              <i className="ion-social-youtube-outline"></i>
            </a>
          </div>

          <hr className="offset-md" />
          <hr className="offset-md" />
        </div>
      </div>

      <div className="container">
        <hr className="offset-md" />
        {/*  */}
      </div>

      <hr />

      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-9 payments">
            <p>Pague do jeito mais conveniente</p>

            <div className="payment-icons">
              <img src="assets/img/payments/paypal.svg" alt="paypal" />
              <img src="assets/img/payments/visa.svg" alt="visa" />
              <img src="assets/img/payments/master-card.svg" alt="mc" />
              <img src="assets/img/payments/discover.svg" alt="discover" />
              <img src="assets/img/payments/american-express.svg" alt="ae" />
            </div>
            <br />
          </div>
          <div className="col-sm-4 col-md-3 align-right align-center-xs">
            <hr className="offset-sm hidden-sm" />
            <hr className="offset-sm" />
            <p>
              Vibbra Store <br /> Designed By Guilherme Ribas
              <a
                href="https://www.linkedin.com/in/ribas95/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {' '}
                Ribas95
              </a>
            </p>
            <hr className="offset-lg visible-xs" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
