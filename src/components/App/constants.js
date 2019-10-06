/* eslint-disable max-len */
/* eslint-disable sort-keys */
/** @constant */
export const NAME = 'app';

/** @constant */
export const PROFILE = '/profile/';

/** @constant */
export const MARKET_TEXT = 'Market';

/** @constant */
export const FOOTER_DATA = [
    {
        header: 'Community',
        items: [
            { link: '/facebook', title: 'Facebook' },
            { link: '/google', title: 'Google' },
            { link: '/wordpress', title: 'Wrodpress' },
        ],
        key: 'product',
    },
    {
        header: 'Links',
        items: [
            { link: '/', title: 'Home' },
            { link: '/profile', title: 'Dashboard' },
            { link: '/booking', title: 'Bookings' },
            { link: '/events', title: 'Events' },
        ],
        key: 'about',
    },
    {
        header: 'Support',
        items: [
            { link: '/contact', title: 'Contact Us' },
            { link: '/abuse', title: 'Report Abuse' },
            { link: '/faq', title: 'FAQ' },
        ],
        key: 'support',
    },
    {
        header: 'Owerri DevC',
        items: [
            { link: '/policy', title: 'Privacy Policy' },
            { link: '/terms', title: 'Terms And Condition' },
            { link: '/abuse', title: 'Report Abuse' },
        ],
        key: 'rights',
    },
];

/** @constant */
export const FOOTER_CLASSNAMES = {
    CONTAINER: 'footer-container',
    DYNAMIC_FOOTER: 'ant-col-xs-24 ant-col-sm-24 ant-col-md-6',
    ROW: 'ant-row',
    FOOTER2: 'footer2',
};
