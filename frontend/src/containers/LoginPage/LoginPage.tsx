import { useState } from 'react';
import Button, { ButtonVariant } from '../../components/core/Button/Button';
import { Routes, emailRegex } from '../../constants/enum';
import { Link } from 'react-router-dom';
import logoImg from '/logo_icon.png';
import { useAppDispatch } from '../../store/store';
import { toast } from 'react-toastify';
import { loginUser } from '../../store/account/accountSlice';

import * as Styled from './LoginPage.styles';
import Input from '../../components/core/Input/Input';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === '' || password === '') {
      return toast.error('Please enter username and password');
    }

    if (!emailRegex.test(email)) {
      return toast.error('Please enter a valid email');
    }

    dispatch(loginUser({ email, password }));
  };

  return (
    <Styled.Container>
      <Styled.MainContainer>
        <Styled.Card>
          <Styled.GlobalContainer>
            <Styled.GlobalContent>
              <Styled.Logo src={logoImg} alt="logo" />
              <Styled.Title>Welcome Again!</Styled.Title>

              <form onSubmit={handleSubmit}>
                <Styled.Text>Please login to your account</Styled.Text>
                <Styled.InputGroup>
                  <Input
                    id="email"
                    label="E-mail"
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    name="email"
                    onChange={handleChange}
                  />
                </Styled.InputGroup>

                <Styled.InputGroup>
                  <Input
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    name="password"
                    onChange={handleChange}
                  />
                </Styled.InputGroup>

                <Styled.LoginButtonWrapper>
                  <Button variant={ButtonVariant.DARKER} type="submit">
                    Login
                  </Button>
                </Styled.LoginButtonWrapper>

                <Link to={Routes.register.route}>
                  <Styled.JoinUs>Don't have an account? Join us</Styled.JoinUs>
                </Link>
              </form>
            </Styled.GlobalContent>
          </Styled.GlobalContainer>
        </Styled.Card>
      </Styled.MainContainer>
    </Styled.Container>
  );
}
