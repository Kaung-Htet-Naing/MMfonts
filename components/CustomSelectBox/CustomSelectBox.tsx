import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import React, { Fragment } from 'react';
import { SelectOptionType } from '@core/golobalTypes';

function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

type CustomSelectBoxType = {
  initialValue: SelectOptionType;
  setInitialValue: React.Dispatch<React.SetStateAction<SelectOptionType>>;
  options: SelectOptionType[];
  unit?: string;
};

const CustomSelectBox = ({
  initialValue,
  setInitialValue,
  options,
  unit,
}: CustomSelectBoxType) => {
  return (
    <Listbox value={initialValue} onChange={setInitialValue}>
      {({ open }) => (
        <>
          <div className="relative flex items-center">
            <Listbox.Button className="hover:bg-lightblue  relative w-full cursor-default rounded-xl bg-secondary py-1.5 pl-3 pr-10 text-left text-darkblue  focus:outline-none  sm:text-sm sm:leading-6">
              <span className="block w-full py-1 text-base font-medium truncate">
                {initialValue.value} {unit}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronUpDownIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm bg-lightblue">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.label}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-darkblue text-primary' : 'text-black',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => {
                      return (
                        <>
                          <span
                            className={classNames(
                              selected ? 'font-bold' : 'font-normal',
                              'block truncate'
                            )}
                          >
                            {option.value}
                          </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-black',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      );
                    }}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default CustomSelectBox;