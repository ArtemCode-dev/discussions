class PublicPages {
    //PATH: '/'

    private wrap(path: string) {
        return `/${path}`
    }
    ALL(slug = '') {
        return this.wrap(`all${slug ? '/' + slug : ''}`)
    }
    POPULAR(slug = '') {
        return this.wrap(`popular${slug ? '/' + slug : ''}`)
    }
    HOME(slug = '') {
        return this.wrap(`home${slug ? '/' + slug : ''}`)
    }
}

export default new PublicPages