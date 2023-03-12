import React, { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react'
import { City } from '@heybro/api/city'
import { BoardType } from '@heybro/api/post'

interface HomeMenuState {
    selectedCity?: City
    selectedBoard: BoardType
    actions: {
        updateSelectedCity: (city: City) => void
        updateBoard: (board: BoardType) => void
    }
}

const HomeMenuContext = createContext<HomeMenuState | undefined>(undefined)

export const HomeMenuProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [selectedCity, setSelectedCity] = useState<City>()
    const [selectedBoard, setSelectedBoard] = useState<BoardType>('QUESTION')

    const actions = useMemo(
        () => ({
            updateSelectedCity: (city: City) => setSelectedCity(city),
            updateBoard: (board: BoardType) => setSelectedBoard(board),
        }),
        [],
    )

    return (
        <HomeMenuContext.Provider
            value={{
                selectedCity,
                selectedBoard,
                actions,
            }}>
            {children}
        </HomeMenuContext.Provider>
    )
}

export const useHomeMenuContext = () => {
    const context = useContext(HomeMenuContext)
    if (context === undefined) throw new Error("it must be used within it's Provider")
    return context
}
