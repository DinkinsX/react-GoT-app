export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getRes(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(res.ok) {
            return await res.json();;
        } else {
            throw new Error('Ошибка запроса', url, res.status);
        }
    }
    getAllCharacters() {
        return this.getRes('/characters?page=5&pageSize=10')
    }
    getCharacter(id) {
        return this.getRes(`/characters/${id}`)
    }
    getAllHouses() {
        return this.getRes('/houses/');
    }
    getHouse(id) {
        return this.getRes(`/houses/${id}/`)
    }
    getAllBooks() {
        return this.getRes('/books/');
    }
    getBook(id) {
        return this.getRes(`/books/${id}/`)
    }
}
