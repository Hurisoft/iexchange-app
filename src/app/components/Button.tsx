import { FC } from "react";
import Image from "next/image";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  text?: string;
  className?: string;
  handleClick?: (event?: any) => void;
  loading?: boolean;
  styles?: any;
  icon?: string;
  href?: string; // Add href prop
}

const Button: FC<Props> = ({
  children,
  text,
  className,
  handleClick,
  loading,
  styles,
  icon,
  href, // Destructure href prop
  ...props
}) => {
  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const clickHandler = props.onClick ?? handleClick;
    if (clickHandler) {
      clickHandler(event); // Call the provided handleClick function
    }
  };

  if (href) {
    return (
      <a
        href={href}
        className={`bg-gradient-to-b from-[#3384D9] via-[#0051A6] to-[#073E66] text-white text-sm px-4 py-3 rounded-lg ${className}`}
        style={styles}>
        {loading ? (
          "Loading..."
        ) : (
          <>
            {text ? (
              <div className="flex flex-row justify-center items-center space-x-3">
                <span>{text}</span>
                {icon && <Image src={icon} alt="earn" width={20} />}
              </div>
            ) : (
              children
            )}
          </>
        )}
      </a>
    );
  }

  return (
    <button
      onClick={onClickHandler}
      className={`bg-gradient-to-b from-[#3384D9] via-[#0051A6] to-[#073E66] text-white text-sm px-4 py-3 rounded-lg ${className}`}
      disabled={loading || props.disabled} // Disable button when loading
      style={styles}>
      {loading ? (
        "Loading..."
      ) : (
        <>
          {text ? (
            <div className="flex flex-row justify-center items-center space-x-3">
              <span>{text}</span>
              {icon && <Image src={icon} alt="earn" width={20} />}
            </div>
          ) : (
            children
          )}
        </>
      )}
    </button>
  );
};

export default Button;
