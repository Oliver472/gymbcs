import {Controller} from "react-hook-form";
import React, {useState} from "react";
import {EyeIcon, EyeSlashIcon} from "@heroicons/react/24/solid";
import {log} from "node:util";

interface RHFBasicTextFieldProps {
    name: string;
    label: string;
    rules?: Record<string, unknown>;
    type?: string;
    control: any;
    autoComplete?: string;
    multiline?: boolean;
    defaultValue?: string | number | boolean;
    disabled?: boolean;
    placeholder?: string;
}

export const RHFBasicTextField = ({
                                      rules,
                                      name,
                                      label,
                                      type,
                                      control,
                                      autoComplete,
                                      defaultValue,
                                      disabled,
                                      placeholder,
                                  }: RHFBasicTextFieldProps) => {
    const darkMode = document.documentElement.classList.contains('dark');

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue ?? ""}
            render={({field: {onChange, value}, fieldState: {error}}) => {

                const generateClassName = () => {
                    let className = 'input-field border-2 border-accent2 px-[10px] py-[8px]';
                    if (error) className += ' !input-field--error';
                    if (disabled) className += ' dark:bg-ssk-dark !cursor-text';
                    className += darkMode ? ' input-field--border-color-dark' : ' input-field--border-color';
                    return className;
                };



                return (
                    <div className="relative input flex flex-col justify-start ">
                        <label className="mb-[5px]" htmlFor="email">{label}</label>
                        <input
                            type={type ?? "text"}
                            autoComplete={autoComplete ?? ""}
                            value={value}
                            onChange={(newValue) => {
                                onChange(newValue);
                            }}
                            disabled={disabled === true}
                            className={generateClassName()}
                            placeholder={placeholder}
                        />
                        {error && (error.message ? (<p className="text-danger text-xs absolute top-2 right-0">{error?.message}</p>) : (<p className="text-danger text-xs absolute top-2 right-0">This field is required</p>))}
                    </div>
                );
            }}
            rules={rules ?? {}}
        />
    );
};


interface RHFPasswordTextFieldProps {
    name: string;
    label: string;
    rules?: Record<string, unknown>;
    control: any;
    autoComplete?: string;
    showPasswordBtn?: boolean;
    disabled?: boolean;
    placeholder?: string;
}

export const RHFPasswordTextField = ({
                                         name,
                                         label,
                                         rules,
                                         control,
                                         autoComplete,
                                         showPasswordBtn,
                                         disabled,
                                         placeholder,
                                     }: RHFPasswordTextFieldProps) => {
    const [showPassword, setPassword] = useState(false);

    const handleClickShowPassword = () => {
        setPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
    };

    const darkMode = document.documentElement.classList.contains('dark');

    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({field: {onChange, value}, fieldState: {error}}) => {

                const generateClassName = () => {
                    let className = 'input-field border-2 border-accent2 px-[10px] py-[8px]';
                    if (error) className += ' !input-field--error';
                    if (disabled) className += ' dark:bg-ssk-dark';
                    className += darkMode ? ' input-field--border-color-dark' : ' input-field--border-color';
                    return className;
                };

                return (
                        <div className="input relative flex flex-col justify-start ">
                            <label className="mb-[5px]" htmlFor="email">{label}</label>
                            <input
                                placeholder={placeholder}
                                type={showPassword ? "text" : "password"}
                                autoComplete={autoComplete ?? ""}
                                value={value}
                                onChange={onChange}
                                className={generateClassName()}
                                disabled={disabled === true}
                            />
                            {showPassword ? (
                                <EyeSlashIcon onClick={handleClickShowPassword}
                                              className="absolute select-none w-6 right-[10px] cursor-pointer bottom-[10px] text-accent"/>

                            ) : (

                                <EyeIcon onClick={handleClickShowPassword}
                                         className="absolute select-none w-6 right-[10px] cursor-pointer bottom-[10px] text-accent"/>

                            )}
                            {error && (error.message ? (<p className="text-danger text-xs absolute top-2 right-0">{error?.message}</p>) : (<p className="text-danger text-xs absolute top-2 right-0">This field is required</p>))}
                        </div>
                )
            }}
            rules={rules ?? {}}
        />
    );
};