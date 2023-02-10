/**
 * 사용자 정보
 * @export
 * @interface JwtTokenDto
 */
export interface JwtTokenDto {
    /**
     * 엑세스 토큰
     * @type {string}
     * @memberof JwtTokenDto
     */
    accessToken: string
    /**
     * 리프레시 토큰
     * @type {string}
     * @memberof JwtTokenDto
     */
    refreshToken: string
}
