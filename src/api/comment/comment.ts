import { BaseRes } from '@heybro/api/model'
import { AxiosInstance } from 'axios'
import client from '../client'

export interface Comment {
    commentId: number
    content: string
    imageInfo: string[]
    name: string
    postId: number
}

export interface CommentsParams {
    offset: number
    pageNumber: number
    pageSize: number
    paged: boolean
    ['sort.sorted']: boolean
    ['sort.unsorted']: boolean
    unpaged: boolean
}

class CommentApi {
    private axiosClient: AxiosInstance

    constructor(axiosClient: AxiosInstance) {
        this.axiosClient = axiosClient
    }

    getComments(params: CommentsParams) {
        return this.axiosClient.request<BaseRes<Comment[]>>({
            method: 'GET',
            url: `/comments`,
            params,
        })
    }

    getComment({ commentId }: { commentId: number }) {
        return this.axiosClient.request<BaseRes<Comment>>({
            method: 'GET',
            url: `/comment/${commentId}`,
        })
    }

    createComment(comment: Comment) {
        return this.axiosClient.request<BaseRes<Comment>>({
            method: 'POST',
            url: `/comment/create`,
            data: comment,
        })
    }

    deleteComment({ commentId }: { commentId: number }) {
        return this.axiosClient.request<BaseRes<Comment>>({
            method: 'POST',
            url: `/comment/delete/${commentId}`,
        })
    }

    updateComment(comment: Comment) {
        return this.axiosClient.request<BaseRes<Comment>>({
            method: 'PUT',
            url: `/comment/update`,
            data: comment,
        })
    }
}

export const commentApi = new CommentApi(client)
