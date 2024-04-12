import { createSSRApp } from 'vue';
import main from './main.vue';

export function createApp() {
  return createSSRApp(main);
}
