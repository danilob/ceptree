import { Address } from '../core/Address';
import Dataset from '../dataset/ceps.csv'

export function getDataObject(tree, size = -1) {
    let result = [];
    let maxItens = (size < 0) ? Dataset.length - 1 : Math.min(size + 1, Dataset.length - 1)
    for (let i = 1; i < maxItens; i++) {
        var item_dataset = Dataset[i]
        let obj = {
            city: item_dataset["CIDADE"].trim(),
            street: item_dataset["ENDEREÇO"].trim(),
            neighborhood: item_dataset["BAIRRO"].trim(),
            zipCode: item_dataset["CEP"].trim(),
            complement: item_dataset["COMPLEMENTO"].trim()
        }
        var address_example = new Address(obj)
        tree.insert(address_example)
        result.push(obj)
    }
    return result
}