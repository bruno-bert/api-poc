export interface BucketDeleteDocumentByIdAdapter {
  deleteById: (id: string) => Promise<BucketDeleteDocumentByIdAdapter.Result>
}

export namespace BucketDeleteDocumentByIdAdapter {
  export type Result = boolean
}
