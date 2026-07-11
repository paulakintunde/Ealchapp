// RBAC — role → permission matrix, enforced server-side in every mutation
// (requirePermission) and consumed client-side to hide/disable UI.
export type Role = 'super_admin' | 'ops' | 'support' | 'content_editor';

export type Permission =
  | 'users.read' | 'users.act'            // support actions: ban, reset, grant, export, delete
  | 'billing.read' | 'billing.write'      // refunds, dunning
  | 'content.read' | 'content.write' | 'content.publish'
  | 'notifications.read' | 'notifications.write'
  | 'ai.read' | 'ai.route'
  | 'performance.read' | 'incidents.act'
  | 'links.read' | 'links.write'
  | 'releases.read' | 'releases.write' | 'flags.write'
  | 'settings.maintenance' | 'admins.manage';

const ALL: Permission[] = [
  'users.read', 'users.act', 'billing.read', 'billing.write',
  'content.read', 'content.write', 'content.publish',
  'notifications.read', 'notifications.write',
  'ai.read', 'ai.route', 'performance.read', 'incidents.act',
  'links.read', 'links.write', 'releases.read', 'releases.write', 'flags.write',
  'settings.maintenance', 'admins.manage',
];

const MATRIX: Record<Role, Permission[]> = {
  super_admin: ALL,
  // ops: everything except billing writes and role management
  ops: ALL.filter((p) => p !== 'billing.write' && p !== 'admins.manage'),
  // support: read + user actions only
  support: ['users.read', 'users.act', 'billing.read', 'content.read',
    'notifications.read', 'ai.read', 'performance.read', 'links.read', 'releases.read'],
  // content_editor: content + notifications only
  content_editor: ['content.read', 'content.write',
    'notifications.read', 'notifications.write'],
};

export function can(role: Role | undefined, perm: Permission): boolean {
  if (!role) return false;
  return MATRIX[role]?.includes(perm) ?? false;
}

export class ForbiddenError extends Error {
  constructor(perm: Permission) {
    super(`Missing permission: ${perm}`);
    this.name = 'ForbiddenError';
  }
}

/** Server-side gate for actions/handlers. Throws ForbiddenError when denied. */
export function assertCan(role: Role | undefined, perm: Permission): void {
  if (!can(role, perm)) throw new ForbiddenError(perm);
}

export const ROLE_LABEL: Record<Role, string> = {
  super_admin: 'Super admin',
  ops: 'Ops',
  support: 'Support',
  content_editor: 'Content editor',
};
