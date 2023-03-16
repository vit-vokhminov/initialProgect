import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import CN from 'classnames';
import s from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    // Флаг, отвечающий за работу кнопки
    disabled?: boolean;
    // Содержимое кнопки
    children?: ReactNode;
    // Увеличивает кнопку на всю свободную ширину
    fullWidth?: boolean;
}

export const Button = memo(
    ({ children, className, fullWidth, ...props }: ButtonProps) => {
        const buttonClass = CN(s.btn, className, { [s.fullWidth]: fullWidth });

        return (
            <button type='button' {...props} className={buttonClass}>
                {children}
            </button>
        );
    }
);
