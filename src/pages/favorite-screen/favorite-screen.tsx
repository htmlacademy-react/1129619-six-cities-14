import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offers';
import { Favorite } from '../../components/favorite/favorite';
import Logo from '../../components/logo/logo';
import LoginIn from '../../components/login-in/login-in';
import { LogoFooter } from '../../components/logo-footer/logo-footer';

type FavoriteScreenProps = {
  offers: Offer[];
};

function FavoriteScreen({ offers }: FavoriteScreenProps): JSX.Element {
  return (
    <div>
      <Helmet>
        <title>6 cities. Favorite page</title>
      </Helmet>
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo />
              </div>
              <nav className="header__nav">
                <LoginIn />
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              {<Favorite offers={offers} />}
            </section>
          </div>
        </main>
        <footer className="footer container">
          <LogoFooter />
        </footer>
      </div>
    </div>
  );
}

export default FavoriteScreen;
