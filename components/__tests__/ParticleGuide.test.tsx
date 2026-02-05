import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ParticleGuide } from '../ParticleGuide';

describe('ParticleGuide', () => {
  it('renders the component title', () => {
    render(<ParticleGuide />);
    expect(
      screen.getByRole('heading', { name: /じょし \(Particles\)/i })
    ).toBeInTheDocument();
  });

  it('renders all particle sections', () => {
    render(<ParticleGuide />);
    // Particles are rendered as separate elements: は and (wa) - Topic Marker
    expect(screen.getByText('は')).toBeInTheDocument();
    expect(screen.getByText('が')).toBeInTheDocument();
    expect(screen.getByText('を')).toBeInTheDocument();
    expect(screen.getByText('に')).toBeInTheDocument();
    expect(screen.getByText('で')).toBeInTheDocument();
  });

  it('shows particle usage when expanded', () => {
    render(<ParticleGuide />);
    // The first particle (は) is expanded by default
    expect(screen.getByText(/Topic Marker/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Marks the topic of the sentence/i)
    ).toBeInTheDocument();
  });
});
