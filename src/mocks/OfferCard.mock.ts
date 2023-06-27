import { rangeArray } from '@/helpers/rangeArray';
import { faker } from '@faker-js/faker';

import sword from '@/assets/image/truta.png';

export const items = ['Zatruty miecz', 'Tarcza tytanów', 'Ostrze zodiaku'];
export const bonusesBase = ['Max hp 2000', 'Szansa na krytyk 10%', '8% omdlenie'];
export const bonusesAdditional = [
  'Szansa na trucie 4%',
  'Moc lodu 5 sek',
  'Obrazenia od umiejetnosci bossów -5%',
];
export const photo = [sword];

export const OfferCardMock = (count: number) =>
  rangeArray(count).map(() => {
    return {
      id: faker.string.uuid(),
      itemName: faker.helpers.arrayElement(items),
      bonusesBase: faker.helpers.arrayElement(bonusesBase),
      bonusesAdditional: faker.helpers.arrayElement(bonusesAdditional),
      photo: faker.helpers.arrayElement(photo),
    };
  });

export const OFFER_CARD_LIST_MOCK = OfferCardMock(faker.helpers.rangeToNumber({ min: 3, max: 9 }));
