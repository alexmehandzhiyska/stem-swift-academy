import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelopeOpenText, faUnlockAlt, faGlobeEurope, faCity, faSchool, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

import { login } from '../../store';
import { authService } from '../../services/authService';
import { errorNotification, successNotification } from '../notification';

import './Register.css';

const Register = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerUser = async (data) => {
    authService.register(data)
      .then(response => {
        dispatch(login(response));
        localStorage.setItem('user', JSON.stringify(response));
        successNotification('Successfully created account!');
        navigate('/');
      })
      .catch((err) => {
        errorNotification(err.toString());
      });
  }

  return (
    <section className="mt-40">
      <h1 className="register-title heading">Create an account</h1>

      <form onSubmit={handleSubmit(registerUser)} className="flex flex-col justify-center items-center text-white" method="POST">
        <article className="my-2">
          <FontAwesomeIcon className="icon text-blue-500" icon={faUser}></FontAwesomeIcon>
          <input name="name" {...register('name', { required: { value: true, message: 'Name is required!' }, minLength: { value: 4, message: 'Name should have at least 4 characters!' }, maxLength: { value: 50, message: 'Name cannot have more than 50 characters!' } })} className="h-14 pl-16 text-xl bg-transparent border-blue-500 border-b-4 text-blue-500 placeholder-blue-500 focus:outline-none" type="text" placeholder="Name" />
          {errors.name && <p className="validation-error text-blue-500 py-2">{errors.name.message}</p>}
        </article>

        <article className="my-2">
          <FontAwesomeIcon className="icon text-blue-500" icon={faEnvelopeOpenText}></FontAwesomeIcon>
          <input name="email" {...register('email', { required: { value: true, message: 'Email is required!' } })} className="h-14 pl-16 text-xl bg-transparent border-blue-500 border-b-4 text-blue-500 placeholder-blue-500 focus:outline-none" type="email" placeholder="Email" />
          {errors.email && <p className="validation-error text-blue-500 py-2">{errors.email.message}</p>}
        </article>

        <article className="my-2">
          <FontAwesomeIcon className="icon lock-icon text-blue-500" icon={faUnlockAlt}></FontAwesomeIcon>
          <input name="password" {...register('password', { required: { value: true, message: 'Password is required!' }, minLength: { value: 5, message: 'Your password should have at least 5 characters!' }, maxLength: { value: 30, message: 'Password cannot have more than 30 characters!' } })} className="h-14 pl-16 text-xl bg-transparent border-blue-500 border-b-4 text-blue-500 placeholder-blue-500 focus:outline-none" type="password" placeholder="Password" />

          {errors.password && <p className="validation-error text-blue-500 py-2">{errors.password.message}</p>}
        </article>

        <article className="my-2">
          <FontAwesomeIcon className="icon lock-icon text-blue-500" icon={faGlobeEurope}></FontAwesomeIcon>
          <input name="country" {...register('country')} className="h-14 pl-16 text-xl bg-transparent border-blue-500 border-b-4 text-blue-500 placeholder-blue-500 focus:outline-none" type="text" placeholder="Country" />
        </article>

        <article className="my-2">
          <FontAwesomeIcon className="icon lock-icon text-blue-500" icon={faCity}></FontAwesomeIcon>
          <input name="city" {...register('city')} className="h-14 pl-16 text-xl bg-transparent border-blue-500 border-b-4 text-blue-500 placeholder-blue-500 focus:outline-none" type="text" placeholder="City" />
        </article>

        <article className="my-2">
          <FontAwesomeIcon className="icon lock-icon text-blue-500" icon={faSchool}></FontAwesomeIcon>
          <input name="school" {...register('school')} className="h-14 pl-16 text-xl bg-transparent border-blue-500 border-b-4 text-blue-500 placeholder-blue-500 focus:outline-none" type="text" placeholder="School" />
        </article>

        <article className="my-2">
          <FontAwesomeIcon className="icon lock-icon text-blue-500" icon={faGraduationCap}></FontAwesomeIcon>
          <input name="graduationYear" {...register('graduationYear')} className="h-14 pl-16 text-xl bg-transparent border-blue-500 border-b-4 text-blue-500 placeholder-blue-500 focus:outline-none" type="text" placeholder="Graduation Year" />
        </article>

        <p className="mt-4 text-blue-500">Already have an account? <Link to="/login"><strong>Log In</strong></Link></p>

        <input type="submit" value="Register" className="btn my-10" />
      </form>
    </section>
  );
};

export default Register;