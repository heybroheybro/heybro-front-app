import { useState } from 'react'

type ReturnType = [string, (value: string) => void]

export function useInput(initialValue = '', maxLength = 200): ReturnType {
    const [value, setValue] = useState<string>(initialValue)

    const handleChangeText = (text: string) => {
        const nextValue = text.substring(0, maxLength)
        setValue(nextValue)
    }

    return [value, handleChangeText]
}
