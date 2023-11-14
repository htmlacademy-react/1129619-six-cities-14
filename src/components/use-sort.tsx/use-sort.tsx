import { SortOption } from '../../const';
import { useAppSelector } from '../../hooks';
import offers from '../../mocks/offers';
import { Offer } from '../../types/offers';


// какая то компайр функция
const

const getSortedOffers = (sort: SortOption, offerL Offer[]) => {
  switch (sort) {
    case SortOption.Rating:
    case SortOption.PriceFromLowToHigh:
    case SortOption.priceFromHighLow:
      return [...offers].sort(compareFn[sort]);
    case SortOption.Popular:
        return offers;
  }
}


type SortController = {
  (offers: Offer[]): Offer[];
}

export const useSort: SortController = (offes) => {
  const currentSortOption = useAppSelector(getSortOption);
  return getSortedOffers(currentSortOption, offers)
}
