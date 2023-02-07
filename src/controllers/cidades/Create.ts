import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';


interface ICidade {
	name: string;
}

export const create = (req: Request<{}, {}, ICidade>, res: Response) => {

    return res.send(`Bem-vindo à ${req.body.name}`);

};