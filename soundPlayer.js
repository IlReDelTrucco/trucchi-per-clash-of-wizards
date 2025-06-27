/**
 * soundPlayer - Basic Audio Playback Utility
 * Author: IlReDelTrucco
 * License: Custom
 */

const soundPlayer = {
    /**
     * Plays a sound file.
     * @param {string} src - Path to the audio file.
     * @param {number} [volume=1] - Volume level (0.0 to 1.0).
     */
    play(src, volume = 1) {
        if (typeof src !== 'string' || src.trim() === '') {
            console.error('[soundPlayer] Invalid audio source.');
            return;
        }
        if (typeof volume !== 'number' || volume < 0 || volume > 1) {
            console.warn('[soundPlayer] Invalid volume value. Using default 1.');
            volume = 1;
        }

        const audio = new Audio(src);
        audio.volume = volume;
        audio.play().catch(err => {
            console.error('[soundPlayer] Playback failed:', err);
        });
    }
};

// Example usage:
// soundPlayer.play('assets/audio/click.mp3', 0.5);

module.exports = soundPlayer;
