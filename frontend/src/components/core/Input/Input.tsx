import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

interface IInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  label: string;
}

const MyInput: FC<IInput> = ({ id, label, ...inputProps }) => {
  return (
    <div className="relative mb-3" data-te-input-wrapper-init>
      <input
        {...inputProps}
        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primaryDark data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primaryDark [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id={id}
        type={inputProps.type || 'text'}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primaryDark peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primaryDark"
      >
        {label}
      </label>
    </div>
  );
};

export default MyInput;
