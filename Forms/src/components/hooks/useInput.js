import { useState } from "react"
export function useInput(defaultValue,validationFn) {
    const [enteredValue, setEnteredValue] = useState(defaultValue)
    const [isEdited, setIsEdited] = useState(false)
    const valueIsValid =validationFn(enteredValue)

        function handleBlur() {
            setIsEdited(true)
        }


    function handleChange(event) {
        setEnteredValue(event.target.value)
        setIsEdited(false)
    }
    return {
        value: enteredValue,
        handleBlur,
        handleChange,
        hasError:isEdited && !valueIsValid

    }
}
