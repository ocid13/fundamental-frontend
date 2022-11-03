class GameItem extends HTMLElement {
    constructor() {
        super()
        this.shadowDOM = this.attachShadow({mode: 'open'})
    }
    set game(game) {
        this._game = game
        this.render()
    }

    render() {
        const {poster_path, title, release_date, popularity, vote_average} = this.game
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            :host {
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }
            
            .icon {
                width: 100%;
                max-height: 300px;
                object-fit: cover;
                object-position: center;
            }
            
            .game-info {
                padding: 24px;
            }
            
            .game-info > h2 {
                font-weight: lighter;
            }
            
            .game-info > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10; /* number of lines to show */
            }
        </style>
        
        <img class="icon" src="${this._game.poster_path}" alt="Gambar">
        <div class="game-info">
        <h2>${title}</h2>
        <p>${this._game.title}</p>
        <p>${this._game.release_date}</p>
        <p>${this._game.popularity}</p>
        <p>${this._game.vote_average}</p>
        </div>`
    }
}

customElements.define('game-item', GameItem)