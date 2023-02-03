import { BaseRes } from '@heybro/api/model'
import { AxiosInstance } from 'axios'
import client from '../client'

export interface Image {
    ext: string
    originalFileName: string
    size: number
    uuid: string
}

export interface Post {
    postId: number
    boardType: 'QUESTION' | 'TIP'
    categoryMain: 'RECOMMAND'
    categorySub: 'SHOPPING'
    cityId: number
    content: string
    images: Image[]
    name: string
    title: string
}

export interface PostsParams {
    boardType: 'QUESTION' | 'TIP'
    offset: number
    pageNumber: number
    pageSize: number
    paged: boolean
    ['sort.sorted']: boolean
    ['sort.unsorted']: boolean
    unpaged: boolean
}

const DEFAULT_POSTS_PARAMS = {
    offset: 10,
    pageNumber: 1,
    pageSize: 10,
    paged: false,
    ['sort.sorted']: false,
    ['sort.unsorted']: false,
    unpaged: false,
}

class PostApi {
    private axiosClient: AxiosInstance

    constructor(axiosClient: AxiosInstance) {
        this.axiosClient = axiosClient
    }

    getPosts(params: Partial<PostsParams>) {
        return this.axiosClient.request<BaseRes<Post[]>>({
            method: 'GET',
            url: `/posts`,
            params: {
                ...DEFAULT_POSTS_PARAMS,
                ...params,
            },
        })
    }

    getPost({ postId }: { postId: number }) {
        return this.axiosClient.request<BaseRes<Post>>({
            method: 'GET',
            url: `/post/${postId}`,
        })
    }

    createPost(post: Post) {
        return this.axiosClient.request<BaseRes<Post>>({
            method: 'POST',
            url: `/post/create`,
            data: post,
        })
    }

    deletePost({ postId }: { postId: number }) {
        return this.axiosClient.request<BaseRes<Post>>({
            method: 'POST',
            url: `/post/delete/${postId}`,
        })
    }

    updatePost(post: Post) {
        return this.axiosClient.request<BaseRes<Post>>({
            method: 'PUT',
            url: `/post/update`,
            data: post,
        })
    }
}

export const postApi = new PostApi(client)
