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
    async getAllCharacters() {
        const res = await this.getRes('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    }
    async getCharacter(id) {
        const res = await this.getRes(`/characters/${id}`);
        return this._transformCharacter(res);
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
    _transformCharacter(char) {
        let missingField = 'Неизвестно'
        return {
            name: char.name === '' ? missingField : char.name,
            gender: char.gender === '' ? missingField : char.gender,
            born: char.born === '' ? missingField : char.born ,
            died: char.died === '' ? missingField : char.died,
            culture: char.culture === '' ? missingField : char.culture
        }
    }
    _transformHouse(house) { 
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            totles: house.totles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }
    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
}
