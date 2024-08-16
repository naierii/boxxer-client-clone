export const navigation = [
  {
    title: true,
    name: 'Orders',
    wrapper: {
      element: 'span',
      attributes: {}
    },
    class: 'text-center',
    roles: ['admin','order_commenter']
  },
  {
    name: 'Order List',
    url: '/orders',
    icon: 'icon-handbag',
    roles: ['admin','order_commenter']
  },
  {
    name: 'Job Cards',
    url: '/orders/job-card',
    icon: 'icon-handbag',
    roles: ['admin','order_commenter']
  },
  {
    title: true,
    name: 'Custom',
    wrapper: {
      element: 'span',
      attributes: {}
    },
    class: 'text-center',
    roles: ['admin', 'seo']
  },
  {
    name: 'Custom Products',
    url: '/custom-products',
    icon: 'icon-handbag',
    roles: ['admin', 'seo']
  },
  {
    name: 'Custom Products Settings',
    url: '/custom-products/settings',
    icon: 'icon-handbag',
    roles: ['admin']
  },
  {
    name: 'Custom Product Sizing',
    url: '/custom-product-sizing',
    icon: 'icon-size-actual',
    roles: ['admin']
  },
  {
    name: 'Custom Product Styles',
    url: '/custom-product-styles',
    icon: 'icon-mustache',
    roles: ['admin']
  },
  {
    name: 'Custom Settings',
    url: '/custom-settings',
    icon: 'icon-settings',
    roles: ['admin']
  },
  {
    name: 'Materials',
    url: '/materials',
    icon: 'icon-layers',
    roles: ['admin']
  },
  {
    name: 'Material Groups',
    url: '/materials/groups',
    icon: 'icon-layers',
    roles: ['admin']
  },
  {
    name: 'Flags',
    url: '/flags',
    icon: 'icon-flag',
    roles: ['admin']
  },
  {
    name: 'Logos / Graphics',
    url: '/logos',
    icon: 'icon-picture',
    roles: ['admin']
  },
  {
    name: 'Graphic Pricing',
    url: '/graphic-prices',
    icon: 'icon-handbag',
    roles: ['admin']
  },
  {
    title: true,
    name: 'Ready Made',
    wrapper: {
      element: 'span',
      attributes: {}
    },
    class: 'text-center',
    roles: ['admin', 'seo']
  },
  {
    name: 'Ready Made Products',
    url: '/ready-made',
    icon: 'icon-handbag',
    roles: ['admin', 'seo']
  },
  {
    name: 'Ready Made Settings',
    url: '/ready-made/settings',
    icon: 'icon-settings',
    roles: ['admin']
  },
  {
    name: 'Product Attributes',
    url: '/product-attributes',
    icon: 'icon-settings',
    roles: ['admin']
  },
  {
    title: true,
    name: 'Store Settings',
    wrapper: {
      element: 'span',
      attributes: {}
    },
    class: 'text-center',
    roles: ['admin']
  },
  {
    name: 'Discount codes',
    url: '/discounts',
    icon: 'icon-tag',
    roles: ['admin']
  },
  {
    name: 'Shipping',
    url: '/shipping',
    icon: 'icon-direction',
    roles: ['admin']
  },
  {
    name: 'Emails',
    url: '/email',
    icon: 'icon-envelope',
    roles: ['admin']
  },
  {
    name: 'Bulk Update Sale Prices',
    url: '/offers/sale',
    icon: 'icon-settings',
    roles: ['admin']
  },
  {
    title: true,
    name: 'Content',
    wrapper: {
      element: 'span',
      attributes: {}
    },
    class: 'text-center',
    roles: ['admin', 'seo']
  },
  {
    name: 'Blogs',
    url: '/blogs',
    icon: 'icon-pencil',
    roles: ['admin', 'seo']
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-pencil',
    roles: ['admin', 'seo']
  },
  {
    name: 'Gallery',
    url: '/gallery',
    icon: 'icon-picture',
    roles: ['admin', 'seo']
  },
  {
    name: 'Size Guides',
    url: '/sizing',
    icon: 'icon-size-actual',
    roles: ['admin']
  },
  {
    title: true,
    name: 'Reports',
    wrapper: {
      element: 'span',
      attributes: {}
    },
    class: 'text-center',
    roles: ['admin']
  },
  {
    name: 'Sales',
    url: '/reports/sales',
    icon: 'icon-chart',
    roles: ['admin']
  },
  {
    name: 'Custom Sales',
    url: '/reports/custom',
    icon: 'icon-chart',
    roles: ['admin']
  },
  {
    name: 'Expenses',
    url: '/expenses',
    icon: 'icon-chart',
    roles: ['admin']
  },
  {
    name: 'Expenses (My New Flat)',
    url: '/expenses/my-new-flat',
    icon: 'icon-chart',
    roles: ['admin']
  },
  {
    title: true,
    name: 'Admin',
    wrapper: {
      element: 'span',
      attributes: {}
    },
    class: 'text-center',
    roles: ['admin', 'seo']
  },
  {
    name: 'Users',
    url: '/users',
    icon: 'icon-people',
    roles: ['admin']
  },
  {
    name: 'Categories',
    url: '/categories',
    icon: 'icon-list',
    roles: ['admin', 'seo']
  }
];
