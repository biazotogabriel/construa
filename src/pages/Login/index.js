import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function Login({ handleLoggedIn }) {
  const navigate = useNavigate();

  return (
    <>
      <h1>Login</h1>
      <button
        onClick={() => {
          handleLoggedIn(true);
          navigate('/Inicio');
        }}
      >
        Login
      </button>
    </>
  );
}

Login.propTypes = {
  handleLoggedIn: PropTypes.func.isRequired,
};
