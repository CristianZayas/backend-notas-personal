import { Router } from 'express';
import { getUsers, createNotes, updateNotes, deleteNotes, searchNotes } from '../controller/note-personals-controllers'
const router = Router();

router.get('/', getUsers);
router.post('/searchnotes', searchNotes);
router.post('/createnotes', createNotes);
router.put('/updatenotes/:id', updateNotes);
router.delete('/deletenotes/:id', deleteNotes)

export default router;