import { PropsWithChildren } from "react";

import Spinner from "./Spinner";

interface PropTypes extends PropsWithChildren {
    color: null | false | "neutral" | "error" | "secondary";
    small?: boolean | undefined;
    isLoading?: boolean | undefined;
    onClick?: () => void;
}

function CircularButton({
    children,
    color,
    small,
    isLoading,
    onClick,
}: PropTypes) {
    return (
        <button
            className={`btn btn-circle ${small && "btn-sm"} ${isLoading && "btn-disabled"} ${color === "neutral" && "btn-neutral"} ${color === "error" && "btn-error"} ${color === "secondary" && "btn-secondary"}`}
            onClick={onClick}
        >
            {isLoading ? <Spinner small={small} /> : children}
        </button>
    );
}

export default CircularButton;
