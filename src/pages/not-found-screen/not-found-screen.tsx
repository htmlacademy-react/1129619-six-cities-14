import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';

function NotFoundScreen(): JSX.Element {
  return (
    <div style={{ marginLeft: '50em' }}>
      <Helmet>
        <title>6 cities. NotFound page</title>
      </Helmet>
      <h1>404. Page not found</h1>
      <h2>Go to main page:</h2>
      <Logo />
    </div>
  );
}

export default NotFoundScreen;
