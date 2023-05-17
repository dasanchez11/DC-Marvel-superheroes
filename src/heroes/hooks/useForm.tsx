import { ChangeEvent, useState } from "react";

export interface UseForm<T> {
  formState: T;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onResetForm: () => void;
}

export const useForm = <T,>(initialForm: T): T & UseForm<T> => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
