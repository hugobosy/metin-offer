import { OfferCardMock } from '@/mocks/OfferCard.mock';

export class ApiService {
  constructor() {}

  getOffersCard() {
    return new Promise((res) => setTimeout(() => res(OfferCardMock)));
  }
}
