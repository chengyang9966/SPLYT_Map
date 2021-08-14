import { render, screen,fireEvent,act } from '@testing-library/react';
import LoginPage from '../pages/Login';
import React from 'react';

describe("Login render Page", () => {
    it('renders the Login page', () => {
      const {getByText} = render(<LoginPage/>);
      expect(getByText(/login/i)).toBeInTheDocument();
    });
  
    it('render 2 input components', () => {
      const {getByLabelText} = render(<LoginPage/>);
      expect(getByLabelText('username')).toBeInTheDocument();
      expect(getByLabelText('password')).toBeInTheDocument();
    });
  
    it('renders a submit button', () => {
      const {getByText} = render(<LoginPage/>);
      expect(getByText("Login")).toBeInTheDocument();
    });
  });

  describe("Form behaviour",  () => {
    it('validate user inputs, and provides error messages', async () => {
      const { getByTestId, getByText } = render(<LoginPage/>)
  
      await act (async () => {
        fireEvent.change(screen.getByLabelText('username'), {
          target: {value: ''},
        });
  
        fireEvent.change(screen.getByLabelText('password'), {
          target: {value: ''},
        })
      });
  
      await act (async () => {
        fireEvent.submit(getByTestId('form'))
      });
  
      expect(getByText("User Name is required")).toBeInTheDocument();
      expect(getByText("Password is required")).toBeInTheDocument();
    });
  
    it('should submit when form inputs contain text', async () => {
      const { getByTestId, queryByText } = render(<LoginPage/>)
  
      await act(async () => {
        fireEvent.change(screen.getByLabelText('username'), {
          target: {value: 'shaquille'},
        });
  
        fireEvent.change(screen.getByLabelText('password'), {
          target: {value: 'oatmeal'},
        })
      });
  
      await act (async () => {
        fireEvent.submit(getByTestId('form'))
      });
  
      expect(queryByText("User Name is required")).not.toBeInTheDocument();
      expect(queryByText("Password is required")).not.toBeInTheDocument();
    });
  });

  describe('user logs in successfully and token added to localstorage', () => {
    it('allows the user to login successfully', async () => {
  
      // mock window.fetch for the test
      const UserResponse = {token: 'user_token'}
  
      jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
        return Promise.resolve({
          json: () => Promise.resolve(UserResponse),
        })
      });
  
      // Render the Login component
      const { getByTestId } = render(<LoginPage />);
  
      // fill out the form
      await act (async () => {
        fireEvent.change(screen.getByLabelText(/username/i), {
          target: {value: 'shaquille'},
        });
  
        fireEvent.change(screen.getByLabelText('password'), {
          target: {value: 'oatmeal'},
        })
      });
  
      //Submit the form
      await act (async () => {
        fireEvent.submit(getByTestId('form'))
      });
  
      // Expect local token to be set
      expect(window.localStorage.getItem('token')).toEqual(UserResponse.token)
    })
  });