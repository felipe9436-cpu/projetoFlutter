export interface Lodging {
  id: string;
  destinationId: string;
  name: string;           // Ex: "Hotel Le Meurice"
  address: string;
  checkIn: string;
  checkOut: string;
  bookingCode?: string;
  price: number;
}