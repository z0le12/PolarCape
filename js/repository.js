export class CardsRepo {
    constructor() {

        this.getCards = async () => {
            try {
                const response = await fetch('https://api.magicthegathering.io/v1/cards?random=true&pageSize=100&language=English');
                const results = await response.json();
                return results.cards;
            } catch (err) {
                return console.error(err);
            }
        };

        this.getTypes = async () => {
            try {
                const response = await fetch('https://api.magicthegathering.io/v1/types');
                const results = await response.json();
                return results.types;
            } catch (err) {
                return console.error(err);
            }
        };

    };
};
