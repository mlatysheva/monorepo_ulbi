import { BuildOptions } from '../types';
import { removeDataTestIdBabelPlugin } from './removeDataTestIdBabelPlugin';

export function buildBabelLoader({mode}: BuildOptions) {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const plugins = [];

  if (isProd) {
    plugins.push([
      removeDataTestIdBabelPlugin,
      {
        props: ['data-testid', 'data-test-id', 'data-test'],
      }
    ])
  }

  return {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-typescript', 
            '@babel/preset-env',
            [
              '@babel/preset-react', { 
                runtime: isDev ? 'automatic' : 'classic' 
              }
            ],
          ],
          plugins: plugins.length ? plugins : undefined,
        },
      },
    ],
    exclude: /node_modules/,
  };
}