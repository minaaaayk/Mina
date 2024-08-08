export enum Breakpoint {
    xxs = '290px',
    // => @media (min-width: 576px) { ... }

    xs = '576px',
    // => @media (min-width: 576px) { ... }

    sm= '640px',
    // => @media (min-width: 640px) { ... }

    md= '768px',
    // => @media (min-width: 768px) { ... }

    lg= '1024px',
    // => @media (min-width: 1024px) { ... }

    xl= '1280px',
    // => @media (min-width: 1280px) { ... }

    xxl= '1536px',
    // => @media (min-width: 1536px) { ... }
};


// $breakpoint-sm: 576px;
// $breakpoint-md: 768px;
// $breakpoint-lg: 992px;
// $breakpoint-xl: 1200px;
// $breakpoint-xxl: 1600px;

// $breakpoints: (
//     'sm': (min-width: #{$breakpoint-sm}),
//     'md': (min-width: #{$breakpoint-md}),
//     'lg': (min-width: #{$breakpoint-lg}),
//     'xl': (min-width: #{$breakpoint-xl}),
//     'xxl': (min-width: #{$breakpoint-xxl}),
// );

// @mixin respond-to($name) {
//     @if(map-has-key($breakpoints, $name)) {
//         @media #{inspect(map-get($breakpoints, $name))} {
//             @content;
//         }
//     }
//     @else {
//         @warn('invalid breakpoint name');
//     }
// }

// :export {
//     breakpointSm: #{$breakpoint-sm};
//     breakpointMd: #{$breakpoint-md};
//     breakpointLg: #{$breakpoint-lg};
//     breakpointXl: #{$breakpoint-xl};
//     breakpointXXL: #{$breakpoint-xxl};
// }