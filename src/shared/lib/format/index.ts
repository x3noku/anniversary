export const formatPlural = (count: number, nouns: { one: string; twoToFour: string; many: string }) => {
    let remainder = Math.abs(count) % 100;

    if (remainder >= 5 && remainder <= 20) return nouns.many;

    remainder %= 10;

    if (remainder === 1) return nouns.one;
    if (remainder >= 2 && remainder <= 4) return nouns.twoToFour;
    return nouns.many;
};
