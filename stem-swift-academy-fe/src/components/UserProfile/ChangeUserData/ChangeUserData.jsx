import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { userService } from '../../../services/userService';
import { successNotification, errorNotification } from '../../notification';

import './ChangeUserData.css';

const ChangeUserData = ({ userData, formIsOpened, setFormIsOpened }) => {
    const { register, formState: { errors }, handleSubmit } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' });
    const user = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate();

    const changeData = (data) => {
        userService.updateOne(user.id, data)
            .then(() => {
                setFormIsOpened(false);
                successNotification('Successfully updated your profile!');
                navigate(`/users/${user.id}`, { state: { modified: true } });
            })
            .catch(() => {
                errorNotification('There was a problem updating your profile. Please try again later!');
            });
    }

    return (
        <section className={formIsOpened ? "popup-box" : "hidden"}>
            <div className="box">
                <span className="text-blue-500 text-3xl" onClick={() => setFormIsOpened(false)}>x</span>

                <form onSubmit={handleSubmit(changeData)} className="flex flex-col items-center">
                    <article className="my-2 py-3">
                        <label htmlFor="email" className="block text-blue-500 pl-4 text-xl">Email</label>
                        <input name="email" {...register('email', { required: { value: true, message: 'Email is required!' } })} defaultValue={userData.email} className="h-14 pl-4 text-xl bg-transparent border-blue-500 border-b-4 text-blue-500 placeholder-blue-500 focus:outline-none" type="email" />
                        {errors.email && <p className="validation-error text-blue-500 py-2">{errors.email.message}</p>}
                    </article>

                    <article className="my-2 py-3">
                        <label htmlFor="country" className="block text-blue-500 pl-4 text-xl">Country</label>
                        <input name="country" {...register('country')} defaultValue={userData.country} className="h-14 pl-4 text-xl bg-transparent border-blue-500 border-b-4 text-blue-500 placeholder-blue-500 focus:outline-none" />
                        {errors.country && <p className="validation-error text-blue-500 py-2">{errors.country.message}</p>}
                    </article>
                     
                    <article className="my-2 py-3">
                        <label htmlFor="city" className="block text-blue-500 pl-4 text-xl">City</label>
                        <input name="city" {...register('city')} defaultValue={userData.city} className="h-14 pl-4 text-xl bg-transparent border-blue-500 border-b-4 text-blue-500 placeholder-blue-500 focus:outline-none" />
                        {errors.city && <p className="validation-error text-blue-500 py-2">{errors.city.message}</p>}
                    </article>
                     
                    <article className="my-2 py-3">
                        <label htmlFor="school" className="block text-blue-500 pl-4 text-xl">School</label>
                        <input name="school" {...register('school')} defaultValue={userData.school} className="h-14 pl-4 text-xl bg-transparent border-blue-500 border-b-4 text-blue-500 placeholder-blue-500 focus:outline-none" />
                        {errors.school && <p className="validation-error text-blue-500 py-2">{errors.school.message}</p>}
                    </article>
                     
                    <article className="my-2 py-3">
                        <label htmlFor="graduation_year" className="block text-blue-500 pl-4 text-xl">Graduation Year</label>
                        <input name="graduation_year" {...register('graduation_year')} defaultValue={userData.graduationYear} className="h-14 pl-4 text-xl bg-transparent border-blue-500 border-b-4 text-blue-500 placeholder-blue-500 focus:outline-none" />
                        {errors.graduation_year && <p className="validation-error text-blue-500 py-2">{errors.graduation_year.message}</p>}
                    </article>

                    <input type="submit" value="Save changes" className="btn my-10" />
                </form>
            </div>
        </section>      
    );
}

export default ChangeUserData;