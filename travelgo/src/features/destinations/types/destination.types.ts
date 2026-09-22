export interface Destination {
  id: string;
  title: string;          // Ex: "Viagem a Paris"
  country: string;        // Ex: "França"
  startDate: string;      // YYYY-MM-DD
  endDate: string;        // YYYY-MM-DD
  coverImage?: string;
  budgetTotal: number;
}