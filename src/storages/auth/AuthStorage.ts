import AsyncStorage from '@react-native-async-storage/async-storage'

export interface AuthenticationType {
    accessToken: string
    refreshToken: string
}

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY'
const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN_KEY'

class AuthStorage {
    async get(): Promise<AuthenticationType> {
        const [[, accessToken], [, refreshToken]] = await AsyncStorage.multiGet([ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY])
        return { accessToken: accessToken ?? '', refreshToken: refreshToken ?? '' }
    }
    async set({ accessToken, refreshToken }: AuthenticationType) {
        if (!accessToken || !refreshToken) return
        await AsyncStorage.multiSet([
            [ACCESS_TOKEN_KEY, accessToken],
            [REFRESH_TOKEN_KEY, refreshToken],
        ])
    }
    async clear() {
        await AsyncStorage.multiRemove([ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY])
    }
}

export default new AuthStorage()
