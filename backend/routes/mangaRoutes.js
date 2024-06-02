const express = require('express');
const router = express.Router();
const mangaController = require('../controllers/mangaController');

router.get('/popular', mangaController.getPopularManga); // Define the /popular route first
router.get('/:id', mangaController.getMangaById); // Move the route with ID parameter below /popular

// Other routes...
router.get('/', mangaController.getAllManga);
router.post('/', mangaController.createManga);
router.get('/:id/related', mangaController.getRelatedManga);
router.get('/status/ongoing', mangaController.getOngoingManga);
router.get('/status/completed', mangaController.getCompletedManga);

module.exports = router;
