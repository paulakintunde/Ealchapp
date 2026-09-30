import { deepStrictEqual, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { advanceWizard, emptyWizard, finishWizard, normalizeWizard, startWizard } from './onboarding.logic.ts';

test('wizard ID and last unfinished step survive a process restart', () => {
  const first = startWizard(emptyWizard(), 'wizard-1');
  strictEqual(startWizard(first, 'wizard-2').wizardId, 'wizard-1');
  const account = advanceWizard(first, 1).checkpoint;
  const name = advanceWizard(account, 2).checkpoint;
  deepStrictEqual(normalizeWizard(JSON.parse(JSON.stringify(name))), name);
  strictEqual(name.wizardStep, 3);
});

test('back and edit count each step once while resume stays at the unfinished step', () => {
  let state = startWizard(emptyWizard(), 'wizard-1');
  state = advanceWizard(state, 1).checkpoint;
  state = advanceWizard(state, 2).checkpoint;
  const revisit = advanceWizard(state, 1);
  strictEqual(revisit.firstCompletion, false);
  strictEqual(revisit.checkpoint.wizardStep, 3);
  deepStrictEqual(revisit.checkpoint.completedWizardSteps, [1, 2]);
});

test('guest or email result exit completes once; existing sign-in cannot complete a wizard', () => {
  const noWizard = emptyWizard();
  strictEqual(noWizard.wizardCompleted, false);
  const active = startWizard(noWizard, 'wizard-1');
  strictEqual(finishWizard(active).firstCompletion, true);
  strictEqual(finishWizard(finishWizard(active).checkpoint).firstCompletion, false);
});

test('corrupt persisted fields are clamped and never carry private input', () => {
  deepStrictEqual(normalizeWizard({ wizardId: '', wizardStep: 99, completedWizardSteps: [2, 2, -1, 12], wizardCompleted: false }),
    { wizardId: null, wizardStep: 11, completedWizardSteps: [2], wizardCompleted: false });
});
