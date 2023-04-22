import {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  MouseEventHandler,
  useEffect,
  useRef,
} from 'react';

interface IDatePicker
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  placeholder?: string;
  handleChange: (date: Date) => void;
}

const DatePicker: FC<IDatePicker> = ({
  id,
  placeholder = 'Select a date',
  handleChange,
  ...inputProps
}) => {
  const datePickerRef = useRef<HTMLInputElement>(null);

  const handleInputClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLElement;
    const parent = target.parentElement;
    const button = parent?.querySelector('button');
    if (button) {
      button.click();
    }
  };

  useEffect(() => {
    const eventHandler = (e: any) => {
      handleChange(e.date);
    };

    document.addEventListener('dateChange.te.datepicker', eventHandler);

    //clean up
    return () =>
      document.removeEventListener('dateChange.te.datepicker', eventHandler);
  }, []);

  return (
    <div
      className="relative mb-3"
      data-te-datepicker-init
      data-te-input-wrapper-init
      onClick={handleInputClick}
    >
      <input
        {...inputProps}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
        type="text"
        id={id}
        ref={datePickerRef}
        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default DatePicker;
