import { execFileSync } from 'node:child_process';
import path from 'node:path';

/**
 * Last commit date touching this file, read from local git history.
 * Returns null for files with no git history yet (e.g. new/uncommitted docs).
 */
export function getLastEditDate(absolutePath: string): Date | null {
  try {
    const output = execFileSync(
      'git',
      ['log', '-1', '--format=%cI', '--', absolutePath],
      { cwd: path.dirname(absolutePath), encoding: 'utf-8' },
    ).trim();

    return output ? new Date(output) : null;
  } catch {
    return null;
  }
}
