import {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  MouseEventHandler,
  useEffect,
  useRef,
} from 'react';

interface ITimePicker
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  handleChange: (time: string) => void;
}

const TimePicker: FC<ITimePicker> = ({
  id,
  placeholder = 'Select a time',
  handleChange,
  ...inputProps
}) => {
  const timePickerRef = useRef<HTMLInputElement>(null);

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
      console.log(e);
      const selectedTime = e?.srcElement?.value;
      handleChange(selectedTime);
    };

    timePickerRef.current?.addEventListener(
      'input.te.timepicker',
      eventHandler
    );

    // clean up
    return () =>
      timePickerRef.current?.removeEventListener(
        'input.te.timepicker',
        eventHandler
      );
  }, []);
  return (
    <div
      className="relative"
      data-te-timepicker-init
      data-te-input-wrapper-init
      onClick={handleInputClick}
    >
      <input
        {...inputProps}
        ref={timePickerRef}
        type="text"
        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id={id}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
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

export default TimePicker;
