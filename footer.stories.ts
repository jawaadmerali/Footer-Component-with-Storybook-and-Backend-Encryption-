import type { Meta, StoryObj } from '@storybook/vue3';
import FooterPresentational from '../vweb/common/components/mvtfooter/footer.presentational.vue';

const meta: Meta = {
    title: 'General/Footer',
    component: FooterPresentational,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        rentals: false,
        theme: '',
        formattedPhoneNumber: '',
        footlinks: [
            [
              {
                text: '',
                href: '',
              },
              {
                text: '',
                href: '',
              },
              {
                text: '',
                href: '',
              },
              {
                text: '',
                href: '',
              },
              {
                text: '',
                href: '',
              },
            ],
            [
              {
                text: '',
                href: '',
              },
              {
                text: '',
                href: '',
              },
              {
                text: '',
                href: '',
              },
              {
                text: '',
                href: '',
              },
            ],
            [
              {
                text: '',
                href: '',
              },
              {
                text: '',
                href: '',
              },
              {
                text: '',
                href: '',
              },
              {
                text: '',
                href: '',
              },
            ],
            [
              {
                text: '',
                href: '',
              },
              {
                text: '',
                href: '',
              },
              {
                text: '',
                href: '',
              },
              {
                text: '',
                href: '',
              },
            ],
            [
              {
                text: '',
                href: '',
              },
              {
                text: '',
                href: '',
              },
              {
                text: '',
                href: '',
              },
              {
                text: '',
                href: '',
              },
              {
                text: '',
                href: '',
              },
            ],
            [
              {
                text: '',
                href: '',
              },
              {
                text: '',
                href: '',
              },
              {
                text: '',
                href: '',
              },
              {
                text: '',
                href: '',
              },
              {
                text: '',
                href: '',
              },
            ],
        ],
        hideCompliance: false,
        labels: {
            metAgent: '',
        },
        getPhoneNumber: '',
        componentMounted: true,
        description: '',
        disabilities: '',
        partners: '',
    },
};

export default meta;
type Story = StoryObj<typeof FooterPresentational>;

export const Default: Story = {
    args: {
        rentals: false,
        theme: '',
        formattedPhoneNumber: '(844) 417-0593',
        footlinks: [
            [
              {
                text: 'Homes For Sale',
                href: 'https://movoto.com',
              },
              {
                text: 'Open Houses',
                href: 'https://https://www.movoto.com/for-sale/open-houses/',
              },
              {
                text: 'Virtual Tours',
                href: 'https://www.movoto.com/for-sale/virtual-tour/',
              },
              {
                text: 'Recently Reduced',
                href: 'https://www.movoto.com/sitemap/reduced-30/',
              },
              {
                text: 'Apartments For Rent',
                href: 'https://www.movoto.com/rentals/condos/',
              },
            ],
            [
              {
                text: 'Sell Your Home',
                href: 'https://www.movoto.com/sell/',
              },
              {
                text: 'Get a Home Valuation',
                href: 'https://www.movoto.com/what-is-your-home-worth/',
              },
              {
                text: 'Mortgage Calculator',
                href: 'https://www.movoto.com/mortgages/calculator/',
              },
              {
                text: 'Homebuyer Experience',
                href: 'https://www.movoto.com/home-journey/',
              },
            ],
            [
              {
                text: 'Agent Directory',
                href: 'https://www.movoto.com/agents/',
              },
              {
                text: 'Join Agent Network',
                href: 'https://agents.ojo.com/ojo-programs?utm_medium=vhome&utm_source=Movoto&utm_content=footer',
              },
              {
                text: 'Partner With Us',
                href: 'https://ojo.com/partnerships',
              },
              {
                text: 'Careers',
                href: 'https://ojo.com/careers/',
              },
            ],
            [
              {
                text: 'Saved Homes',
                href: 'https://www.movoto.com/#mvtDialog',
              },
              {
                text: 'Saved Searches',
                href: 'https://www.movoto.com/#mvtDialog',
              },
              {
                text: 'Manage Your Profile',
                href: 'https://www.movoto.com/#mvtDialog',
              },
              {
                text: 'Sign In',
                href: 'https://www.movoto.com/#mvtDialog',
              },
            ],
            [
              {
                text: 'About',
                href: 'https://ojo.com/our-story',
              },
              {
                text: 'FAQ',
                href: 'https://www.movoto.com/faqs/',
              },
              {
                text: 'Contact Us',
                href: 'https://www.movoto.com/#mvtDialog',
              },
              {
                text: 'Press',
                href: 'https://ojo.com/company-news',
              },
              {
                text: 'Site Map',
                href: 'https://www.movoto.com/property-search/',
              },
            ],
            [
              {
                text: 'Create Account',
                href: 'https://www.movoto.com/#mvtDialog',
              },
              {
                text: 'Help Center',
                href: 'https://help.movoto.com/',
              },
              {
                text: 'Movoto Blog',
                href: 'https://www.movoto.com/blog/',
              },
              {
                text: 'Movoto Guide',
                href: 'https://www.movoto.com/guide/',
              },
              {
                text: 'Get the Movoto App',
                href: 'https://www.movoto.com/mobile/',
              },
            ],
        ],
        hideCompliance: false,
        labels: {
            metAgent: 'Meet with a real estate agent today',
        },
        getPhoneNumber: '',
        componentMounted: true,
        description: 'IDX information is provided exclusively for consumers’ personal, non-commercial use and that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Information deemed reliable but not guaranteed to be accurate. Buyer to verify all information. The information provided is for consumers personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Listing information updated every 15 minutes. Terms of use & Privacy Policy, California Privacy Info. Copyright © 2005 - 2023 Movoto, Inc. All rights reserved. Equal Housing Opportunity CalDRE CalDRE #01517281',
        disabilities: 'Movoto Real Estate is committed to ensuring accessibility for individuals with disabilities. We are continuously working to improve the accessibility of our web experience for everyone. We welcome feedback and accommodation requests, please submit them here.',
        partners: 'Movoto.com is not a mortgage lender. Participating partners may pay movoto.com affiliate, OL Financial LLC (NMLS #1971703), for any consumer contact information provided on this site.',
    },
};
