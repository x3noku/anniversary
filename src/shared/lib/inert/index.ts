export const inert = (value: unknown) => {
    return Boolean(value).valueOf() ? '' : undefined;
};
