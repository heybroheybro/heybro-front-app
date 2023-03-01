import { useEffect, useState } from 'react'
import VersionCheck from 'react-native-version-check'

interface ReturnType {
    appVersion: string
}

export function useAppVersion(): ReturnType {
    const [appVersion, setAppVersion] = useState<string>('')

    useEffect(() => {
        function getVersion() {
            const version = VersionCheck.getCurrentVersion()
            setAppVersion(version)
        }
        getVersion()
    }, [])

    return { appVersion }
}
