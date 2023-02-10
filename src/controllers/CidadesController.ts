import { Request, Response, RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

interface ICidade {
	nome: string;
	estado: string;
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
	nome: yup.string().required().min(3),
	estado: yup.string().required().max(2)
});


export default class CidadesController {

	async createBodyValidator (req, res, next): RequestHandler {
		try {
			await bodyValidation.validate(req.body, {abortEarly: false});
			return next();
		} catch(err) {
			const yupError = err as yup.ValidationError;
			const errors: Record<string, string> = {};
			yupError.inner.forEach((error) => {
				if (!error.path) return;
				errors[error.path] = error.message;
			});
			return res.status(StatusCodes.BAD_REQUEST).json({
				errors
			});
		}
	}


	async create(req: Request<{}, {}, ICidade>, res: Response) {
		res.status(StatusCodes.OK).send(req.body);
	};

}