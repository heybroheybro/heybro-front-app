import { useEffect, useState } from 'react'

export function useDebounce<T>(input: T, delay?: number): T {
    const [output, setOutput] = useState<T>(input)

    useEffect(() => {
        const timer = setTimeout(() => setOutput(input), delay || 500)

        return () => clearTimeout(timer)
    }, [input, delay])

    return output
}
