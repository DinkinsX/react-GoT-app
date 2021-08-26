export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getRes = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if(res.ok) {
            return await res.json();;
        } else {
            throw new Error('Ошибка запроса', url, res.status);
        }
    }
     getAllCharacters =  async () => {
        const res = await this.getRes('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    }
     getCharacter =  async (id) => {
        const res = await this.getRes(`/characters/${id}`);
        return this._transformCharacter(res);
    }
    getAllHouses = async () => {
        const res = await this.getRes('/houses/');
        return res.map(this._transformHouse);
    }
    getHouse = async (id) => {
        const res = await this.getRes(`/houses/${id}`)
        return this._transformHouse(res);
        
    }
    getAllBooks = async () => {
        const res = await this.getRes('/books/');
        return res.map(this._transformBook);
    }
    getBook = async (id) => {
        const res = await this.getRes(`/books/${id}`)
        return this._transformBook(res);
    }
    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }
    _transformCharacter = (char) => {
        let missingField = 'Неизвестно'
        
        return {
            id: this._extractId(char),
            name: char.name === '' ? missingField : char.name,
            gender: char.gender === '' ? missingField : char.gender,
            born: char.born === '' ? missingField : char.born ,
            died: char.died === '' ? missingField : char.died,
            culture: char.culture === '' ? missingField : char.culture
        }
    }
    _transformHouse = (house) => { 
        return {
            id: this._extractId(house),
            name: house.name,
            region: house.region,
            words: house.words,
            totles: house.totles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }
    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
}
