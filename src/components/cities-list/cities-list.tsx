import { Link } from 'react-router-dom';
import { CitiesEnum } from '../../const';

export function CitiesList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CitiesEnum.map((city) => (
        <li className="locations__item">
          <Link className="locations__item-link tabs__item" to="#">
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
