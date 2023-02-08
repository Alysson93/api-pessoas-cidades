import { Request, Response } from 'express';
import * as yup from 'yup';

interface ICidade {
	name: string;
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
	name: yup.string().required().min(3)
});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

	let validatedData: ICidade | undefined = undefined;

	try {

		validatedData = await bodyValidation.validate(req.body);
		return res.status(200).send(`Bem vindo à ${req.body.name}`);
	} catch(err) {
	
		const yupError = err as yup.ValidationError;
		return res.status(500).json({
			errors: {
				default: yupError.message
			}
	
		});
	}

};