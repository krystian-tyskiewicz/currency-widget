import { ErrorContainer, ErrorIcon, ErrorMessage as ErrorMessageStyled, RetryButton } from './ErrorMessage.styled';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <ErrorContainer>
      <ErrorIcon>⚠️</ErrorIcon>
      <ErrorMessageStyled>{message}</ErrorMessageStyled>
      {onRetry && (
        <RetryButton onClick={onRetry}>
          Try again
        </RetryButton>
      )}
    </ErrorContainer>
  );
}
