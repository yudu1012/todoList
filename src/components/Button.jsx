const Button = (props) => {
    let{className,type,children} = props;
  return (
    <button className={`button ${className}}`} type={type}>{children}</button>
  )
}

export default Button
