/** Durable first-run wizard checkpoint; no credentials or speech content here. */
export type WizardCheckpoint = {
  wizardId: string | null;
  wizardStep: number;
  completedWizardSteps: number[];
  wizardCompleted: boolean;
};

export const emptyWizard = (): WizardCheckpoint => ({
  wizardId: null, wizardStep: 0, completedWizardSteps: [], wizardCompleted: false,
});

export function normalizeWizard(value: Partial<WizardCheckpoint> | null | undefined): WizardCheckpoint {
  const step = Number.isInteger(value?.wizardStep) ? value!.wizardStep! : 0;
  return {
    wizardId: typeof value?.wizardId === 'string' && value.wizardId.length > 0 ? value.wizardId : null,
    wizardStep: Math.max(0, Math.min(11, step)),
    completedWizardSteps: [...new Set(Array.isArray(value?.completedWizardSteps)
      ? value.completedWizardSteps.filter((n): n is number => Number.isInteger(n) && n >= 1 && n <= 10)
      : [])].sort((a, b) => a - b),
    wizardCompleted: value?.wizardCompleted === true,
  };
}

export function startWizard(current: WizardCheckpoint, newId: string): WizardCheckpoint {
  return current.wizardId ? current : { ...current, wizardId: newId };
}

export function advanceWizard(current: WizardCheckpoint, visibleStep: number): { checkpoint: WizardCheckpoint; firstCompletion: boolean } {
  const step = Math.max(0, Math.min(10, Math.trunc(visibleStep)));
  const firstCompletion = step >= 1 && !current.completedWizardSteps.includes(step);
  return {
    checkpoint: {
      ...current,
      wizardStep: Math.max(current.wizardStep, step + 1),
      completedWizardSteps: firstCompletion ? [...current.completedWizardSteps, step].sort((a, b) => a - b) : current.completedWizardSteps,
    },
    firstCompletion,
  };
}

export function finishWizard(current: WizardCheckpoint): { checkpoint: WizardCheckpoint; firstCompletion: boolean } {
  return { checkpoint: { ...current, wizardStep: 11, wizardCompleted: true }, firstCompletion: !current.wizardCompleted };
}
