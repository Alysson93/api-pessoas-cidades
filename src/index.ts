import 'dotenv/config';
import './shared/services/TranslationsYup';

import app from './app';

app.listen(process.env.PORT || 8080);