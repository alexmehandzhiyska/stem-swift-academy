import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { login } from '../../store';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'

import { authService } from '../../services/authService'
import { errorNotification } from '../notification';

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = async (data) => {
    authService.login(data)
      .then(response => {
        dispatch(login(response));
        localStorage.setItem('user', JSON.stringify(response));

        navigate('/');
      })
      .catch(err => {
        errorNotification(err.toString());
      });
  }
  
  return (
    <section className="mt-40">
      <h1 className="heading">Log In</h1>

      <form onSubmit={handleSubmit(loginUser)} className="login-form flex flex-col justify-center items-center text-blue-500" method="POST">
        <article className="my-2">
          <FontAwesomeIcon className="icon" icon={faEnvelopeOpenText}></FontAwesomeIcon>
          <input name="email" {...register('email', { required: { value: true, message: 'Email is required!' } })} className="h-14 pl-16 text-xl bg-transparent border-blue-500 border-b-4 placeholder-blue-500 focus:outline-none" type="email" placeholder="Email" />
          {errors.email && <p className="validation-error text-blue-500 py-2">{errors.email.message}</p>}
        </article>

        <article className=" my-2">
          <FontAwesomeIcon className="icon" icon={faUnlockAlt}></FontAwesomeIcon>
          <input name="password" {...register('password', { required: { value: true, message: 'Password is required!' } })} className="h-14 pl-16 text-xl bg-transparent border-blue-500 border-b-4 placeholder-blue-500 focus:outline-none" type="password" placeholder="Password" />
          {errors.password && <p className="validation-error text-blue-500 py-2">{errors.password.message}</p>}
        </article>
        <p className="mt-4">Don't have an account? <Link to="/register"><strong>Sign Up</strong></Link></p>

        <input type="submit" value="Log In" className="btn mt-20 " />
      </form>
    </section>
  );
}

export default Login;