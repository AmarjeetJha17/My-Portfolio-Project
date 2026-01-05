import { render, screen } from '@testing-library/react';
import { ProjectCard } from '../ProjectCard';
import type { Project } from '@/types';

const mockProject: Project = {
  id: '1',
  title: 'Test Project',
  slug: 'test-project',
  description: 'A test project description',
  longDescription: 'A longer description for testing',
  image: '/images/test.jpg',
  tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Node.js'],
  githubUrl: 'https://github.com/test/project',
  liveUrl: 'https://test-project.com',
  featured: false,
  category: 'fullstack',
  createdAt: '2024-01-01',
  updatedAt: '2024-01-15',
};

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders project description', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('A test project description')).toBeInTheDocument();
  });

  it('renders project category badge', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('fullstack')).toBeInTheDocument();
  });

  it('renders limited tags with overflow indicator', () => {
    render(<ProjectCard project={mockProject} />);

    // Should show first 4 tags
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('Tailwind')).toBeInTheDocument();

    // Should show +1 for remaining tags
    expect(screen.getByText('+1')).toBeInTheDocument();
  });

  it('renders GitHub link when provided', () => {
    render(<ProjectCard project={mockProject} />);
    const githubLink = screen.getByLabelText(/view test project source code on github/i);
    expect(githubLink).toHaveAttribute('href', 'https://github.com/test/project');
  });

  it('renders live demo link when provided', () => {
    render(<ProjectCard project={mockProject} />);
    const liveLink = screen.getByLabelText(/view test project live demo/i);
    expect(liveLink).toHaveAttribute('href', 'https://test-project.com');
  });

  it('does not render GitHub link when not provided', () => {
    const projectWithoutGithub = { ...mockProject, githubUrl: undefined };
    render(<ProjectCard project={projectWithoutGithub} />);
    expect(screen.queryByLabelText(/source code on github/i)).not.toBeInTheDocument();
  });

  it('does not render live demo link when not provided', () => {
    const projectWithoutLive = { ...mockProject, liveUrl: undefined };
    render(<ProjectCard project={projectWithoutLive} />);
    expect(screen.queryByLabelText(/live demo/i)).not.toBeInTheDocument();
  });

  it('renders View Details link', () => {
    render(<ProjectCard project={mockProject} />);
    const detailsLink = screen.getByText('View Details');
    expect(detailsLink.closest('a')).toHaveAttribute('href', '/projects/test-project');
  });

  it('applies featured styles when featured prop is true', () => {
    const { container } = render(<ProjectCard project={mockProject} featured />);
    expect(container.firstChild).toHaveClass('md:col-span-2');
  });

  it('applies custom className', () => {
    const { container } = render(<ProjectCard project={mockProject} className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders project image with correct alt text', () => {
    render(<ProjectCard project={mockProject} />);
    const image = screen.getByAltText('Test Project screenshot');
    expect(image).toBeInTheDocument();
  });
});
