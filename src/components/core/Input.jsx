import React from 'react'

const Input = ({
    type,
    id,
    name,
    placeholder,
    value,
    onChange,
    className,
    onClick,
    onSubmit,
    children
}) => {
  return (
    <>
        <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={className}
            onClick={onClick}
            onSubmit={onSubmit}
        >
            {children}
        </input>
    </>
  )
}

export default Input