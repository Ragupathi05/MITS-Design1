import { aimlProfiles } from './aiml';
import { ceProfiles } from './ce';
import { eceProfiles } from './ece';
import { cseProfiles } from './cse';
import { csedsProfiles } from './cseds';
import { csecsProfiles } from './csecs';
import { mcaProfiles } from './mca';
import { eeeProfiles } from './eee';
import { aiProfiles } from './ai';
import { meProfiles } from './me';
import { mbaProfiles } from './mba';
import { bshProfiles } from './bsh';

export interface FacultySection {
  title: string;
  content: string | string[] | Record<string, string>[];
}

export interface FacultyProfile {
  name: string;
  designation: string;
  image?: string;
  email?: string;
  officeAddress?: string;
  sections: FacultySection[];
}

export { aimlProfiles } from './aiml';
export { ceProfiles } from './ce';
export { eceProfiles } from './ece';
export { cseProfiles } from './cse';
export { csedsProfiles } from './cseds';
export { csecsProfiles } from './csecs';
export { mcaProfiles } from './mca';
export { eeeProfiles } from './eee';
export { aiProfiles } from './ai';
export { meProfiles } from './me';
export { mbaProfiles } from './mba';
export { bshProfiles } from './bsh';

export const facultyProfiles: Record<string, Record<string, FacultyProfile>> = {
  aiml: aimlProfiles,
  ce: ceProfiles,
  ece: eceProfiles,
  cse: cseProfiles,
  cseds: csedsProfiles,
  csecs: csecsProfiles,
  mca: mcaProfiles,
  eee: eeeProfiles,
  ai: aiProfiles,
  me: meProfiles,
  mba: mbaProfiles,
  bsh: bshProfiles,
};

export function getFacultyProfile(deptKey: string, facultyName: string): FacultyProfile | undefined {
  return facultyProfiles[deptKey]?.[facultyName];
}