import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HiraganaTable } from '../HiraganaTable';

describe('HiraganaTable', () => {
  it('renders the component title', () => {
    render(<HiraganaTable />);
    expect(
      screen.getByRole('heading', { name: /ひらがな \(Hiragana\)/i })
    ).toBeInTheDocument();
  });

  it('renders accordion sections', () => {
    render(<HiraganaTable />);
    expect(screen.getByText('Basic (あ - ん)')).toBeInTheDocument();
    expect(screen.getByText('Dakuten (゛) - Voiced')).toBeInTheDocument();
    expect(screen.getByText('Handakuten (゜) - P-sounds')).toBeInTheDocument();
    expect(screen.getByText('Combo Sounds (きゃ, しゃ...)')).toBeInTheDocument();
  });

  it('shows basic hiragana by default', () => {
    render(<HiraganaTable />);
    // Basic section is open by default
    expect(screen.getByText('あ')).toBeInTheDocument();
    expect(screen.getByText('か')).toBeInTheDocument();
    expect(screen.getByText('ん')).toBeInTheDocument();
  });

  it('shows romaji below hiragana', () => {
    render(<HiraganaTable />);
    expect(screen.getByText('a')).toBeInTheDocument();
    expect(screen.getByText('ka')).toBeInTheDocument();
    expect(screen.getByText('n')).toBeInTheDocument();
  });

  it('toggles accordion sections when clicked', () => {
    render(<HiraganaTable />);

    // Dakuten section should be closed initially
    expect(screen.queryByText('が')).not.toBeInTheDocument();

    // Click to open Dakuten section
    fireEvent.click(screen.getByText('Dakuten (゛) - Voiced'));
    expect(screen.getByText('が')).toBeInTheDocument();
    expect(screen.getByText('ざ')).toBeInTheDocument();
  });
});
