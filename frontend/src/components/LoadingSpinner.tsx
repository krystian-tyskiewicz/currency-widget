import { LoadingContainer, Spinner, LoadingText } from './Loading.styled';

export default function LoadingSpinner() {
  return (
    <LoadingContainer>
      <Spinner aria-label="Loading" />
      <LoadingText>Fetching live rates…</LoadingText>
    </LoadingContainer>
  );
}
