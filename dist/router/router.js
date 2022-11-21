"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const note_personals_controllers_1 = require("../controller/note-personals-controllers");
const router = (0, express_1.Router)();
router.get('/', note_personals_controllers_1.getUsers);
router.post('/searchnotes', note_personals_controllers_1.searchNotes);
router.post('/createnotes', note_personals_controllers_1.createNotes);
router.put('/updatenotes/:id', note_personals_controllers_1.updateNotes);
router.delete('/deletenotes/:id', note_personals_controllers_1.deleteNotes);
exports.default = router;