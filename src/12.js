class Item {
    constructor() {
        this.foundId = "";
    }
    list() {
        return [
            { id: 1, name: 'Kecap', sale_start_at: new Date('2018-10-01'), sale_end_at: new Date('2018-10-10') },
            { id: 2, name: 'Sambal', sale_start_at: new Date('2018-10-15'), sale_end_at: new Date('2018-10-30') },
            { id: 3, name: 'Merica', sale_start_at: new Date('2018-08-01'), sale_end_at: new Date('2018-08-31') },
            { id: 4, name: 'Detergen', sale_start_at: new Date('2019-02-10'), sale_end_at: new Date('2019-10-10') },
            { id: 5, name: 'Sapu', sale_start_at: new Date('2017-09-01'), sale_end_at: new Date('2030-07-15') },
        ]
    }

    findById(id) {
        this.foundId = this.list().find((list) => {
            return list.id === id;
        })
        return this;
    }

    isOnSale() {
        const start = new Date(this.foundId.sale_start_at);
        const end = new Date(this.foundId.sale_end_at);
        const now = new Date();
        return (now - start) >= 0 && (now - end) <= 0 ? true : false
    }

}

module.exports = Item;