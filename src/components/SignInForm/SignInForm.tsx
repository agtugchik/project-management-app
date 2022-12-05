import Spinner from '../../components/UI/Spinner/Spinner';
import { useTranslate } from '../../hooks/useTranslate';
import React from 'react';
import { useForm } from 'react-hook-form';
import { SignUpProps, FormValues } from 'types/formTypes';
import cl from '../SighUpForm/SignUp.module.scss';
import { useAppSelector } from '../../hooks/redux';
import userLogo from '../../assets/user-icon.svg';
import { Paths } from '../../helpers/routerPaths';
import { useNavigate } from 'react-router-dom';

function SignInForm(props: SignUpProps) {
  const { handlerSubmit, isLoading } = props;

  const navigate = useNavigate();
  // Use Translate
  const { login } = useAppSelector((state) => state.SignUpDataReducer.signUpData);
  const T = useTranslate();
  // Use Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ criteriaMode: 'all', mode: 'onChange' });
  const onSubmit = handleSubmit((data) => {
    handlerSubmit(data);
  });
  return (
    <form className={cl.form} onSubmit={onSubmit}>
      <div className={cl.form__avatar__wrapper}>
        <img className={cl.form__avatar} src={userLogo} alt="User Logo"></img>
      </div>
      <p className={cl.form__description}>{T('SignUpForm.formWelcomeSignIn')}</p>
      <div className={cl.form__login}>
        <input
          type="text"
          id={cl.login}
          className={cl.form__input}
          placeholder=" "
          autoComplete="off"
          defaultValue={login ? login : ''}
          {...register('login', {
            required: { value: true, message: `${T('SignUpForm.formRequireMsg')}` },
            pattern: {
              value: /^[a-zA-Z0-9]+$/i,
              message: `${T('SignUpForm.formLoginPatternMsg')}`,
            },
            minLength: { value: 5, message: `${T('SignUpForm.formMinLengthMsg')}` },
          })}
        ></input>
        <label htmlFor={cl.login} className={cl.form__label}>
          {T('SignUpForm.formLogin')}
        </label>
        {errors.login?.types &&
          Object.entries(errors.login?.types).map(([type, message]) => (
            <p key={type} className={cl.error}>
              {message}
            </p>
          ))}
      </div>
      <div className={cl.form__password}>
        <input
          type="password"
          id={cl.password}
          className={cl.form__input}
          placeholder=" "
          defaultValue={''}
          {...register('password', {
            required: { value: true, message: `${T('SignUpForm.formRequireMsg')}` },
            pattern: {
              value: /^[\w+а-я0-9]+$/i,
              message: `${T('SignUpForm.formLoginPatternMsg')}`,
            },
            minLength: { value: 5, message: `${T('SignUpForm.formMinLengthMsg')}` },
            validate: (password: string) => {
              const reg = /\d+/;
              if (!reg.test(password) && password.length > 0)
                return `${T('SignUpForm.formPasswordValidateMsg')}`;
            },
          })}
        ></input>
        <label htmlFor={cl.password} className={cl.form__label}>
          {T('SignUpForm.formPassword')}
        </label>
        {errors.password?.types &&
          Object.entries(errors.password?.types).map(([type, message]) => (
            <p key={type} className={cl.error}>
              {message}
            </p>
          ))}
      </div>
      <div
        className={
          errors.password?.types
            ? `${cl.form__signInButtons} ${cl.form__margin}`
            : `${cl.form__signInButtons}`
        }
      >
        <a onClick={() => navigate(`/${Paths.SignUp}`)}>{T('SignUpForm.notRegistered')}</a>
        {isLoading && <Spinner></Spinner>}
        <input
          type="submit"
          className={cl.form__button}
          value={T('SignUpForm.formSignIn')}
          disabled={isLoading ? true : false}
        ></input>
      </div>
    </form>
  );
}

export default SignInForm;
