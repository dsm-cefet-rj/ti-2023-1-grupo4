import cors, {CorsOptions} from 'cors';

const opts: CorsOptions = {
  origin:'*',
  allowedHeaders:'*',
  methods:'*'
}

const corsMiddleware = cors(opts);

export default corsMiddleware;