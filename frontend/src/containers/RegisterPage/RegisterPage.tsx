import { useState } from 'react';
import Button, { ButtonVariant } from '../../components/core/Button/Button';
import { Routes, emailRegex } from '../../constants/enum';
import { Link } from 'react-router-dom';
import logoImg from '/logo_icon.png';
import { useAppDispatch } from '../../store/store';
import { toast } from 'react-toastify';
import { registerUser } from '../../features/account/accountSlice';

import * as Styled from './RegisterPage.styles';

export default function LoginPage() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',
  });
  const dispatch = useAppDispatch();

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isUserValid()) {
      dispatch(registerUser(user));
    }
  };

  const isUserValid = () => {
    const { email, password, username } = user;

    if (email === '' || password === '' || username === '') {
      toast.error('Please enter all credentials');
      return false;
    }

    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email');
      return false;
    }

    if (email.length < 3 || email.length > 30) {
      toast.error('Email must be between 3 and 30 characters');
      return false;
    }

    if (password.length < 6 || password.length > 20) {
      toast.error('Password must be between 6 and 20 characters');
      return false;
    }

    if (username.length < 3 || username.length > 20) {
      toast.error('Username must be between 3 and 20 characters');
      return false;
    }

    return true;
  };

  return (
    <Styled.Container>
      <Styled.MainContainer>
        <Styled.Card>
          <Styled.GlobalContainer>
            <Styled.GlobalContent>
              <Styled.Logo src={logoImg} alt="logo" />
              <Styled.Title>Join Our Community!</Styled.Title>

              <form onSubmit={handleSubmit}>
                <Styled.Text>Create new Account</Styled.Text>
                <Styled.InputGroup>
                  <Styled.Input
                    type="text"
                    placeholder="Username"
                    value={user.username}
                    name="username"
                    onChange={handleChange}
                  />
                </Styled.InputGroup>
                <Styled.InputGroup>
                  <Styled.Input
                    type="email"
                    placeholder="E-mail"
                    value={user.email}
                    name="email"
                    onChange={handleChange}
                  />
                </Styled.InputGroup>

                <Styled.InputGroup>
                  <Styled.Input
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    name="password"
                    onChange={handleChange}
                  />
                </Styled.InputGroup>

                <Styled.LoginButtonWrapper>
                  <Button variant={ButtonVariant.DARKER} type="submit">
                    Register
                  </Button>
                </Styled.LoginButtonWrapper>

                <Link to={Routes.login.route}>
                  <Styled.JoinUs>
                    Already have an account? Sign in
                  </Styled.JoinUs>
                </Link>
              </form>
            </Styled.GlobalContent>
          </Styled.GlobalContainer>
        </Styled.Card>
      </Styled.MainContainer>
    </Styled.Container>
  );
}
