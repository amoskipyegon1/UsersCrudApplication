import { describe, expect, it } from 'vitest';

import { PhoneDetailsForm } from '../../components/PhoneDetailsForm';

import { render, screen } from '@testing-library/react';

describe('User Details Form', () => {
    const postUser = () => {

    }
    it('Test Forms title', () => {
        
        render(<PhoneDetailsForm postUser={postUser} />);

        expect(screen.getByText(/Add User/, {selector: 'h2'}))
    });
})