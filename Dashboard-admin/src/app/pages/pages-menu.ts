import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'season-setup',
    icon: 'home-outline',
    link: '/pages/season-setup',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'course-config',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Course',
        link: '/pages/course-configuration/course',
      },
      {
        title: 'Exam',
        link: '/pages/course-configuration/exam',
      },
    ],
  },
  {
    title: 'curriculum-setup',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Curriculum',
        link: '/pages/curriculum-setup/curriculum',
      },
    ],
  },

  {
    title: 'Exambase',
    icon: 'shuffle-2-outline',
     
     children: [
      {
        title: 'Day Ops',
        link: '/pages/exambase/dayops',
      },
      {
        title: 'Post Ops',
        link: '/pages/exambase/postops',
      },
      {
        title: 'Pre Ops',
        link: '/pages/exambase/preops',
      },
    ],
     
  },

  {
    title: 'Grading',
    icon: 'home-outline',
    link: '/pages/gradingsetup',
  },


  {
    title: 'Season Setup',
    icon: 'shuffle-2-outline',
     link: '/pages/seasonsetup',
     
  },

  {
    title: 'Seating Configuration',
    icon: 'shuffle-2-outline',
     link: '/pages/seatingconfig',
     
  },

  {
    title: 'Student Base',
    icon: 'shuffle-2-outline',
     link: '/pages/studentbase',
     
  },
  {
    title:'test',
    icon: 'edit-2-outline',
    link:'/pages/test',
  },
  {
    title: 'Faculty Base',
    icon: 'shuffle-2-outline',
    
     children: [
      {
        title: 'PWT Profile',
        link: '/pages/facultybase/pwtprofile',
      },
      {
        title: 'PWI Profile',
        link: '/pages/facultybase/pwiprofile',
      },
      {
        title: 'PWE Profile',
        link: '/pages/facultybase/pweprofile',
      },
    ],
     
  },



  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
      },
      {
        title: 'List',
        link: '/pages/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },

  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Department Grades',
        link: '/pages/forms/Gradedata',
      },
      {
        title: 'Facultydock',
        link: '/pages/forms/facultydock',
      },
      {
        title: 'Student',
        link: '/pages/forms/Student',
      },
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'faculty',
    icon: 'grid-outline',
    children: [
      {
        title: 'faculties-pool',
        link: '/pages/faculty/faculties-pool',
      },
      {
        title: 'faculty-base',
        link: '/pages/faculty/faculty-base',
      },
      {
        title: 'faculty-registration',
        link: '/pages/faculty/faculty-registration',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
