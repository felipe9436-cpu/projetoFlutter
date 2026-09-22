export interface ItineraryItem {
  id: string;
  destinationId: string;
  date: string;           // YYYY-MM-DD
  time: string;           // HH:mm
  title: string;          // Ex: "Passeio na Torre Eiffel"
  location?: string;
  notes?: string;
}