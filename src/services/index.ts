import { OFFER_CARD_LIST_MOCK, OfferCardMock, OfferCardMockType } from '@/mocks/OfferCard.mock';

export class ApiService {
  constructor() {}

  getOffersCard() {
    return new Promise<OfferCardMockType[]>((res) =>
      setTimeout(() => res(OFFER_CARD_LIST_MOCK), 1000),
    );
  }
}

export const apiService = new ApiService();
