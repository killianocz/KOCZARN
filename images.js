/**
 * KOCZARN — Liste des images des galeries
 * ─────────────────────────────────────────
 * Pour ajouter des photos :
 *   1. Mets le fichier dans le bon dossier :
 *        ./images/VTT/      ← photos VTT
 *        ./images/VOITURE/  ← photos voitures
 *   2. Ajoute le nom du fichier dans le tableau correspondant ci-dessous
 *   3. Sauvegarde — la galerie se met à jour automatiquement
 *
 * Formats acceptés : jpg, jpeg, png, webp, gif
 */

window.GALLERY_IMAGES = {

    VTT: [
        'VTT (1).jpg',
        'VTT (2).jpg',
        'VTT (3).jpg',
    ],

    VOITURE: Array.from({ length: 17 }, (_, i) => `VTR (${i + 1}).jpg`)

};