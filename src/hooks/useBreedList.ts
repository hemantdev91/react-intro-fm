import { useEffect, useState } from "react";
import { ISelectOption } from "../generic/SelectComponent.tsx";

export interface IBreedListArgs {
  animal: string;
}

function useBreedList({ animal }: IBreedListArgs):[ISelectOption[], boolean] {
  const localCache: Record<string, any> = {};
  const [breedList, setBreedList] = useState<ISelectOption[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      getList();
    }
    async function getList() {
      try {
        setIsLoading(true);
        const breedListResponse = await fetch(
          `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
        );
        const breedListJson = await breedListResponse.json();
        const breeds = breedListJson.breeds || [];
        localCache[animal] = breeds;
        const breedsSelectOptions = breeds.map((breedVal: any) => ({
          name: breedVal,
          value: breedVal,
        }));
        setBreedList(breedsSelectOptions);
      } catch (e) {
        console.log("breed-list api failed with error ", e);
      }
      setIsLoading(false);
    }
  }, [animal]);

  return [breedList, isLoading];
}

export default useBreedList;
