export default class Typewriter {
    constructor(element, words, options = {}) {
        this.element = element;
        this.words = words;
        this.wordIndex = 0;
        this.charIndex = 0;
        this.text = "";
        this.typingSpeed = options.typingSpeed || 40;
        this.pauseTime = options.pauseTime || 500;
        this._isDestroyed = false;
        this._timeoutId = null;

        this._type();
    }

    _type() {
        if (this._isDestroyed) return;

        const currentWord = this.words[this.wordIndex];

        if (this.charIndex < currentWord.length) {
            this.text += currentWord.charAt(this.charIndex);
            this.element.textContent = this.text;
            this.charIndex++;
            this._timeoutId = setTimeout(() => this._type(), this.typingSpeed);
        } else {
            this._timeoutId = setTimeout(() => {
                if (this._isDestroyed) return;
                this.text = "";
                this.charIndex = 0;
                this.wordIndex = (this.wordIndex + 1) % this.words.length;
                this.element.textContent = "";
                this._type();
            }, this.pauseTime);
        }
    }

    destroy() {
        this._isDestroyed = true;
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
        }
    }
}
