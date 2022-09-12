import { describe, expect, it } from 'vitest';

import { ContactTable } from '../../components/ContactTable';

import { render, screen } from '@testing-library/react';

interface UserDetail {
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
  }

describe('Test Users Table', () => {
    let tabledata: UserDetail[] = [{
        firstName: 'Omic', lastName: 'Rocks', phone: '5558675309'
    }];
    it('Test')
    render(<ContactTable userDetailList={tabledata} />);
    expect(screen.getByText(/Omic/, {selector: 'td'}));
})