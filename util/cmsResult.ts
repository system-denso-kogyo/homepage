export interface CMSResult {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
}

export interface CMSListResult {
    contents: CMSResult[]
    totalCount: number
    offset: number
    limit: number
}