import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { KatakanaTable } from '../KatakanaTable';

describe('KatakanaTable', () => {
  it('renders the component title', () => {
    render(<KatakanaTable />);
    expect(
      screen.getByRole('heading', { name: /カタカナ \(Katakana\)/i })
    ).toBeInTheDocument();
  });

  it('renders accordion sections', () => {
    render(<KatakanaTable />);
    expect(screen.getByText('Basic (ア - ン)')).toBeInTheDocument();
    expect(screen.getByText('Dakuten (゛) - Voiced')).toBeInTheDocument();
    expect(screen.getByText('Handakuten (゜) - P-sounds')).toBeInTheDocument();
    expect(screen.getByText('Combo Sounds (キャ, シャ...)')).toBeInTheDocument();
    expect(screen.getByText('Extended (Foreign Sounds)')).toBeInTheDocument();
  });

  it('shows basic katakana by default', () => {
    render(<KatakanaTable />);
    expect(screen.getByText('ア')).toBeInTheDocument();
    expect(screen.getByText('カ')).toBeInTheDocument();
    expect(screen.getByText('ン')).toBeInTheDocument();
  });

  it('toggles extended sounds section', () => {
    render(<KatakanaTable />);

    // Extended section should be closed initially
    expect(screen.queryByText('ファ')).not.toBeInTheDocument();

    // Click to open Extended section
    fireEvent.click(screen.getByText('Extended (Foreign Sounds)'));
    expect(screen.getByText('ファ')).toBeInTheDocument();
  });
});
