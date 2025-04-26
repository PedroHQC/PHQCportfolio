// utils/scale.ts
export function getScaleFactor(
    baseWidth = 1920,
    baseHeight = 945
): number {
    if (typeof window === 'undefined') return 1;

    const scaleX =  window.innerWidth /baseWidth;
    const scaleY =  window.innerHeight/ baseHeight;

    // Usa o menor fator para manter proporção
    return Math.min(scaleX, scaleY);
}
