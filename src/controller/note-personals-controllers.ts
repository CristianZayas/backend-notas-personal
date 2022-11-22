import { Response, Request } from 'express';
import { INote } from '../Interfaces/INote'; //TODO: Importamos la interfaz
import { schemaNote } from '../models/note-personals-models'; //TODO:  Importamos el modelo de la base datos


//TODO:  Esta función lo que hace es trae todos los registros y ademas los ordena del más reciente.
export const getUsers = async (req: Request, res: Response) => {
    const showAllNotes = await schemaNote.find().sort({createdAt : 'desc'});
   // console.log(showAllNotes.sort({createdAt : 'asc'}));
    res.json(showAllNotes);
}
//TODO: Con esta función lo estamos creado es un buscador 
export const searchNotes = async (req: Request, res: Response) => {
    console.log(String(req.body.name_actividad).trim().toLowerCase())
    const showAllNotes = await schemaNote.find({name_actividad: {$regex:  `${String(req.body.name_actividad).trim()}`,$options : 'i'}}).sort({createdAt : 'desc'});
    if(showAllNotes.length !== 0){
        res.json(showAllNotes);
    }else {
        res.json({noFound :'No se han encontrado ninguna nota. 😮', noFoundTF: false});
    }
}
//TODO: En esta función almacenamos las notas
export const createNotes = async (req: Request, res: Response) => {
    const body: INote = req.body;
    const save = await new schemaNote(body);
    await save.save()
    res.json(save);
}
//TODO: En esta función actualizamos las notas 
export const updateNotes = async (req: Request, res: Response) => {
    const body: INote = req.body;
    const updated = await new schemaNote({ _id: req.params.id });
    const result = await updated.updateOne({
        $set: body
    })
    res.json(result);
}
//TODO:  Solo eliminamos la nota
export const deleteNotes = async (req: Request, res: Response) => {
    const deletenotes = await new schemaNote({ _id: req.params.id });
    const result = await deletenotes.delete()
    res.json(result);
}

//TODO: Lo que estoy haciendo es exportando todas las funciones.
exports = { getUsers, createNotes, updateNotes, deleteNotes , searchNotes };