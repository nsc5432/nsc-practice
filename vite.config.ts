import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts'; // 타입 선언 파일 자동 생성
import VitePluginCssInjectedByJs from 'vite-plugin-css-injected-by-js';

export default defineConfig({
    plugins: [
        react(),
        dts({
            exclude: ['src/internal/**', 'src/__tests__/**'],
            insertTypesEntry: true,
            outDir: 'dist',
            rollupTypes: false, // 모듈 단위 유지
        }),
        VitePluginCssInjectedByJs(),
    ],
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'nsc-practice',
            fileName: (format) => `nsc-practice.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'], // peerDependencies로 빼기
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
