import { Link } from 'react-router-dom';
import { CityName } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import cn from 'classnames';
import { setCity } from '../../store/action';

export function CitiesList(): JSX.Element {
  const activeCity = useAppSelector((state) => state.activeCity);
  const dispatch = useAppDispatch();
  const handleCitySelect = (value: CityName) => dispatch(setCity(value));
  return (
    <ul className="locations__list tabs__list">
      {Object.values(CityName).map((city) => (
        <li key={city} className="locations__item">
          <Link
            onClick={() => handleCitySelect(city)}
            className={cn('locations__item-link tabs__item', {
              'tabs__item--active': city === activeCity,
            })}
            to="#"
          >
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
