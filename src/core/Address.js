export class Address {
    constructor({
        zipCode = "",
        street = "",
        neighborhood = "",
        city = "",
        complement = ""
    } = {}) {
        this.key = Number(zipCode);
        this.zipCode = zipCode;
        this.street = street;
        this.neighborhood = neighborhood;
        this.city = city;
        this.complement = complement;
    }

    print() {
        console.log(`Foi adicionado o CEP ${this.zipCode}, endereço: ${this.street}`)
    }
}