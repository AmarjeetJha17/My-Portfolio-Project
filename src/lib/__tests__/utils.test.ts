import {
  cn,
  formatDate,
  formatRelativeTime,
  calculateReadingTime,
  truncateText,
  slugify,
  isValidEmail,
  getInitials,
  generateId,
  isServer,
  isClient,
  safeJsonParse,
} from '../utils';

describe('cn (classname utility)', () => {
  it('merges class names correctly', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('handles conditional classes', () => {
    expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz');
  });

  it('merges conflicting Tailwind classes', () => {
    expect(cn('px-4', 'px-6')).toBe('px-6');
  });
});

describe('formatDate', () => {
  it('formats date correctly with default options', () => {
    const result = formatDate('2024-01-15');
    expect(result).toContain('January');
    expect(result).toContain('15');
    expect(result).toContain('2024');
  });

  it('accepts Date object', () => {
    const result = formatDate(new Date('2024-03-20'));
    expect(result).toContain('March');
    expect(result).toContain('20');
  });

  it('accepts custom options', () => {
    const result = formatDate('2024-01-15', { month: 'short' });
    expect(result).toContain('Jan');
  });
});

describe('formatRelativeTime', () => {
  it('returns "Just now" for recent dates', () => {
    const now = new Date();
    expect(formatRelativeTime(now)).toBe('Just now');
  });

  it('formats minutes correctly', () => {
    const date = new Date(Date.now() - 5 * 60 * 1000); // 5 minutes ago
    expect(formatRelativeTime(date)).toBe('5 minutes ago');
  });

  it('formats hours correctly', () => {
    const date = new Date(Date.now() - 3 * 60 * 60 * 1000); // 3 hours ago
    expect(formatRelativeTime(date)).toBe('3 hours ago');
  });

  it('formats days correctly', () => {
    const date = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000); // 2 days ago
    expect(formatRelativeTime(date)).toBe('2 days ago');
  });
});

describe('calculateReadingTime', () => {
  it('calculates reading time correctly', () => {
    const content = 'word '.repeat(400); // 400 words
    expect(calculateReadingTime(content)).toBe(2); // 400/200 = 2 minutes
  });

  it('rounds up to nearest minute', () => {
    const content = 'word '.repeat(250); // 250 words
    expect(calculateReadingTime(content)).toBe(2); // ceil(250/200) = 2
  });

  it('handles empty content', () => {
    expect(calculateReadingTime('')).toBe(1);
  });
});

describe('truncateText', () => {
  it('truncates text longer than max length', () => {
    const result = truncateText('Hello World', 5);
    expect(result).toBe('Hello...');
  });

  it('does not truncate text shorter than max length', () => {
    const result = truncateText('Hello', 10);
    expect(result).toBe('Hello');
  });

  it('handles exact length', () => {
    const result = truncateText('Hello', 5);
    expect(result).toBe('Hello');
  });
});

describe('slugify', () => {
  it('converts text to slug format', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('removes special characters', () => {
    expect(slugify('Hello, World!')).toBe('hello-world');
  });

  it('handles multiple spaces', () => {
    expect(slugify('Hello   World')).toBe('hello-world');
  });

  it('trims leading and trailing hyphens', () => {
    expect(slugify(' Hello World ')).toBe('hello-world');
  });
});

describe('isValidEmail', () => {
  it('returns true for valid emails', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
  });

  it('returns false for invalid emails', () => {
    expect(isValidEmail('invalid')).toBe(false);
    expect(isValidEmail('invalid@')).toBe(false);
    expect(isValidEmail('@example.com')).toBe(false);
    expect(isValidEmail('test@.com')).toBe(false);
  });
});

describe('getInitials', () => {
  it('returns initials from full name', () => {
    expect(getInitials('John Doe')).toBe('JD');
  });

  it('returns single initial for single name', () => {
    expect(getInitials('John')).toBe('J');
  });

  it('returns max 2 initials for longer names', () => {
    expect(getInitials('John Michael Doe')).toBe('JM');
  });
});

describe('generateId', () => {
  it('generates unique IDs', () => {
    const id1 = generateId();
    const id2 = generateId();
    expect(id1).not.toBe(id2);
  });

  it('generates IDs of correct length', () => {
    const id = generateId();
    expect(id.length).toBe(7);
  });
});

describe('isServer / isClient', () => {
  it('isServer returns false in jsdom', () => {
    expect(isServer()).toBe(false);
  });

  it('isClient returns true in jsdom', () => {
    expect(isClient()).toBe(true);
  });
});

describe('safeJsonParse', () => {
  it('parses valid JSON', () => {
    const result = safeJsonParse('{"key": "value"}', {});
    expect(result).toEqual({ key: 'value' });
  });

  it('returns fallback for invalid JSON', () => {
    const result = safeJsonParse('invalid json', { default: true });
    expect(result).toEqual({ default: true });
  });
});
