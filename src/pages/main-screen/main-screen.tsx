import LoginIn from '../../components/login-in/login-in';
import { LoginOut } from '../../components/login-out/login-out';
import { AuthorizationStatus } from '../../const';
import { Cities } from '../../components/cities/cities';
import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offers';
import { CitiesList } from '../../components/cities-list/cities-list';

type MainScreenProps = {
  offers: Offer[];
};

function MainScreen({ offers }: MainScreenProps): JSX.Element {
  // const [activeCard, setactiveCard] = useState(
  //   offers.map((offer) => offer.isFavorite),
  // );
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities. Main page</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              {/* {AuthorizationStatus.Auth ? <LoginIn /> : <LoginOut />} */}
              <LoginOut />
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <Cities offers={offers} />
      </main>
    </div>
  );
}

export default MainScreen;
