import { useQuery } from '@tanstack/react-query';
import { apiService } from '@/services';

export const useGetOfferCard = () =>
  useQuery({ queryKey: ['offer-list'], queryFn: () => apiService.getOffersCard() });
