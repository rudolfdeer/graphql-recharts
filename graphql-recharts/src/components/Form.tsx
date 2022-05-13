import { Dispatch, SetStateAction, useState } from 'react';

type FormProps = {
  setNickname: Dispatch<SetStateAction<string>>;
};

export default function Form({ setNickname }: FormProps) {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNickname(value);
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
