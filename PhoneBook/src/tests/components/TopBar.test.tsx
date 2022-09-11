import { describe, expect, it } from 'vitest';
import { TopBar } from '../../components/TopBar';

import { render, screen } from '@testing-library/react';

describe('Top Bar header title', () => {
    it('the title is visible', async () => {
        render(<TopBar />);

        expect(screen.getByText(/Save Users - React js/, {selector: 'h3'}));
    })
})