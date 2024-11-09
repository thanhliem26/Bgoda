export const convertDiscountPrice = (price: number, discount: number = 0) => {
    const finalDiscount = discount ?? 0;
    return price - (price * finalDiscount) / 100;
}