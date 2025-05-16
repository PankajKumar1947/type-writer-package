declare class Typewriter {
    constructor(
        element: HTMLElement,
        words: string[],
        options?: {
            typingSpeed?: number;
            pauseTime?: number;
        }
    );

    destroy(): void;
}

export default Typewriter;
