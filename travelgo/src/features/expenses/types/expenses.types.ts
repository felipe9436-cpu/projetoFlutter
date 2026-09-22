export type ExpenseCategory = 'Alimentação' | 'Transporte' | 'Lazer' | 'Compras' | 'Outros';

export interface Expense {
  id: string;
  destinationId: string;
  title: string;
  amount: number;
  category: ExpenseCategory;
  date: string;
}