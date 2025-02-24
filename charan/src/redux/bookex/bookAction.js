//^here is where actual action will be created based om type of intention to buy a product

import { BUY_BOOK } from "./bookType";

export const buyBook = () => {
    return {
        type: BUY_BOOK
    };
};
