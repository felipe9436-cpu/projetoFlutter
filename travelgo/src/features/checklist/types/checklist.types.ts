export type ChecklistCategory = 'Documentos' | 'Mala' | 'Eletrónicos' | 'Geral';

export interface ChecklistItem {
  id: string;
  destinationId: string;
  task: string;
  category: ChecklistCategory;
  completed: boolean;
}