import { useQuery } from '@apollo/client';
import { Dispatch, SetStateAction, useState } from 'react';
import { CONTRIBUTIONS } from '../api/github';

type FormProps = {
  getUser: (nickname: string) => void;
};

export default function Form(props: FormProps) {
  const { getUser } = props;
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getUser(value);
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="form__input"
        placeholder="Search user..."
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <button className="form__button">Search</button>
    </form>
  );
}