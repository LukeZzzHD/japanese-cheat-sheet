import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { VocabularySection } from '../VocabularySection';

describe('VocabularySection', () => {
  it('renders the component title', () => {
    render(<VocabularySection />);
    expect(
      screen.getByRole('heading', { name: /たんご \(Vocabulary\)/i })
    ).toBeInTheDocument();
  });

  it('renders vocabulary categories', () => {
    render(<VocabularySection />);
    expect(screen.getByText('Numbers')).toBeInTheDocument();
    expect(screen.getByText('Time')).toBeInTheDocument();
    expect(screen.getByText('Food & Drinks')).toBeInTheDocument();
    expect(screen.getByText('Family')).toBeInTheDocument();
  });

  it('renders category subtitles in Japanese', () => {
    render(<VocabularySection />);
    expect(screen.getByText('(かず)')).toBeInTheDocument(); // Numbers
    expect(screen.getByText('(じかん)')).toBeInTheDocument(); // Time
  });
});
