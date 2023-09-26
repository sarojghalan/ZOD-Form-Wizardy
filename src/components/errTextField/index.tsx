interface ErrTextFieldProps{
    errorMessage: string
}

export const ErrTextField = ({errorMessage} : ErrTextFieldProps) => {
    return (
        <span className="text-error font-medium">
            {errorMessage}
        </span>
    )
}