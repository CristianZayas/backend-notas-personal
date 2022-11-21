"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNotes = exports.updateNotes = exports.createNotes = exports.searchNotes = exports.getUsers = void 0;
const note_personals_models_1 = require("../models/note-personals-models"); //TODO:  Importamos el modelo de la base datos
//TODO:  Esta función lo que hace es trae todos los registros y ademas los ordena del más reciente.
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const showAllNotes = yield note_personals_models_1.schemaNote.find().sort({ createdAt: 'desc' });
    // console.log(showAllNotes.sort({createdAt : 'asc'}));
    res.json(showAllNotes);
});
exports.getUsers = getUsers;
//TODO: Con esta función lo estamos creado es un buscador 
const searchNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(String(req.body.name_actividad).trim().toLowerCase());
    const showAllNotes = yield note_personals_models_1.schemaNote.find({ name_actividad: { $regex: `${String(req.body.name_actividad).trim()}`, $options: 'i' } }).sort({ createdAt: 'desc' });
    if (showAllNotes.length !== 0) {
        res.json(showAllNotes);
    }
    else {
        res.json({ noFound: 'No se han encontrado ninguna nota. 😮', noFoundTF: false });
    }
});
exports.searchNotes = searchNotes;
//TODO: En esta función almacenamos las notas
const createNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const save = yield new note_personals_models_1.schemaNote(body);
    yield save.save();
    res.json(save);
});
exports.createNotes = createNotes;
//TODO: En esta función actualizamos las notas 
const updateNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const updated = yield new note_personals_models_1.schemaNote({ _id: req.params.id });
    const result = yield updated.updateOne({
        $set: body
    });
    res.json(result);
});
exports.updateNotes = updateNotes;
//TODO:  Solo eliminamos la nota
const deleteNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletenotes = yield new note_personals_models_1.schemaNote({ _id: req.params.id });
    const result = yield deletenotes.delete();
    res.json(result);
});
exports.deleteNotes = deleteNotes;
//TODO: Lo que estoy haciendo es exportando todas las funciones.
exports = { getUsers: exports.getUsers, createNotes: exports.createNotes, updateNotes: exports.updateNotes, deleteNotes: exports.deleteNotes, searchNotes: exports.searchNotes };
