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

  const onSubmit = async (data) => {
    try {
      const response = await authService.login(data.email, data.password);
      const user = { id: response.data.user.id, email: data.email, name: response.data.user.name, role: response.data.user.role };
      dispatch(login(user));
      localStorage.setItem('user', JSON.stringify(user));

      navigate('/');
    } catch (error) {
      errorNotification(error.toString());
    }
  }

  return (
    <section className="mt-40">
      <h1 className="heading">Log In</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="login-form flex flex-col justify-center items-center text-blue-500" method="POST">
        <article className="my-2">
          <FontAwesomeIcon className="icon" icon={faEnvelopeOpenText}></FontAwesomeIcon>
          <input name="email" {...register('email', { required: { value: true, message: 'Email is required!' } })} className="h-14 pl-16 text-xl bg-transparent border-blue-500 border-b-4 placeholder-blue-500 focus:outline-none" type="email" placeholder="Email" />
          {errors.email && <p>{errors.email.message}</p>}
        </article>

        <article className=" my-2">
          <FontAwesomeIcon className="icon" icon={faUnlockAlt}></FontAwesomeIcon>
          <input name="password" {...register('password', { required: { value: true, message: 'Password is required!' } })} className="h-14 pl-16 text-xl bg-transparent border-blue-500 border-b-4 placeholder-blue-500 focus:outline-none" type="password" placeholder="Password" />
          {errors.password && <p>{errors.password.message}</p>}
        </article>
        <p className="mt-4">Don't have an account? <Link to="/register"><strong>Sign Up</strong></Link></p>

        <input type="submit" value="Log In" className="btn mt-20 " />
      </form>
    </section>
  );
}

export default Login;