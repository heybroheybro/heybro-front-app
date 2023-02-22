/**
 *
 * @export
 * @interface BaseRes
 */
export interface BaseRes<T> {
    /**
     * 결과 코드
     * @type {number}
     * @memberof BaseRes
     */
    code?: number
    /**
     * 데이터
     * @type {T}
     * @memberof BaseRes
     */
    data?: T
    /**
     * 결과 메시지
     * @type {string}
     * @memberof BaseRes
     */
    message?: string
}

export interface PaginationResponse<T> {
    pageParam: number
    data: T[]
}
