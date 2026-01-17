'use client';

import clsx from 'clsx';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
    variant?: 'primary' | 'outline';
    children: React.ReactNode;
}

export default function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
    const baseStyles = 'btn';
    const variants = {
        primary: 'btn-primary',
        outline: 'btn-outline',
    };

    return (
        <motion.button whileTap={{ scale: 0.95 }} className={clsx(baseStyles, variants[variant], className)} {...props}>
            {children}
        </motion.button>
    );
}
