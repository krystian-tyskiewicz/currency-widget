import {
  SearchContainer,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  SearchClearButton,
} from './SearchBar.styled';

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <SearchContainer>
      <SearchWrapper>
        <SearchIcon as="svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search currency…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search currencies"
        />
        {value && (
          <SearchClearButton
            onClick={() => onChange('')}
            aria-label="Clear search"
          >
            ✕
          </SearchClearButton>
        )}
      </SearchWrapper>
    </SearchContainer>
  );
}
