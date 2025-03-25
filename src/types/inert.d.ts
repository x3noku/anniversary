declare module 'react' {
    interface HTMLAttributes<T> extends DOMAttributes<T> {
        /**
         * Boolean attribute indicating that the browser will ignore the element.
         *
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert MDN Web Docs}
         */
        inert?: '';
    }
}
declare global {
    //TODO: remove this when inert is supported in React types
    namespace JSX {
        interface IntrinsicAttributes {
            inert?: '';
        }
    }
}

export {};
