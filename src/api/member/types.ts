import { Agreements } from '../agreement/types'
import { JwtTokenDto } from '../model'
import { ProfileInfo } from '../my/types'

export interface SignInResponse extends JwtTokenDto {
    user: ProfileInfo
    agreement: Agreements
}
