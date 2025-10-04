import type { RootState } from 'src/redux/store';

export const selectIsLoading = (state: RootState) => state.loading.isLoading;
