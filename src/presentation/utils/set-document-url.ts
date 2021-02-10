export const setDocumentUrl = (file: any): string => {
    return process.env.STORAGE_TYPE === 'local' ? `${process.env.APP_URL}/static/uploads/${file.key}` : file.location  
}