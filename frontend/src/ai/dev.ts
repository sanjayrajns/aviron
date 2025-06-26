import { config } from 'dotenv';
config();

import '@/ai/flows/generate-aircraft-design.ts';
import '@/ai/flows/enrich-aircraft-design-prompt.ts';