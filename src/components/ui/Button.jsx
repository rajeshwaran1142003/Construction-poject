import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover-lift active:scale-[0.98] focus-visible:scale-[0.99]',
  {
    variants: {
      variant: {
        primary: 'hover:opacity-90 focus:ring-green-500 hover-glow',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500 hover-lift',
        outline: 'border-2 bg-transparent hover:bg-opacity-10 focus:ring-green-500 hover-glow',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const Button = ({
  // Required parameters with defaults
  text = "Get a Quote",
  text_font_size = "14",
  text_font_family = "Inter",
  text_font_weight = "500",
  text_line_height = "17px",
  text_text_align = "center",
  text_color = "#f9fafb",
  fill_background_color = "#019248",
  border_border_radius = "4px",
  
  // Optional parameters (no defaults)
  border_border,
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidBorder = border_border && typeof border_border === 'string' && border_border?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
    hasValidBorder ? `border-[${border_border}]` : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const buttonStyles = {
    fontSize: `${text_font_size}px`,
    fontFamily: text_font_family,
    fontWeight: text_font_weight,
    lineHeight: text_line_height,
    textAlign: text_text_align,
    color: text_color,
    backgroundColor: fill_background_color,
    borderRadius: border_border_radius,
  };

  // Safe click handler
  const handleClick = (event) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={buttonStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;