import LoginIn from '../../components/login-in/login-in';
import { LoginOut } from '../../components/login-out/login-out';
import { AuthorizationStatus } from '../../const';
import { Cities } from '../../components/cities/cities';
import { Helmet } from 'react-helmet-async';
import { CitiesList } from '../../components/cities-list/cities-list';
import Logo from '../../components/logo/logo';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOffers } from '../../store/action';

function MainScreen(): JSX.Element {
  const activeCity = useAppSelector((state) => state.activeCity);
  const offers = useAppSelector((state) =>
    state.offers.filter((offer) => offer.city.name === activeCity),
  );

  const cityCenter = offers[0]?.city.location;
  const points = offers.map((offer) => ({
    id: offer.id,
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
  }));

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities. Main page</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
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
